ServerEvents.recipes(event => {

        const remove = [
                'celestisynth:starlit_factory',
                'celestisynth:solar_crystal_helmet',
                'celestisynth:solar_crystal_chestplate',
                'celestisynth:solar_crystal_leggings',
                'celestisynth:solar_crystal_boots',
                'celestisynth:lunar_stone_helmet',
                'celestisynth:lunar_stone_chestplate',
                'celestisynth:lunar_stone_leggings',
                'celestisynth:lunar_stone_boots',
                'tacz:ammo_box',
                'tacz:workbench_a',
                'tacz:workbench_c',
                'tacz:gun_smith_table'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.shaped(
                Item.of('tarotcards:strength'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        B: 'celestisynth:solar_crystal',
                        E: 'elementalcraft:swift_alloy_block',
                        F: 'celestisynth:lunar_scrap',
                        A: 'concatenationcore:glowing_gold_block',
                        C: 'thermal:electrum_block',
                        D: '#concatenation:middle_cards'
                }
        ).keepIngredient('#concatenation:middle_cards')
        event.shaped(
                Item.of('celestisynth:starlit_factory'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        A: 'celestisynth:celestial_netherite_ingot',
                        D: 'tarotcards:strength',
                        C: 'tfmg:aluminum_cable_hub',
                        B: 'ars_nouveau:redstone_relay',
                        F: 'minecraft:respawn_anchor',
                        E: 'minecraft:crying_obsidian'
                }
        )
        event.shaped(
                Item.of('concatenationcore:celestial_calralite'),
                [
                        'ABC',
                        'BD ',
                        '   '
                ],
                {
                        B: 'tconstruct:raw_cobalt',
                        D: 'minecraft:fire_charge',
                        C: 'createmetallurgy:raw_wolframite',
                        A: 'minecraft:diamond_pickaxe'
                }
        ).damageIngredient('minecraft:diamond_pickaxe')
        event.shaped(
                Item.of('concatenationcore:celestial_calralite'),
                [
                        'ABC',
                        'BD ',
                        '   '
                ],
                {
                        B: 'tconstruct:raw_cobalt',
                        C: 'createmetallurgy:raw_wolframite',
                        D: 'elementalcraft:fire_shard',
                        A: 'minecraft:diamond_pickaxe'
                }
        ).damageIngredient('minecraft:diamond_pickaxe')
        event.shaped(
                Item.of('concatenationcore:celestial_calralite'),
                [
                        'ABC',
                        'BD ',
                        '   '
                ],
                {
                        B: 'tconstruct:raw_cobalt',
                        C: 'createmetallurgy:raw_wolframite',
                        D: 'ars_nouveau:fire_essence',
                        A: 'minecraft:diamond_pickaxe'
                }
        ).damageIngredient('minecraft:diamond_pickaxe')
        event.shaped(
                Item.of('tconstruct:soulsteel_ingot'),
                [
                        ' A ',
                        'BCD',
                        ' E '
                ],
                {
                        C: 'concatenationcore:celestial_calralite',
                        B: 'elementalcraft:powerful_water_shard',
                        A: 'elementalcraft:powerful_earth_shard',
                        E: 'elementalcraft:powerful_fire_shard',
                        D: 'elementalcraft:powerful_air_shard'
                }
        )
        event.shaped(
                Item.of('celestisynth:solar_crystal_helmet'),
                [
                        'ABA',
                        'A A',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('celestisynth:solar_crystal_boots'),
                [
                        'A A',
                        'ABA',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('celestisynth:solar_crystal_leggings'),
                [
                        'ABA',
                        'A A',
                        'ACA'
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('celestisynth:solar_crystal_chestplate'),
                [
                        'ABA',
                        'ACA',
                        'AAA'
                ],
                {
                        B: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        C: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')

        event.shaped(
                Item.of('celestisynth:lunar_stone_helmet'),
                [
                        'ABA',
                        'A A',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('celestisynth:lunar_stone_boots'),
                [
                        'A A',
                        'ABA',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('celestisynth:lunar_stone_leggings'),
                [
                        'ABA',
                        'A A',
                        'ACA'
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('celestisynth:lunar_stone_chestplate'),
                [
                        'ABA',
                        'ACA',
                        'AAA'
                ],
                {
                        B: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        C: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('#concatenation:strength')
        event.shaped(
                Item.of('concatenationcore:soleipse'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:blaze_powder',
                        B: 'celestisynth:solar_crystal',
                        C: 'concatenationcore:glowing_gold'
                }
        )
        event.shaped(
                Item.of('concatenationcore:lunepse'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'celestisynth:lunar_scrap',
                        A: 'minecraft:chorus_fruit',
                        C: 'born_in_chaos_v1:dark_metal_nugget'
                }
        )

        // Judgement
        event.shaped(
                Item.of('tarotcards:judgement'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        C: 'tfmg:aluminum_block',
                        E: 'thermal:gunpowder_block',
                        D: 'tarotcards:the_tower',
                        F: 'reliquary:holy_hand_grenade',
                        B: 'tfmg:napalm_bomb',
                        A: 'concatenationcore:glowing_gold_block'
                }
        ).keepIngredient('tarotcards:the_tower')
        event.shaped(
                Item.of('tacz:gun_smith_table'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: 'minecraft:stripped_oak_wood',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'tfmg:cast_iron_block',
                        D: 'tarotcards:judgement'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of('tacz:workbench_c', '{BlockId:"tacz:attachment_workbench"}'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: 'tfmg:lead_glass',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'tfmg:cast_iron_block',
                        D: 'tarotcards:judgement'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of('tacz:workbench_a', '{BlockId:"tacz:ammo_workbench"}'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: 'tacz:ammo_box',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'tfmg:cast_iron_block',
                        D: 'tarotcards:judgement'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of('tacz:ammo_box', '{Level:2}'),
                [
                        'ABA',
                        'A A',
                        'AAA'
                ],
                {
                        A: 'createmetallurgy:steel_ingot',
                        B: 'minecraft:diamond'
                }
        )
        event.shaped(
                Item.of('tacz:ammo_box', '{Level:1}'),
                [
                        'ABA',
                        'A A',
                        'AAA'
                ],
                {
                        B: 'minecraft:gold_ingot',
                        A: 'createmetallurgy:steel_ingot'
                }
        )
        event.shaped(
                Item.of('tacz:ammo_box', '{Level:0}'),
                [
                        'ABA',
                        'A A',
                        'AAA'
                ],
                {
                        B: 'minecraft:iron_ingot',
                        A: 'createmetallurgy:steel_ingot'
                }
        )
});
