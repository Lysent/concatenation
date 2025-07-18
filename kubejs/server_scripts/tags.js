ServerEvents.tags('item', event => {
    event.add('concatenation:tech_cards', 'tarotcards:the_hierophant');
    event.add('concatenation:tech_cards', 'tarotcards:the_hermit');
    event.add('concatenation:magic_cards', 'tarotcards:temperance');
    event.add('concatenation:magic_cards', 'tarotcards:the_magician');
    event.add('concatenation:middle_cards', 'tarotcards:the_hermit');
    event.add('concatenation:middle_cards', 'tarotcards:the_magician');

    event.add('concatenation:hammers', 'concatenationcore:hammer');
    event.add('concatenation:hammers', 'concatenationcore:ironclad_hammer');

    event.add('concatenation:lower_circuits', 'concatenationcore:circuit');
    event.add('concatenation:lower_circuits', 'concatenationcore:altcircuit');
    event.add('forge:circuits', 'concatenationcore:circuit');
    event.add('forge:circuits', 'concatenationcore:altcircuit');

    event.add('concatenation:tanks', 'littlelogistics:fluid_barge');
    event.add('concatenation:tanks', 'littlelogistics:fluid_car');
    event.add('concatenation:tanks', 'mekanism:basic_fluid_tank');
    event.add('concatenation:tanks', 'create:fluid_tank');
    event.add('concatenation:tanks', 'tconstruct:seared_ingot_tank');
    event.add('concatenation:tanks', 'tconstruct:seared_fuel_tank');

    event.add('forge:consumables/experience_3', 'concatenationcore:experience_orb');
    event.add('minecraft:swords', 'asr:diamond_giant_sword');
    event.add('minecraft:swords', 'asr:golden_giant_sword');
    event.add('minecraft:swords', 'asr:iron_giant_sword');
    event.add('minecraft:swords', 'asr:wooden_giant_sword');
    event.add('minecraft:swords', 'asr:stone_giant_sword');
    event.add('minecraft:swords', 'asr:ender_giant_sword');

    event.add('elementalcraft:infusable/helmets', 'concatenationcore:cultist_armor_helmet');
    event.add('elementalcraft:infusable/chestplates', 'concatenationcore:cultist_armor_chestplate');
    event.add('elementalcraft:infusable/leggings', 'concatenationcore:cultist_armor_leggings');
    event.add('elementalcraft:infusable/boots', 'concatenationcore:cultist_armor_boots');
    event.add('forge:armors', 'concatenationcore:cultist_armor_helmet');
    event.add('forge:armors', 'concatenationcore:cultist_armor_chestplate');
    event.add('forge:armors', 'concatenationcore:cultist_armor_leggings');
    event.add('forge:armors', 'concatenationcore:cultist_armor_boots');

    event.add('elementalcraft:infusable/helmets', 'concatenationcore:condensed_ice_armor_helmet');
    event.add('elementalcraft:infusable/chestplates', 'concatenationcore:condensed_ice_armor_chestplate');
    event.add('elementalcraft:infusable/leggings', 'concatenationcore:condensed_ice_armor_leggings');
    event.add('elementalcraft:infusable/boots', 'concatenationcore:condensed_ice_armor_boots');
    event.add('forge:armors', 'concatenationcore:condensed_ice_armor_helmet');
    event.add('forge:armors', 'concatenationcore:condensed_ice_armor_chestplate');
    event.add('forge:armors', 'concatenationcore:condensed_ice_armor_leggings');
    event.add('forge:armors', 'concatenationcore:condensed_ice_armor_boots');

    event.add('tarotcards:golden', 'asr:golden_giant_sword');
    event.add('tarotcards:golden', 'mekanismtools:gold_paxel');
    event.add('tarotcards:golden', 'farmersdelight:golden_knife');
    event.add('tarotcards:golden', 'dimdoors:rift_blade');
    event.add('tarotcards:golden', 'concatenationcore:shrike');
    event.add('tarotcards:golden', 'concatenationcore:kestrel');
    event.add('tarotcards:golden', 'concatenationcore:kestrel_r');

    [
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
    ].forEach(pick => event.add("concatenation:breaking_tools", pick));
    [
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
    ].forEach(shovel => event.add("concatenation:mixing_tools", shovel));
    [
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
    ].forEach(axe => event.add("concatenation:sculpting_tools", axe));
    [
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
        "tfmg:steel_sword"
    ].forEach(sword => event.add("concatenation:cutting_tools", sword));

    ([
        "ars_nouveau:void_prism",
        "hexerei:crystal_ball"
    ]).forEach(lens => event.add("concatenation:magic_lens", lens));
})