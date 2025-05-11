<?php

header('Content-Type: application/json');

$heroesData = [
    [
        'name' => 'Lycan',
        'image' => 'hero_icons/lycan_lg.jpg',
        'winrate' => 61.4,
        'matches' => 249,
        'contest_rate' => 9,
        'd2pt_rating' => 3082,
        't_winrate' => null,
        't_matches' => 0,
        't_contest' => 0,
        't_rating' => null
    ],
    [
        'name' => 'Chen',
        'image' => 'hero_icons/chen_lg.jpg',
        'winrate' => 61.1,
        'matches' => 54,
        'contest_rate' => 6,
        'd2pt_rating' => null,
        't_winrate' => null,
        't_matches' => 0,
        't_contest' => 0,
        't_rating' => null
    ],
    [
        'name' => 'Elder Titan',
        'image' => 'hero_icons/elder_titan_lg.jpg',
        'winrate' => 56.6,
        'matches' => 320,
        'contest_rate' => 8,
        'd2pt_rating' => 3018,
        't_winrate' => 66.7,
        't_matches' => 3,
        't_contest' => 22,
        't_rating' => 3045
    ],
    [
        
        'name' => 'Io',
        'image' => 'hero_icons/wisp_lg.jpg',
        'winrate' => 56.0, 
        'matches' => 182, 
        'contest_rate' => 8, 
        'd2pt_rating' => 3028,
        't_winrate' => null, 
        't_matches' => 0, 
        't_contest' => 0, 
        't_rating' => null
    ],
    [
        'name' => 'Clinkz',
        'image' => 'hero_icons/clinkz_lg.jpg',
        'winrate' => 55.0,
        'matches' => 607,
        'contest_rate' => 10,
        'd2pt_rating' => 3065,
        't_winrate' => 100.0,
        't_matches' => 1,
        't_contest' => 6,
        't_rating' => 3034
    ],
    [
        'name' => 'Winter Wyvern',
        'image' => 'hero_icons/winter_wyvern_lg.jpg',
        'winrate' => 54.2,
        'matches' => 568,
        'contest_rate' => 11,
        'd2pt_rating' => 3019,
        't_winrate' => null,
        't_matches' => 0,
        't_contest' => 0,
        't_rating' => null
    ]
];

$sortBy = $_GET['sortBy'] ?? 'winrate'; 
$sortOrder = $_GET['sortOrder'] ?? 'desc'; // По умолчанию по убыванию

usort($heroesData, function($a, $b) use ($sortBy, $sortOrder) {
    $valA = $a[$sortBy];
    $valB = $b[$sortBy];

    if ($valA === null && $valB === null) return 0;
    if ($valA === null) return ($sortOrder === 'asc') ? 1 : -1;
    if ($valB === null) return ($sortOrder === 'asc') ? -1 : 1;
    
    if ($sortBy === 'name') 
    { 
        $comparison = strcmp($valA, $valB);
    } 
    else 
    { 
        $comparison = $valA <=> $valB;
    }

    return ($sortOrder === 'desc') ? -$comparison : $comparison;
});

echo json_encode($heroesData);

?>
