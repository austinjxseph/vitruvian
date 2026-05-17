#!/usr/bin/env bash
set -euo pipefail

APP_ROOT="/var/www/html"
PERSIST_ROOT="${KIRBY_PERSIST_ROOT:-/var/www/html/persist}"

seed_dir() {
    local seed="$1"
    local target="$2"

    mkdir -p "$target"

    if [ -z "$(find "$target" -mindepth 1 -maxdepth 1 -print -quit)" ] && [ -d "$seed" ]; then
        cp -a "$seed/." "$target/"
    fi
}

link_persistent_dir() {
    local target="$1"
    local link_path="$2"

    rm -rf "$link_path"
    ln -s "$target" "$link_path"
}

seed_dir "$APP_ROOT/content-seed" "$PERSIST_ROOT/content"
seed_dir "$APP_ROOT/site-accounts-seed" "$PERSIST_ROOT/site/accounts"

link_persistent_dir "$PERSIST_ROOT/content" "$APP_ROOT/content"
mkdir -p "$APP_ROOT/site"
link_persistent_dir "$PERSIST_ROOT/site/accounts" "$APP_ROOT/site/accounts"

mkdir -p "$APP_ROOT/media"
chown -R www-data:www-data "$PERSIST_ROOT" "$APP_ROOT/media"

a2dismod mpm_event mpm_worker || true
rm -f /etc/apache2/mods-enabled/mpm_event.* /etc/apache2/mods-enabled/mpm_worker.* || true
a2enmod mpm_prefork

sed -i "s/Listen 80/Listen ${PORT:-80}/g" /etc/apache2/ports.conf
sed -i "s/*:80/*:${PORT:-80}/g" /etc/apache2/sites-available/000-default.conf

apache2ctl -t
exec apache2-foreground
