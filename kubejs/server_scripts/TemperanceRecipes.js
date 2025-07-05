ServerEvents.recipes(event => {

        const remove = [
                'hexerei:cloth',
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.shaped(
                Item.of('concatenationcore:kestrel'),
                [
                        '  A',
                        ' B ',
                        'CD '
                ],
                {
                        B: 'asr:ender_giant_sword',
                        D: 'tarotcards:temperance',
                        A: 'minecraft:ender_eye',
                        C: 'concatenationcore:gold_handle'
                }
        ).keepIngredient('tarotcards:temperance')
        event.shaped(
                Item.of('hexerei:cloth'),
                [
                        'ABB',
                        'BBC',
                        '   '
                ],
                {
                        C: 'minecraft:diamond',
                        B: 'hexerei:infused_fabric',
                        A: 'minecraft:diamond_sword'
                }
        ).damageIngredient('minecraft:diamond_sword')
        event.shaped(
                Item.of('hexerei:broom_thruster_brush'),
                [
                        ' A ',
                        'ABA',
                        'CDC'
                ],
                {
                        C: 'minecraft:iron_ingot',
                        D: 'minecraft:blaze_powder',
                        A: 'concatenationcore:alclad',
                        B: 'thermal:charcoal_block'
                }
        )
});
