ServerEvents.recipes(event => {

        const remove = [
                'elementalcraft:small_container',
                'elementalcraft:evaporator'

        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

    event.shaped(
            Item.of('concatenationcore:protean_glass', 4),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    B: 'minecraft:glass',
                    A: 'elementalcraft:contained_crystal',
                    C: 'tarotcards:the_magician'
            }
    )
    event.shaped(
            Item.of('elementalcraft:small_container'),
            [
                    ' A ',
                    'ABA',
                    ' A '
            ],
            {
                    B: 'concatenationcore:protean_glass',
                    A: 'elementalcraft:elementpipe_impaired'
            }
    )
    event.shaped(
    Item.of('elementalcraft:evaporator'),
    [
        'ABA',
        'ABA',
        'ACA'
    ],
    {
        B: 'concatenationcore:protean_glass',
        A: 'minecraft:iron_ingot',
        C: 'elementalcraft:contained_crystal'
    }
)
});
