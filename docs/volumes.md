# Railway Volumes Plan

## Goal

Make Kirby production content persist across Railway rebuilds.

Git should remain the source of truth for code, schema, templates, blueprints, Svelte components, and built assets. The live Kirby Panel should become the source of truth for editable content and Panel accounts.

## Migration Status

Completed on 2026-05-17 for:

```txt
Project: vitruvian
Environment: production
Service: vitruvian
Volume: vitruvian-volume
Volume ID: 38912f37-1522-4a5d-b31c-7d89a7215613
Mount path: /var/www/html/persist
```

Local backup created before deployment:

```txt
backups/kirby-content-accounts-20260517-223824.tar.gz
```

Verification after the final deploy:

```txt
https://austinjxseph.me        -> HTTP 200
https://austinjxseph.me/panel  -> Panel HTML returned on GET
/var/www/html/content          -> /var/www/html/persist/content
/var/www/html/site/accounts    -> /var/www/html/persist/site/accounts
/var/www/html/content-seed     -> empty in final image
/var/www/html/site-accounts-seed -> empty in final image
```

The empty seed directories in the final image are expected. The production content and accounts now come from the mounted volume, not from the deployment image.

## Post-Migration Fix: Symlink Ownership (2026-05-17)

After the initial cutover the Kirby Panel rendered the installer screen on `/panel` even though the volume was healthy and pages served correctly.

### Symptoms

- `https://austinjxseph.me/` and child pages: HTTP 200, content visible.
- `https://austinjxseph.me/panel` redirected to `/panel/installation`.
- The installer view reported `requirements.content: false` despite `is_writable("/var/www/html/persist/content")` returning `true` for `www-data`.

### Root cause

`bin/railway-start` runs as `root` during boot, so the symlinks it created were owned `root:root`:

```txt
lrwxrwxrwx 1 root root /var/www/html/content       -> /var/www/html/persist/content
lrwxrwxrwx 1 root root /var/www/html/site/accounts -> /var/www/html/persist/site/accounts
```

`/var/www/html` itself has mode `1777` (sticky bit set), and the kernel's `fs.protected_symlinks` guard refuses to let process A follow a symlink in a sticky directory when the symlink owner differs from both the directory owner and the process owner. So when Apache (`www-data`) called `stat("/var/www/html/content")` from the Panel's `System::status()`, the kernel returned `EACCES` and `is_writable()` reported `false`.

Apache could still serve pages because page lookup `open()`s files through Kirby's own page loader, which the kernel allows; only the symlink-traversing `stat()` was blocked.

### Fix

Added one line to `bin/railway-start` after the `link_persistent_dir` calls so the symlinks are owned by the process that follows them:

```sh
chown -h www-data:www-data "$APP_ROOT/content" "$APP_ROOT/site/accounts"
```

### Verification

After `railway up`:

```txt
lrwxrwxrwx 1 www-data www-data /var/www/html/content       -> /var/www/html/persist/content
lrwxrwxrwx 1 www-data www-data /var/www/html/site/accounts -> /var/www/html/persist/site/accounts

php -r 'echo is_writable("/var/www/html/content");'        -> true (as www-data)
GET /panel                                                  -> 302 /panel/login
```

No data was touched; only symlink ownership changed.

## Local Pull Workflow

Once the volume is the source of truth for content, local design work needs a way to refresh `content/` from the live volume before starting a session.

`bin/railway-pull` handles this. It tar-streams the live directories through `railway ssh` without requiring rsync on the remote.

```sh
bin/railway-pull              # content only
bin/railway-pull --accounts   # content + site/accounts
bin/railway-pull --dry-run    # preview without touching anything
```

Behaviour:

1. Verifies `railway` CLI is logged in and the project is linked.
2. Tars existing local `content/` (and `site/accounts/` if `--accounts`) into `backups/local-<timestamp>.tar.gz`.
3. Streams `/var/www/html/persist/{content,site/accounts}` from the live container into a temp dir.
4. Swaps the freshly-pulled dirs over the local ones only after the stream succeeds, so a failed pull never leaves a half-written `content/`.

`media/` is intentionally not pulled — it is regenerable cache; Kirby will rebuild it on demand from `content/`.

The script is one-way (pull) by design. A push the other direction (local → production) would risk clobbering live Panel edits, so any such operation should remain a deliberate, separate command.

### Recommended workflow

```txt
bin/railway-pull           # before starting design / template / Svelte work
# Edit code locally, run `php -S localhost:8000 router.php`
git commit && git push     # code ships via Railway rebuild
                           # the persistent volume is untouched
```

Do not commit pulled `content/`. It is the production source of truth on the volume, not in git.

## Current Problem

The repository currently tracks `content/`, and the Docker image copies the whole repository into `/var/www/html`.

That means each Railway rebuild starts a fresh container from the Git image. Any content edited in the live Kirby Panel can be replaced by whatever `content/` was baked into the new image.

Without a persistent volume, files written by Kirby during runtime are not durable across rebuilds.

## Persistent Paths

Railway supports one volume per service, so use one mounted directory and symlink the Kirby paths into it.

Recommended volume mount path:

```txt
/var/www/html/persist
```

Persistent app paths:

```txt
/var/www/html/content -> /var/www/html/persist/content
/var/www/html/site/accounts -> /var/www/html/persist/site/accounts
```

`media/` can stay non-persistent because it is Kirby's generated media cache. It can be regenerated from `content/`.

## What I Need

To do the migration safely, I need:

1. Railway CLI access with permission to the correct project, environment, and service.
2. The Railway project, environment, and service names if there are multiple.
3. Confirmation that `/var/www/html/persist` is acceptable as the single volume mount path.
4. A short deploy window where Panel edits are paused.
5. Confirmation whether `site/accounts/` should be persistent. My recommendation is yes if Panel users are managed live.
6. Permission to create a local timestamped backup archive before making deploy changes.

Useful local checks:

```sh
railway whoami
railway projects
railway link
railway status
```

## Backup Plan

Before changing deployment behavior, create a local backup of the current repo content and accounts:

```sh
mkdir -p backups
tar -czf backups/kirby-content-accounts-$(date +%Y%m%d-%H%M%S).tar.gz content site/accounts
```

If Railway already contains newer live content than local Git, pull or export that first before cutover. The backup must represent the content we want to seed into the volume.

## Repo Changes

Add a startup script, for example:

```txt
bin/railway-start
```

The script should:

1. Create `/var/www/html/persist/content` and `/var/www/html/persist/site/accounts`.
2. Seed each persistent directory only if it is empty.
3. Replace `/var/www/html/content` with a symlink to `/var/www/html/persist/content`.
4. Replace `/var/www/html/site/accounts` with a symlink to `/var/www/html/persist/site/accounts`.
5. Ensure `www-data` owns writable paths.
6. Start Apache.

The Docker build should keep seed copies inside the image:

```txt
/var/www/html/content-seed
/var/www/html/site-accounts-seed
```

The seed copies protect the first volume-backed boot from starting empty. After the volume has content, future deploys must not overwrite it.

## Expected Startup Behavior

First boot with a new empty volume:

1. Railway mounts an empty volume at `/var/www/html/persist`.
2. Startup script copies `content-seed` into `/var/www/html/persist/content`.
3. Startup script copies `site-accounts-seed` into `/var/www/html/persist/site/accounts`.
4. Kirby reads and writes through symlinks.

Later rebuilds:

1. Railway mounts the existing volume at `/var/www/html/persist`.
2. Startup script sees persistent directories already contain files.
3. Startup script does not copy seed content again.
4. Live Panel edits remain intact.

## Railway Steps

Create and attach the volume to the service:

```sh
railway volume add
```

Set the mount path to:

```txt
/var/www/html/persist
```

Then deploy the repo changes:

```sh
railway up
```

Exact CLI prompts can vary, so verify the selected project, environment, service, and mount path before confirming.

## Verification

After deployment:

1. Open the live site and confirm pages render.
2. Log into Kirby Panel.
3. Make a small test edit in Panel.
4. Trigger a new Railway redeploy.
5. Confirm the Panel edit remains after rebuild.
6. Confirm uploaded files still appear.
7. Confirm no permissions errors appear in Railway logs.

Useful checks:

```sh
railway logs
```

If shell access is available:

```sh
ls -la /var/www/html/content
ls -la /var/www/html/persist/content
ls -la /var/www/html/site/accounts
ls -la /var/www/html/persist/site/accounts
```

Expected result: `content` and `site/accounts` should be symlinks into `/var/www/html/persist`.

## After Successful Cutover

Once persistent content is verified:

1. Add `content/` to `.gitignore`.
2. Remove content from Git tracking without deleting local files:

```sh
git rm --cached -r content
```

3. Consider doing the same for `site/accounts/` if production Panel accounts are fully live-managed:

```sh
git rm --cached -r site/accounts
```

4. Commit the deployment and ignore changes.

Do not remove local content files from disk unless intentionally creating a clean clone. The `--cached` flag only removes them from Git tracking.

## Rollback Plan

If the volume-backed deploy fails:

1. Revert the Docker/startup-script changes.
2. Redeploy the previous image behavior.
3. Restore content from the local backup if needed.
4. Do not remove `content/` from Git tracking until the volume setup is confirmed stable.

## Ongoing Workflow

After migration:

Code/schema workflow:

```txt
Local dev -> Git commit -> Railway rebuild
```

Content workflow:

```txt
Kirby Panel on production -> Railway persistent volume
```

If a blueprint change requires content restructuring, handle that as a deliberate content migration, not by overwriting the live `content/` directory from Git.
