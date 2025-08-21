ServerEvents.tags('item', event => {
    const add = (tag, items) => items.forEach(item => event.add(tag, item));

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

    add('concatenation:hammers', [
        'concatenationcore:hammer',
        'concatenationcore:ironclad_hammer'
    ]);

    const baseCircuits = [
        'concatenationcore:circuit',
        'concatenationcore:altcircuit'
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
    event.add('thermal:crafting/dies', 'concatenationcore:copper_lead_coil');
    event.add('forge:consumables/experience_3', 'concatenationcore:experience_orb');

    add('minecraft:swords', [
        'asr:diamond_giant_sword',
        'asr:golden_giant_sword',
        'asr:iron_giant_sword',
        'asr:wooden_giant_sword',
        'asr:stone_giant_sword',
        'asr:ender_giant_sword'
    ]);

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
    add('elementalcraft:infusable/helmets', [
        cultist[0], ice[0]
    ]);
    add('elementalcraft:infusable/chestplates', [
        cultist[1], ice[1]
    ]);
    add('elementalcraft:infusable/leggings', [
        cultist[2], ice[2]
    ]);
    add('elementalcraft:infusable/boots', [
        cultist[3], ice[3]
    ]);
    add('forge:armors', cultist.concat(ice));

    add('tarotcards:golden', [
        'asr:golden_giant_sword',
        'mekanismtools:gold_paxel',
        'farmersdelight:golden_knife',
        'dimdoors:rift_blade',
        'concatenationcore:shrike',
        'concatenationcore:kestrel',
        'concatenationcore:kestrel_r',
        'reliquary:magicbane'
    ]);

    const fullSets = [
        'concatenationcore:the_error',
        'concatenationcore:full_cups',
        'concatenationcore:full_wands',
        'concatenationcore:full_pentacles',
        'concatenationcore:full_swords'
    ];
    add('curios:curio', fullSets);
    add('tarotcards:tarot_cards', fullSets);

    add('curios:body', [
        'marbledsarsenal:black_plate_carrier_light',
        'marbledsarsenal:black_plate_carrier_heavy'
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
        "create_dd:gilded_rose_pickaxe",
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
        "create_dd:gilded_rose_shovel",
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
        "create_dd:gilded_rose_axe",
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
        "create_dd:gilded_rose_sword",
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
});