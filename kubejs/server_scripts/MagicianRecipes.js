ServerEvents.recipes(event => {

        const remove = [
                'elementalcraft:small_container',
                'elementalcraft:evaporator',
                'elementalcraft:unset_jewel',
                'elementalcraft:spell_desk',
                'ars_nouveau:apprentice_spell_book',
                'ars_nouveau:archmage_spell_book'
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
        event.shaped(
                Item.of('ars_nouveau:apprentice_spell_book'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        B: 'concatenationcore:alatoris_fiber',
                        A: 'ars_nouveau:drygmy_shard',
                        D: 'ars_nouveau:novice_spell_book',
                        C: 'ars_nouveau:whirlisprig_shards',
                        F: 'ars_nouveau:wixie_shards',
                        E: 'ars_nouveau:starbuncle_shards'
                }
        )
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
        event.shaped(
                Item.of('ars_nouveau:archmage_spell_book'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        C: 'ars_elemental:fire_focus',
                        A: 'concatenationcore:experienced_paper',
                        E: 'ars_elemental:water_focus',
                        B: 'ars_elemental:air_focus',
                        F: 'ars_elemental:earth_focus',
                        D: 'ars_nouveau:apprentice_spell_book'
                }
        )
        event.shaped(
                Item.of('concatenationcore:sourcesilver'),
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
});
