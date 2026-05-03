<?php

/**
 * Returns an asset URL with a `?v=<mtime>` cache-busting query string.
 * If the file is missing, returns the original path unchanged.
 */
function versionedAsset(string $path): string
{
    $root = kirby()->root('index') . $path;
    if (is_file($root)) {
        return $path . '?v=' . filemtime($root);
    }
    return $path;
}
