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
                'ars_nouveau:magebloom_fiber',
                'reliquary:angelheart_vial',
                'reliquary:angelic_feather',
                'reliquary:phoenix_down',
                'reliquary:alkahestry_tome',
                'reliquary:serpent_staff',
                'reliquary:rending_gale',
                'reliquary:glacial_staff',
                'reliquary:pyromancer_staff',
                'reliquary:sojourner_staff',
                'reliquary:lantern_of_paranoia',
                'reliquary:interdiction_torch',
                'reliquary:salamander_eye',
                'reliquary:magicbane',
                'concatenationcore:gold_stick',
                'ars_nouveau:thread_undying',
                'reliquary:rod_of_lyssa',
                'reliquary:void_tear',
                'reliquary:salamander_eye',
                'reliquary:hero_medallion',
                'torchmaster:feral_flare_lantern',
                'torchmaster:frozen_pearl',
                'reliquary:shears_of_winter',
                'spelled:ancient_knowledge_tome',
                'spelled:leveling_altar',
                'spelled:spell_book',
                'elementalcraft:instrument_retriever',
                'elementalcraft:pipe_priority_rings',
                'elementalcraft:cover_frame',
                'elementalcraft:pipe_priority_rings',
                'elementalcraft:sorter',
                'waystones:warp_plate'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'concatenationcore:conflagration', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'concatenationcore:windflaw', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'concatenationcore:riparian', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'concatenationcore:temblor', type: 'minecraft:crafting_shaped' })

        event.remove({ output: 'ars_nouveau:worn_notebook', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'ars_nouveau:novice_spell_book', type: 'minecraft:crafting_shapeless' })
        // event.remove({ output: 'ars_nouveau:apprentice_spell_book', type: 'minecraft:crafting_shapeless' })
        // event.remove({ output: 'ars_nouveau:archmage_spell_book', type: 'minecraft:crafting_shapeless' })

        event.remove({ output: 'projecte:low_covalence_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'projecte:medium_covalence_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'projecte:high_covalence_dust', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'projecte:philosophers_stone', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'projecte:alchemical_coal', type: 'minecraft:crafting_shapeless' })

        event.replaceInput(
                { output: 'reliquary:handgun' },
                'reliquary:slime_pearl',
                'reliquary:destruction_catalyst'
        );

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
                Item.of('concatenationcore:experienced_paper', 4),
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
                        B: 'elementalcraft:drenched_iron_ingot',
                        A: 'waystones:warp_dust',
                        C: 'elementalcraft:purecrystal'
                }
        )
        event.shaped(
                Item.of('concatenationcore:ice_shard', 4),
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
        event.shapeless(
                Item.of('elementalcraft:small_container'),
                [
                        'elementalcraft:small_container'
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
                10000,
                true
        )
        event.recipes.ars_nouveau.enchanting_apparatus(
                ['irons_spellbooks:arcane_essence', 'ars_nouveau:manipulation_essence', 'irons_spellbooks:arcane_essence', 'irons_spellbooks:rare_ink'],
                'concatenationcore:sourcesilver',
                'concatenationcore:ectorite',
                5000,
                true
        )
        event.recipes.ars_nouveau.enchanting_apparatus(
                ['theurgy:alchemical_salt_mineral', 'theurgy:sal_ammoniac_crystal', 'theurgy:alchemical_salt_mineral', 'theurgy:sal_ammoniac_crystal', 'theurgy:alchemical_salt_mineral', 'ars_elemental:lesser_earth_focus', 'theurgy:alchemical_salt_mineral', 'ars_elemental:lesser_air_focus'],
                'ars_nouveau:fire_essence',
                'projecte:high_covalence_dust',
                5000,
                true
        )
        event.recipes.ars_nouveau.enchanting_apparatus(
                ['minecraft:totem_of_undying', 'ars_nouveau:abjuration_essence', 'ars_nouveau:abjuration_essence', 'minecraft:phantom_membrane', 'minecraft:phantom_membrane', 'reliquary:phoenix_down'],
                'ars_nouveau:blank_thread',
                'ars_nouveau:thread_undying',
                5000,
                true
        )

        // Hanged Man
        event.shaped(
                Item.of('concatenationcore:kestrel_r'),
                [
                        'ABC',
                        'DCE',
                        'FGA'
                ],
                {
                        G: 'reliquary:rending_gale',
                        B: 'reliquary:void_tear',
                        A: 'concatenationcore:gold_paper',
                        C: 'concatenationcore:bloodstained_steel',
                        F: 'concatenationcore:kestrel',
                        D: 'reliquary:magicbane',
                        E: 'born_in_chaos_v1:transformative_flower'
                }
        )
        event.shaped(
                Item.of('tarotcards:the_hanged_man'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:antimony',
                        C: 'irons_spellbooks:energized_core',
                        D: '#concatenation:magic_cards_t2',
                        A: 'concatenationcore:gold_paper',
                        E: 'bloodmagic:cyclingcatalyst'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('tarotcards:the_hanged_man'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        D: '#concatenation:magic_cards_t2',
                        A: 'concatenationcore:gold_paper',
                        B: 'concatenationcore:antimony',
                        E: 'bloodmagic:cyclingcatalyst',
                        C: 'concatenationcore:alatoris_fiber'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('tarotcards:the_hanged_man'),
                [
                        'ABA',
                        'CDE',
                        'ABA'
                ],
                {
                        E: 'irons_spellbooks:energized_core',
                        D: '#concatenation:magic_cards_t2',
                        A: 'concatenationcore:gold_paper',
                        C: 'concatenationcore:alatoris_fiber',
                        B: 'concatenationcore:antimony'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('reliquary:angelheart_vial', 2),
                [
                        'ABA',
                        'CDE',
                        ' F '
                ],
                {
                        D: 'tarotcards:the_hanged_man',
                        F: 'reliquary:empty_potion_vial',
                        A: 'minecraft:glow_berries',
                        C: 'reliquary:infernal_claw',
                        E: 'reliquary:fertile_essence',
                        B: 'concatenationcore:glowing_gold'
                }
        ).keepIngredient('tarotcards:the_hanged_man')
        event.shaped(
                Item.of('reliquary:angelic_feather'),
                [
                        'ABC',
                        'DE ',
                        '   '
                ],
                {
                        E: 'tarotcards:the_hanged_man',
                        A: 'celestisynth:starstruck_feather',
                        C: 'reliquary:bat_wing',
                        B: 'reliquary:nebulous_heart',
                        D: 'reliquary:fertile_essence'
                }
        ).keepIngredient('tarotcards:the_hanged_man')
        event.shaped(
                Item.of('reliquary:phoenix_down'),
                [
                        'AB ',
                        '   ',
                        '   '
                ],
                {
                        A: 'reliquary:angelic_feather',
                        B: 'reliquary:angelheart_vial'
                }
        )
        event.shaped(
                Item.of('reliquary:alkahestry_tome'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        B: 'tarotcards:the_hanged_man',
                        C: 'reliquary:infernal_chalice',
                        D: 'reliquary:guardian_spike',
                        E: 'elementalcraft:spell_book',
                        G: 'reliquary:emperor_chalice',
                        I: 'minecraft:wither_skeleton_skull',
                        H: 'tconstruct:soulsteel_ingot',
                        A: 'minecraft:dragon_head',
                        F: 'reliquary:eye_of_the_storm'
                }
        ).keepIngredient('tarotcards:the_hanged_man')
        event.shaped(
                Item.of('reliquary:alkahestry_tome'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        B: 'tarotcards:the_hanged_man',
                        C: 'reliquary:infernal_chalice',
                        D: 'reliquary:guardian_spike',
                        E: 'irons_spellbooks:netherite_spell_book',
                        G: 'reliquary:emperor_chalice',
                        I: 'minecraft:wither_skeleton_skull',
                        H: 'tconstruct:soulsteel_ingot',
                        A: 'minecraft:dragon_head',
                        F: 'reliquary:eye_of_the_storm'
                }
        ).keepIngredient('tarotcards:the_hanged_man')
        event.shaped(
                Item.of('reliquary:alkahestry_tome'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        B: 'tarotcards:the_hanged_man',
                        C: 'reliquary:infernal_chalice',
                        D: 'reliquary:guardian_spike',
                        E: 'bloodmagic:archmagebloodorb',
                        G: 'reliquary:emperor_chalice',
                        I: 'minecraft:wither_skeleton_skull',
                        H: 'tconstruct:soulsteel_ingot',
                        A: 'minecraft:dragon_head',
                        F: 'reliquary:eye_of_the_storm'
                }
        ).keepIngredient('tarotcards:the_hanged_man')

        event.shaped(
                Item.of('reliquary:rending_gale'),
                [
                        'ABC',
                        'DEB',
                        'FDA'
                ],
                {
                        D: 'minecraft:gold_ingot',
                        A: 'reliquary:bat_wing',
                        B: 'reliquary:void_tear',
                        E: 'reliquary:alkahestry_tome',
                        F: 'minecraft:stick',
                        C: 'reliquary:eye_of_the_storm'
                }
        ).keepIngredient('reliquary:alkahestry_tome')
        event.shaped(
                Item.of('reliquary:glacial_staff'),
                [
                        'ABC',
                        'DEB',
                        'FDA'
                ],
                {
                        A: 'reliquary:frozen_core',
                        B: 'reliquary:void_tear',
                        C: 'reliquary:shears_of_winter',
                        D: 'minecraft:diamond',
                        E: 'reliquary:alkahestry_tome',
                        F: 'reliquary:ice_magus_rod'
                }
        ).keepIngredient('reliquary:alkahestry_tome')
        event.shaped(
                Item.of('reliquary:pyromancer_staff'),
                [
                        ' AB',
                        'CDE',
                        'FC '
                ],
                {
                        B: 'reliquary:infernal_claws',
                        A: 'reliquary:void_tear',
                        E: 'reliquary:infernal_tear',
                        D: 'reliquary:alkahestry_tome',
                        F: 'reliquary:ice_magus_rod',
                        C: 'reliquary:molten_core'
                }
        ).keepIngredient('reliquary:alkahestry_tome')
        event.shaped(
                Item.of('reliquary:sojourner_staff'),
                [
                        'ABC',
                        'DEB',
                        'FDA'
                ],
                {
                        A: 'minecraft:gold_ingot',
                        F: 'elementalcraft:hardened_handle',
                        B: 'reliquary:void_tear',
                        E: 'reliquary:alkahestry_tome',
                        D: 'reliquary:molten_core',
                        C: 'concatenationcore:glowing_gold'
                }
        ).keepIngredient('reliquary:alkahestry_tome')
        event.shaped(
                Item.of('reliquary:serpent_staff'),
                [
                        'ABC',
                        'DEB',
                        'FDA'
                ],
                {
                        B: 'reliquary:void_tear',
                        E: 'reliquary:alkahestry_tome',
                        F: 'minecraft:stick',
                        A: 'reliquary:chelicerae',
                        C: 'celestisynth:eyebomination',
                        D: 'reliquary:kraken_shell'
                }
        ).keepIngredient('reliquary:alkahestry_tome')
        event.shaped(
                Item.of('reliquary:lantern_of_paranoia'),
                [
                        'AB ',
                        ' C ',
                        ' D '
                ],
                {
                        D: 'elementalcraft:springaline_lantern',
                        A: 'reliquary:sojourner_staff',
                        B: 'torchmaster:feral_flare_lantern',
                        C: 'reliquary:molten_core'
                }
        ).keepIngredient('reliquary:sojourner_staff')
        event.shaped(
                Item.of('reliquary:interdiction_torch', 4),
                [
                        'ABC',
                        '   ',
                        '   '
                ],
                {
                        B: 'minecraft:blaze_rod',
                        A: 'reliquary:lantern_of_paranoia',
                        C: 'reliquary:nebulous_heart'
                }
        ).keepIngredient('reliquary:lantern_of_paranoia')
        // event.shaped(
        //         Item.of('reliquary:salamander_eye'),
        //         [
        //                 'ABC',
        //                 'D  ',
        //                 '   '
        //         ],
        //         {
        //                 C: 'reliquary:frozen_core',
        //                 A: 'reliquary:pyromancer_staff',
        //                 D: 'torchmaster:frozen_pearl',
        //                 B: 'reliquary:molten_core'
        //         }
        // )
        event.shaped(
                Item.of('reliquary:magicbane'),
                [
                        ' AB',
                        'ACA',
                        'DA '
                ],
                {
                        C: 'reliquary:fortune_coin',
                        B: 'asr:golden_giant_sword',
                        A: 'concatenationcore:sourcesilver',
                        D: 'concatenationcore:nebulous_handle'
                }
        )
        event.shaped(
                Item.of('enderstorage:ender_chest'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        D: 'minecraft:ender_chest',
                        C: '#waystones:warp_shards',
                        A: 'minecraft:blaze_rod',
                        B: 'minecraft:obsidian'
                }
        )
        event.shaped(
                Item.of('enderstorage:ender_tank'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        D: 'minecraft:ender_chest',
                        C: 'elementalcraft:burnt_glass',
                        A: 'minecraft:blaze_rod',
                        B: 'minecraft:obsidian'
                }
        )
        event.shaped(
                Item.of('concatenationcore:gold_stick', 2),
                [
                        'ABC',
                        '   ',
                        '   '
                ],
                {
                        A: 'concatenationcore:cutting_tool',
                        C: 'tarotcards:the_magician',
                        B: 'concatenationcore:gold_handle'
                }
        ).keepIngredient('tarotcards:the_magician')
        event.shapeless(
                Item.of('ars_nouveau:arcane_pedestal'),
                [
                        'ars_nouveau:arcane_platform'
                ]
        )
        event.shaped(
                Item.of('born_in_chaos_v1:elixirof_wither_resistance'),
                [
                        'ABC',
                        '   ',
                        '   '
                ],
                {
                        B: 'reliquary:empty_potion_vial',
                        A: 'reliquary:witherless_rose',
                        C: 'minecraft:wither_rose'
                }
        ).keepIngredient('reliquary:witherless_rose')
        event.shaped(
                Item.of('born_in_chaos_v1:elixirof_wither_resistance'),
                [
                        'ABC',
                        '   ',
                        '   '
                ],
                {
                        C: 'concatenationcore:transplant',
                        B: 'reliquary:empty_potion_vial',
                        A: 'reliquary:witherless_rose'
                }
        ).keepIngredient('reliquary:witherless_rose')
        event.shaped(
                Item.of('reliquary:rod_of_lyssa'),
                [
                        ' A ',
                        'BCD',
                        'EFE'
                ],
                {
                        F: 'tarotcards:the_hanged_man',
                        A: 'reliquary:bat_wing',
                        C: 'minecraft:fishing_rod',
                        E: 'concatenationcore:ice_shard',
                        B: 'concatenationcore:nebulous_handle',
                        D: 'reliquary:infernal_claw'
                }
        ).keepIngredient('tarotcards:the_hanged_man')
        event.shapeless(
                Item.of('reliquary:void_tear'),
                [
                        'tarotcards:the_hanged_man',
                        'minecraft:ghast_tear',
                        'reliquary:nebulous_heart',
                        'reliquary:slime_pearl',
                        'minecraft:lapis_lazuli'
                ]
        ).keepIngredient('tarotcards:the_hanged_man')
        event.shaped(
                Item.of('reliquary:salamander_eye'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        C: 'reliquary:frozen_core',
                        D: 'irons_spellbooks:energized_core',
                        E: 'torchmaster:frozen_pearl',
                        F: 'reliquary:pyromancer_staff',
                        B: 'reliquary:lantern_of_paranoia',
                        A: 'reliquary:molten_core'
                }
        )
        event.shaped(
                Item.of('reliquary:hero_medallion'),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'reliquary:fortune_coin',
                        D: 'torchmaster:frozen_pearl',
                        A: 'concatenationcore:sourcesilver',
                        B: 'reliquary:salamander_eye'
                }
        )
        event.shaped(
                Item.of('torchmaster:frozen_pearl'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'minecraft:blue_ice',
                        C: 'minecraft:ender_pearl',
                        A: 'elementalcraft:springaline_shard'
                }
        )
        event.shaped(
                Item.of('torchmaster:feral_flare_lantern'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        C: 'elementalcraft:swift_alloy_ingot',
                        B: 'minecraft:glowstone',
                        D: 'elementalcraft:springaline_lantern'
                }
        )
        event.shaped(
                Item.of('reliquary:shears_of_winter'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'ars_nouveau:water_essence',
                        A: 'elementalcraft:springaline_shard',
                        C: 'minecraft:shears'
                }
        )
        event.shapeless(
                Item.of('elementalcraft:fine_fire_gem', 4),
                [
                        'elementalcraft:crude_fire_gem',
                        'elementalcraft:crude_fire_gem',
                        'elementalcraft:purecrystal',
                        'elementalcraft:crude_fire_gem',
                        'elementalcraft:crude_fire_gem'
                ]
        )
        event.shapeless(
                Item.of('elementalcraft:pristine_fire_gem', 4),
                [
                        'ars_nouveau:fire_essence',
                        'elementalcraft:fine_fire_gem',
                        'ars_nouveau:fire_essence',
                        'elementalcraft:fine_fire_gem',
                        'elementalcraft:purerock',
                        'elementalcraft:fine_fire_gem',
                        'ars_nouveau:fire_essence',
                        'elementalcraft:fine_fire_gem',
                        'ars_nouveau:fire_essence'
                ]
        )

        event.shapeless(
                Item.of('elementalcraft:fine_earth_gem', 4),
                [
                        'elementalcraft:crude_earth_gem',
                        'elementalcraft:crude_earth_gem',
                        'elementalcraft:purecrystal',
                        'elementalcraft:crude_earth_gem',
                        'elementalcraft:crude_earth_gem'
                ]
        )
        event.shapeless(
                Item.of('elementalcraft:pristine_earth_gem', 4),
                [
                        'ars_nouveau:earth_essence',
                        'elementalcraft:fine_earth_gem',
                        'ars_nouveau:earth_essence',
                        'elementalcraft:fine_earth_gem',
                        'elementalcraft:purerock',
                        'elementalcraft:fine_earth_gem',
                        'ars_nouveau:earth_essence',
                        'elementalcraft:fine_earth_gem',
                        'ars_nouveau:earth_essence'
                ]
        )

        event.shapeless(
                Item.of('elementalcraft:fine_water_gem', 4),
                [
                        'elementalcraft:crude_water_gem',
                        'elementalcraft:crude_water_gem',
                        'elementalcraft:purecrystal',
                        'elementalcraft:crude_water_gem',
                        'elementalcraft:crude_water_gem'
                ]
        )
        event.shapeless(
                Item.of('elementalcraft:pristine_water_gem', 4),
                [
                        'ars_nouveau:water_essence',
                        'elementalcraft:fine_water_gem',
                        'ars_nouveau:water_essence',
                        'elementalcraft:fine_water_gem',
                        'elementalcraft:purerock',
                        'elementalcraft:fine_water_gem',
                        'ars_nouveau:water_essence',
                        'elementalcraft:fine_water_gem',
                        'ars_nouveau:water_essence'
                ]
        )

        event.shapeless(
                Item.of('elementalcraft:fine_air_gem', 4),
                [
                        'elementalcraft:crude_air_gem',
                        'elementalcraft:crude_air_gem',
                        'elementalcraft:purecrystal',
                        'elementalcraft:crude_air_gem',
                        'elementalcraft:crude_air_gem'
                ]
        )
        event.shapeless(
                Item.of('elementalcraft:pristine_air_gem', 4),
                [
                        'ars_nouveau:air_essence',
                        'elementalcraft:fine_air_gem',
                        'ars_nouveau:air_essence',
                        'elementalcraft:fine_air_gem',
                        'elementalcraft:purerock',
                        'elementalcraft:fine_air_gem',
                        'ars_nouveau:air_essence',
                        'elementalcraft:fine_air_gem',
                        'ars_nouveau:air_essence'
                ]
        )

        // event.shaped(
        //         Item.of('mcore:titanium_ingot', 8),
        //         [
        //                 'AAA',
        //                 'ABA',
        //                 'AAA'
        //         ],
        //         {
        //                 A: Item.of('elementalcraft:pure_ore', '{elementalcraft:{ore:"mcore:titanium"}}'),
        //                 B: 'minecraft:diamond'
        //         }
        // )
        event.shaped(
                Item.of('concatenationcore:water_sword_base'),
                [
                        ' AB',
                        'CBA',
                        'DC '
                ],
                {
                        B: 'elementalcraft:drenched_iron_ingot',
                        A: 'elementalcraft:powerful_water_shard',
                        C: 'thermal:apatite',
                        D: 'thermal:silver_ingot'
                }
        )
        // event.shaped(
        //         Item.of('spelled:leveling_altar'),
        //         [
        //                 'ABA',
        //                 'CDC',
        //                 'AEA'
        //         ],
        //         {
        //                 C: 'elementalcraft:swift_alloy_nugget',
        //                 E: 'minecraft:redstone',
        //                 B: '#elementalcraft:gems/crude_air',
        //                 A: 'elementalcraft:springaline_shard',
        //                 D: 'minecraft:book'
        //         }
        // )
        event.shaped(
                Item.of('spelled:leveling_altar'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        E: 'elementalcraft:burnt_glass',
                        C: 'minecraft:redstone',
                        A: '#elementalcraft:crystals/elemental',
                        D: 'minecraft:book',
                        B: 'ars_nouveau:air_essence'
                }
        )
        event.shapeless(
                Item.of('spelled:spell_book'),
                [
                        'minecraft:writable_book',
                        'elementalcraft:springaline_shard'
                ]
        )
        event.shapeless(
                Item.of('spelled:spell_book'),
                [
                        'spelled:spell_book'
                ]
        )
        event.shapeless(
                Item.of('spelled:ancient_knowledge_tome'),
                [
                        'elementalcraft:scroll_paper',
                        'elementalcraft:scroll_paper',
                        '#elementalcraft:crystals/elemental',
                        'elementalcraft:scroll_paper',
                        'minecraft:leather'
                ]
        )
        event.shaped(
                Item.of('perdition:pure_soil', 8),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        B: 'elementalcraft:purerock',
                        A: 'minecraft:grass_block'
                }
        )
        event.shaped(
                Item.of('perdition:pure_soil', 12),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'strangematter:anomalous_grass',
                        B: 'elementalcraft:purerock'
                }
        )
        event.shaped(
                Item.of('elementalcraft:instrument_retriever', 2),
                [
                        'AB ',
                        'CDA',
                        'AB '
                ],
                {
                        B: 'elementalcraft:whiterock',
                        D: 'minecraft:hopper',
                        A: 'elementalcraft:drenched_iron_nugget',
                        C: '#elementalcraft:crystals/elemental'
                }
        )
        event.shaped(
                Item.of('elementalcraft:sorter', 2),
                [
                        'ABC',
                        'DEA',
                        'ABC'
                ],
                {
                        B: 'elementalcraft:whiterock',
                        D: 'itemfilters:custom',
                        E: 'minecraft:hopper',
                        A: 'elementalcraft:drenched_iron_nugget',
                        C: '#elementalcraft:crystals/elemental'
                }
        )
        event.shaped(
                Item.of('elementalcraft:pipe_priority_rings', 8),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        A: 'elementalcraft:drenched_iron_nugget',
                        B: 'elementalcraft:elementpipe'
                }
        )
        event.shaped(
                Item.of('elementalcraft:cover_frame', 3),
                [
                        'AAA',
                        'A A',
                        'AAA'
                ],
                {
                        A: 'elementalcraft:drenched_iron_nugget'
                }
        )
        event.shaped(
                Item.of('elementalcraft:cover_frame', 27),
                [
                        'AAA',
                        'A A',
                        'AAA'
                ],
                {
                        A: 'elementalcraft:drenched_iron_ingot'
                }
        )
        event.shaped(
                Item.of('elementalcraft:springaline_shard', 4),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        A: 'elementalcraft:powerful_water_shard',
                        B: 'concatenation:icing_item'
                }
        )
        event.shaped(
                Item.of('elementalcraft:springaline_shard', 2),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        A: 'perdition:resin',
                        B: 'strangematter:spatial_shard'
                }
        )
        event.shaped(
                Item.of('elementalcraft:container'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'elementalcraft:whiterock',
                        C: 'elementalcraft:small_container',
                        B: 'elementalcraft:elementpipe'
                }
        )
        event.shapeless(
                Item.of('thermal:lightning_charge'),
                [
                        'elementalcraft:aircrystal',
                        'minecraft:gunpowder',
                        '#minecraft:coals'
                ]
        )
        event.shaped(
                Item.of('elementalcraft:purecrystal'),
                [
                        ' A ',
                        'BCD',
                        ' E '
                ],
                {
                        B: 'elementalcraft:powerful_water_shard',
                        C: 'perdition:cut_dis_gem',
                        E: 'elementalcraft:powerful_earth_shard',
                        D: 'elementalcraft:powerful_fire_shard',
                        A: 'elementalcraft:powerful_air_shard'
                }
        )
        event.shaped(
                Item.of('waystones:warp_plate', 1),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'elementalcraft:drenched_iron_ingot',
                        B: 'waystones:warp_dust',
                        D: 'elementalcraft:aircrystal',
                        A: 'minecraft:stone_bricks'
                }
        )
        event.shaped(
                Item.of('waystones:warp_plate', 1),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        B: 'elementalcraft:drenched_iron_ingot',
                        C: 'waystones:warp_dust',
                        D: 'elementalcraft:aircrystal',
                        A: 'minecraft:stone_bricks'
                }
        )
});