//priority: 200
ServerEvents.recipes(event => {
        const remove = [
                'hpm:swashbuckleritem',
                'littlelogistics:seater_car',
                'hpm:smallhull',
                'littlelogistics:steam_locomotive',
                'littlelogistics:tug',
                'littlelogistics:energy_locomotive',
                'littlelogistics:energy_tug',
                'littlelogistics:fishing_barge',
                'littlelogistics:fluid_barge',
                'littlelogistics:seater_barge',
                'littlelogistics:vacuum_barge',
                'littlecontraptions:contraption_barge',
                'littlelogistics:barge',
                'littlelogistics:barrel_barge',
                'immersive_aircraft:engine',
                'prettypipes:pipe',
                'ppfluids:fluid_pipe',
                'hrbsdrills:engine',
                'hrbsdrills:drillhead',
                'hrbsdrills:drill',
                'thesubmarinemod:acero_antioxidante',
                'thesubmarinemod:silvato_submarino_incompleto',
                'thesubmarinemod:aceleradores_submarino',
                'thesubmarinemod:alas_submarino',
                'cyberspace:terminal',
                'cyberspace:quantum_core',
                'cyberspace:carbon_fiber_mesh',
                'hpm:largehull'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })


        event.shaped(
                Item.of('concatenationcore:gigantic_sail'),
                [
                        ' A ',
                        'BBB',
                        'CCC'
                ],
                {
                        C: 'concatenationcore:compacted_wood',
                        B: 'hpm:largemast',
                        A: 'minecraft:red_banner'
                }
        )
        event.shapeless(
                Item.of('hpm:swashbuckleritem'),
                [
                        'hpm:smallhull',
                        'tarotcards:the_hierophant',
                        'hpm:small_mast'
                ]
        ).keepIngredient('tarotcards:the_hierophant')
        event.shaped(
                Item.of('concatenationcore:steel_hull'),
                [
                        'AAA',
                        'BCB',
                        'BBB'
                ],
                {
                        C: 'hpm:largehull',
                        B: 'concatenationcore:compacted_steel',
                        A: 'concatenationcore:deck'
                }
        )
        event.shaped(
                Item.of('hpm:corvette_steamship_item'),
                [
                        'AAA',
                        'BCB',
                        'DDD'
                ],
                {
                        B: 'concatenationcore:compacted_stripped_wood',
                        D: 'concatenationcore:steel_hull',
                        A: 'concatenationcore:gigantic_sail',
                        C: 'concatenationcore:boiler'
                }
        )
        event.shaped(
                Item.of('concatenationcore:compacted_stripped_wood'),
                [
                        'ABA',
                        'BBB',
                        'ABA'
                ],
                {
                        A: '#minecraft:logs',
                        B: '#forge:stripped_logs'
                }
        )
        event.shapeless(
                Item.of('concatenationcore:compacted_steel'),
                [
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel',
                        '#forge:storage_blocks/steel'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:compacted_wood'),
                [
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs',
                        '#minecraft:logs'
                ]
        )
        event.shaped(
                Item.of('concatenationcore:deck_section'),
                [
                        'AAA',
                        'BCB',
                        'BBB'
                ],
                {
                        A: '#forge:fences/wooden',
                        C: 'concatenationcore:compacted_wood',
                        B: '#forge:stripped_logs'
                }
        )
        event.shaped(
                Item.of('littlelogistics:seater_car'),
                [
                        '   ',
                        'A A',
                        'BBB'
                ],
                {
                        A: '#forge:ingots/tin',
                        B: 'minecraft:iron_ingot'
                }
        )
        event.shaped(
                Item.of('hpm:smallhull'),
                [
                        '   ',
                        'ABA',
                        'AAA'
                ],
                {
                        B: 'minecraft:copper_ingot',
                        A: '#forge:stripped_logs'
                }
        )
        event.shaped(
                Item.of('littlelogistics:steam_locomotive'),
                [
                        ' A ',
                        'BCB',
                        'ADA'
                ],
                {
                        A: '#forge:ingots/tin',
                        D: 'littlelogistics:seater_car',
                        B: 'minecraft:piston',
                        C: 'minecraft:blast_furnace'
                }
        )
        event.shaped(
                Item.of('littlelogistics:tug', 4),
                [
                        ' A ',
                        'BCB',
                        'ADA'
                ],
                {
                        D: 'hpm:smallhull',
                        C: 'concatenationcore:boiler',
                        A: 'minecraft:iron_ingot',
                        B: 'minecraft:piston'
                }
        )
        event.shaped(
                Item.of('tarotcards:the_chariot'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        E: 'littlelogistics:steam_locomotive',
                        B: 'thermal:energy_duct',
                        C: 'littlelogistics:tug',
                        F: 'concatenationcore:circuit',
                        D: '#concatenation:tech_cards',
                        A: 'concatenationcore:glowing_gold_block'
                }
        ).keepIngredient('#concatenation:tech_cards')
        event.shaped(
                Item.of('littlelogistics:energy_tug'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        E: 'littlelogistics:tug',
                        C: 'littlelogistics:vessel_charger',
                        D: 'createmetallurgy:steel_block',
                        A: 'tarotcards:the_chariot',
                        B: 'minecraft:piston'
                }
        ).keepIngredient('tarotcards:the_chariot')
        event.shaped(
                Item.of('littlelogistics:energy_locomotive'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        E: 'littlelogistics:steam_locomotive',
                        C: 'littlelogistics:vessel_charger',
                        D: 'createmetallurgy:steel_block',
                        A: 'tarotcards:the_chariot',
                        B: 'minecraft:piston'
                }
        ).keepIngredient('tarotcards:the_chariot')
        event.shaped(
                Item.of('immersive_aircraft:engine'),
                [
                        'ABA',
                        'CDC',
                        ' E '
                ],
                {
                        C: 'create:sturdy_sheet',
                        B: 'create:precision_mechanism',
                        D: 'immersive_aircraft:boiler',
                        A: 'createtaczauto:hardened_brass_sheet',
                        E: 'tarotcards:the_chariot'
                }
        ).keepIngredient('tarotcards:the_chariot')
        event.shaped(
                Item.of('littlelogistics:fishing_barge'),
                [
                        ' A ',
                        'ABA',
                        'BCB'
                ],
                {
                        C: 'hpm:smallhull',
                        B: 'minecraft:iron_ingot',
                        A: 'minecraft:fishing_rod'
                }
        )
        event.shaped(
                Item.of('littlelogistics:fluid_barge'),
                [
                        'A A',
                        ' A ',
                        'BCB'
                ],
                {
                        C: 'hpm:smallhull',
                        A: 'minecraft:glass',
                        B: 'minecraft:iron_ingot'
                }
        )
        event.shaped(
                Item.of('littlelogistics:seater_barge'),
                [
                        '   ',
                        ' A ',
                        'BCB'
                ],
                {
                        C: 'hpm:smallhull',
                        B: 'minecraft:iron_ingot',
                        A: 'create:red_seat'
                }
        )
        event.shaped(
                Item.of('littlelogistics:vacuum_barge'),
                [
                        '   ',
                        'ABA',
                        'ACA'
                ],
                {
                        C: 'hpm:smallhull',
                        B: 'littlelogistics:rapid_hopper',
                        A: 'minecraft:iron_ingot'
                }
        )
        // event.shaped(
        //         Item.of('littlecontraptions:contraption_barge'),
        //         [
        //                 '   ',
        //                 'ABA',
        //                 'CDC'
        //         ],
        //         {
        //                 D: 'hpm:smallhull',
        //                 A: 'create:brass_ingot',
        //                 C: 'minecraft:iron_ingot',
        //                 B: 'create:andesite_casing'
        //         }
        // )
        event.shaped(
                Item.of('littlelogistics:barge'),
                [
                        '   ',
                        'ABA',
                        'CDC'
                ],
                {
                        D: 'hpm:smallhull',
                        C: 'minecraft:iron_ingot',
                        B: 'minecraft:chest',
                        A: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('littlelogistics:barrel_barge'),
                [
                        '   ',
                        'ABA',
                        'CDC'
                ],
                {
                        D: 'hpm:smallhull',
                        C: 'minecraft:iron_ingot',
                        B: 'minecraft:barrel',
                        A: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('littlelogistics:tug'),
                [
                        'ABA',
                        'CBC',
                        'DED'
                ],
                {
                        E: 'hpm:smallhull',
                        A: 'minecraft:iron_ingot',
                        D: 'minecraft:iron_block',
                        B: 'minecraft:blast_furnace',
                        C: 'minecraft:piston'
                }
        )
        event.shaped(
                Item.of('concatenationcore:pipe_base', 6),
                [
                        'ABB',
                        'BCB',
                        'BB '
                ],
                {
                        C: '#concatenation:isolated_ingot',
                        B: 'minecraft:copper_ingot',
                        A: 'tarotcards:the_chariot'
                }
        ).keepIngredient('tarotcards:the_chariot')
        event.shaped(
                Item.of('prettypipes:pipe', 12),
                [
                        'ABC',
                        'BDB',
                        'CBA'
                ],
                {
                        B: 'minecraft:glass',
                        C: 'minecraft:iron_ingot',
                        A: 'minecraft:redstone',
                        D: 'concatenationcore:pipe_base'
                }
        )
        event.shaped(
                Item.of('prettypipes:pipe', 12),
                [
                        'ABC',
                        'BDB',
                        'CBA'
                ],
                {
                        B: 'minecraft:glass',
                        A: 'minecraft:iron_ingot',
                        C: 'minecraft:redstone',
                        D: 'concatenationcore:pipe_base'
                }
        )
        event.shaped(
                Item.of('ppfluids:fluid_pipe', 12),
                [
                        ' AB',
                        'ACA',
                        'BA '
                ],
                {
                        A: 'minecraft:glass',
                        C: 'concatenationcore:stickyredstone',
                        B: 'concatenationcore:pipe_base'
                }
        )
        event.shaped(
                Item.of('hrbsdrills:engine'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        C: 'thermal:electrum_ingot',
                        B: 'concatenationcore:boiler',
                        E: 'concatenationcore:coal_generator',
                        A: 'create:iron_sheet',
                        D: 'minecraft:gold_block'
                }
        )
        event.shaped(
                Item.of('hrbsdrills:engine'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        C: 'thermal:electrum_ingot',
                        B: 'immersive_aircraft:engine',
                        A: 'create:iron_sheet',
                        E: 'tfmg:regular_engine',
                        D: 'minecraft:gold_block'
                }
        )
        event.shaped(
                Item.of('hrbsdrills:drillhead'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:diamond_drill_head',
                        B: 'thermal:diamond_gear',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('hrbsdrills:drill'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        C: 'minecraft:iron_block',
                        B: 'hrbsdrills:drillhead',
                        D: 'hrbsdrills:engine',
                        E: 'littlelogistics:energy_locomotive',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thesubmarinemod:acero_antioxidante', 2),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: '#concatenation:isolated_ingot',
                        A: 'minecraft:gold_nugget'
                }
        )
        event.shaped(
                Item.of('thesubmarinemod:silvato_submarino_incompleto'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: 'minecraft:glass',
                        C: 'concatenationcore:boiler',
                        D: 'littlelogistics:energy_tug',
                        B: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thesubmarinemod:aceleradores_submarino'),
                [
                        'ABA',
                        'CBC',
                        'C C'
                ],
                {
                        C: 'thesubmarinemod:acero_antioxidante',
                        B: 'minecraft:iron_block',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thesubmarinemod:alas_submarino'),
                [
                        'ABC',
                        ' B ',
                        'ABC'
                ],
                {
                        A: 'concatenationcore:pump_rotor',
                        B: 'thesubmarinemod:acero_antioxidante',
                        C: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thesubmarinemod:alas_submarino'),
                [
                        'ABC',
                        ' B ',
                        'ABC'
                ],
                {
                        B: 'thesubmarinemod:acero_antioxidante',
                        A: 'create:propeller',
                        C: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('cyberspace:terminal'),
                [
                        'ABA',
                        'CDC',
                        'AFA'
                ],
                {
                        C: 'concatenationcore:stickyredstone',
                        B: 'perdition:dis',
                        F: 'cyberspace:quantum_core',
                        A: 'cyberspace:carbon_fiber_mesh',
                        D: 'minecraft:black_stained_glass_pane'
                }
        )
        event.shaped(
                Item.of('cyberspace:quantum_core'),
                [
                        'ADA',
                        'CEC',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:circuit',
                        A: 'cyberspace:carbon_fiber_mesh',
                        C: 'mekanism:ingot_uranium',
                        D: 'thermal:rf_coil',
                        E: 'tarotcards:the_chariot'
                }
        ).keepIngredient('tarotcards:the_chariot')
        event.shaped(
                Item.of('cyberspace:carbon_fiber_mesh'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        B: 'thermal:lead_gear',
                        A: 'cyberspace:carbon_fiber'
                }
        )
        event.shaped(
                Item.of('hpm:largehull'),
                [
                        ' AB',
                        'CDC',
                        'CCC'
                ],
                {
                        D: 'hpm:smallhull',
                        C: '#minecraft:logs',
                        A: 'minecraft:iron_block',
                        B: '#concatenation:swashbuckler_cards'
                }
        ).keepIngredient('#concatenation:swashbuckler_cards')
});
