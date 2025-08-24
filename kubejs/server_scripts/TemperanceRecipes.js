ServerEvents.recipes(event => {

        const remove = [
                'hexerei:cloth',
                'bloodmagic:sacrificaldagger',
                'bloodmagic:altar',
                'hexerei:witch_helmet',
                'hexerei:witch_chesplate',
                'hexerei:witch_boots',
                'theurgy:pyromantic_brazier',
                'theurgy:calcination_oven',
                'theurgy:liquefaction_cauldron',
                'theurgy:distiller',
                'theurgy:incubator',
                'reliquary:witherless_rose'
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
                        A: 'concatenationcore:cutting_tool'
                }
        ).damageIngredient('concatenationcore:cutting_tool')
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

        // Lovers
        event.shaped(
                Item.of('tarotcards:the_lovers'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'bloodmagic:weakbloodshard',
                        A: 'concatenationcore:gold_paper',
                        C: 'tarotcards:the_moon'
                }
        ).keepIngredient('tarotcards:the_moon')
        event.shaped(
                Item.of('tarotcards:the_lovers'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:light_totem',
                        B: 'concatenationcore:blood_powder',
                        A: 'concatenationcore:gold_paper',
                        D: '#concatenation:magic_cards_t2',
                        E: 'irons_spellbooks:rare_ink'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('tarotcards:the_lovers'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        E: 'ars_elemental:flashpine_pod',
                        C: 'concatenationcore:alatoris_fiber',
                        A: 'concatenationcore:gold_paper',
                        D: '#concatenation:magic_cards_t2',
                        B: 'concatenationcore:ectorite'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('tarotcards:the_lovers'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        E: 'ars_elemental:flashpine_pod',
                        C: 'concatenationcore:alatoris_fiber',
                        A: 'concatenationcore:gold_paper',
                        B: 'concatenationcore:bloodstained_steel',
                        D: '#concatenation:magic_cards_t2'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shapeless(
                Item.of('tarotcards:the_lovers'),
                [
                        'concatenationcore:the_error',
                        'concatenationcore:concatenator'
                ]
        ).keepIngredient('concatenationcore:concatenator')
        event.shaped(
                Item.of('theurgy:pyromantic_brazier'),
                [
                        'ABA',
                        'ADA',
                        'CCC'
                ],
                {
                        C: 'minecraft:stone',
                        A: 'minecraft:copper_block',
                        B: 'concatenationcore:ectorite',
                        D: 'tarotcards:the_lovers'
                }
        ).keepIngredient('tarotcards:the_lovers')
        event.shaped(
                Item.of('theurgy:pyromantic_brazier'),
                [
                        'ABA',
                        'ADA',
                        'CCC'
                ],
                {
                        C: 'minecraft:stone',
                        B: 'concatenationcore:bloodstained_steel',
                        A: 'minecraft:copper_block',
                        D: 'tarotcards:the_lovers'
                }
        ).keepIngredient('tarotcards:the_lovers')
        event.shaped(
                Item.of('theurgy:pyromantic_brazier'),
                [
                        'ABA',
                        'ADA',
                        'CCC'
                ],
                {
                        C: 'minecraft:stone',
                        B: 'concatenationcore:blood_powder',
                        A: 'minecraft:copper_block',
                        D: 'tarotcards:the_lovers'
                }
        ).keepIngredient('tarotcards:the_lovers')
        event.shaped(
                Item.of('theurgy:calcination_oven'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: 'elementalcraft:drenched_iron_block',
                        A: 'minecraft:copper_ingot'
                }
        )
        event.shaped(
                Item.of('theurgy:calcination_oven'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        A: 'minecraft:copper_ingot',
                        B: 'bloodmagic:fireritualstone'
                }
        )
        event.shapeless(
                Item.of('bloodmagic:fireritualstone'),
                [
                        'bloodmagic:blankrune',
                        'bloodmagic:firescribetool'
                ]
        )
        event.shaped(
                Item.of('theurgy:liquefaction_cauldron'),
                [
                        'ABA',
                        'ACA',
                        'DDD'
                ],
                {
                        D: 'minecraft:stone',
                        C: 'irons_spellbooks:alchemist_cauldron',
                        B: 'minecraft:copper_block',
                        A: 'minecraft:copper_ingot'
                }
        )
        event.shaped(
                Item.of('theurgy:liquefaction_cauldron'),
                [
                        'ABA',
                        'AEA',
                        'DCD'
                ],
                {
                        D: 'minecraft:stone',
                        C: 'minecraft:cauldron',
                        B: 'minecraft:copper_block',
                        A: 'minecraft:copper_ingot',
                        E: 'ars_nouveau:wixie_charm'
                }
        )
        event.shaped(
                Item.of('theurgy:distiller'),
                [
                        ' A ',
                        'BCB',
                        'DDD'
                ],
                {
                        D: 'minecraft:stone',
                        C: 'elementalcraft:drenched_iron_block',
                        B: 'minecraft:copper_ingot',
                        A: 'concatenationcore:ectorite'
                }
        )
        event.shaped(
                Item.of('theurgy:distiller'),
                [
                        ' A ',
                        'BCB',
                        'DDD'
                ],
                {
                        D: 'minecraft:stone',
                        C: 'elementalcraft:drenched_iron_block',
                        A: 'concatenationcore:bloodstained_steel',
                        B: 'minecraft:copper_ingot'
                }
        )
        event.shaped(
                Item.of('theurgy:distiller'),
                [
                        ' A ',
                        'BCB',
                        'DDD'
                ],
                {
                        D: 'minecraft:stone',
                        C: 'elementalcraft:drenched_iron_block',
                        A: 'concatenationcore:blood_powder',
                        B: 'minecraft:copper_ingot'
                }
        )
        event.shaped(
                Item.of('theurgy:incubator'),
                [
                        'ABA',
                        'CCC',
                        'ADA'
                ],
                {
                        A: 'minecraft:stone',
                        B: '#minecraft:logs',
                        D: 'minecraft:copper_block',
                        C: 'concatenationcore:pyrite'
                }
        )
        event.shaped(
                Item.of('theurgy:incubator'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'minecraft:stone',
                        C: 'minecraft:gold_ingot',
                        B: 'minecraft:oak_log',
                        E: 'minecraft:copper_block',
                        D: 'concatenationcore:ectorite'
                }
        )

        event.shaped(
                Item.of('reliquary:witherless_rose'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        A: 'reliquary:hero_medallion',
                        B: 'minecraft:nether_star',
                        E: 'minecraft:wither_rose',
                        C: 'reliquary:fertile_lily_pad',
                        D: 'minecraft:rose_bush',
                        F: 'elementalcraft:fireite_ingot'
                }
        )
});
