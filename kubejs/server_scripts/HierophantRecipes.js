ServerEvents.recipes(event => {
        event.remove({
                output: 'quarryplus:solid_fuel_quarry'
        })
        event.remove({
                output: 'quarryplus:workbench'
        })
        event.remove({
                output: 'concatenationcore:galvanized_iron'
        })

        event.shaped(
                Item.of('quarryplus:solid_fuel_quarry'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        B: 'concatenationcore:boiler',
                        C: 'thermal:drill_head',
                        A: 'concatenationcore:zinc_casing',
                        E: 'tarotcards:the_hierophant',
                        D: 'concatenationcore:quarry_brain'
                }
        ).returningItem('tarotcards:the_hierophant')
        event.shaped(
                Item.of('concatenationcore:quarry_brain'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        E: 'minecraft:repeater',
                        C: 'thermal:tin_gear',
                        A: 'concatenationcore:galvanized_iron',
                        B: 'minecraft:powered_rail',
                        D: 'minecraft:copper_block'
                }
        )
        event.shaped(
                Item.of('concatenationcore:zinc_casing'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:bricks',
                        B: 'createdeco:zinc_support',
                        C: 'concatenationcore:galvanized_iron'
                }
        )
        event.shapeless(
                Item.of('concatenationcore:crushed_zinc'),
                [
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'concatenationcore:hammer'
                ]
        )
        event.shaped(
                Item.of('concatenationcore:unfired_galvanized_iron'),
                [
                        'ABB',
                        'BC ',
                        '   '
                ],
                {
                        B: 'minecraft:clay_ball',
                        A: 'concatenationcore:crushed_zinc',
                        C: 'concatenationcore:crushed_iron'
                }
        )
        event.shaped(
                Item.of('concatenationcore:galvanized_iron'),
                [
                        'AAA',
                        'AAA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:galvanized_iron_nugget',
                }
        )
        event.shaped(
                Item.of('concatenationcore:boiler'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:galvanized_iron',
                        A: 'minecraft:copper_block',
                        C: 'minecraft:blast_furnace'
                }
        )
        event.shaped(
                Item.of('concatenationcore:galvanized_iron'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:galvanized_iron_nugget',
                        B: 'tarotcards:the_hierophant'
                }
        ).returningItem('tarotcards:the_hierophant')
});
