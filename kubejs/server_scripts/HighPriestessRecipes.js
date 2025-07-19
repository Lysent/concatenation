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
                'thermal:signalum_dust'
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

        replaceCasing.forEach(machine => {
                event.replaceInput(
                        { output: machine },
                        'thermal:machine_frame',
                        '#concatenation:high_priestess_casing'
                );
        });

        event.remove({ output: 'thermal:lumium_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:enderium_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:lumium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:enderium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:lumium_ingot', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:signalum_ingot', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:enderium_ingot', type: 'minecraft:crafting_shapeless' })


        event.shaped(
                Item.of('tarotcards:the_high_priestess'),
                [
                        'ABA',
                        'CDC',
                        'ACA'
                ],
                {
                        D: '#concatenation:tech_cards',
                        A: 'concatenationcore:gold_paper',
                        B: '#concatenation:high_priestess_casing',
                        C: 'thermal:steel_dust'
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
                        E: 'concatenationcore:circuit',
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
                        A: 'createmetallurgy:steel_ingot',
                        E: 'concatenationcore:signalum_coil',
                        B: 'concatenationcore:circuit'
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

        event.recipes.thermal.press('concatenationcore:signalum_coil', ['thermal:signalum_dust', 'concatenationcore:copper_lead_coil'])
        event.recipes.thermal.pulverizer(Item.of('thermal:signalum_dust').withChance(1.5), 'thermal:signalum_plate')
});