ServerEvents.recipes(event => {

        const remove = [
                'hexerei:cloth',
                'bloodmagic:sacrificaldagger',
                'bloodmagic:altar',
                'hexerei:witch_helmet',
                'hexerei:witch_chesplate',
                'hexerei:witch_boots'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.replaceInput(
                { mod: 'dimdoors' },
                'minecraft:ender_pearl',
                'concatenationcore:woven_pearl'
        )

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
                Item.of('hexerei:cloth', 2),
                [
                        'ABB',
                        'BB ',
                        '   '
                ],
                {
                        B: 'hexerei:infused_fabric',
                        A: '#concatenation:cutting_tools'
                }
        ).damageIngredient('#concatenation:cutting_tools')
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
                        B: 'concatenationcore:light_totem',
                        A: 'concatenationcore:gold_paper',
                        C: 'minecraft:popped_chorus_fruit'
                }
        ).keepIngredient('tarotcards:temperance')
        event.shapeless(
                Item.of('concatenationcore:nebulous_handle'),
                [
                        'reliquary:nebulous_heart',
                        'concatenationcore:gold_handle',
                        'tarotcards:the_moon'
                ]
        ).keepIngredient('tarotcards:the_moon')
        event.shaped(
                Item.of('dimdoors:rift_blade'),
                [
                        ' A ',
                        'BCB',
                        ' D '
                ],
                {
                        C: 'bloodmagic:daggerofsacrifice',
                        D: 'concatenationcore:nebulous_handle',
                        B: 'minecraft:obsidian',
                        A: 'minecraft:crying_obsidian'
                }
        )
        event.shaped(
                Item.of('concatenationcore:woven_pearl', 2),
                [
                        'AB ',
                        ' C ',
                        ' B '
                ],
                {
                        C: 'minecraft:ender_pearl',
                        A: 'dimdoors:rift_blade',
                        B: 'minecraft:black_wool'
                }
        ).damageIngredient('dimdoors:rift_blade')
        event.shaped(
                Item.of('hexerei:witch_helmet'),
                [
                        'AAA',
                        'A A',
                        '   '
                ],
                {
                        A: 'hexerei:cloth'
                }
        )
        event.shaped(
                Item.of('hexerei:witch_chestplate'),
                [
                        'A A',
                        'AAA',
                        'AAA'
                ],
                {
                        A: 'hexerei:cloth'
                }
        )
        event.shaped(
                Item.of('hexerei:witch_boots'),
                [
                        '   ',
                        'A A',
                        'A A'
                ],
                {
                        A: 'hexerei:cloth'
                }
        )
        event.shapeless(
                Item.of('concatenationcore:light_totem'),
                [
                        'born_in_chaos_v1:fire_dust',
                        'concatenationcore:descran'
                ]
        )
});
