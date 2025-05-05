const Heroes = [
    { src: "hero_icons/ancient_apparition_lg.jpg", hero: "ancient_apparition" },
    { src: "hero_icons/antimage_lg.jpg", hero: "antimage" },
    { src: "hero_icons/arc_warden_lg.jpg", hero: "arc_warden" },
    { src: "hero_icons/axe_lg.jpg", hero: "axe" },
    { src: "hero_icons/bane_lg.jpg", hero: "bane" },
    { src: "hero_icons/batrider_lg.jpg", hero: "batrider" },
    { src: "hero_icons/beastmaster_lg.jpg", hero: "beastmaster" },
    { src: "hero_icons/bloodseeker_lg.jpg", hero: "bloodseeker" },
    { src: "hero_icons/bounty_hunter_lg.jpg", hero: "bounty_hunter" },
    { src: "hero_icons/brewmaster_lg.jpg", hero: "brewmaster" },
    { src: "hero_icons/bristleback_lg.jpg", hero: "bristleback" },
    { src: "hero_icons/broodmother_lg.jpg", hero: "broodmother" },
    { src: "hero_icons/centaur_lg.jpg", hero: "centaur" },
    { src: "hero_icons/chaos_knight_lg.jpg", hero: "chaos_knight" },
    { src: "hero_icons/chen_lg.jpg", hero: "chen" },
    { src: "hero_icons/clinkz_lg.jpg", hero: "clinkz" },
    { src: "hero_icons/crystal_maiden_lg.jpg", hero: "crystal_maiden" },
    { src: "hero_icons/dark_seer_lg.jpg", hero: "dark_seer" },
    { src: "hero_icons/dark_willow_lg.jpg", hero: "dark_willow" },
    { src: "hero_icons/dawnbreaker_lg.jpg", hero: "dawnbreaker" },
    { src: "hero_icons/dazzle_lg.jpg", hero: "dazzle" },
    { src: "hero_icons/death_prophet_lg.jpg", hero: "death_prophet" },
    { src: "hero_icons/disruptor_lg.jpg", hero: "disruptor" },
    { src: "hero_icons/doom_bringer_lg.jpg", hero: "doom_bringer" },
    { src: "hero_icons/dragon_knight_lg.jpg", hero: "dragon_knight" },
    { src: "hero_icons/drow_ranger_lg.jpg", hero: "drow_ranger" },
    { src: "hero_icons/earth_spirit_lg.jpg", hero: "earth_spirit" },
    { src: "hero_icons/earthshaker_lg.jpg", hero: "earthshaker" },
    { src: "hero_icons/elder_titan_lg.jpg", hero: "elder_titan" },
    { src: "hero_icons/ember_spirit_lg.jpg", hero: "ember_spirit" },
    { src: "hero_icons/enchantress_lg.jpg", hero: "enchantress" },
    { src: "hero_icons/enigma_lg.jpg", hero: "enigma" },
    { src: "hero_icons/faceless_void_lg.jpg", hero: "faceless_void" },
    { src: "hero_icons/furion_lg.jpg", hero: "furion" },
    { src: "hero_icons/grimstroke_lg.jpg", hero: "grimstroke" },
    { src: "hero_icons/gyrocopter_lg.jpg", hero: "gyrocopter" },
    { src: "hero_icons/hoodwink_lg.jpg", hero: "hoodwink" },
    { src: "hero_icons/huskar_lg.jpg", hero: "huskar" },
    { src: "hero_icons/invoker_lg.jpg", hero: "invoker" },
    { src: "hero_icons/jakiro_lg.jpg", hero: "jakiro" },
    { src: "hero_icons/juggernaut_lg.jpg", hero: "juggernaut" },
    { src: "hero_icons/keeper_of_the_light_lg.jpg", hero: "keeper_of_the_light" },
    { src: "hero_icons/kez_lg.jpg", hero: "kez" },
    { src: "hero_icons/kunkka_lg.jpg", hero: "kunkka" },
    { src: "hero_icons/legion_commander_lg.jpg", hero: "legion_commander" },
    { src: "hero_icons/leshrac_lg.jpg", hero: "leshrac" },
    { src: "hero_icons/lich_lg.jpg", hero: "lich" },
    { src: "hero_icons/life_stealer_lg.jpg", hero: "life_stealer" },
    { src: "hero_icons/lina_lg.jpg", hero: "lina" },
    { src: "hero_icons/lion_lg.jpg", hero: "lion" },
    { src: "hero_icons/lone_druid_lg.jpg", hero: "lone_druid" },
    { src: "hero_icons/luna_lg.jpg", hero: "luna" },
    { src: "hero_icons/lycan_lg.jpg", hero: "lycan" },
    { src: "hero_icons/magnataur_lg.jpg", hero: "magnataur" },
    { src: "hero_icons/marci_lg.jpg", hero: "marci" },
    { src: "hero_icons/mars_lg.jpg", hero: "mars" },
    { src: "hero_icons/medusa_lg.jpg", hero: "medusa" },
    { src: "hero_icons/meepo_lg.jpg", hero: "meepo" },
    { src: "hero_icons/mirana_lg.jpg", hero: "mirana" },
    { src: "hero_icons/monkey_king_lg.jpg", hero: "monkey_king" },
    { src: "hero_icons/morphling_lg.jpg", hero: "morphling" },
    { src: "hero_icons/muerta_lg.jpg", hero: "muerta" },
    { src: "hero_icons/naga_siren_lg.jpg", hero: "naga_siren" },
    { src: "hero_icons/necrolyte_lg.jpg", hero: "necrolyte" },
    { src: "hero_icons/nevermore_lg.jpg", hero: "nevermore" },
    { src: "hero_icons/night_stalker_lg.jpg", hero: "night_stalker" },
    { src: "hero_icons/nyx_assassin_lg.jpg", hero: "nyx_assassin" },
    { src: "hero_icons/obsidian_destroyer_lg.jpg", hero: "obsidian_destroyer" },
    { src: "hero_icons/ogre_magi_lg.jpg", hero: "ogre_magi" },
    { src: "hero_icons/omniknight_lg.jpg", hero: "omniknight" },
    { src: "hero_icons/oracle_lg.jpg", hero: "oracle" },
    { src: "hero_icons/pangolier_lg.jpg", hero: "pangolier" },
    { src: "hero_icons/phantom_assassin_lg.jpg", hero: "phantom_assassin" },
    { src: "hero_icons/phantom_lancer_lg.jpg", hero: "phantom_lancer" },
    { src: "hero_icons/phoenix_lg.jpg", hero: "phoenix" },
    { src: "hero_icons/primal_beast_lg.jpg", hero: "primal_beast" },
    { src: "hero_icons/puck_lg.jpg", hero: "puck" },
    { src: "hero_icons/pudge_lg.jpg", hero: "pudge" },
    { src: "hero_icons/pugna_lg.jpg", hero: "pugna" },
    { src: "hero_icons/queenofpain_lg.jpg", hero: "queenofpain" },
    { src: "hero_icons/rattletrap_lg.jpg", hero: "rattletrap" },
    { src: "hero_icons/razor_lg.jpg", hero: "razor" },
    { src: "hero_icons/riki_lg.jpg", hero: "riki" },
    { src: "hero_icons/ringmaster_lg.jpg", hero: "ringmaster" },
    { src: "hero_icons/rubick_lg.jpg", hero: "rubick" },
    { src: "hero_icons/sand_king_lg.jpg", hero: "sand_king" },
    { src: "hero_icons/shadow_demon_lg.jpg", hero: "shadow_demon" },
    { src: "hero_icons/shadow_shaman_lg.jpg", hero: "shadow_shaman" },
    { src: "hero_icons/shredder_lg.jpg", hero: "shredder" },
    { src: "hero_icons/silencer_lg.jpg", hero: "silencer" },
    { src: "hero_icons/skeleton_king_lg.jpg", hero: "skeleton_king" },
    { src: "hero_icons/skywrath_mage_lg.jpg", hero: "skywrath_mage" },
    { src: "hero_icons/slardar_lg.jpg", hero: "slardar" },
    { src: "hero_icons/slark_lg.jpg", hero: "slark" },
    { src: "hero_icons/snapfire_lg.jpg", hero: "snapfire" },
    { src: "hero_icons/sniper_lg.jpg", hero: "sniper" },
    { src: "hero_icons/spectre_lg.jpg", hero: "spectre" },
    { src: "hero_icons/spirit_breaker_lg.jpg", hero: "spirit_breaker" },
    { src: "hero_icons/storm_spirit_lg.jpg", hero: "storm_spirit" },
    { src: "hero_icons/sven_lg.jpg", hero: "sven" },
    { src: "hero_icons/techies_lg.jpg", hero: "techies" },
    { src: "hero_icons/templar_assassin_lg.jpg", hero: "templar_assassin" },
    { src: "hero_icons/terrorblade_lg.jpg", hero: "terrorblade" },
    { src: "hero_icons/tidehunter_lg.jpg", hero: "tidehunter" },
    { src: "hero_icons/tinker_lg.jpg", hero: "tinker" },
    { src: "hero_icons/tiny_lg.jpg", hero: "tiny" },
    { src: "hero_icons/treant_lg.jpg", hero: "treant" },
    { src: "hero_icons/troll_warlord_lg.jpg", hero: "troll_warlord" },
    { src: "hero_icons/tusk_lg.jpg", hero: "tusk" },
    { src: "hero_icons/undying_lg.jpg", hero: "undying" },
    { src: "hero_icons/ursa_lg.jpg", hero: "ursa" },
    { src: "hero_icons/vengefulspirit_lg.jpg", hero: "vengefulspirit" },
    { src: "hero_icons/venomancer_lg.jpg", hero: "venomancer" },
    { src: "hero_icons/viper_lg.jpg", hero: "viper" },
    { src: "hero_icons/visage_lg.jpg", hero: "visage" },
    { src: "hero_icons/void_spirit_lg.jpg", hero: "void_spirit" },
    { src: "hero_icons/warlock_lg.jpg", hero: "warlock" },
    { src: "hero_icons/weaver_lg.jpg", hero: "weaver" },
    { src: "hero_icons/windrunner_lg.jpg", hero: "windrunner" },
    { src: "hero_icons/winter_wyvern_lg.jpg", hero: "winter_wyvern" },
    { src: "hero_icons/wisp_lg.jpg", hero: "wisp" },
    { src: "hero_icons/witch_doctor_lg.jpg", hero: "witch_doctor" },
    { src: "hero_icons/zuus_lg.jpg", hero: "zuus" },
    { src: "hero_icons/abaddon_lg.jpg", hero: "abaddon" },
    { src: "hero_icons/abyssal_underlord_lg.jpg", hero: "abyssal_underlord" },
    { src: "hero_icons/alchemist_lg.jpg", hero: "alchemist" },
  ];

  const Items = [
    { src: "items/Blade_of_Alacrity_icon.png", item: "blade_of_alacrity" },
    { src: "items/Blades_of_Attack_icon.png", item: "blades_of_attack" },
    { src: "items/Blight_Stone_icon.png", item: "blight_stone" },
    { src: "items/Blink_Dagger_icon.png", item: "blink_dagger" },
    { src: "items/Blitz_Knuckles_icon.png", item: "blitz_knuckles" },
    { src: "items/Bloodstone_icon.png", item: "bloodstone" },
    { src: "items/Bloodthorn_icon.png", item: "bloodthorn" },
    { src: "items/Boots_of_Speed_icon.png", item: "boots_of_speed" },
    { src: "items/Boots_of_Travel_1_icon.png", item: "boots_of_travel_1" },
    { src: "items/Bottle__icon.png", item: "bottle_full" },
    { src: "items/Bracer_icon.png", item: "bracer" },
    { src: "items/Broadsword_icon.png", item: "broadsword" },
    { src: "items/Buckler__icon.png", item: "buckler_inactive" },
    { src: "items/Butterfly_icon.png", item: "butterfly" },
    { src: "items/Chainmail_icon.png", item: "chainmail" },
    { src: "items/Cheese_icon.png", item: "cheese" },
    { src: "items/Circlet_icon.png", item: "circlet" },
    { src: "items/Clarity_icon.png", item: "clarity" },
    { src: "items/Claymore_icon.png", item: "claymore" },
    { src: "items/Cloak_icon.png", item: "cloak" },
    { src: "items/Crimson_Guard_icon.png", item: "crimson_guard" },
    { src: "items/Crown_icon.png", item: "crown" },
    { src: "items/Crystalys_icon.png", item: "crystalys" },
    { src: "items/Daedalus_icon.png", item: "daedalus" },
    { src: "items/Dagon_1_icon.png", item: "dagon_1" },
    { src: "items/Demon_Edge_icon.png", item: "demon_edge" },
    { src: "items/Desolator_icon.png", item: "desolator" },
    { src: "items/Diffusal_Blade_1_icon.png", item: "diffusal_blade_1" },
    { src: "items/Divine_Rapier_icon.png", item: "divine_rapier" },
    { src: "items/Dragon_Lance_icon.png", item: "dragon_lance" },
    { src: "items/Drum_of_Endurance_icon.png", item: "drum_of_endurance" },
    { src: "items/Dust_of_Appearance_icon.png", item: "dust_of_appearance" },
    { src: "items/Eaglesong_icon.png", item: "eaglesong" },
    { src: "items/Echo_Sabre_icon.png", item: "echo_sabre" },
    { src: "items/Enchanted_Mango_icon.png", item: "enchanted_mango" },
    { src: "items/Energy_Booster_icon.png", item: "energy_booster" },
    { src: "items/Eternal_Shroud_icon.png", item: "eternal_shroud" },
    { src: "items/Ethereal_Blade_icon.png", item: "ethereal_blade" },
    { src: "items/Euls_Scepter_of_Divinity_icon.png", item: "euls_scepter_of_divinity" },
    { src: "items/Eye_of_Skadi_icon.png", item: "eye_of_skadi" },
    { src: "items/Faerie_Fire_icon.png", item: "faerie_fire" },
    { src: "items/Falcon_Blade_icon.png", item: "falcon_blade" },
    { src: "items/Fluffy_Hat_icon.png", item: "fluffy_hat" },
    { src: "items/Force_Staff_icon.png", item: "force_staff" },
    { src: "items/Gauntlets_of_Strength_icon.png", item: "gauntlets_of_strength" },
    { src: "items/Gem_of_True_Sight_icon.png", item: "gem_of_true_sight" },
    { src: "items/Ghost_Scepter_icon.png", item: "ghost_scepter" },
    { src: "items/Gleipnir_icon.png", item: "gleipnir" },
    { src: "items/Glimmer_Cape_icon.png", item: "glimmer_cape" },
    { src: "items/Gloves_of_Haste_icon.png", item: "gloves_of_haste" },
    { src: "items/Guardian_Greaves_icon.png", item: "guardian_greaves" },
    { src: "items/Hand_of_Midas_icon.png", item: "hand_of_midas" },
    { src: "items/Headdress_icon.png", item: "headdress" },
    { src: "items/Healing_Salve_icon.png", item: "healing_salve" },
    { src: "items/Heart_of_Tarrasque_icon.png", item: "heart_of_tarrasque" },
    { src: "items/Heaven_Halberd_icon.png", item: "heavens_halberd" },
    { src: "items/Helm_of_Iron_Will_icon.png", item: "helm_of_iron_will" },
    { src: "items/Helm_of_the_Dominator_icon.png", item: "helm_of_the_dominator" },
    { src: "items/Holy_Locket_icon.png", item: "holy_locket" },
    { src: "items/Hood_of_Defiance_icon.png", item: "hood_of_defiance" },
    { src: "items/Hurricane_Pike_icon.png", item: "hurricane_pike" },
    { src: "items/Hyperstone_icon.png", item: "hyperstone" },
    { src: "items/Infused_Raindrops_icon.png", item: "infused_raindrops" },
    { src: "items/Iron_Branch_icon.png", item: "iron_branch" },
    { src: "items/Javelin_icon.png", item: "javelin" },
    { src: "items/Kaya_and_Sange_icon.png", item: "kaya_and_sange" },
    { src: "items/Kaya_icon.png", item: "kaya" },
    { src: "items/Linken_Sphere_icon.png", item: "linkens_sphere" },
    { src: "items/Lotus_Orb_icon.png", item: "lotus_orb" },
    { src: "items/Maelstrom_icon.png", item: "maelstrom" },
    { src: "items/Mage_Slayer_icon.png", item: "mage_slayer" },
    { src: "items/Magic_Stick_icon.png", item: "magic_stick" },
    { src: "items/Magic_Wand_icon.png", item: "magic_wand" },
    { src: "items/Manta_Style_icon.png", item: "manta_style" },
    { src: "items/Mantle_of_Intelligence_icon.png", item: "mantle_of_intelligence" },
    { src: "items/Mask_of_Madness_icon.png", item: "mask_of_madness" },
    { src: "items/Medallion_of_Courage_icon.png", item: "medallion_of_courage" },
    { src: "items/Mekansm_icon.png", item: "mekansm" },
    { src: "items/Meteor_Hammer_icon.png", item: "meteor_hammer" },
    { src: "items/Mithril_Hammer_icon.png", item: "mithril_hammer" },
    { src: "items/Mjollnir_icon.png", item: "mjollnir" },
    { src: "items/Monkey_King_Bar_icon.png", item: "monkey_king_bar" },
    { src: "items/Moon_Shard_icon.png", item: "moon_shard" },
    { src: "items/Morbid_Mask_icon.png", item: "morbid_mask" },
    { src: "items/Mystic_Staff_icon.png", item: "mystic_staff" },
    { src: "items/Null_Talisman_icon.png", item: "null_talisman" },
    { src: "items/Nullifier_icon.png", item: "nullifier" },
    { src: "items/Oblivion_Staff_icon.png", item: "oblivion_staff" },
    { src: "items/Observer_Ward_icon.png", item: "observer_ward" },
    { src: "items/Octarine_Core_icon.png", item: "octarine_core" },
    { src: "items/Ogre_Axe_icon.png", item: "ogre_axe" },
    { src: "items/Orb_of_Corrosion_icon.png", item: "orb_of_corrosion" },
    { src: "items/Orb_of_Venom_icon.png", item: "orb_of_venom" },
    { src: "items/Orchid_Malevolence_icon.png", item: "orchid_malevolence" },
    { src: "items/Overwhelming_Blink_icon.png", item: "overwhelming_blink" },
    { src: "items/Perseverance_icon.png", item: "perseverance" },
    { src: "items/Phase_Boots_icon.png", item: "phase_boots" },
    { src: "items/Pipe_of_Insight_icon.png", item: "pipe_of_insight" },
    { src: "items/Platemail_icon.png", item: "platemail" },
    { src: "items/Point_Booster_icon.png", item: "point_booster" },
    { src: "items/Power_Treads_icon.png", item: "power_treads" },
    { src: "items/Quarterstaff_icon.png", item: "quarterstaff" },
    { src: "items/Quelling_Blade_icon.png", item: "quelling_blade" },
    { src: "items/Radiance_icon.png", item: "radiance_active" },
    { src: "items/Reaver_icon.png", item: "reaver" },
    { src: "items/Refresher_Orb_icon.png", item: "refresher_orb" },
    { src: "items/Refresher_Shard_icon.png", item: "refresher_shard" },
    { src: "items/Ring_of_Basilius_icon.png", item: "ring_of_basilius_active" },
    { src: "items/Ring_of_Health_icon.png", item: "ring_of_health" },
    { src: "items/Ring_of_Protection_icon.png", item: "ring_of_protection" },
    { src: "items/Ring_of_Regen_icon.png", item: "ring_of_regen" },
    { src: "items/Robe_of_the_Magi_icon.png", item: "robe_of_the_magi" },
    { src: "items/Rod_of_Atos_icon.png", item: "rod_of_atos" },
    { src: "items/Sacred_Relic_icon.png", item: "sacred_relic" },
    { src: "items/Sages_Mask_icon.png", item: "sages_mask" },
    { src: "items/Sange_and_Yasha_icon.png", item: "sange_and_yasha" },
    { src: "items/Sange_icon.png", item: "sange" },
    { src: "items/Satanic_icon.png", item: "satanic" },
    { src: "items/Scythe_of_Vyse_icon.png", item: "scythe_of_vyse" },
    { src: "items/Sentry_Ward_icon.png", item: "sentry_ward" },
    { src: "items/Shadow_Amulet_icon.png", item: "shadow_amulet" },
    { src: "items/Shadow_Blade_icon.png", item: "shadow_blade" },
    { src: "items/Shivas_Guard_icon.png", item: "shivas_guard" },
    { src: "items/Silver_Edge_icon.png", item: "silver_edge" },
    { src: "items/Skull_Basher_icon.png", item: "skull_basher" },
    { src: "items/Slippers_of_Agility_icon.png", item: "slippers_of_agility" },
    { src: "items/Smoke_of_Deceit_icon.png", item: "smoke_of_deceit" },
    { src: "items/Solar_Crest_icon.png", item: "solar_crest" },
    { src: "items/Soul_Booster_icon.png", item: "soul_booster" },
    { src: "items/Soul_Ring_icon.png", item: "soul_ring" },
    { src: "items/Spirit_Vessel_icon.png", item: "spirit_vessel" },
    { src: "items/Staff_of_Wizardry_icon.png", item: "staff_of_wizardry" },
    { src: "items/Swift_Blink_icon.png", item: "swift_blink" },
    { src: "items/Talisman_of_Evasion_icon.png", item: "talisman_of_evasion" },
    { src: "items/Tango_icon.png", item: "tango" },
    { src: "items/Tome_of_Knowledge_icon.png", item: "tome_of_knowledge" },
    { src: "items/Town_Portal_Scroll_icon.png", item: "town_portal_scroll" },
    { src: "items/Tranquil_Boots__icon.png", item: "tranquil_boots_active" },
    { src: "items/Ultimate_Orb_icon.png", item: "ultimate_orb" },
    { src: "items/Urn_of_Shadows_icon.png", item: "urn_of_shadows" },
    { src: "items/Vanguard_icon.png", item: "vanguard" },
    { src: "items/Veil_of_Discord_icon.png", item: "veil_of_discord" },
    { src: "items/Vitality_Booster_icon.png", item: "vitality_booster" },
    { src: "items/Vladmirs_Offering_icon.png", item: "vladmirs_offering" },
    { src: "items/Void_Stone_icon.png", item: "void_stone" },
    { src: "items/Voodoo_Mask_icon.png", item: "voodoo_mask" },
    { src: "items/Wind_Lace_icon.png", item: "wind_lace" },
    { src: "items/Wind_Waker_icon.png", item: "wind_waker" },
    { src: "items/Witch_Blade_icon.png", item: "witch_blade" },
    { src: "items/Wraith_Band_icon.png", item: "wraith_band" },
    { src: "items/Yasha_and_Kaya_icon.png", item: "yasha_and_kaya" },
    { src: "items/Yasha_icon.png", item: "yasha" },
    { src: "items/Abyssal_Blade_icon.png", item: "abyssal_blade" },
    { src: "items/Aegis_of_the_Immortal_icon.png", item: "aegis_of_the_immortal" },
    { src: "items/Aeon_Disk_icon.png", item: "aeon_disk" },
    { src: "items/Aether_Lens_icon.png", item: "aether_lens" },
    { src: "items/Aghanims_Scepter_icon.png", item: "aghanims_scepter" },
    { src: "items/Aghanims_Shard_icon.png", item: "aghanims_shard" },
    { src: "items/Arcane_Blink_icon.png", item: "arcane_blink" },
    { src: "items/Arcane_Boots_icon.png", item: "arcane_boots" },
    { src: "items/Armlet_of_Mordiggian_icon.png", item: "armlet_of_mordiggian_inactive" },
    { src: "items/Assault_Cuirass_icon.png", item: "assault_cuirass" },
    { src: "items/Band_of_Elvenskin_icon.png", item: "band_of_elvenskin" },
    { src: "items/Battle_Fury_icon.png", item: "battle_fury" },
    { src: "items/Belt_of_Strength_icon.png", item: "belt_of_strength" },
    { src: "items/Black_King_Bar_icon.png", item: "black_king_bar" },
    { src: "items/Blade_Mail_icon.png", item: "blade_mail" },
];


let correctHero     = "shadow demon"; 
let correctChoice   = 0;
let wrongChoice     = 0;

const buttons = document.querySelectorAll(".build-answer"); 
const resultText = document.getElementById("result-text");
const mmrText = document.getElementById("mmr");
const itemImages = document.querySelectorAll(".build .item-build"); 

const correct = document.getElementById("correct");
const wrong = document.getElementById("wrong");


buttons.forEach(button => {
    button.addEventListener("click", handleGuess);
});

function handleGuess(event)
{  
    mmrText.textContent = `that played with the shown Items in a 
                           ${Math.floor(15000-10000*Math.random())} 
                           MMR match. `
    
    const selectedHero = event.currentTarget.getAttribute("data-hero");
    let bigCapHero = correctHero.charAt(0).toUpperCase() 
                + correctHero.slice(1).replace('_', ' ');
    
    if (selectedHero === correctHero) 
    {
        ++correctChoice;
        resultText.textContent = "✅ Правильно! Хотите сыграть ещё?";
        resultText.style.color = 'green';
    } 
    else 
    {
        ++wrongChoice;
        resultText.textContent = `❌ Неверно! ${bigCapHero} выиграл этот матч. Попробуйте ещё!`;
        resultText.style.color = 'red'; 
    }
    document.querySelectorAll(".build-answer").forEach(btn => {
        btn.disabled = true;
    });

    correct.textContent = `✅ ${correctChoice}`;
    wrong.textContent   = `❌ ${wrongChoice}`;      
    mmrText.style.display = 'none';
    showPlayAgainButton();
}

function showPlayAgainButton()
{
    const btn = document.createElement("button");
    btn.id = "play-again";
    btn.textContent = "Играть ещё раз";
    btn.classList.add("play-again"); 

    btn.addEventListener("click", startNewRound);
    resultText.after(btn);
}

function startNewRound() 
{
    const newItems = [];
    for(let i = 0; i < 6; ++i) 
    {
        const randomIndex = Math.floor(Math.random() * Items.length);
        newItems.push(Items[randomIndex]);
    }

    const newHeroes = [];
    for(let i = 0; i < 4; ++i) 
    {
        const randomIndex = Math.floor(Math.random() * Heroes.length);
        newHeroes.push(Heroes[randomIndex]);
    }

    const correctHeroIndex = Math.floor(Math.random() * newHeroes.length);
    correctHero = newHeroes[correctHeroIndex].hero; 

    itemImages.forEach((imgElement, index) => 
    {
        imgElement.src = newItems[index].src; 
    });

    buttons.forEach((button, index) => 
    {
        const heroImg = button.querySelector('img.hero');
        button.setAttribute('data-hero', newHeroes[index].hero);
        heroImg.src = newHeroes[index].src;

        button.disabled = false; 
    });

    resultText.textContent = "Guess The Hero"; 
    resultText.style.color = ''; 
    mmrText.style.display = 'block'; 

    const playAgainBtn = document.getElementById("play-again");
    if (playAgainBtn) 
        playAgainBtn.remove();

}

//user input vallidation  
function checkEmail(email)
{
    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z.]+\.[a-zA-Z]+$/;
    return emailRegex.test(email);
}

function checkPassword(password) 
{
    if(password.length <= 8) {
        return {isValid: false, message: "Пароль должен содержать 8 или более символов"};
    }

    if(!/\p{L}/u.test(password)) {
        return {isValid: false, message: "Пароль должен содержать хотя бы одну букву"};
    }
    
    if(!/\d/.test(password)) {
        return {isValid: false, message: "Пароль должен содержать хотя бы одну цифру"};
    }

    return {isValid: true, message: "Пароль корректный"};
}

function validateInput(inputElement) 
{
    const value = inputElement.value.trim();

    if(value == "")
    {
        showError(inputElement, "This field is required");
        return false;
    }
    
    if(inputElement.id == "first-name" || inputElement.id == "second-name")
    {
        if(!/^\p{L}+(-\p{L}+)*$/u.test(value))
        {
            showError(inputElement, "Допустимы только буквы/дефис");
            return false;
        }
    }

    if(inputElement.id == "email-input")
    {
        if(!checkEmail(value))
        {
            showError(inputElement, "введите корректный email");
            return false;
        }
    }

    if(inputElement.id == "password-input")
    {
        const passwordCheck = checkPassword(value);
        if(!passwordCheck.isValid)
        {
            showError(inputElement, passwordCheck.message);
            return false; 
        }
    }

    const parent = inputElement.parentElement;
    const existingError = parent.querySelector('.error-message');

    inputElement.style.border = "";
    if (existingError) 
    {
        existingError.remove();
    }
    
    return true;
}

function showError(inputElement, message) {
    const parent = inputElement.parentElement;
    const existingError = parent.querySelector('.error-message');
    if (existingError) 
    {
        existingError.remove();
    }

    const errorSpan = document.createElement("span");
    errorSpan.textContent = message;
    errorSpan.className = "error-message";
    errorSpan.style.color = "red";
    errorSpan.style.display = "block";
    errorSpan.style.textAlign = "center";
    errorSpan.style.fontSize = "0.875rem";
    errorSpan.style.maxWidth = "450px";

    inputElement.style.border = "2px solid red";

    inputElement.after(errorSpan);
}

function validateForm(event) 
{
    const inputs = Array.from(event.target.querySelectorAll('input'));
    let allValid = true;

    inputs.forEach(input => {
        if (input.type === 'hidden') return;

        if (!validateInput(input)) {
        allValid = false;
        }
    });


    if (!allValid) {
        event.preventDefault();
    }
    return allValid;
}

document.addEventListener('DOMContentLoaded', () => 
{
    const params = new URLSearchParams(window.location.search);
    const email = params.get('email');
    
    if (email) {
        const emailDisplay = document.getElementById('email-display');
        if (emailDisplay) 
            emailDisplay.textContent = email;

        const hidden = document.getElementById('email-hidden');
        if (hidden) 
            hidden.value = email;
    }

    if (params.get('loggedIn') == '1') 
    {
        const btn = document.querySelector('.loginButton');
        if (btn) 
        {
            btn.textContent = 'Log out';
            btn.href = 'logout.php';
        }
    }
    const fullName = document.getElementById('userName');
    if(fullName)
    {
        fullName.classList.add("userNameText");
        const getName = params.get('fullName');
        if(getName)
            fullName.textContent = "Hi "+getName+"!"; 
        else
            fullName.textContent = "Hi there!"; 
    }   
  });