//priority: 200
ServerEvents.recipes(event => {

        const remove = [
                'hexerei:cloth',
                'bloodmagic:sacrificaldagger',
                'bloodmagic:altar',
                'hexerei:witch_helmet',
                'hexerei:witch_chestplate',
                'hexerei:witch_boots',
                'theurgy:pyromantic_brazier',
                'theurgy:calcination_oven',
                'theurgy:liquefaction_cauldron',
                'theurgy:distiller',
                'theurgy:incubator',
                'reliquary:witherless_rose',
                'enderstorage:ender_pouch',
                'bloodmagic:sacrificialdagger',
                'reliquary:alkahestry_altar',
                'theurgy:amethyst_divination_rod',
                'theurgy:divination_rod_t1',
                'theurgy:divination_rod_t2',
                'theurgy:divination_rod_t3',
                'theurgy:divination_rod_t4',
                'hexerei:mixing_cauldron'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        // event.replaceInput(
        //         { mod: 'dimdoors' },
        //         'minecraft:ender_pearl',
        //         'concatenationcore:woven_pearl'
        // )
        event.replaceInput(
                { mod: 'botanypots' },
                'minecraft:flower_pot',
                'concatenationcore:botanic_jar'
        )
        event.replaceInput(
                { mod: 'botanypots' },
                'minecraft:hopper',
                'concatenationcore:pipe_base'
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
                        '#concatenation:magic_cards_t2'
                ]
        ).keepIngredient('#concatenation:magic_cards_t2')
        // event.shaped(
        //         Item.of('dimdoors:rift_blade'),
        //         [
        //                 ' A ',
        //                 'BCB',
        //                 ' D '
        //         ],
        //         {
        //                 C: 'bloodmagic:daggerofsacrifice',
        //                 D: 'concatenationcore:nebulous_handle',
        //                 B: 'minecraft:obsidian',
        //                 A: 'minecraft:crying_obsidian'
        //         }
        // )
        // event.shaped(
        //         Item.of('concatenationcore:woven_pearl', 2),
        //         [
        //                 'AB ',
        //                 ' C ',
        //                 ' B '
        //         ],
        //         {
        //                 C: 'minecraft:ender_pearl',
        //                 A: 'dimdoors:rift_blade',
        //                 B: 'minecraft:black_wool'
        //         }
        // ).damageIngredient('dimdoors:rift_blade')
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
        event.shaped(
                Item.of('concatenationcore:light_totem'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: 'minecraft:gunpowder',
                        D: 'concatenationcore:descran',
                        C: 'minecraft:redstone',
                        B: 'born_in_chaos_v1:fire_dust'
                }
        )
        // event.shaped(
        //         Item.of('dimdoors:rift_remover'),
        //         [
        //                 ' A ',
        //                 'ABA',
        //                 ' A '
        //         ],
        //         {
        //                 B: 'reliquary:nebulous_heart',
        //                 A: 'createmetallurgy:gold_dust'
        //         }
        // )

        // Lovers
        event.shaped(
                Item.of('tarotcards:the_lovers'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:light_totem',
                        B: 'concatenationcore:antimony',
                        A: 'concatenationcore:gold_paper',
                        D: '#concatenation:magic_cards_t2',
                        E: 'irons_spellbooks:eldritch_manuscript'
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
                        B: 'concatenationcore:antimony'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        // event.shaped(
        //         Item.of('tarotcards:the_lovers'),
        //         [
        //                 'ABA',
        //                 'CDE',
        //                 'ABA'
        //         ],
        //         {
        //                 E: 'ars_elemental:flashpine_pod',
        //                 C: 'concatenationcore:alatoris_fiber',
        //                 A: 'concatenationcore:gold_paper',
        //                 B: 'concatenationcore:antimony',
        //                 D: '#concatenation:magic_cards_t2'
        //         }
        // ).keepIngredient('#concatenation:magic_cards_t2')
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
                        B: 'concatenationcore:antimony',
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
                        A: 'concatenationcore:antimony'
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
                        B: '#minecraft:logs',
                        E: 'minecraft:copper_block',
                        D: 'concatenationcore:antimony'
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
        event.shaped(
                Item.of('enderstorage:ender_pouch'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        D: 'hexerei:ender_satchel',
                        A: 'minecraft:leather',
                        B: 'minecraft:blaze_powder',
                        C: 'minecraft:quartz'
                }
        )
        event.shaped(
                Item.of('minecraft:glowstone_dust', 81),
                [
                        'ABA',
                        'A A',
                        'ACA'
                ],
                {
                        C: 'hexerei:moon_dust',
                        B: 'concatenationcore:descran',
                        A: 'concatenationcore:experience_orb'
                }
        )
        event.shapeless(
                Item.of('tconstruct:blood_slime_leaves', 16),
                [
                        'hexerei:blood_bottle',
                        'minecraft:nether_wart_block'
                ]
        )
        event.shaped(
                Item.of('bloodmagic:sacrificialdagger'),
                [
                        ' AA',
                        ' BA',
                        'C  '
                ],
                {
                        B: 'concatenationcore:descran',
                        C: 'minecraft:diamond',
                        A: 'concatenationcore:pyrite'
                }
        )
        event.shaped(
                Item.of('concatenationcore:mysterious_tablet'),
                [
                        ' A ',
                        'BCD',
                        ' E '
                ],
                {
                        B: 'thermal:blizz_powder',
                        D: 'irons_spellbooks:arcane_essence',
                        E: 'hexerei:belladonna_flowers',
                        C: 'concatenationcore:occult_calling',
                        A: 'hexerei:book_of_shadows'
                }
        )
        event.shaped(
                Item.of('reliquary:alkahestry_altar'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        E: 'reliquary:catalyzing_gland',
                        B: 'concatenationcore:pyrite',
                        C: 'reliquary:nebulous_heart',
                        A: 'minecraft:obsidian',
                        D: 'minecraft:redstone_lamp'
                }
        )
        event.shaped(
                Item.of('minecraft:enchanted_book').enchant('veinmining:vein_mining', 1),
                [
                        'AB ',
                        'CDC',
                        ' B '
                ],
                {
                        A: 'tarotcards:temperance',
                        C: 'concatenationcore:pyrite',
                        D: 'minecraft:enchanted_book',
                        B: 'concatenationcore:blood_soaked_fabric'
                }
        ).keepIngredient('tarotcards:temperance')
        event.shaped(
                Item.of('minecraft:enchanted_book').enchant('veinmining:vein_mining', 3),
                [
                        ' A ',
                        'BCB',
                        ' A '
                ],
                {
                        C: 'minecraft:enchanted_book',
                        B: 'concatenationcore:blood_powder',
                        A: 'tconstruct:manyullyn_ingot'
                }
        )
        event.shaped(
                Item.of('concatenationcore:botanic_jar'),
                [
                        ' A ',
                        'BCB',
                        'BBB'
                ],
                {
                        A: 'concatenationcore:pyrite',
                        B: 'minecraft:brick',
                        C: 'hexerei:herb_jar'
                }
        )
        event.shapeless(
                Item.of('summonerscrolls:shulkerman_summoner_scroll'),
                [
                        'summonerscrolls:enderman_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:charged_creeper_summoner_scroll'),
                [
                        'summonerscrolls:creeper_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:shulkerman_summoner_scroll'),
                [
                        'summonerscrolls:enderman_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:iron_golem_summoner_scroll', 2),
                [
                        'summonerscrolls:iron_golem_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:piglin_brute_summoner_scroll'),
                [
                        'summonerscrolls:piglin_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:cave_spider_summoner_scroll'),
                [
                        'summonerscrolls:spider_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:spider_jockey_summoner_scroll'),
                [
                        'summonerscrolls:spider_summoner_scroll',
                        'summonerscrolls:skeleton_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:stray_summoner_scroll'),
                [
                        'summonerscrolls:skeleton_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shapeless(
                Item.of('summonerscrolls:husk_summoner_scroll'),
                [
                        'summonerscrolls:zombie_summoner_scroll',
                        'summonerscrolls:enhancement_scroll'
                ]
        )
        event.shaped(
                Item.of('theurgy:divination_rod_t1'),
                [
                        ' AB',
                        ' CA',
                        'C  '
                ],
                {
                        A: 'minecraft:glass',
                        B: 'concatenationcore:pyrite',
                        C: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('theurgy:divination_rod_t2'),
                [
                        ' AB',
                        ' CA',
                        'D  '
                ],
                {
                        B: 'concatenationcore:pyrite',
                        C: 'minecraft:amethyst_shard',
                        A: 'minecraft:gold_nugget',
                        D: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('theurgy:divination_rod_t3'),
                [
                        ' AB',
                        ' CA',
                        'D  '
                ],
                {
                        A: 'minecraft:quartz',
                        B: 'concatenationcore:descran',
                        C: 'minecraft:diamond',
                        D: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('theurgy:divination_rod_t4'),
                [
                        ' AB',
                        ' CA',
                        'D  '
                ],
                {
                        B: 'concatenationcore:antimony',
                        C: 'minecraft:netherite_ingot',
                        A: 'minecraft:blaze_rod',
                        D: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('theurgy:amethyst_divination_rod'),
                [
                        ' AB',
                        ' CA',
                        'C  '
                ],
                {
                        A: 'minecraft:purple_dye',
                        B: 'concatenationcore:pyrite',
                        C: 'minecraft:stick'
                }
        )
        event.shaped(
                Item.of('tarotcards:temperance'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        B: 'perdition:marmor_exaltatus',
                        C: 'concatenationcore:experience_orb',
                        D: 'tarotcards:the_hierophant',
                        A: 'concatenationcore:silver_paper',
                        E: 'reliquary:nebulous_heart'
                }
        ).keepIngredient('tarotcards:the_hierophant')
        event.shapeless(
                Item.of('minecraft:candle'),
                [
                        'minecraft:string',
                        'hexerei:animal_fat',
                        'hexerei:animal_fat'
                ]
        )
        event.shaped(
                Item.of('hexerei:mixing_cauldron'),
                [
                        'ADA',
                        'BCB',
                        'BBB'
                ],
                {
                        B: 'minecraft:iron_ingot',
                        C: 'minecraft:cauldron',
                        A: '#minecraft:candles',
                        D: 'tarotcards:temperance'
                }
        ).keepIngredient('tarotcards:temperance')

        // Botany Pots
        event.recipes.botanypots.crop(
                'hexerei:mandrake_plant',
                ['dirt'],
                { block: 'hexerei:mandrake_plant' },
                [
                        Item.of('hexerei:mandrake_flowers')
                                .withChance(100)
                                .withRolls(1, 1),
                        Item.of('hexerei:mandrake_root')
                                .withChance(100)
                                .withRolls(0, 1)
                ],
                100,
                1
        )

        event.recipes.botanypots.crop(
                'hexerei:belladonna_plant',
                ['dirt'],
                { block: 'hexerei:belladonna_plant' },
                [
                        Item.of('hexerei:belladonna_flowers')
                                .withChance(100)
                                .withRolls(1, 1),
                        Item.of('hexerei:belladonna_berries')
                                .withChance(100)
                                .withRolls(0, 1)
                ],
                100,
                1
        )

        event.recipes.botanypots.soil('the_deep_void:grim_soil', { block: 'the_deep_void:grim_soil' }, ['grimsoil'], 1, 1.5);
        event.recipes.botanypots.soil('the_deep_void:desolate_soil', { block: 'the_deep_void:grim_soil' }, ['grimsoil'], 1, 1.25);
        event.recipes.botanypots.soil('perdition:terra_purgata', { block: 'perdition:terra_purgata' }, ['grimsoil'], 1, 1.0);
        event.recipes.botanypots.crop(
                'the_deep_void:grimberry',
                ['grimsoil'],
                { block: 'perdition:limbo_bush' },
                [
                        Item.of('the_deep_void:grimberry')
                                .withChance(100)
                                .withRolls(1, 1),
                        Item.of('the_deep_void:grimberry')
                                .withChance(100)
                                .withRolls(0, 1)
                ],
                7000,
                1
        )
});
