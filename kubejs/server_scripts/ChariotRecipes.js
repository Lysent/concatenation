ServerEvents.recipes(event => {
        const remove = [
                'hpm:swashbuckleritem',
                'littlelogistics:seater_car',
                'hpm:smallhull',
                'littlelogistics:steam_locomotive',
                'littlelogistics:tug',
                'littlelogistics:energy_locomotive',
                'littlelogistics:energy_tug'
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
        ).returningItem('tarotcards:the_hierophant')
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
                        A: 'create:brass_ingot',
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
                        B: 'concatenationcore:galvanized_iron',
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
                        A: 'create:brass_ingot',
                        D: 'littlelogistics:seater_car',
                        B: 'minecraft:piston',
                        C: 'minecraft:blast_furnace'
                }
        )
        event.shaped(
                Item.of('littlelogistics:tug'),
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
                        'ABA'
                ],
                {
                        C: 'littlelogistics:steam_locomotive',
                        E: 'littlelogistics:tug',
                        A: 'concatenationcore:gold_paper',
                        D: '#concatenation:tech_cards',
                        B: 'thermal:sugar_cane_block'
                }
        ).returningItem('#concatenation:tech_cards')
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
                        D: 'thermal:steel_block',
                        A: 'tarotcards:the_chariot',
                        B: 'minecraft:piston'
                }
        ).returningItem('tarotcards:the_chariot')
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
                        D: 'thermal:steel_block',
                        A: 'tarotcards:the_chariot',
                        B: 'minecraft:piston'
                }
        ).returningItem('tarotcards:the_chariot')
});
