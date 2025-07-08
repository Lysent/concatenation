ServerEvents.recipes(event => {

        const remove = [
                'hexerei:cloth',
                'bloodmagic:sacrificaldagger',
                'bloodmagic:altar'
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
        event.shaped(
                Item.of('bloodmagic:altar'),
                [
                        'ABA',
                        'ACA',
                        'DED'
                ],
                {
                        E: 'concatenationcore:descran',
                        B: 'hexerei:blood_bucket',
                        C: 'tarotcards:the_moon',
                        A: 'minecraft:polished_blackstone',
                        D: 'concatenationcore:pyrite'
                }
        ).keepIngredient('tarotcards:the_moon')
        event.shaped(
                Item.of('tarotcards:the_moon'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        F: 'hexerei:moon_dust_brush',
                        D: 'tarotcards:temperance',
                        E: 'hexerei:blood_bucket',
                        B: 'born_in_chaos_v1:fire_dust',
                        A: 'concatenationcore:gold_paper',
                        C: 'minecraft:popped_chorus_fruit'
                }
        ).keepIngredient('tarotcards:temperance')
});
