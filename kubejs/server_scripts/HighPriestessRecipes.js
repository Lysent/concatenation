ServerEvents.recipes(event => {
        const remove = [
                'thermal:dynamo_stirling',
                'thermal:dynamo_numismatic',
                'thermal:dynamo_compression',
                'thermal:dynamo_gourmand',
                'thermal:dynamo_disenchantment',
                'thermal:dynamo_lapidary',
                'thermal:dynamo_magmatic',
                'thermal:machine_pulverizer'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

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
                        B: 'thermal:machine_frame',
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
                        C: 'thermal:machine_frame',
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
                        C: 'thermal:machine_frame',
                        A: 'minecraft:piston'
                }
        )
});