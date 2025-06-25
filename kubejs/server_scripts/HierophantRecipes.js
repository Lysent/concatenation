ServerEvents.recipes(event => {
        event.remove({
                output: 'quarryplus:solid_fuel_quarry'
        })

        event.shaped(
                Item.of('quarryplus:solid_fuel_quarry'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'minecraft:bricks',
                        B: 'thermal:drill_head',
                        C: 'concatenationcore:galvanized_iron',
                        E: 'tarotcards:the_hierophant',
                        D: 'concatenationcore:quarry_brain'
                }
        ).keepIngredient(Item.of('tarotcards:the_hierophant').ignoreNBT())
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
                        D: 'minecraft:gold_block'
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
                Item.of('concatenationcore:galvanized_iron'),
                [
                        'ABB',
                        'BC ',
                        '   '
                ],
                {
                        B: 'minecraft:clay_ball',
                        A: 'create:zinc_ingot',
                        C: 'minecraft:iron_ingot'
                }
        )
});
