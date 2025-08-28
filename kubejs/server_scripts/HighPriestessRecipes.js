ServerEvents.recipes(event => {
        const remove = [
                'thermal:dynamo_stirling',
                'thermal:dynamo_numismatic',
                'thermal:dynamo_compression',
                'thermal:dynamo_gourmand',
                'thermal:dynamo_disenchantment',
                'thermal:dynamo_lapidary',
                'thermal:dynamo_magmatic',
                'thermal:machine_pulverizer',
                'industrialforegoing:machine_frame_pity',
                'rftoolspower:cell1',
                'rftoolspower:power_core1',
                'thermal:energy_cell',
                'rftoolspower:endergenic',
                'rftoolspower:coalgenerator',
                'rftoolspower:blazing_generator',
                'industrialforegoing:machine_frame_simple',
                'thermal:signalum_dust',
                'integrateddynamics:energy_battery',
                'integrateddynamics:coal_generator',
                'integrateddynamics:squeezer',
                'integrateddynamics:drying_basin',
                'integrateddynamics:mechanical_squeezer',
                'integrateddynamics:mechanical_drying_basin',
                'integrateddynamics:cable',
                'integratedtunnels:part_interface_energy',
                'integrateddynamics:variable',
                'mcore:steel_axe',
                'mcore:steel_pickaxe',
                'mcore:steel_sword',
                'mcore:steel_shovel',
                'mcore:steel_hoe',
                'mcore:steel_scrap',
                'mcore:steel_sheet',
                'mcore:titanium_sheet',
                'marbledsarsenal:black_plate_carrier_light',
                'marbledsarsenal:olive_plate_carrier_light',
                'marbledsarsenal:black_plate_carrier_heavy',
                'marbledsarsenal:olive_plate_carrier_heavy',
                'simplyjetpacks:jetpack_potato',
                'simplyjetpacks:jetpack_vanilla1',
                'simplyjetpacks:jetpack_te1',
                'mekanism:metallurgic_infuser',
                'mekanism:steel_casing',
                'rftoolsbase:machine_frame',
                'integrateddynamics:part_display_panel',
                'industrialforegoing:machine_frame_advanced',
                'mekanism:digital_miner',
                'industrialforegoing:infinity_charger',
                'mekanism:basic_universal_cable',
                'mekanism:advanced_universal_cable',
                'mekanism:energized_smelter',
                'rftoolsbuilder:shape_card_quarry',
                'thermal:upgrade_augment_1'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        const replaceCasing = [
                'thermal:machine_pyrolyzer',
                'thermal:machine_press',
                'thermal:machine_smelter',
                'thermal:machine_furnace',
                'thermal:machine_sawmill'
        ];

        event.replaceInput(
                { input: 'industrialforegoing:machine_frame_pity' },
                'industrialforegoing:machine_frame_pity',
                'thermal:machine_frame'
        );
        event.replaceInput(
                { input: 'industrialforegoing:machine_frame_simple' },
                'industrialforegoing:machine_frame_simple',
                'thermal:machine_frame'
        );
        event.replaceInput(
                { input: 'mekanism:steel_casing' },
                'mekanism:steel_casing',
                'industrialforegoing:machine_frame_advanced'
        );
        event.replaceInput(
                { input: 'rftoolsutility:crafter1' },
                'rftoolsutility:crafter1',
                'thermal:machine_crafter'
        );
        event.replaceOutput(
                { output: 'mekanism:digital_miner' },
                'mekanism:steel_casing',
                'thermal:laser_diode'
        );
        event.replaceInput(
                { mod: 'mekanism' },
                'minecraft:iron_ingot',
                'mekanism:ingot_osmium'
        );
        event.replaceInput(
                { output: 'rftoolsstorage:modular_storage' },
                'rftoolsbase:machine_frame',
                '#concatenation:high_priestess_casing'
        );
        event.replaceInput(
                { output: 'rftoolsstorage:storage_scanner' },
                'rftoolsbase:machine_frame',
                '#concatenation:high_priestess_casing'
        );
        event.replaceInput(
                { output: 'rftoolsutility:crafter1' },
                'rftoolsbase:machine_frame',
                '#concatenation:high_priestess_casing'
        );

        replaceCasing.forEach(machine => {
                event.replaceInput(
                        { output: machine },
                        'thermal:machine_frame',
                        '#concatenation:high_priestess_casing'
                );
        });

        event.replaceInput(
                { mod: 'marbledsarsenal' },
                'minecraft:glass_pane',
                'thermal:obsidian_glass'
        );
        event.replaceInput(
                { mod: 'marbledsarsenal' },
                'mcore:titanium_ingot',
                'mcore:titanium_sheet'
        );
        event.replaceInput(
                { mod: 'mcore' },
                'mcore:titanium_ingot',
                'mcore:titanium_sheet'
        );
        event.replaceInput(
                { mod: 'integrateddynamics' },
                'minecraft:redstone',
                'concatenationcore:stickyredstone'
        );
        event.replaceInput(
                { mod: 'mekanism' },
                'minecraft:redstone',
                'concatenationcore:stickyredstone'
        );

        event.remove({ output: 'thermal:lumium_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:enderium_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:lumium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:enderium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:lumium_ingot', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:signalum_ingot', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:enderium_ingot', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'mekanism:ingot_osmium', type: 'minecraft:smelting' })
        event.remove({ output: 'mekanism:ingot_osmium', type: 'minecraft:blasting' })

        event.shaped(
                Item.of('tarotcards:the_high_priestess'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: '#concatenation:tech_cards',
                        A: 'concatenationcore:gold_paper',
                        B: '#concatenation:high_priestess_casing',
                        C: 'thermal:steel_dust',
                        E: 'thermal:diamond_dust'
                }
        ).keepIngredient('#concatenation:tech_cards')
        event.shaped(
                Item.of('thermal:dynamo_stirling'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'thermal:iron_gear',
                        D: 'thermal:nickel_ingot',
                        C: '#concatenation:high_priestess_casing',
                        A: 'minecraft:blast_furnace',
                        E: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('thermal:dynamo_gourmand'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'thermal:iron_gear',
                        C: 'thermal:dynamo_stirling',
                        D: 'thermal:tin_ingot',
                        E: 'minecraft:smoker',
                        A: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('thermal:dynamo_disenchantment'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        C: 'thermal:dynamo_stirling',
                        B: 'thermal:lapis_gear',
                        E: 'minecraft:obsidian',
                        D: 'minecraft:experience_bottle',
                        A: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('thermal:dynamo_lapidary'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        C: 'thermal:dynamo_stirling',
                        D: 'minecraft:emerald',
                        B: 'thermal:emerald_gear',
                        E: 'minecraft:grindstone',
                        A: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('thermal:dynamo_magmatic'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        C: 'thermal:dynamo_stirling',
                        D: 'thermal:obsidian_glass',
                        B: 'thermal:bronze_gear',
                        E: 'create:fluid_tank',
                        A: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('thermal:dynamo_compression'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        C: 'thermal:dynamo_stirling',
                        D: 'thermal:obsidian_glass',
                        B: 'thermal:invar_gear',
                        E: '#concatenation:tanks',
                        A: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('thermal:machine_pulverizer'),
                [
                        ' A ',
                        'BCB',
                        'DED'
                ],
                {
                        D: 'thermal:steel_gear',
                        B: 'minecraft:flint',
                        E: '#concatenation:higher_circuits',
                        C: '#concatenation:high_priestess_casing',
                        A: 'minecraft:piston'
                }
        )
        // event.shaped(
        //         Item.of('concatenationcore:signalum_coil'),
        //         [
        //                 '  A',
        //                 ' B ',
        //                 'A  '
        //         ],
        //         {
        //                 A: 'thermal:signalum_ingot',
        //                 B: 'concatenationcore:copper_lead_coil'
        //         }
        // )
        event.shaped(
                Item.of('concatenationcore:copper_lead_coil'),
                [
                        ' AB',
                        'ACA',
                        'BA '
                ],
                {
                        C: 'minecraft:redstone',
                        A: 'minecraft:copper_ingot',
                        B: 'thermal:lead_ingot'
                }
        )
        event.shaped(
                Item.of('thermal:machine_frame'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'thermal:lumium_gear',
                        C: 'thermal:signalum_ingot',
                        A: 'thermal:steel_plate',
                        E: 'concatenationcore:signalum_coil',
                        B: '#concatenation:higher_circuits'
                }
        )
        event.shaped(
                Item.of('thermal:upgrade_augment_1'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: 'thermal:invar_plate',
                        B: 'minecraft:glass',
                        C: '#concatenation:higher_circuits',
                        D: 'thermal:gold_gear'
                }
        )
        event.shaped(
                Item.of('rftoolspower:cell1'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: '#concatenation:high_priestess_casing',
                        A: 'thermal:rf_coil',
                        B: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('rftoolspower:power_core1'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'minecraft:redstone',
                        C: 'minecraft:diamond',
                        A: 'thermal:lead_ingot'
                }
        )
        event.shaped(
                Item.of('rftoolspower:coalgenerator'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        B: 'thermal:dynamo_stirling',
                        C: 'thermal:lumium_gear',
                        D: 'thermal:signalum_ingot',
                        A: 'createmetallurgy:steel_ingot',
                        E: 'industrialforegoing:machine_frame_advanced'
                }
        )
        event.shaped(
                Item.of('rftoolspower:blazing_generator'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        B: 'thermal:dynamo_stirling',
                        C: 'thermal:lumium_gear',
                        A: 'createmetallurgy:steel_ingot',
                        D: 'concatenationcore:acclimated_shard',
                        E: 'industrialforegoing:machine_frame_advanced'
                }
        )
        event.shaped(
                Item.of('rftoolspower:endergenic'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'thermal:lumium_gear',
                        C: 'concatenationcore:acclimated_shard',
                        A: 'thermal:enderium_ingot'
                }
        )
        event.shaped(
                Item.of('integrateddynamics:squeezer'),
                [
                        'ABA',
                        'CDC',
                        'CEC'
                ],
                {
                        B: 'createmetallurgy:steel_block',
                        C: 'createmetallurgy:steel_ingot',
                        E: 'industrialforegoing:machine_frame_simple',
                        D: 'concatenationcore:full_cups',
                        A: 'minecraft:piston'
                }
        ).keepIngredient('concatenationcore:full_cups')
        event.shaped(
                Item.of('integrateddynamics:drying_basin'),
                [
                        'ABA',
                        'C C',
                        'ACA'
                ],
                {
                        A: 'minecraft:oak_log',
                        C: 'createmetallurgy:steel_ingot',
                        B: 'minecraft:black_dye'
                }
        )
        event.shaped(
                Item.of('integrateddynamics:mechanical_drying_basin'),
                [
                        ' A ',
                        ' B ',
                        ' C '
                ],
                {
                        B: 'integrateddynamics:drying_basin',
                        C: 'tconstruct:hepatizon_ingot',
                        A: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('integrateddynamics:mechanical_squeezer'),
                [
                        ' A ',
                        ' B ',
                        ' C '
                ],
                {
                        B: 'integrateddynamics:squeezer',
                        C: 'tconstruct:hepatizon_ingot',
                        A: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('integrateddynamics:cable', 6),
                [
                        'ABA',
                        'ACA',
                        'ABA'
                ],
                {
                        C: 'thermal:energy_duct',
                        B: 'createmetallurgy:steel_ingot',
                        A: 'integrateddynamics:crystalized_menril_chunk'
                }
        )
        event.shaped(
                Item.of('integratedtunnels:part_interface_energy', 8),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'integrateddynamics:crystalized_menril_chunk',
                        B: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('integrateddynamics:variable', 64),
                [
                        'ABA',
                        'ACA',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:full_cups',
                        A: 'integrateddynamics:crystalized_menril_chunk',
                        B: 'minecraft:paper'
                }
        ).keepIngredient('concatenationcore:full_cups')
        event.shaped(
                Item.of('simplyjetpacks:jetpack_vanilla1'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        C: 'minecraft:iron_ingot',
                        B: '#concatenation:higher_circuits',
                        D: 'simplyjetpacks:leather_strap',
                        A: 'thermal:steel_plate',
                        E: 'simplyjetpacks:thruster_vanilla1',
                        F: 'tarotcards:the_high_priestess'
                }
        ).keepIngredient('tarotcards:the_high_priestess')
        event.shaped(
                Item.of('simplyjetpacks:jetpack_te1'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        E: 'simplyjetpacks:thruster_te1',
                        B: '#concatenation:higher_circuits',
                        D: 'simplyjetpacks:leather_strap',
                        A: 'thermal:steel_plate',
                        C: 'thermal:lead_ingot',
                        F: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('mekanism:metallurgic_infuser'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'createmetallurgy:steel_block',
                        D: 'rftoolsbase:infused_diamond',
                        B: '#concatenation:higher_circuits',
                        C: 'mekanism:ingot_osmium',
                        E: 'mekanism:steel_casing'
                }
        )
        event.shaped(
                Item.of('mekanism:steel_casing'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'concatenationcore:compacted_steel',
                        E: 'concatenationcore:full_pentacles',
                        A: 'mekanism:ingot_osmium',
                        B: 'industrialforegoing:machine_frame_advanced',
                        C: 'thermal:steel_plate'
                }
        ).keepIngredient('concatenationcore:full_pentacles')
        event.shaped(
                Item.of('solarflux:sp_3', 2),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'createmetallurgy:steel_ingot',
                        E: '#concatenation:higher_circuits',
                        C: 'thermal:signalum_ingot',
                        A: 'solarflux:photovoltaic_cell_1',
                        D: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_4', 4),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'createmetallurgy:steel_ingot',
                        E: '#concatenation:higher_circuits',
                        C: 'thermal:lumium_ingot',
                        A: 'solarflux:photovoltaic_cell_2',
                        D: 'solarflux:sp_3'
                }
        )
        event.shaped(
                Item.of('concatenationcore:primed_calculation_processor'),
                [
                        'AB ',
                        ' C ',
                        '   '
                ],
                {
                        C: 'mekanism:basic_control_circuit',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'mekanism:ingot_osmium',
                }
        )
        event.shaped(
                Item.of('rftoolsbase:machine_frame'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'tarotcards:justice',
                        C: 'create:shadow_steel',
                        E: 'thermal:energy_cell',
                        B: 'mekanism:ultimate_control_circuit',
                        A: 'concatenationcore:daladite'
                }
        ).keepIngredient('tarotcards:justice')
        event.shaped(
                Item.of('integrateddynamics:part_display_panel'),
                [
                        ' A ',
                        'BCB',
                        ' D '
                ],
                {
                        B: 'integrateddynamics:part_static_light_panel',
                        A: 'integrateddynamics:variable_transformer_output',
                        D: 'concatenationcore:primed_calculation_processor',
                        C: 'integrateddynamics:menril_berries'
                }
        )
        event.shaped(
                Item.of('thermal:charge_bench'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        D: 'thermal:tinker_bench',
                        E: 'thermal:invar_ingot',
                        F: 'thermal:energy_cell',
                        B: 'thermal:upgrade_augment_2',
                        A: 'thermal:lumium_ingot',
                        C: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:laser_diode'),
                [
                        'ABA',
                        'CDE',
                        'FGF'
                ],
                {
                        E: 'industrialforegoing:fluid_laser_base',
                        D: 'industrialforegoing:ore_laser_base',
                        G: 'concatenationcore:compacted_steel',
                        B: 'concatenationcore:stickyredstone',
                        F: 'thermal:rf_coil_augment',
                        C: 'industrialforegoing:laser_drill',
                        A: 'thermal:diamond_gear'
                }
        )
        event.shaped(
                Item.of('mekanism:digital_miner'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        A: 'mekanism:alloy_atomic',
                        C: 'mekanism:logistical_sorter',
                        F: 'thermal:laser_diode',
                        D: 'mekanism:robit',
                        E: 'mekanism:teleportation_core',
                        B: 'mekanism:elite_control_circuit'
                }
        )
        event.shaped(
                Item.of('industrialforegoing:infinity_charger'),
                [
                        'AAA',
                        'BCB',
                        'DDD'
                ],
                {
                        A: 'industrialforegoing:plastic',
                        D: 'createmetallurgy:steel_ingot',
                        B: 'thermal:energy_cell',
                        C: 'thermal:charge_bench'
                }
        )
        event.shapeless(
                Item.of('createmetallurgy:steel_block', 9),
                [
                        'concatenationcore:compacted_steel'
                ]
        )
        event.shaped(
                Item.of('mekanism:advanced_universal_cable', 8),
                [
                        'ABA',
                        ' C ',
                        'ABA'
                ],
                {
                        B: 'thermal:energy_duct',
                        C: 'mekanism:basic_control_circuit',
                        A: 'createmetallurgy:steel_ingot'
                }
        )
        event.shapeless(
                Item.of('mekanism:basic_universal_cable'),
                [
                        'thermal:energy_duct'
                ]
        )
        event.shapeless(
                Item.of('thermal:energy_duct'),
                [
                        'mekanism:basic_universal_cable'
                ]
        )
        event.shaped(
                Item.of('mekanism:energized_smelter'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'createmetallurgy:steel_ingot',
                        B: 'thermal:machine_furnace'
                }
        )
        event.shaped(
                Item.of('tarotcards:justice'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:daladite',
                        E: 'mekanism:pellet_antimatter',
                        A: 'concatenationcore:gold_paper',
                        D: 'concatenationcore:full_pentacles',
                        C: 'mekanism:reprocessed_fissile_fragment'
                }
        ).keepIngredient('concatenationcore:full_pentacles')
        event.shapeless(
                Item.of('thermal:laser_diode'),
                [
                        'concatenationcore:breaking_tool',
                        'mekanism:digital_miner'
                ]
        )
        event.shapeless(
                Item.of('rftoolsbuilder:shape_card_quarry'),
                [
                        'concatenationcore:daladite',
                        'quarryplus:quarry',
                        'concatenationcore:daladite',
                        'minecraft:nether_star',
                        'rftoolsbuilder:shape_card_def',
                        'minecraft:nether_star',
                        'concatenationcore:daladite',
                        'thermal:laser_diode',
                        'concatenationcore:daladite'
                ]
        )

        event.recipes.thermal.press('concatenationcore:signalum_coil', ['thermal:signalum_dust', 'concatenationcore:copper_lead_coil'])
        event.recipes.thermal.pulverizer(Item.of('thermal:signalum_dust').withChance(1.5), 'thermal:signalum_plate')
        event.recipes.thermal.pulverizer(Item.of('create:crushed_raw_lead').withChance(1.25), '#tfmg:stone_types/galena')
        event.recipes.thermal.pulverizer(Item.of('create:crushed_raw_aluminum').withChance(1.25), '#tfmg:stone_types/bauxite')
        event.recipes.thermal.chiller(Item.of('integrateddynamics:menril_sapling'), [Fluid.of('minecraft:water', 4000), 'thermal:ice_charge'])
        event.recipes.thermal.chiller(Item.of('integrateddynamics:menril_sapling'), [Fluid.of('minecraft:water', 4000), 'concatenationcore:ice_shard'])
        event.recipes.thermal.smelter('concatenationcore:galvanized_iron_nugget', ['create:zinc_nugget', 'create:zinc_nugget', 'minecraft:iron_nugget']).energy(4000)
        event.recipes.thermal.smelter('concatenationcore:daladite', ['concatenationcore:celestial_calralite', 'rftoolsbase:infused_diamond', 'mekanism:ingot_refined_obsidian']).energy(35000)
        event.recipes.thermal.smelter('create:shadow_steel', ['rftoolsbase:infused_diamond', 'minecraft:nether_star', 'concatenationcore:daladite']).energy(1000000)
        event.recipes.thermal.smelter('concatenationcore:alclad', ['concatenationcore:meteorite', 'concatenationcore:meteorite', '#forge:dusts/zinc']).energy(1000)

        event.recipes.industrialforegoing.dissolution_chamber(
                ['rftoolspower:power_core2', 'thermal:energy_cell_frame', 'rftoolspower:power_core2', 'concatenationcore:signalum_coil', 'concatenationcore:signalum_coil', 'rftoolspower:power_core2', 'tconstruct:hepatizon_ingot', 'rftoolspower:power_core2'],
                'thermal:redstone',
                'thermal:energy_cell',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['solarflux:photovoltaic_cell_1', 'solarflux:photovoltaic_cell_1', 'solarflux:photovoltaic_cell_1', 'thermal:lapis_gear', 'thermal:lapis_gear', '#forge:plates/steel', '#forge:ingots/steel', '#forge:plates/steel'],
                'thermal:glowstone',
                'solarflux:photovoltaic_cell_2',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['industrialforegoing:plastic', 'thermal:machine_frame', 'industrialforegoing:plastic', 'thermal:enderium_gear', 'thermal:enderium_gear', 'thermal:rose_gold_plate', 'thermal:diamond_gear', 'thermal:rose_gold_plate'],
                'industrialforegoing:pink_slime',
                'industrialforegoing:machine_frame_advanced',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['industrialforegoing:plastic', 'thermal:machine_frame', 'industrialforegoing:plastic', 'minecraft:netherite_scrap', 'minecraft:netherite_scrap', 'thermal:rose_gold_plate', 'thermal:diamond_gear', 'thermal:rose_gold_plate'],
                'industrialforegoing:pink_slime',
                'industrialforegoing:machine_frame_advanced',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['concatenationcore:galvanized_iron_casing', 'industrialforegoing:laser_lens4', 'concatenationcore:galvanized_iron_casing', 'concatenationcore:circuit', 'concatenationcore:circuit', 'concatenationcore:galvanized_iron_casing', 'thermal:energy_cell', 'concatenationcore:galvanized_iron_casing'],
                'thermal:glowstone',
                'quarryplus:workbench',
                100
        )
        event.recipes.industrialforegoing.fluid_extractor(
                'integrateddynamics:menril_log',
                'integrateddynamics:menril_log_stripped',
                0.5,
                Fluid.of('industrialforegoing:latex', 9)
        );
        event.recipes.industrialforegoing.fluid_extractor(
                'ars_nouveau:blue_archwood_log',
                'ars_nouveau:stripped_blue_archwood_log',
                0.5,
                Fluid.of('industrialforegoing:latex', 5)
        );
        event.recipes.industrialforegoing.fluid_extractor(
                'thermal:rubberwood_log',
                'thermal:stripped_rubberwood_log',
                0.5,
                Fluid.of('industrialforegoing:latex', 10)
        );
        event.recipes.industrialforegoing.fluid_extractor(
                'concatenationcore:compacted_stripped_wood',
                'thermal:sawdust_block',
                0.8,
                Fluid.of('industrialforegoing:latex', 6)
        );
        event.recipes.industrialforegoing.fluid_extractor(
                'concatenationcore:compacted_wood',
                'concatenationcore:compacted_stripped_wood',
                0.8,
                Fluid.of('industrialforegoing:latex', 7)
        );
        event.recipes.industrialforegoing.fluid_extractor(
                'concatenationcore:twice_compacted_wood',
                'concatenationcore:compacted_wood',
                0.8,
                Fluid.of('industrialforegoing:latex', 8)
        );
});