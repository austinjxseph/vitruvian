<?php
$blockNamespace = $blockNamespace ?? "blk";
$blockId = $blockNamespace . "-" . $block->id();
$props = [
    "title" => (string) $block->title()->kt(),
    "description" => (string) $block->description()->kt(),
    "layout" => $block->layout()->value() ?: "column",
];
?>

<b-margin-header id="<?= $blockId ?>"></b-margin-header>
<script type="application/json" data-for="<?= $blockId ?>">
<?= json_encode($props, JSON_UNESCAPED_SLASHES) ?>
</script>
