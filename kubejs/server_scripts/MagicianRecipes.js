ServerEvents.recipes(event => {

        const remove = [
                'elementalcraft:small_container',
                'elementalcraft:evaporator',
                'elementalcraft:unset_jewel',
                'elementalcraft:spell_desk',
                'ars_nouveau:apprentice_spell_book',
                'ars_nouveau:archmage_spell_book',
                'ars_nouveau:enchanting_apparatus',
                'ars_nouveau:arcane_core',
                'ars_nouveau:scribes_table',
                'ars_nouveau:arcane_pedestal',
                'ars_nouveau:alteration_table',
                'waystones:warp_stone',
                'elementalcraft:elementpipe_impaired',
                'ars_nouveau:imbuement_chamber',
                'ars_nouveau:source_jar',
                'ars_nouveau:magebloom_fiber'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'ars_nouveau:worn_notebook', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'ars_nouveau:novice_spell_book', type: 'minecraft:crafting_shapeless' })
        // event.remove({ output: 'ars_nouveau:apprentice_spell_book', type: 'minecraft:crafting_shapeless' })
        // event.remove({ output: 'ars_nouveau:archmage_spell_book', type: 'minecraft:crafting_shapeless' })

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
        ).keepIngredient('tarotcards:the_magician')
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
        event.shaped(
                Item.of('elementalcraft:unset_jewel'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'concatenationcore:gold_paper',
                        B: 'elementalcraft:swift_alloy_ingot',
                        C: 'concatenationcore:specialized_holder'
                }
        )
        event.shaped(
                Item.of('elementalcraft:elementpipe_impaired', 12),
                [
                        '   ',
                        'ABA',
                        '   '
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'elementalcraft:contained_crystal'
                }
        )
        event.shaped(
                Item.of('elementalcraft:spell_desk'),
                [
                        ' A ',
                        'BCB',
                        ' B '
                ],
                {
                        A: 'minecraft:lectern',
                        B: 'elementalcraft:whiterock',
                        C: 'elementalcraft:springaline_shard'
                }
        )
        event.shaped(
                Item.of('concatenationcore:specialized_holder'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: 'elementalcraft:purecrystal',
                        A: 'elementalcraft:fireite_nugget'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:worn_notebook'),
                [
                        ' A ',
                        ' B ',
                        ' C '
                ],
                {
                        C: 'elementalcraft:spell_book',
                        B: 'minecraft:lapis_lazuli',
                        A: 'elementalcraft:springaline_shard'
                }
        ).keepIngredient('elementalcraft:spell_book')
        event.shaped(
                Item.of('ars_nouveau:novice_spell_book'),
                [
                        ' A ',
                        'BCB',
                        ' D '
                ],
                {
                        A: 'ars_nouveau:purple_archwood_sapling',
                        C: 'elementalcraft:spell_book',
                        D: 'tarotcards:the_sun',
                        B: 'concatenationcore:gold_paper'
                }
        ).keepIngredient('tarotcards:the_sun')
        event.shaped(
                Item.of('tarotcards:the_sun'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        A: 'concatenationcore:gold_paper',
                        B: 'elementalcraft:natural_air_source_seed',
                        D: 'tarotcards:the_magician',
                        C: 'elementalcraft:natural_water_source_seed',
                        E: 'elementalcraft:natural_fire_source_seed',
                        F: 'elementalcraft:natural_earth_source_seed'
                }
        ).keepIngredient('tarotcards:the_magician')
        event.shaped(
                Item.of('concatenationcore:alatoris'),
                [
                        'ABB',
                        'BBA',
                        'AAA'
                ],
                {
                        A: 'ars_nouveau:sourceberry_sack',
                        B: 'ars_nouveau:magebloom'
                }
        )
        event.shaped(
                Item.of('concatenationcore:alatoris_fiber'),
                [
                        'ABC',
                        'BBC',
                        'CCC'
                ],
                {
                        B: 'concatenationcore:alatoris',
                        A: 'ars_nouveau:enchanters_sword',
                        C: 'minecraft:gold_nugget'
                }
        ).damageIngredient('ars_nouveau:enchanters_sword')
        // event.shaped(
        //         Item.of('ars_nouveau:apprentice_spell_book'),
        //         [
        //                 'ABC',
        //                 'BDB',
        //                 'EBF'
        //         ],
        //         {
        //                 B: 'concatenationcore:alatoris_fiber',
        //                 A: 'ars_nouveau:drygmy_shard',
        //                 D: 'ars_nouveau:novice_spell_book',
        //                 C: 'ars_nouveau:whirlisprig_shards',
        //                 F: 'ars_nouveau:wixie_shards',
        //                 E: 'ars_nouveau:starbuncle_shards'
        //         }
        // )
        event.shaped(
                Item.of('concatenationcore:experienced_paper'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: 'ars_technica:gargantuan_experience_gem',
                        A: 'concatenationcore:gold_paper'
                }
        )
        // event.shaped(
        //         Item.of('ars_nouveau:archmage_spell_book'),
        //         [
        //                 'ABA',
        //                 'CDE',
        //                 'AFA'
        //         ],
        //         {
        //                 C: 'ars_elemental:fire_focus',
        //                 A: 'concatenationcore:experienced_paper',
        //                 E: 'ars_elemental:water_focus',
        //                 B: 'ars_elemental:air_focus',
        //                 F: 'ars_elemental:earth_focus',
        //                 D: 'ars_nouveau:apprentice_spell_book'
        //         }
        // )
        event.shaped(
                Item.of('concatenationcore:mundane_silver'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        A: 'ars_nouveau:source_gem',
                        B: 'thermal:silver_ingot'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:enchanting_apparatus'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'minecraft:gold_ingot',
                        B: 'ars_nouveau:sourcestone',
                        A: 'concatenationcore:sourcesilver',
                        D: '#elementalcraft:source_seeds/natural'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:arcane_core'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'minecraft:gold_ingot',
                        A: 'ars_nouveau:sourcestone',
                        D: 'concatenationcore:specialized_holder',
                        B: 'concatenationcore:sourcesilver'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:scribes_table'),
                [
                        'ABA',
                        'C C',
                        'D D'
                ],
                {
                        C: 'minecraft:gold_ingot',
                        D: 'ars_nouveau:purple_archwood_log',
                        A: 'ars_nouveau:archwood_slab',
                        B: 'concatenationcore:sourcesilver'
                }
        )
        event.shaped(
                Item.of('concatenationcore:elemental_lens', 4),
                [
                        ' A ',
                        'BCD',
                        ' E '
                ],
                {
                        D: 'elementalcraft:earth_lens',
                        A: 'elementalcraft:water_lens',
                        B: 'elementalcraft:air_lens',
                        C: 'elementalcraft:strongly_contained_crystal',
                        E: 'elementalcraft:fire_lens'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:arcane_pedestal'),
                [
                        'ABA',
                        'CAC',
                        'DAD'
                ],
                {
                        D: 'minecraft:gold_ingot',
                        A: 'ars_nouveau:sourcestone',
                        C: 'concatenationcore:sourcesilver',
                        B: 'concatenationcore:elemental_lens'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:alteration_table'),
                [
                        'A B',
                        'C D',
                        ' E '
                ],
                {
                        B: 'concatenationcore:alatoris',
                        D: 'minecraft:glow_ink_sac',
                        E: 'ars_nouveau:scribes_table',
                        C: 'concatenationcore:sourcesilver',
                        A: 'minecraft:book'
                }
        )
        event.shaped(
                Item.of('ars_nouveau:imbuement_chamber'),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        B: 'minecraft:gold_ingot',
                        C: 'elementalcraft:purecrystal',
                        D: 'tarotcards:the_sun',
                        A: 'ars_nouveau:archwood_planks'
                }
        ).keepIngredient('tarotcards:the_sun')
        event.shaped(
                Item.of('ars_nouveau:source_jar'),
                [
                        'AAA',
                        'BBB',
                        'CDC'
                ],
                {
                        C: 'minecraft:gold_ingot',
                        A: 'ars_nouveau:archwood_slab',
                        D: 'concatenationcore:sourcesilver',
                        B: 'concatenationcore:protean_glass'
                }
        )
        event.shaped(
                Item.of('waystones:warp_stone'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'elementalcraft:drenched_iron_ingot',
                        A: 'waystones:warp_dust',
                        B: 'elementalcraft:aircrystal'
                }
        )
        event.shaped(
                Item.of('concatenationcore:ice_shard', 2),
                [
                        'AB ',
                        'BA ',
                        '   '
                ],
                {
                        A: 'minecraft:blue_ice',
                        B: 'elementalcraft:watercrystal'
                }
        )
        event.shaped(
                Item.of('bloodmagic:sand_netherite'),
                [
                        'ABB',
                        'BBB',
                        'BBC'
                ],
                {
                        B: 'concatenationcore:acclimated_shard',
                        C: 'create:sand_paper',
                        A: 'concatenationcore:breaking_tool'
                }
        ).damageIngredient('concatenationcore:breaking_tool')
        event.shaped(
                Item.of('minecraft:netherite_scrap'),
                [
                        'ABB',
                        'BBC',
                        '   '
                ],
                {
                        C: 'elementalcraft:firecrystal',
                        B: 'concatenationcore:acclimated_shard',
                        A: 'concatenationcore:breaking_tool'
                }
        ).damageIngredient('concatenationcore:breaking_tool')
        event.shapeless(
                Item.of('ars_nouveau:magebloom_fiber', 4),
                [
                        'concatenationcore:cutting_tool',
                        'ars_nouveau:magebloom'
                ]
        ).damageIngredient('concatenationcore:breaking_tool')
        event.shapeless(
                Item.of('ars_nouveau:magebloom_fiber', 4),
                [
                        'ars_nouveau:magebloom_block'
                ]
        )
        event.recipes.ars_nouveau.imbuement(
                'concatenationcore:mundane_silver',
                'concatenationcore:sourcesilver',
                1000,
                []
        )
        event.recipes.ars_nouveau.enchanting_apparatus(
                ['ars_nouveau:drygmy_shard', 'concatenationcore:alatoris_fiber', 'ars_nouveau:whirlisprig_shards', 'concatenationcore:alatoris_fiber', 'ars_nouveau:starbuncle_shards', 'concatenationcore:alatoris_fiber', 'ars_nouveau:wixie_shards', 'concatenationcore:alatoris_fiber'],
                'ars_nouveau:novice_spell_book',
                'ars_nouveau:apprentice_spell_book',
                5000,
                true
        )
        event.recipes.ars_nouveau.enchanting_apparatus(
                ['ars_elemental:fire_focus', 'concatenationcore:experienced_paper', 'ars_elemental:water_focus', 'concatenationcore:experienced_paper', 'ars_elemental:air_focus', 'concatenationcore:experienced_paper', 'ars_elemental:earth_focus', 'concatenationcore:experienced_paper'],
                'ars_nouveau:apprentice_spell_book',
                'ars_nouveau:archmage_spell_book',
                100000,
                true
        )
        event.recipes.ars_nouveau.enchanting_apparatus(
                ['irons_spellbooks:arcane_essence', 'ars_nouveau:manipulation_essence', 'irons_spellbooks:arcane_essence', 'irons_spellbooks:rare_ink'],
                'concatenationcore:sourcesilver',
                'concatenationcore:ectorite',
                5000,
                true
        )
});
