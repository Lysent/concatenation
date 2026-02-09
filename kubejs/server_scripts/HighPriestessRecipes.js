ServerEvents.recipes(event => {
        const remove = [
                'thermal:dynamo_stirling',
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
                'thermal:upgrade_augment_1',
                'enderstorage:ender_chest',
                'enderstorage:ender_tank',
                'rftoolspower:blazing_agitator',
                'mekanism:enriched_iron',
                'mekanism:enriched_redstone',
                'simplyjetpacks:jetpack_vanilla1_armored',
                'simplyjetpacks:jetpack_vanilla2_armored',
                'simplyjetpacks:jetpack_vanilla3_armored',
                'simplyjetpacks:jetpack_vanilla4_armored',
                'simplyjetpacks:jetpack_te1_armored',
                'simplyjetpacks:jetpack_te2_armored',
                'simplyjetpacks:jetpack_te3_armored',
                'simplyjetpacks:jetpack_te4_armored',
                'rftoolspower:cell2',
                'hammerlib:gears',
                'travelanchors:travel_staff',
                'travelanchors:travel_anchor',
                'thermal:enderium_gear',
                'thermal:xp_crystal',
                'thoriumreactors:blasted_iron_nugget',
                'thoriumreactors:blasted_iron_block',
                'thoriumreactors:blasted_iron_ingot',
                'thoriumreactors:steel_chest_block',
                'thoriumreactors:thorium_chest_block',
                'thoriumreactors:thorium',
                'thoriumreactors:fluorite_ingot'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ mod: 'hammerlib' })

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
                'industrialforegoing:machine_frame_supreme'
        );
        event.replaceInput(
                { input: 'rftoolsutility:crafter1' },
                'rftoolsutility:crafter1',
                'thermal:machine_crafter'
        );
        event.replaceOutput(
                { output: 'mekanism:digital_miner' },
                'mekanism:steel_casing',
                'concatenationcore:laser_diode'
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
        event.replaceInput(
                { mod: 'hpm' },
                'hpm:hand_cannon',
                'hpm:hand_mortar'
        );

        event.replaceInput(
                { mod: 'thoriumreactors' },
                'thoriumreactors:blasted_iron_ingot',
                'concatenationcore:galvanized_iron'
        );
        event.replaceInput(
                { mod: 'thoriumreactors' },
                'thoriumreactors:blasted_iron_nugget',
                'concatenationcore:galvanized_iron_nugget'
        );
        event.replaceInput(
                { input: 'minecraft:fire_charge' },
                'minecraft:fire_charge',
                '#concatenation:firing_item'
        );
        event.replaceInput(
                { input: 'minecraft:experience_bottle' },
                'minecraft:experience_bottle',
                '#forge:consumables/experience_3'
        );

        event.replaceInput(
                { input: 'thoriumreactors:fluorite_ingot' },
                'thoriumreactors:fluorite_ingot',
                'mekanism:fluorite_gem'
        );

        event.replaceInput(
                { input: 'ae2:calculation_processor' },
                'ae2:calculation_processor',
                'concatenationcore:primed_calculation_processor'
        )
        event.replaceInput(
                { mod: 'advanced_ae' },
                'minecraft:redstone',
                'concatenationcore:stickyredstone'
        )
        event.replaceInput(
                { mod: 'advanced_ae' },
                'minecraft:copper_ingot',
                'concatenationcore:celestial_calralite'
        )
        event.replaceInput(
                { mod: 'advanced_ae', input: 'minecraft:netherite_ingot' },
                'minecraft:netherite_ingot',
                'concatenationcore:erhantahir_alloy'
        )

        const refined = [
                'mekanism:ingot_osmium',
                'mekanism:ingot_uranium',
                'tconstruct:cobalt_ingot',
                'createmetallurgy:tungsten_ingot',
                //'thoriumreactors:chromium_ingot',
                //'thoriumreactors:manganese_ingot',
                //'thoriumreactors:niob_ingot',
                'mcore:titanium_ingot',
                'tfmg:lithium_ingot',
                'tfmg:aluminum_ingot',
                //'thoriumreactors:molybdenum_ingot'
        ]

        const refined_oreberry = [
                'oreberriesreplanted:uranium_oreberry',
                'oreberriesreplanted:aluminum_oreberry',
                'oreberriesreplanted:osmium_oreberry'
        ]

        const alloyed = [
                'thermal:lumium_dust',
                'thermal:enderium_dust',
                'thermal:signalum_ingot',
                'thermal:lumium_ingot',
                'thermal:enderium_ingot',
                //'thoriumreactors:graphite_ingot'
        ]

        // const thoriumIngots = [
        //         {
        //                 ore: 'thoriumreactors:chromite_ore',
        //                 deepslate: 'thoriumreactors:deepslate_chromite_ore',
        //                 ingot: 'thoriumreactors:chromium_ingot'
        //         },
        //         {
        //                 ore: 'thoriumreactors:molybdenum_ore',
        //                 deepslate: 'thoriumreactors:deepslate_molybdenum_ore',
        //                 ingot: 'thoriumreactors:molybdenum_ingot'
        //         },
        //         {
        //                 ore: 'thoriumreactors:pyrochlor_ore',
        //                 deepslate: 'thoriumreactors:deepslate_pyrochlor_ore',
        //                 ingot: 'thoriumreactors:niob_ingot'
        //         },
        //         {
        //                 ore: 'thoriumreactors:manganese_ore',
        //                 deepslate: 'thoriumreactors:deepslate_manganese_ore',
        //                 ingot: 'thoriumreactors:manganese_ingot'
        //         }
        // ]

        function getForms(id) {
                const [mod, name] = id.split(':')

                if (mod === 'mekanism' && name.startsWith('ingot_')) {
                        const metal = name.replace('ingot_', '')
                        return {
                                ingot: id,
                                nugget: `${mod}:nugget_${metal}`,
                                block: `${mod}:block_${metal}`,
                                raw: `${mod}:raw_${metal}`,
                                rawBlock: `${mod}:raw_${metal}_block`
                        }
                }

                if (name.endsWith('_ingot')) {
                        const base = name.replace('_ingot', '')
                        return {
                                ingot: id,
                                nugget: `${mod}:${base}_nugget`,
                                block: `${mod}:${base}_block`,
                                raw: `${mod}:raw_${base}`,
                                rawBlock: `${mod}:raw_${base}_block`
                        }
                }

                return null
        }

        function processIngot(id, removeFurnaceRecipes) {
                event.remove({ output: id, type: 'minecraft:crafting_shaped' })
                event.remove({ output: id, type: 'minecraft:crafting_shapeless' })

                if (removeFurnaceRecipes) {
                        event.remove({ output: id, type: 'minecraft:smelting' })
                        event.remove({ output: id, type: 'minecraft:blasting' })
                }

                if (id.includes('dust')) return

                const forms = getForms(id)
                if (!forms) return

                event.shaped(
                        Item.of(forms.ingot),
                        [
                                'NNN',
                                'NNN',
                                'NNN'
                        ],
                        { N: forms.nugget }
                )

                event.shapeless(
                        Item.of(forms.ingot, 9),
                        [forms.block]
                )
        }

        refined.forEach(id => processIngot(id, true))
        alloyed.forEach(id => processIngot(id, false))

        refined_oreberry.forEach(oreberry => {
                event.remove({
                        input: oreberry,
                        type: 'oreberriesreplanted:vat'
                })
        })

        // refined.forEach(id => {
        //         const forms = getForms(id)
        //         if (!forms) return

        //         event.custom({
        //                 type: 'thoriumreactors:blasting',
        //                 ticks: 200,
        //                 temperature: 850,
        //                 input: {
        //                         'slot-0': { item: forms.raw }
        //                 },
        //                 output: {
        //                         'slot-0': { item: forms.ingot },
        //                         'slot-1': { item: forms.nugget },
        //                         chance: 30
        //                 }
        //         })

        //         event.custom({
        //                 type: 'thoriumreactors:blasting',
        //                 ticks: 200,
        //                 temperature: 850,
        //                 input: {
        //                         'slot-0': { item: forms.rawBlock }
        //                 },
        //                 output: {
        //                         'slot-0': { item: forms.ingot },
        //                         'slot-1': { item: forms.nugget },
        //                         chance: 30
        //                 }
        //         })
        // })

        refined_oreberry.forEach(oreberry => {
                const metal = oreberry.replace('oreberriesreplanted:', '').replace('_oreberry', '')
                const ingot = refined.find(i => i.endsWith(`${metal}_ingot`) || i.endsWith(`ingot_${metal}`))
                if (!ingot) return
                const forms = getForms(ingot)
                if (!forms) return

                event.recipes.thermal.smelter({
                        result: [
                                { item: forms.nugget },
                                { item: forms.nugget, chance: 0.6 }
                        ],
                        ingredient: oreberry
                })
        })

        // thoriumIngots.forEach(entry => {
        //         const forms = getForms(entry.ingot)
        //         if (!forms) return

        //                 ;[entry.ore, entry.deepslate].forEach(ore => {
        //                         event.custom({
        //                                 type: 'thoriumreactors:blasting',
        //                                 ticks: 200,
        //                                 temperature: 850,
        //                                 input: {
        //                                         'slot-0': { item: ore }
        //                                 },
        //                                 output: {
        //                                         'slot-0': { item: forms.ingot },
        //                                         'slot-1': { item: forms.nugget },
        //                                         chance: 30
        //                                 }
        //                         })
        //                 })
        // })

        event.recipes.thermal.smelter(Item.of('mekanism:nugget_osmium', 3), ['mekanism:dust_osmium']).energy(50000)

        event.remove({ output: 'thermal:lumium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:enderium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'integrateddynamics:variable', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'mekanism:basic_fluid_tank', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'createmetallurgy:iron_dust', type: 'mekanism:crusher' })

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
                        B: 'concatenationcore:almamegraton',
                        C: 'thermal:steel_dust',
                        E: 'thermal:diamond_dust'
                }
        ).keepIngredient('#concatenation:tech_cards')
        event.shaped(
                Item.of('concatenationcore:almamegraton_core'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        A: 'thermal:bronze_ingot',
                        D: 'rftoolsbase:infused_diamond',
                        E: 'thermal:electrum_gear',
                        B: 'thermal:invar_gear',
                        C: 'thermal:constantan_gear',
                        F: 'thermal:diamond_gear'
                }
        )
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
                        A: '#minecraft:logs',
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
        // event.shaped(
        //         Item.of('concatenationcore:primed_calculation_processor'),
        //         [
        //                 'AB ',
        //                 ' C ',
        //                 '   '
        //         ],
        //         {
        //                 C: 'mekanism:basic_control_circuit',
        //                 A: 'concatenationcore:ironclad_hammer',
        //                 B: 'mekanism:ingot_osmium',
        //         }
        // )
        event.shaped(
                Item.of('rftoolsbase:machine_frame'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'tarotcards:justice',
                        C: 'concatenationcore:erhantahir_alloy',
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
                Item.of('concatenationcore:laser_diode'),
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
                        F: 'concatenationcore:laser_diode',
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
                        'mekanism:basic_universal_cable',
                        'concatenationcore:full_pentacles'
                ]
        ).keepIngredient('concatenationcore:full_pentacles')
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
                Item.of('concatenationcore:laser_diode'),
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
                        'concatenationcore:laser_diode',
                        'concatenationcore:daladite'
                ]
        )
        event.shapeless(
                Item.of('integrateddynamics:variable'),
                [
                        'integrateddynamics:variable'
                ]
        )
        event.shaped(
                Item.of('enderstorage:ender_chest'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        D: 'minecraft:ender_chest',
                        A: 'minecraft:blaze_rod',
                        B: 'minecraft:obsidian',
                        C: 'thermal:enderium_ingot'
                }
        )
        event.shaped(
                Item.of('enderstorage:ender_tank'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        D: 'minecraft:ender_chest',
                        C: 'thermal:enderium_glass',
                        A: 'minecraft:blaze_rod',
                        B: 'minecraft:obsidian'
                }
        )
        event.shaped(
                Item.of('solarflux:photovoltaic_cell_3'),
                [
                        'AAA',
                        'BCB',
                        '   '
                ],
                {
                        A: 'integratedterminals:menril_glass',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'solarflux:photovoltaic_cell_2'
                }
        )
        event.shaped(
                Item.of('solarflux:photovoltaic_cell_3'),
                [
                        'AAA',
                        'BCB',
                        '   '
                ],
                {
                        A: 'elementalcraft:springaline_glass',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'solarflux:photovoltaic_cell_2'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_5', 2),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'industrialforegoing:plastic',
                        C: 'thermal:lumium_gear',
                        A: 'solarflux:photovoltaic_cell_3',
                        E: '#concatenation:higher_circuits',
                        D: 'solarflux:sp_4'
                }
        )
        event.shapeless(
                Item.of('thermal:electrum_ingot', 9),
                [
                        'thermal:electrum_block'
                ]
        )
        event.shapeless(
                Item.of('thermal:signalum_ingot', 9),
                [
                        'thermal:signalum_block'
                ]
        )
        event.shapeless(
                Item.of('thermal:enderium_ingot', 9),
                [
                        'thermal:enderium_block'
                ]
        )
        event.shapeless(
                Item.of('thermal:lumium_ingot', 9),
                [
                        'thermal:lumium_block'
                ]
        )

        event.shapeless(
                Item.of('concatenationcore:meteorite_clump'),
                [
                        '#concatenation:hammers',
                        'concatenationcore:meteorite',
                        'concatenationcore:meteorite'
                ]
        )
        event.shaped(
                Item.of('solarflux:sp_3', 2),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:signalum_coil',
                        B: 'solarflux:sp_2',
                        A: 'rftoolspower:power_core1'
                }
        )
        event.shaped(
                Item.of('solarflux:photovoltaic_cell_4'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        B: 'industrialforegoing:plastic',
                        A: 'thermal:signalum_glass',
                        D: 'createmetallurgy:steel_ingot',
                        C: 'concatenationcore:primed_calculation_processor'
                }
        )
        event.shaped(
                Item.of('solarflux:photovoltaic_cell_5'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        D: 'industrialforegoing:plastic',
                        A: 'thermal:lumium_glass',
                        C: 'solarflux:photovoltaic_cell_4',
                        B: 'mekanism:ingot_osmium'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_6'),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'industrialforegoing:plastic',
                        E: 'mekanism:advanced_control_circuit',
                        C: 'thermal:enderium_gear',
                        A: 'solarflux:photovoltaic_cell_4',
                        D: 'solarflux:sp_5'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_7'),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'industrialforegoing:plastic',
                        A: 'solarflux:photovoltaic_cell_5',
                        C: 'thermal:netherite_gear',
                        D: 'solarflux:sp_6',
                        E: 'mekanism:elite_control_circuit'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_8'),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'concatenationcore:erhantahir_alloy',
                        A: 'solarflux:photovoltaic_cell_6',
                        C: 'rftoolspower:cell3',
                        D: 'solarflux:sp_7',
                        E: 'mekanism:ultimate_control_circuit'
                }
        )
        event.shaped(
                Item.of('solarflux:photovoltaic_cell_6'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        D: 'concatenationcore:daladite',
                        A: 'thermal:lumium_glass',
                        C: 'solarflux:photovoltaic_cell_5',
                        B: 'mekanism:ingot_refined_obsidian'
                }
        )
        event.shaped(
                Item.of('rftoolspower:cell2'),
                [
                        'ACA',
                        'BDB',
                        'ACA'
                ],
                {
                        D: 'tarotcards:justice',
                        A: 'rftoolspower:power_core2',
                        C: 'rftoolspower:cell1',
                        B: 'concatenationcore:daladite'
                }
        ).keepIngredient('tarotcards:justice')
        event.shaped(
                Item.of('rftoolspower:blazing_agitator'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'minecraft:glass',
                        B: 'minecraft:blaze_rod',
                        D: 'thermal:lumium_ingot',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('mekanismgenerators:fission_reactor_casing', 8),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'mekanism:alloy_infused',
                        C: 'industrialforegoing:machine_frame_advanced',
                        A: 'thermal:lead_plate'
                }
        )
        event.shaped(
                Item.of('mekanismgenerators:fusion_reactor_frame', 8),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'mekanism:alloy_atomic',
                        B: 'mekanism:pellet_polonium',
                        C: 'industrialforegoing:machine_frame_advanced'
                }
        )
        event.shaped(
                Item.of('simplyjetpacks:armorplating_te4'),
                [
                        'ABA',
                        'BAB',
                        'ABA'
                ],
                {
                        B: 'mcore:steel_sheet',
                        A: 'thermal:enderium_ingot'
                }
        )
        event.shaped(
                Item.of('simplyjetpacks:armorplating_te2'),
                [
                        'ABA',
                        'BAB',
                        'ABA'
                ],
                {
                        A: 'thermal:bronze_plate',
                        B: 'mcore:steel_sheet'
                }
        )
        event.shaped(
                Item.of('simplyjetpacks:armorplating_te3'),
                [
                        'ABA',
                        'BAB',
                        'ABA'
                ],
                {
                        A: 'thermal:invar_plate',
                        B: 'mcore:steel_sheet'
                }
        )
        event.shaped(
                Item.of('simplyjetpacks:armorplating_ie3'),
                [
                        'ABA',
                        'BAB',
                        'ABA'
                ],
                {
                        B: 'mcore:steel_sheet',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:nuke_tnt'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate',
                        B: 'mekanism:ingot_uranium'
                }
        )
        event.shaped(
                Item.of('thermal:earth_tnt', 1),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecraft:tnt',
                        B: 'thermal:signalum_nugget',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:lightning_tnt', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate',
                        B: 'thermal:lightning_charge'
                }
        )
        event.shaped(
                Item.of('thermal:ice_tnt', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'thermal:ice_charge',
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:ice_tnt', 8),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecraft:tnt',
                        B: 'concatenationcore:ice_shard',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:fire_tnt', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: '#concatenation:firing_item',
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:fire_tnt', 8),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'ars_nouveau:fire_essence',
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:slime_tnt', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecraft:tnt',
                        B: 'tconstruct:earth_slime_grass_seeds',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:redstone_tnt', 8),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:stickyredstone',
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:glowstone_tnt', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'minecraft:glowstone_dust',
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('thermal:ender_tnt', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecraft:tnt',
                        A: 'thermal:steel_plate',
                        B: 'thermal:enderium_ingot'
                }
        )
        event.shapeless(
                Item.of('thermal:frost_melon_slice'),
                [
                        'thermal:ice_charge',
                        'minecraft:glistering_melon_slice'
                ]
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_vanilla1_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;1479280589,-341142443,48424546,-100515324],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_vanilla1', 'minecraft:iron_chestplate']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_vanilla2_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;1752831507,20129910,-936999309,1098670713],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_vanilla2', 'minecraft:golden_chestplate']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_vanilla3_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;1727289611,-815409959,987119867,790204970],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_vanilla3', 'minecraft:diamond_chestplate']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_vanilla4_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;-1714975244,-282729822,1773868988,-98742266],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_vanilla4', 'minecraft:netherite_chestplate']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_te1_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;-1028677693,-2087175000,1578841898,1591161832],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_te1', 'simplyjetpacks:armorplating_te1']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_te2_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;289956431,2008070098,-223468988,1859007115],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_te2', 'simplyjetpacks:armorplating_te2']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_te3_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;-1679083759,220191159,887174525,203757162],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_te3', 'simplyjetpacks:armorplating_te3']
        )

        event.shapeless(
                Item.of('simplyjetpacks:jetpack_te4_armored',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;173016769,376312439,-236270331,-494345819],Slot:"jetpack"}]}'),
                ['simplyjetpacks:jetpack_te4', 'simplyjetpacks:armorplating_te4']
        )

        event.shaped(
                Item.of('concatenationcore:laser_diode', 2),
                [
                        'ABA',
                        'ACA',
                        'DAD'
                ],
                {
                        A: 'thermal:steel_gear',
                        C: 'concatenationcore:laser_diode',
                        B: 'thermal:diamond_gear',
                        D: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('industrialforegoing:ore_laser_base'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'industrialforegoing:plastic',
                        B: 'concatenationcore:laser_diode',
                        D: 'createmetallurgy:steel_block',
                        C: 'thermal:diamond_gear',
                        E: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('industrialforegoing:fluid_laser_base'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'industrialforegoing:plastic',
                        B: 'concatenationcore:laser_diode',
                        D: 'createmetallurgy:steel_block',
                        E: 'concatenationcore:signalum_coil',
                        C: 'thermal:diamond_gear'
                }
        )
        event.shaped(
                Item.of('travelanchors:travel_anchor'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: 'industrialforegoing:plastic',
                        D: 'thermal:enderium_gear',
                        C: 'thermal:upgrade_augment_3',
                        B: 'thermal:steel_plate'
                }
        )
        event.shaped(
                Item.of('travelanchors:travel_staff'),
                [
                        ' AB',
                        'CDA',
                        'DC '
                ],
                {
                        C: 'industrialforegoing:plastic',
                        D: 'createmetallurgy:steel_ingot',
                        A: 'thermal:enderium_plate',
                        B: 'mekanism:ingot_uranium'
                }
        )
        event.shapeless(
                Item.of('simplyjetpacks:jetpack_vanilla1'),
                [
                        'simplyjetpacks:jetpack_vanilla1_armored'
                ]
        )
        event.shapeless(
                Item.of('simplyjetpacks:jetpack_te1'),
                [
                        'simplyjetpacks:jetpack_te1_armored'
                ]
        )
        event.shaped(
                Item.of('concatenationcore:hierophant_die'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'thermal:invar_plate',
                        B: 'thermal:constantan_plate',
                        C: 'tarotcards:the_hierophant'
                }
        ).keepIngredient('tarotcards:the_hierophant')
        event.shaped(
                Item.of('concatenationcore:erhantahir_alloy'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'perdition:corruptite',
                        A: 'perdition:scintillating_dust',
                        C: 'create:shadow_steel'
                }
        )
        event.shaped(
                Item.of('concatenationcore:laser_diode'),
                [
                        'AB ',
                        'BCB',
                        ' B '
                ],
                {
                        C: 'thermal:laser_diode',
                        A: 'create:electron_tube',
                        B: 'thermal:electrum_plate'
                }
        )
        event.shaped(
                Item.of('concatenationcore:high_priestess_die'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'thermal:invar_plate',
                        B: 'thermal:bronze_plate',
                        C: 'tarotcards:the_high_priestess'
                }
        ).keepIngredient('tarotcards:the_high_priestess')
        event.shaped(
                Item.of('thermal:xp_crystal'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: '#forge:consumables/experience_3',
                        B: 'thermal:enderium_dust',
                        C: '#concatenation:insight_material'
                }
        )
        event.shaped(
                Item.of('mekanism:basic_fluid_tank'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'concatenationcore:stickyredstone',
                        C: 'mekanism:basic_control_circuit',
                        B: 'mekanism:ingot_osmium'
                }
        )
        // event.shaped(
        //         Item.of('thoriumreactors:thorium_chest_block'),
        //         [
        //                 ' A ',
        //                 'ABA',
        //                 ' A '
        //         ],
        //         {
        //                 B: 'ironchest:diamond_chest',
        //                 A: 'thoriumreactors:thorium'
        //         }
        // )
        // event.shaped(
        //         Item.of('thoriumreactors:steel_chest_block'),
        //         [
        //                 'AAA',
        //                 'ABA',
        //                 'AAA'
        //         ],
        //         {
        //                 A: 'createmetallurgy:steel_ingot',
        //                 B: '#forge:chests/wooden'
        //         }
        // )
        // event.shaped(
        //         Item.of('thoriumreactors:thorium'),
        //         [
        //                 'AAA',
        //                 'AAA',
        //                 'AAA'
        //         ],
        //         {
        //                 A: 'thoriumreactors:thorium_block'
        //         }
        // )

        event.recipes.thermal.press('concatenationcore:signalum_coil', ['thermal:signalum_dust', 'concatenationcore:copper_lead_coil'])
        event.recipes.thermal.press('concatenationcore:meteorite_clump', ['2x concatenationcore:meteorite', 'thermal:press_packing_2x2_die'])
        event.recipes.thermal.press('concatenationcore:compressed_sky_stone', ['9x ae2:sky_stone_block', 'concatenationcore:hierophant_die'])
        event.recipes.thermal.press('concatenationcore:galvanized_iron', ['9x concatenationcore:galvanized_iron_nugget', 'concatenationcore:hierophant_die'])
        event.recipes.thermal.pulverizer(Item.of('thermal:signalum_dust').withChance(0.5), 'thermal:signalum_plate')
        event.recipes.thermal.pulverizer(Item.of('create:crushed_raw_lead').withChance(1.25), '#tfmg:stone_types/galena')
        event.recipes.thermal.pulverizer(Item.of('create:crushed_raw_aluminum').withChance(1.25), '#tfmg:stone_types/bauxite')
        event.recipes.thermal.pulverizer(Item.of('mekanism:dust_osmium').withChance(1.5), 'mekanism:raw_osmium')
        event.recipes.thermal.pulverizer(Item.of('mekanism:dust_osmium').withChance(1.99), 'create:crushed_raw_osmium')
        event.recipes.thermal.pulverizer([Item.of('minecraft:cobblestone').withChance(1.2), Item.of('thermal:diamond_dust').withChance(0.01), Item.of('thermal:apatite_dust').withChance(0.1), Item.of('thermal:silver_dust').withChance(0.01)], 'perdition:compacted_marmor')
        event.recipes.thermal.pulverizer([Item.of('thermal:apatite_dust').withChance(0.2), Item.of('thermal:gold_dust').withChance(0.2), Item.of('thermal:sapphire_dust').withChance(0.4), Item.of('minecraft:redstone').withChance(0.5)], 'thermal:apatite_dust')
        event.recipes.thermal.chiller(Item.of('integrateddynamics:menril_sapling'), [Fluid.of('minecraft:water', 10000), 'thermal:ice_charge'])
        event.recipes.thermal.chiller(Item.of('integrateddynamics:menril_sapling'), [Fluid.of('minecraft:water', 10000), 'concatenationcore:ice_shard'])
        event.recipes.thermal.chiller(Item.of('thermal:lapis_gear'), [Fluid.of('integrateddynamics:menril_resin', 900), 'thermal:lapis_dust'])
        event.recipes.thermal.chiller(Item.of('thermal:emerald_gear'), [Fluid.of('integrateddynamics:menril_resin', 900), 'thermal:emerald_dust'])
        event.recipes.thermal.chiller(Item.of('thermal:quartz_gear'), [Fluid.of('integrateddynamics:menril_resin', 900), 'mekanism:dust_quartz'])
        event.recipes.thermal.chiller(Item.of('thermal:diamond_gear'), [Fluid.of('integrateddynamics:menril_resin', 900), 'thermal:diamond_dust'])
        event.recipes.thermal.chiller(Item.of('thermal:enderium_gear', 2), [Fluid.of('integrateddynamics:menril_resin', 900), 'thermal:enderium_block'])
        event.recipes.thermal.chiller(Item.of('thermal:lapis_gear'), [Fluid.of('thermal:resin', 900), 'thermal:lapis_dust'])
        event.recipes.thermal.chiller(Item.of('thermal:emerald_gear'), [Fluid.of('thermal:resin', 900), 'thermal:emerald_dust'])
        event.recipes.thermal.chiller(Item.of('thermal:quartz_gear'), [Fluid.of('thermal:resin', 900), 'mekanism:dust_quartz'])
        event.recipes.thermal.chiller(Item.of('thermal:diamond_gear'), [Fluid.of('thermal:resin', 900), 'thermal:diamond_dust'])
        event.recipes.thermal.chiller(Item.of('thermal:enderium_gear', 2), [Fluid.of('thermal:resin', 900), 'thermal:enderium_block'])
        event.recipes.thermal.smelter('concatenationcore:galvanized_iron_nugget', ['create:zinc_nugget', 'concatenationcore:double_nugget']).energy(8000)
        event.recipes.thermal.smelter('concatenationcore:daladite', ['concatenationcore:celestial_calralite', 'rftoolsbase:infused_diamond', 'mekanism:ingot_refined_obsidian']).energy(55000)
        event.recipes.thermal.smelter('concatenationcore:erhantahir_alloy', ['rftoolsbase:infused_diamond', 'minecraft:nether_star', 'concatenationcore:daladite']).energy(1000000)
        event.recipes.thermal.smelter('concatenationcore:alclad', ['concatenationcore:meteorite_clump', '#forge:dusts/zinc']).energy(2500)
        event.recipes.thermal.smelter(Item.of('mekanism:nugget_osmium', 3), ['mekanism:dust_osmium']).energy(50000)
        event.recipes.thermal.smelter('concatenationcore:celestial_calralite', ['mcore:raw_titanium', 'tconstruct:raw_cobalt', 'createmetallurgy:raw_wolframite']).energy(50000)
        event.recipes.thermal.smelter('concatenationcore:celestial_calralite', ['tconstruct:cobalt_ingot', 'mcore:titanium_ingot', 'createmetallurgy:tungsten_ingot']).energy(50000)
        event.recipes.thermal.smelter('common_ore_library:platinum_dust', ['2x thermal:nickel_ingot', 'minecraft:copper_ingot']).energy(10000)
        event.recipes.thermal.smelter('mcore:titanium_ingot', ['mcore:raw_titanium']).energy(1000)
        event.recipes.thermal.crucible(Fluid.of('integrateddynamics:menril_resin', 900), 'integrateddynamics:crystalized_menril_block').energy(9000)
        event.recipes.thermal.crucible(Fluid.of('integrateddynamics:menril_resin', 100), 'integrateddynamics:crystalized_menril_chunk').energy(3000)
        event.recipes.thermal.crucible(Fluid.of('thermal:resin', 1000), 'perdition:resin').energy(3000)
        event.recipes.thermal.centrifuge([Item.of('thoriumreactors:sodium').withChance(0.5)], 'mekanism:salt')
        event.recipes.mekanism.enriching('mekanism:enriched_iron', 'createmetallurgy:iron_dust')
        event.recipes.mekanism.enriching('mekanism:enriched_redstone', 'concatenationcore:stickyredstone')
        event.recipes.mekanism.crushing('createmetallurgy:iron_dust', 'minecraft:iron_ingot')

        const oreberries = [
                { berry: 'tin', result: 'thermal:tin_nugget', ore: 'thermal:tin_ore', deepslate: 'thermal:deepslate_tin_ore' },
                { berry: 'aluminum', result: 'tfmg:aluminum_nugget', ore: 'tfmg:bauxite', deepslate: 'tfmg:aluminum_block' },
                { berry: 'nickel', result: 'thermal:nickel_nugget', ore: 'thermal:nickel_ore', deepslate: 'thermal:deepslate_nickel_ore' },
                { berry: 'lead', result: 'thermal:lead_nugget', ore: 'thermal:lead_ore', deepslate: 'thermal:deepslate_lead_ore' },
                { berry: 'uranium', result: 'mekanism:nugget_uranium', ore: 'mekanism:uranium_ore', deepslate: 'mekanism:deepslate_uranium_ore' },
                { berry: 'osmium', result: 'mekanism:nugget_osmium', ore: 'mekanism:osmium_ore', deepslate: 'mekanism:deepslate_osmium_ore' },
                { berry: 'zinc', result: 'create:zinc_nugget', ore: 'create:zinc_ore', deepslate: 'create:deepslate_zinc_ore' },
                { berry: 'silver', result: 'thermal:silver_nugget', ore: 'thermal:silver_ore', deepslate: 'thermal:deepslate_silver_ore' },
                { berry: 'copper', result: 'thermal:copper_nugget', ore: 'minecraft:copper_ore', deepslate: 'minecraft:deepslate_copper_ore' },
                { berry: 'gold', result: 'minecraft:gold_nugget', ore: 'minecraft:gold_ore', deepslate: 'minecraft:deepslate_gold_ore' },
                { berry: 'iron', result: 'minecraft:iron_nugget', ore: 'minecraft:iron_ore', deepslate: 'minecraft:deepslate_iron_ore' },
                { berry: 'essence', result: 'concatenationcore:experience_orb', ore: 'minecraft:emerald_ore', deepslate: 'minecraft:deepslate_emerald_ore', special: true }
        ];

        oreberries.forEach(entry => {
                const berryItem = entry.special ? `oreberriesreplanted:${entry.berry}_berry` : `oreberriesreplanted:${entry.berry}_oreberry`;
                // const bushItem = entry.special ? `oreberriesreplanted:${entry.berry}_berry_bush` : `oreberriesreplanted:${entry.berry}_oreberry_bush`;
                const resultItem = entry.result;

                event.replaceInput({ type: 'thermal:furnace' }, berryItem, berryItem);
                event.remove({ output: berryItem, type: 'botanypots:crop' });
                event.recipes.thermal.furnace(resultItem, berryItem).xp(0.1);
        });

        const oreberryChance = 0.8;
        const oreberryMinRoll = 0;
        const oreberryMaxRoll = 3;
        const ticks = 1;
        const ticksRequiredT1 = 5000;
        const ticksRequiredT2 = 10000;
        const soilModifier = 1;
        const deepslateSoilModifier = 1.35;

        event.recipes.botanypots.soil('tfmg:bauxite', { block: 'tfmg:bauxite' }, ['ba'], ticks, 0.8);
        event.recipes.botanypots.soil('tfmg:aluminum_block', { block: 'tfmg:aluminum_block' }, ['ba'], ticks, 1.0);
        event.recipes.botanypots.crop("oreberriesreplanted:aluminum_oreberry_bush", ["ba"], { block: "oreberriesreplanted:aluminum_oreberry_bush" }, [Item.of("oreberriesreplanted:aluminum_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT2, 1);

        event.recipes.botanypots.soil('thermal:lead_ore', { block: 'thermal:lead_ore' }, ['le'], ticks, soilModifier);
        event.recipes.botanypots.soil('thermal:deepslate_lead_ore', { block: 'thermal:deepslate_lead_ore' }, ['le'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:lead_oreberry_bush", ["le"], { block: "oreberriesreplanted:lead_oreberry_bush" }, [Item.of("oreberriesreplanted:lead_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

        event.recipes.botanypots.soil('mekanism:uranium_ore', { block: 'mekanism:uranium_ore' }, ['ur'], ticks, soilModifier);
        event.recipes.botanypots.soil('mekanism:deepslate_uranium_ore', { block: 'mekanism:deepslate_uranium_ore' }, ['ur'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:uranium_oreberry_bush", ["ur"], { block: "oreberriesreplanted:uranium_oreberry_bush" }, [Item.of("oreberriesreplanted:uranium_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT2, 1);

        event.recipes.botanypots.soil('mekanism:osmium_ore', { block: 'mekanism:osmium_ore' }, ['os'], ticks, soilModifier);
        event.recipes.botanypots.soil('mekanism:deepslate_osmium_ore', { block: 'mekanism:deepslate_osmium_ore' }, ['os'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:osmium_oreberry_bush", ["os"], { block: "oreberriesreplanted:osmium_oreberry_bush" }, [Item.of("oreberriesreplanted:osmium_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT2, 1);

        event.recipes.botanypots.soil('create:zinc_ore', { block: 'create:zinc_ore' }, ['zi'], ticks, soilModifier);
        event.recipes.botanypots.soil('create:deepslate_zinc_ore', { block: 'create:deepslate_zinc_ore' }, ['zi'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:zinc_oreberry_bush", ["zi"], { block: "oreberriesreplanted:zinc_oreberry_bush" }, [Item.of("oreberriesreplanted:zinc_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

        event.recipes.botanypots.soil('thermal:silver_ore', { block: 'thermal:silver_ore' }, ['si'], ticks, soilModifier);
        event.recipes.botanypots.soil('thermal:deepslate_silver_ore', { block: 'thermal:deepslate_silver_ore' }, ['si'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:silver_oreberry_bush", ["si"], { block: "oreberriesreplanted:silver_oreberry_bush" }, [Item.of("oreberriesreplanted:silver_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT2, 1);

        event.recipes.botanypots.soil('#c:ores/nickel', { block: 'thermal:nickel_ore' }, ['ni'], ticks, soilModifier);
        // event.recipes.botanypots.soil('thermal:deepslate_nickel_ore', { block: 'thermal:deepslate_nickel_ore' }, ['ni'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:nickel_oreberry_bush", ["ni"], { block: "oreberriesreplanted:nickel_oreberry_bush" }, [Item.of("oreberriesreplanted:nickel_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT2, 1);

        event.recipes.botanypots.soil('#c:ores/tin', { block: 'thermal:tin_ore' }, ['ti'], ticks, soilModifier);
        // event.recipes.botanypots.soil('thermal:deepslate_tin_ore', { block: 'thermal:deepslate_tin_ore' }, ['ti'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:tin_oreberry_bush", ["ti"], { block: "oreberriesreplanted:tin_oreberry_bush" }, [Item.of("oreberriesreplanted:tin_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

        event.recipes.botanypots.soil('minecraft:copper_ore', { block: 'minecraft:copper_ore' }, ['co'], ticks, soilModifier);
        event.recipes.botanypots.soil('minecraft:deepslate_copper_ore', { block: 'minecraft:deepslate_copper_ore' }, ['co'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:copper_oreberry_bush", ["co"], { block: "oreberriesreplanted:copper_oreberry_bush" }, [Item.of("oreberriesreplanted:copper_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

        event.recipes.botanypots.soil('minecraft:gold_ore', { block: 'minecraft:gold_ore' }, ['go'], ticks, soilModifier);
        event.recipes.botanypots.soil('minecraft:deepslate_gold_ore', { block: 'minecraft:deepslate_gold_ore' }, ['go'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:gold_oreberry_bush", ["gold_ore"], { block: "oreberriesreplanted:gold_oreberry_bush" }, [Item.of("oreberriesreplanted:gold_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

        event.recipes.botanypots.soil('minecraft:iron_ore', { block: 'minecraft:iron_ore' }, ['ir'], ticks, soilModifier);
        event.recipes.botanypots.soil('minecraft:deepslate_iron_ore', { block: 'minecraft:deepslate_iron_ore' }, ['ir'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:iron_oreberry_bush", ["iron_ore"], { block: "oreberriesreplanted:iron_oreberry_bush" }, [Item.of("oreberriesreplanted:iron_oreberry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);

        event.recipes.botanypots.soil('minecraft:emerald_ore', { block: 'minecraft:emerald_ore' }, ['em'], ticks, soilModifier);
        event.recipes.botanypots.soil('minecraft:deepslate_emerald_ore', { block: 'minecraft:deepslate_emerald_ore' }, ['em'], ticks, deepslateSoilModifier);
        event.recipes.botanypots.crop("oreberriesreplanted:essence_berry_bush", ["emerald_ore"], { block: "oreberriesreplanted:essence_berry_bush" }, [Item.of("oreberriesreplanted:essence_berry").withChance(oreberryChance).withRolls(oreberryMinRoll, oreberryMaxRoll)], ticksRequiredT1, 1);


        // event.recipes.minecraft.smelting(
        //         '2x concatenationcore:experience_orb',
        //         'oreberriesreplanted:essence_berry'
        // ).xp(0.1).cookingTime(100);
        // event.recipes.minecraft.blasting(
        //         '2x concatenationcore:experience_orb',
        //         'oreberriesreplanted:essence_berry'
        // ).xp(0.1).cookingTime(75);
        // event.recipes.minecraft.smoking(
        //         '2x concatenationcore:experience_orb',
        //         'oreberriesreplanted:essence_berry'
        // ).xp(0.2).cookingTime(50);

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
                ['thermal:emerald_gear', 'industrialforegoing:laser_lens4', 'thermal:diamond_gear', 'concatenationcore:circuit', 'concatenationcore:circuit', 'concatenationcore:galvanized_iron_casing', 'thermal:energy_cell', 'concatenationcore:galvanized_iron_casing'],
                'thermal:glowstone',
                'quarryplus:workbench',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['minecraft:glass_pane', 'minecraft:glass_pane', 'minecraft:glass_pane', 'minecraft:glass_pane', 'minecraft:glass_pane', 'the_deep_void:voidrium_glass'],
                'industrialforegoing:latex',
                'concatenationcore:void_lens',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['minecraft:glass_pane', 'the_deep_void:sulfur_glass_pane', 'the_deep_void:bismuth_glass_pane', 'the_deep_void:cinnabar_glass_pane', 'perdition:cut_dis_gem', 'perdition:scintillating_dust', 'perdition:scintillating_dust', 'perdition:scintillating_dust'],
                'industrialforegoing:latex',
                'concatenationcore:void_lens',
                100
        )
        event.recipes.industrialforegoing.dissolution_chamber(
                ['rftoolspower:power_core2', 'thermal:energy_cell_frame', 'rftoolspower:power_core2', 'concatenationcore:signalum_coil', 'concatenationcore:signalum_coil', 'rftoolspower:power_core2', 'tconstruct:hepatizon_ingot', 'rftoolspower:power_core2'],
                'thermal:redstone',
                'thermal:energy_cell',
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

        event.recipes.industrialforegoing.laser_drill_ore(
                "thermal:apatite_ore", // output
                "industrialforegoing:laser_lens9",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 96,
                                "depth_min": 48,
                                "weight": 5,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "create:zinc_ore", // output
                "industrialforegoing:laser_lens9",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 70,
                                "depth_min": 1,
                                "weight": 19,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "rftoolsbase:dimensionalshard_overworld", // output
                "industrialforegoing:laser_lens3",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 40,
                                "depth_min": 17,
                                "weight": 8,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "mcore:deepslate_titanium_ore", // output
                "industrialforegoing:laser_lens0",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 1,
                                "depth_min": 0,
                                "weight": 5,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "elementalcraft:inert_crystal_ore", // output
                "industrialforegoing:laser_lens8",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 96,
                                "depth_min": 8,
                                "weight": 18,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "tfmg:lithium_ore", // output
                "industrialforegoing:laser_lens12",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 27,
                                "depth_min": 1,
                                "weight": 4,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "theurgy:sal_ammoniac_ore", // output
                "industrialforegoing:laser_lens6",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 68,
                                "depth_min": 0,
                                "weight": 18,
                                "whitelist": {}
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "tconstruct:cobalt_ore", // output
                "industrialforegoing:laser_lens11",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 32,
                                "depth_min": 8,
                                "weight": 6,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:nether_wastes",
                                                "minecraft:soul_sand_valley",
                                                "minecraft:crimson_forest",
                                                "minecraft:warped_forest",
                                                "minecraft:basalt_deltas"
                                        ]
                                },
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "the_deep_void:onyx_ore", // output
                "concatenationcore:void_lens",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {},
                                "depth_max": 38,
                                "depth_min": 0,
                                "weight": 8,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "the_deep_void:ashen_crags",
                                                "the_deep_void:filled_graveyard",
                                                "the_deep_void:forgotten_valley",
                                                "the_deep_void:grim_canopy",
                                                "the_deep_void:mourning_graveyard",
                                                "the_deep_void:watching_undergrowth",
                                                "the_deep_void:windswept_hollow",
                                                "the_deep_void:drifting_monoliths",
                                                "the_deep_void:gathering_grounds",
                                                "the_deep_void:gloomy_deathgrounds",
                                                "the_deep_void:staring_hills",
                                                "the_deep_void:befouled_marsh",
                                                "the_deep_void:misted_remnants"
                                        ]
                                },
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "the_deep_void:lavendite_ore", // output
                "concatenationcore:void_lens",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 45,
                                "depth_min": 0,
                                "weight": 7,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "the_deep_void:ashen_crags",
                                                "the_deep_void:filled_graveyard",
                                                "the_deep_void:forgotten_valley",
                                                "the_deep_void:grim_canopy",
                                                "the_deep_void:mourning_graveyard",
                                                "the_deep_void:watching_undergrowth",
                                                "the_deep_void:windswept_hollow",
                                                "the_deep_void:drifting_monoliths",
                                                "the_deep_void:gathering_grounds",
                                                "the_deep_void:gloomy_deathgrounds",
                                                "the_deep_void:staring_hills",
                                                "the_deep_void:befouled_marsh",
                                                "the_deep_void:misted_remnants"
                                        ]
                                },
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "the_deep_void:bismuth_ore", // output
                "concatenationcore:void_lens",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 45,
                                "depth_min": 0,
                                "weight": 14,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "the_deep_void:ashen_crags",
                                                "the_deep_void:watching_undergrowth",
                                                "the_deep_void:windswept_hollow",
                                                "the_deep_void:befouled_marsh"
                                        ]
                                },
                        },
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "minecraft:the_end",
                                                "minecraft:the_void",
                                                "minecraft:small_end_islands",
                                                "minecraft:end_barrens",
                                                "minecraft:end_highlands",
                                                "minecraft:end_midlands"
                                        ]
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 1,
                                "whitelist": {}
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "the_deep_void:voidrium_ore", // output
                "concatenationcore:void_lens",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 1,
                                "depth_min": 0,
                                "weight": 0,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": [
                                                "the_deep_void:filled_graveyard",
                                                "the_deep_void:mourning_graveyard",
                                                "the_deep_void:drifting_monoliths",
                                                "the_deep_void:gathering_grounds",
                                                "the_deep_void:gloomy_deathgrounds",
                                                "the_deep_void:staring_hills"
                                        ]
                                },
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "perdition:corruptite_ore", // output
                "industrialforegoing:laser_lens15",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 2,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                        }
                ]
        )
        event.recipes.industrialforegoing.laser_drill_ore(
                "perdition:pyrite_ore", // output
                "industrialforegoing:laser_lens5",  // catalyst
                [ //rarity, see below for more details
                        {
                                "blacklist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                                "depth_max": 255,
                                "depth_min": 0,
                                "weight": 2,
                                "whitelist": {
                                        "type": "minecraft:worldgen/biome",
                                        "values": []
                                },
                        }
                ]
        )
});