ServerEvents.tags('item', event => {
    const add = (tag, items) => items.forEach(item => event.add(tag, item));

    event.remove('forge:gears/copper', 'hammerlib:gears')
    event.remove('forge:gears/iron', 'hammerlib:gears')
    event.remove('forge:gears/gold', 'hammerlib:gears')
    event.remove('forge:gears/diamond', 'hammerlib:gears')
    event.remove('forge:gears/netherite', 'hammerlib:gears')

    add('concatenation:tech_cards', [
        'tarotcards:the_hierophant',
        'tarotcards:the_hermit'
    ]);
    add('concatenation:magic_cards', [
        'tarotcards:temperance',
        'tarotcards:the_magician'
    ]);
    add('concatenation:middle_cards', [
        'tarotcards:the_hermit',
        'tarotcards:the_magician'
    ]);
    add('concatenation:magic_cards_t2', [
        'tarotcards:the_sun',
        'tarotcards:the_moon',
        'tarotcards:the_star'
    ]);
    add('concatenation:top_cards', [
        'tarotcards:the_hierophant',
        'tarotcards:temperance'
    ]);

    add('concatenation:swashbuckler_cards', [
        'tarotcards:the_hierophant',
        'tarotcards:the_chariot'
    ]);

    add('concatenation:hammers', [
        'concatenationcore:hammer',
        'concatenationcore:ironclad_hammer',
        'concatenationcore:calralite_hammer'
    ]);

    add('concatenation:firing_item', [
        'minecraft:fire_charge',
        'elementalcraft:firecrystal',
        'elementalcraft:fire_shard',
        'ars_nouveau:fire_essence',
        'elementalcraft:elemental_firefuel',
        'bloodmagic:reagentlava',
        'tconstruct:magma_bottle',
        'born_in_chaos_v1:fire_dust'
    ]);

    const baseCircuits = [
        'concatenationcore:altcircuit',
        'concatenationcore:circuit',
        'strangematter:resonant_circuit',
        'tfmg:circuit_board'
    ];
    const mekanismCircuits = [
        'mekanism:basic_control_circuit',
        'mekanism:advanced_control_circuit',
        'mekanism:elite_control_circuit',
        'mekanism:ultimate_control_circuit'
    ]
    add('concatenation:lower_circuits', baseCircuits);
    add('forge:circuits', baseCircuits);
    add('concatenation:circuits', baseCircuits);
    add('concatenation:circuits', mekanismCircuits);

    add('concatenation:higher_circuits', [
        'concatenationcore:circuit',
        'mekanism:basic_control_circuit',
        'mekanism:advanced_control_circuit',
        'mekanism:elite_control_circuit',
        'mekanism:ultimate_control_circuit'
    ]);
    add('concatenation:tanks', [
        'littlelogistics:fluid_barge',
        'littlelogistics:fluid_car',
        'mekanism:basic_fluid_tank',
        'create:fluid_tank',
        'tconstruct:seared_ingot_tank',
        'tconstruct:seared_fuel_tank'
    ]);
    add('concatenation:high_priestess_casing', [
        'industrialforegoing:machine_frame_simple',
        'thermal:machine_frame'
    ]);
    //event.add('thermal:crafting/dies', 'concatenationcore:copper_lead_coil');
    event.add('thermal:crafting/dies', 'concatenationcore:hierophant_die');
    event.add('forge:consumables/experience_3', 'concatenationcore:experience_orb');
    event.add('forge:consumables/experience_3', 'minecraft:experience_bottle');

    add('minecraft:swords', [
        'asr:diamond_giant_sword',
        'asr:golden_giant_sword',
        'asr:iron_giant_sword',
        'asr:wooden_giant_sword',
        'asr:stone_giant_sword',
        'asr:ender_giant_sword',
        'bloodmagic:soulsword',
        'reliquary:magicbane'
        //'create_dd:gilded_rose_sword'
    ]);

    const helmets = [
        'born_in_chaos_v1:dark_metal_armor_helmet',
        'celestisynth:solar_crystal_helmet',
        'celestisynth:lunar_stone_helmet',
        'thermal:beekeeper_helmet',
        'psi:psimetal_exosuit_helmet',
        'hexerei:witch_helmet',
        'ars_technica:technomancer_helmet',
        'born_in_chaos_v1:nightmare_mantleofthe_night_helmet',
        //'dimdoors:world_thread_helmet',
        //'dimdoors:garment_of_reality_helmet',
        'create:cardboard_helmet',
        'bloodmagic:livinghelmet',
        'tfmg:steel_helmet',
        'born_in_chaos_v1:spiny_shell_armor_helmet',
        'minecolonies:plate_armor_helmet',
        'thermal:diving_helmet',
        'thermal:hazmat_helmet'
    ];

    const chestplates = [
        'born_in_chaos_v1:dark_metal_armor_chestplate',
        'celestisynth:solar_crystal_chestplate',
        'celestisynth:lunar_stone_chestplate',
        'thermal:beekeeper_chestplate',
        'psi:psimetal_exosuit_chestplate',
        'hexerei:witch_chestplate',
        'ars_technica:technomancer_chestplate',
        'born_in_chaos_v1:nightmare_mantleofthe_night_chestplate',
        //'dimdoors:world_thread_chestplate',
        //'dimdoors:garment_of_reality_chestplate',
        'create:cardboard_chestplate',
        'bloodmagic:livingplate',
        'tfmg:steel_chestplate',
        'born_in_chaos_v1:spiny_shell_armor_chestplate',
        'minecolonies:plate_armor_chest',
        'thermal:diving_chestplate',
        'thermal:hazmat_chestplate',
        'simplyjetpacks:flux_chestplate'
    ];

    const leggings = [
        'born_in_chaos_v1:dark_metal_armor_leggings',
        'celestisynth:solar_crystal_leggings',
        'celestisynth:lunar_stone_leggings',
        'thermal:beekeeper_leggings',
        'psi:psimetal_exosuit_leggings',
        'hexerei:witch_leggings',
        'ars_technica:technomancer_leggings',
        'born_in_chaos_v1:nightmare_mantleofthe_night_leggings',
        //'dimdoors:world_thread_leggings',
        //'dimdoors:garment_of_reality_leggings',
        'create:cardboard_leggings',
        'bloodmagic:livingleggings',
        'tfmg:steel_leggings',
        'born_in_chaos_v1:spiny_shell_armor_leggings',
        'minecolonies:plate_armor_legs',
        'thermal:diving_leggings',
        'thermal:hazmat_leggings'
    ];

    const boots = [
        'born_in_chaos_v1:dark_metal_armor_boots',
        'celestisynth:solar_crystal_boots',
        'celestisynth:lunar_stone_boots',
        'thermal:beekeeper_boots',
        'psi:psimetal_exosuit_boots',
        'hexerei:witch_boots',
        'ars_technica:technomancer_boots',
        'born_in_chaos_v1:nightmare_mantleofthe_night_boots',
        //'dimdoors:world_thread_boots',
        //'dimdoors:garment_of_reality_boots',
        'create:cardboard_boots',
        'bloodmagic:livingboots',
        'tfmg:steel_boots',
        'born_in_chaos_v1:spiny_shell_armor_boots',
        'minecolonies:plate_armor_boots',
        'thermal:diving_boots',
        'thermal:hazmat_boots'
    ];

    const cultist = [
        'concatenationcore:cultist_armor_helmet',
        'concatenationcore:cultist_armor_chestplate',
        'concatenationcore:cultist_armor_leggings',
        'concatenationcore:cultist_armor_boots'
    ];

    const ice = [
        'concatenationcore:condensed_ice_armor_helmet',
        'concatenationcore:condensed_ice_armor_chestplate',
        'concatenationcore:condensed_ice_armor_leggings',
        'concatenationcore:condensed_ice_armor_boots'
    ];

    helmets.push(cultist[0], ice[0]);
    chestplates.push(cultist[1], ice[1]);
    leggings.push(cultist[2], ice[2]);
    boots.push(cultist[3], ice[3]);

    event.add('elementalcraft:infusable/helmets', helmets);
    event.add('elementalcraft:infusable/chestplates', chestplates);
    event.add('elementalcraft:infusable/leggings', leggings);
    event.add('elementalcraft:infusable/boots', boots);

    event.add('forge:armors', []
        .concat(helmets, chestplates, leggings, boots)
    );

    event.add('elementalcraft:infusable/axe', 'psi:psimetal_axe');
    event.add('forge:tools/axes', 'psi:psimetal_axe');
    event.add('minecraft:axes', 'psi:psimetal_axe');

    event.add('elementalcraft:infusable/pickaxe', 'psi:psimetal_pickaxe');
    event.add('forge:tools/pickaxes', 'psi:psimetal_pickaxe');
    event.add('minecraft:pickaxes', 'psi:psimetal_pickaxe');

    event.add('elementalcraft:infusable/shovel', 'psi:psimetal_shovel');
    event.add('forge:tools/shovels', 'psi:psimetal_shovel');
    event.add('minecraft:shovels', 'psi:psimetal_shovel');

    event.add('elementalcraft:infusable/sword', 'psi:psimetal_sword');
    event.add('elementalcraft:infusable/sword', 'concatenationcore:riparian');
    event.add('elementalcraft:infusable/sword', 'concatenationcore:temblor');
    event.add('forge:tools/swords', 'psi:psimetal_sword');
    event.add('minecraft:swords', 'psi:psimetal_sword');

    add('tarotcards:golden', [
        'asr:golden_giant_sword',
        'mekanismtools:gold_paxel',
        'farmersdelight:golden_knife',
        //'dimdoors:rift_blade',
        'concatenationcore:shrike',
        'concatenationcore:kestrel',
        'concatenationcore:kestrel_r',
        'reliquary:magicbane',
        'asr:gilded_wooden_shield',
        'asr:gilded_stone_shield',
        'asr:gilded_skull_shield',
        'asr:gilded_iron_shield',
        'asr:gilded_netherquartz_shield',
        'asr:gilded_ender_shield',
        'asr:gilded_diamond_shield',
        'minecolonies:assistanthammer_gold',
        'minecraft:netherite_shovel',
        'minecraft:netherite_axe',
        'minecraft:netherite_pickaxe',
        'minecraft:netherite_hoe',
        'minecraft:netherite_sword',
        'minecraft:netherite_helmet',
        'minecraft:netherite_chestplate',
        'minecraft:netherite_leggings',
        'minecraft:netherite_boots',
        'irons_spellbooks:netherite_mage_helmet',
        'irons_spellbooks:netherite_mage_chestplate',
        'irons_spellbooks:netherite_mage_leggings',
        'irons_spellbooks:netherite_mage_boots',
        'create:netherite_diving_helmet',
        'create:netherite_diving_boots',
        'farmersdelight:netherite_knife',
        'mekanismtools:netherite_paxel',
        'ars_nouveau:sorcerer_boots',
        'ars_nouveau:sorcerer_leggings',
        'ars_nouveau:sorcerer_robes',
        'ars_nouveau:sorcerer_hood',
        'reliquary:mercy_cross'
    ]);

    const sublime = [
        'concatenationcore:sublime_gold_pickaxe',
        'concatenationcore:sublime_gold_shovel',
        'concatenationcore:sublime_gold_sword',
        'concatenationcore:sublime_gold_giant_sword',
        'concatenationcore:sublime_gold_hoe',
        'concatenationcore:sublime_gold_axe'
    ];

    add('tarotcards:golden', sublime);
    add('forge:tools', sublime);
    add('forge:tools/gold', sublime);

    const fullSets = [
        'concatenationcore:the_error',
        'concatenationcore:prudence',
        'concatenationcore:full_cups',
        'concatenationcore:full_wands',
        'concatenationcore:full_pentacles',
        'concatenationcore:full_swords',
        'concatenationcore:full_vessels'
    ];
    add('curios:curio', fullSets);
    add('tarotcards:tarot_cards', fullSets);
    add('curios:charm', [
        'concatenationcore:rython',
        'concatenationcore:stalker_ward'
    ]);
    add('curios:spellbook', [
        'concatenationcore:karma_tome',
    ]);

    add('curios:body', [
        'marbledsarsenal:black_plate_carrier_light',
        'marbledsarsenal:black_plate_carrier_heavy'
    ]);

    add('curios:belt', [
        'concatenationcore:gold_card'
    ]);

    add('curios:element_holder', [
        'concatenationcore:platinum_card',
        'concatenationcore:ice_crystal_ball'
    ]);

    add('curios:head', [
        'concatenationcore:crumpled_hat'
    ]);

    add('concatenation:breaking_tools', [
        "minecraft:diamond_pickaxe",
        "minecraft:netherite_pickaxe",
        "projecte:dm_pick",
        "projecte:rm_pick",
        "mekanismtools:refined_glowstone_pickaxe",
        "mekanismtools:refined_obsidian_pickaxe",
        "mekanismtools:steel_pickaxe",
        "psi:psimetal_pickaxe",
        //"create_dd:gilded_rose_pickaxe",
        "bloodmagic:soulpickaxe",
        "tfmg:steel_pickaxe"
    ]);
    add('concatenation:mixing_tools', [
        "minecraft:diamond_shovel",
        "minecraft:netherite_shovel",
        "projecte:dm_shovel",
        "projecte:rm_shovel",
        "mekanismtools:refined_glowstone_shovel",
        "mekanismtools:refined_obsidian_shovel",
        "mekanismtools:steel_shovel",
        "psi:psimetal_shovel",
        //"create_dd:gilded_rose_shovel",
        "bloodmagic:soulshovel",
        "tfmg:steel_shovel"
    ]);
    add('concatenation:sculpting_tools', [
        "minecraft:diamond_axe",
        "minecraft:netherite_axe",
        "projecte:dm_axe",
        "projecte:rm_axe",
        "mekanismtools:refined_glowstone_axe",
        "mekanismtools:refined_obsidian_axe",
        "mekanismtools:steel_axe",
        "psi:psimetal_axe",
        //"create_dd:gilded_rose_axe",
        "bloodmagic:soulaxe",
        "tfmg:steel_axe"
    ]);
    add('concatenation:cutting_tools', [
        "minecraft:diamond_sword",
        "minecraft:netherite_sword",
        "projecte:dm_sword",
        "projecte:rm_sword",
        "mekanismtools:refined_glowstone_sword",
        "mekanismtools:refined_obsidian_sword",
        "mekanismtools:steel_sword",
        "psi:psimetal_sword",
        //"create_dd:gilded_rose_sword",
        "bloodmagic:soulsword",
        "tfmg:steel_sword",
        "ars_nouveau:enchanters_sword"
    ]);

    add('concatenation:magic_lens', [
        "ars_nouveau:void_prism",
        "hexerei:crystal_ball"
    ]);

    const knives = [
        'ae2:certus_quartz_cutting_knife',
        'ae2:nether_quartz_cutting_knife',
        'bloodmagic:sacrificialdagger',
        'concatenationcore:cutting_tool'
    ]
    add('forge:tools', knives);
    add('minecraft:tools', knives);
    add('forge:tools/knives', knives);
    add('farmersdelight:tools/knives', knives);
    add('farmersdelight:straw_harvesters', knives);
    add('concatenation:knives', knives);

    add('concatenation:knives', [
        'farmersdelight:flint_knife',
        'farmersdelight:iron_knife',
        'farmersdelight:golden_knife',
        'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife',
        'refurbished_furniture:knife',
    ]);

    add('concatenation:lightning', [
        'minecraft:lightning_rod',
        'thermal:lightning_charge',
        'ars_nouveau:glyph_lightning',
        'reliquary:rending_gale',
        'minecraft:trident'
    ]);

    // add('forge:dusts', [
    //     'concatenationcore:crushed_iron',
    //     'concatenationcore:crushed_zinc'
    // ]);
    // event.add('forge:dusts/zinc', 'concatenationcore:crushed_zinc');
    // event.add('forge:dusts/iron', 'concatenationcore:crushed_iron');

    add('concatenation:wither_ingredient', [
        'minecraft:nether_star',
        'minecraft:wither_rose'
    ]);

    add('forge:coins', [
        'createdeco:gold_coin',
        'createdeco:netherite_coin',
        'createdeco:brass_coin',
        'createdeco:iron_coin',
        'createdeco:copper_coin',
        'createdeco:industrial_iron_coin',
        'createdeco:zinc_coin'
    ]);

    add('forge:coins/gold', [
        'createdeco:gold_coin'
    ]);

    add('concatenation:assembly_stock', [
        'tfmg:aluminum_ingot',
        'elementalcraft:swift_alloy_ingot',
        'industrialforegoing:plastic',
        'concatenationcore:pyrite'
    ])

    add('concatenation:high_compasses', [
        'minecraft:recovery_compass',
        'irons_spellbooks:wayward_compass',
        'ae2:meteorite_compass'
    ])

    add('concatenation:scrolls', [
        'concatenationcore:occult_calling',
        'elementalcraft:scroll',
        'irons_spellbooks:scroll'
    ])

    add('concatenation:dis_catalyst', [
        'minecraft:ghast_tear',
        'ae2:charged_certus_quartz_crystal',
        'minecraft:heart_of_the_sea'
    ])

    add('concatenation:oreberry_bushes', [
        'oreberriesreplanted:tin_oreberry_bush',
        'oreberriesreplanted:aluminum_oreberry_bush',
        'oreberriesreplanted:nickel_oreberry_bush',
        'oreberriesreplanted:lead_oreberry_bush',
        'oreberriesreplanted:uranium_oreberry_bush',
        'oreberriesreplanted:osmium_oreberry_bush',
        'oreberriesreplanted:zinc_oreberry_bush',
        'oreberriesreplanted:silver_oreberry_bush',
        'oreberriesreplanted:copper_oreberry_bush',
        'oreberriesreplanted:gold_oreberry_bush',
        'oreberriesreplanted:iron_oreberry_bush',
        'oreberriesreplanted:essence_berry_bush'
    ]);

    add('concatenation:oreberry', [
        'oreberriesreplanted:tin_oreberry',
        'oreberriesreplanted:aluminum_oreberry',
        'oreberriesreplanted:nickel_oreberry',
        'oreberriesreplanted:lead_oreberry',
        'oreberriesreplanted:uranium_oreberry',
        'oreberriesreplanted:osmium_oreberry',
        'oreberriesreplanted:zinc_oreberry',
        'oreberriesreplanted:silver_oreberry',
        'oreberriesreplanted:copper_oreberry',
        'oreberriesreplanted:gold_oreberry',
        'oreberriesreplanted:iron_oreberry',
        'oreberriesreplanted:essence_berry'
    ]);

    add('concatenation:perditio_shards', [
        'strangematter:spatial_shard',
        'strangematter:shade_shard',
        'elementalcraft:fine_air_gem',
        'elementalcraft:pristine_air_gem'
    ]);

    add('lychee:fire_immune', [
        'minecraft:glowstone',
        'minecraft:glowstone_dust',
        'minecraft:lava_bucket',
        'minecraft:bucket',
        'elementalcraft:aircrystal'
    ]);

    add('minecraft:flowers', [
        'hexerei:belladonna_flowers',
        'hexerei:belladonna_berries',
        'hexerei:mugwort_leaves',
        'hexerei:sage',
        'hexerei:mandrake_root',
        'hexerei:mugwort_flowers'
    ]);

    add('forge:ingots/pyrite', [
        'concatenationcore:pyrite'
    ]);

    add('perdition:limbo_bush_growable', [
        'elementalcraft:pure_rock'
    ]);

    add('forge:plates', [
        'createdeco:netherite_sheet'
    ]);
    add('forge:plates/netherite', [
        'createdeco:netherite_sheet'
    ]);

    add('theurgy:divination_rod_t4_allowed_blocks', [
        'the_deep_void:onyx_ore',
        'the_deep_void:lavendite_ore',
        'the_deep_void:sulfur_ore',
        'the_deep_void:cinnabar_ore',
        'the_deep_void:grim_soil',
        'the_deep_void:fossilized_flesh',
        'the_deep_void:regurgitated_matter',
        'the_deep_void:bismuth_ore',
        'the_deep_void:voidrium_ore'
    ])

    add('theurgy:divination_rod_t3_allowed_blocks', [
        'the_deep_void:onyx_ore',
        'the_deep_void:lavendite_ore',
        'the_deep_void:sulfur_ore',
        'the_deep_void:cinnabar_ore',
        'the_deep_void:grim_soil',
        'the_deep_void:fossilized_flesh',
        'the_deep_void:regurgitated_matter',
        'the_deep_void:bismuth_ore',
    ])

    add('theurgy:divination_rod_t2_allowed_blocks', [
        'the_deep_void:onyx_ore',
        'the_deep_void:lavendite_ore',
        'the_deep_void:sulfur_ore',
        'the_deep_void:cinnabar_ore',
    ])

    add('theurgy:divination_rod_t1_allowed_blocks', [
        'the_deep_void:onyx_ore',
        'the_deep_void:lavendite_ore',
    ])

    add('concatenation:crafting_station', [
        'craftingstation:crafting_station',
        'tconstruct:crafting_station',
    ])

    add('concatenation:smooth_material', [
        'industrialforegoing:plastic',
        'tfmg:plastic_sheet',
        'perdition:resin',
        'elementalcraft:solar_prism',
        'hexerei:moon_dust',
        'integrateddynamics:crystalized_menril_chunk'
    ])

    add('concatenation:icing_item', [
        'concatenationcore:ice_shard',
        'celestisynth:wintereis_shard',
        'irons_spellbooks:permafrost_shard',
        'thermal:ice_charge'
    ])

    add('concatenation:watering_item', [
        'ars_nouveau:water_essence',
        'elementalcraft:watercrystal',
        'elementalcraft:water_shard',
        'bloodmagic:reagentwater'
    ])

    add('forge:gems/sulfur', [
        'the_deep_void:sulfur'
    ])

    add('forge:gems/cinnabar', [
        'the_deep_void:cinnabar'
    ])

    add('concatenation:isolated_ingot', [
        'concatenationcore:galvanized_iron',
        'concatenationcore:ferrotin_bronze_ingot'
    ])

    add('forge:salt', [
        'refurbished_furniture:sea_salt',
    ])
    add('forge:dusts/salt', [
        'refurbished_furniture:sea_salt',
    ])

    add('concatenation:insight_material', [
        'thermal:sapphire',
        'strangematter:insight_shard'
    ])

    add('concatenation:thermae_input', [
        'createmetallurgy:zinc_dust'
    ])

    add('concatenation:thermae_input/zinc', [
        'createmetallurgy:zinc_dust'
    ])

    add('concatenation:crusher_input', [
        'create:zinc_ingot',
        'thermal:tin_ingot',
        'perdition:compacted_marmor',
        'ae2:certus_quartz_crystal'
    ])

    add('concatenation:crusher_input/zinc', [
        'create:zinc_ingot'
    ])

    add('concatenation:crusher_input/tin', [
        'thermal:tin_ingot'
    ])

    add('forge:glass_blocks', [
        'minecraft:glass'
    ])

    add('forge:dusts/quartz', [
        'ars_technica:quartz_dust'
    ])

    add('concatenation:mob_charm', [
        'reliquary:mob_charm_fragment',
        'reliquary:mob_charm'
    ])

    add('concatenation:knowledge', [
        'spelled:ancient_knowledge_tome',
        'spelled:creative_tome'
    ])

    add('forge:ores', [
        'strangematter:resonite_ore',
        'strangematter:gravitic_shard_ore',
        'strangematter:chrono_shard_ore',
        'strangematter:spatial_shard_ore',
        'strangematter:shade_shard_ore',
        'strangematter:insight_shard_ore',
        'strangematter:energetic_shard_ore',
        'the_deep_void:onyx_ore',
        'the_deep_void:lavendite_ore',
        'the_deep_void:bismuth_ore',
        'the_deep_void:sulfur_ore',
        'the_deep_void:voidrium_ore',
        'the_deep_void:cinnabar_ore'
    ])

    add('forge:coal_coke', [
        'tfmg:coal_coke'
    ])
});