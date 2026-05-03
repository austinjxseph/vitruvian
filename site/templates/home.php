<?php snippet("head"); ?>
<?php snippet("preloader"); ?>
<?php snippet("header"); ?>

<?php // Build projects data array from featured projects field


$projectsData = [];
foreach ($page->featured_projects()->toPages() as $project) {
    $projectsData[] = [
        "url" => $project->url(),
        "name" => $project->title()->value(),
        "title" => $project->project_title()->value(),
        "thumbnail_base" => $project->thumbnail_base()->toFile()?->url() ?? "",
        "thumbnail_overlay" =>
            $project->thumbnail_overlay()->toFile()?->url() ?? "",
    ];
}

$availabilityStatus = $page
    ->hero_availability_status()
    ->or("available")
    ->value();

$availabilityStatus = match ($availabilityStatus) {
    "on_hold" => "hold",
    "not_accepting" => "blocked",
    "blocked", "available", "hold" => $availabilityStatus,
    default => "available",
};

$indexId = "index";
$indexProps = [
    "eyebrow" => $page->hero_eyebrow()->value(),
    "availabilitystatus" => $availabilityStatus,
    "title" => strip_tags(
        (string) $page->hero_title()->kti(),
        "<em><i><span><strong><b>",
    ),
    "buttonlabel" => $page->hero_button_label()->value(),
    "buttonhref" => $page->hero_button_link()->toUrl(),
    "projects" => $projectsData,
];
?>

<div class="page" data-barba="container" data-barba-namespace="Index">
<main class="main">
<l-index id="<?= $indexId ?>"></l-index>
<script type="application/json" data-for="<?= $indexId ?>">
<?= json_encode($indexProps, JSON_UNESCAPED_SLASHES) ?>
</script>
</main>
<?php snippet("footer", ["fixed" => true]); ?>
</div>
<?php snippet("scripts"); ?>
