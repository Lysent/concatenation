ServerEvents.recipes(event => {

        event.replaceInput(
                { mod: 'born_in_chaos_v1' },
                'born_in_chaos_v1:dark_metal_ingot',
                'concatenationcore:dense_alloy'
        );

        const remove = [
                'born_in_chaos_v1:dark_upgrade',
                'born_in_chaos_v1:dark_metal_block',
                'born_in_chaos_v1:dark_grid',
                'farmersdelight:cutting_board',
                'concatenationcore:gold_paper'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'patchouli:guide_book', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'born_in_chaos_v1:dark_metal_nugget', type: 'minecraft:crafting_shapeless' })

        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"via_romana:guide"}'),
                [
                        'minecraft:book',
                        'minecraft:oak_sign'
                ]
        )
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"industrialforegoing:industrial_foregoing"}'),
                [
                        'minecraft:book',
                        'createmetallurgy:steel_ingot'
                ]
        )
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"elementalcraft:element_book"}'),
                [
                        'minecraft:book',
                        'concatenationcore:protean_glass'
                ]
        )
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"littlelogistics:guide"}'),
                [
                        'minecraft:book',
                        'minecraft:compass'
                ]
        )
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"thermal:guidebook"}'),
                [
                        'minecraft:book',
                        'thermal:wrench'
                ]
        )
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"bloodmagic:guide"}'),
                [
                        'minecraft:book',
                        'hexerei:blood_bottle'
                ]
        )
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"irons_spellbooks:iss_guide_book"}'),
                [
                        'minecraft:book',
                        'irons_spellbooks:arcane_essence'
                ]
        )
        event.shaped(
                Item.of('immersive_weathering:steel_wool'),
                [
                        'AAA',
                        'ABB',
                        '   '
                ],
                {
                        A: 'thermal:steel_nugget',
                        B: 'minecraft:string'
                }
        )
        event.shaped(
                Item.of('hpm:swashbuckleritem'),
                [
                        ' AB',
                        'CC ',
                        '   '
                ],
                {
                        C: 'hpm:smallhull',
                        B: 'minecraft:wooden_shovel',
                        A: 'hpm:small_mast'
                }
        )

        event.shaped(
                Item.of(
                        "concatenationcore:full_cups",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        B: 'thermal:enderium_glass',
                        C: 'tconstruct:hepatizon_ingot',
                        A: 'thermal:silver_coin',
                        E: 'minecraft:water_bucket',
                        D: 'tarotcards:the_chariot'
                }
        ).keepIngredient('tarotcards:the_chariot')
        event.shaped(
                Item.of(
                        "concatenationcore:full_wands",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'mekanism:ingot_refined_glowstone',
                        C: 'mekanism:meka_tool',
                        A: 'thermal:gold_coin'
                }
        ).keepIngredient('mekanism:meka_tool')
        event.shaped(
                Item.of('concatenationcore:full_wands'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        A: 'createdeco:gold_coin',
                        E: 'tarotcards:the_magician',
                        C: 'tarotcards:judgement',
                        D: 'constructionwand:diamond_wand',
                        F: 'elementalcraft:springaline_shard',
                        B: 'ars_nouveau:air_essence'
                }
        ).keepIngredient('tarotcards:the_magician').keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of(
                        "concatenationcore:full_swords",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        B: 'tfmg:cast_iron_ingot',
                        F: 'createdeco:industrial_iron_ingot',
                        D: 'tarotcards:judgement',
                        C: 'createbigcannons:nethersteel_ingot',
                        A: 'createdeco:netherite_coin',
                        E: 'createmetallurgy:tungsten_ingot'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of(
                        "concatenationcore:full_pentacles",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        A: 'thermal:enderium_coin',
                        C: 'concatenationcore:compacted_steel',
                        B: 'mekanism:ingot_osmium',
                        D: 'tarotcards:the_high_priestess',
                        E: 'thermal:energy_cell'
                }
        ).keepIngredient('tarotcards:the_high_priestess')

        event.shapeless(
                Item.of('minecraft:water_bucket'),
                [
                        'concatenationcore:full_cups',
                        'minecraft:bucket'
                ]
        ).keepIngredient('concatenationcore:full_cups')

        event.shaped(
                Item.of('concatenationcore:mixing_tool'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: '#concatenation:mixing_tools',
                        A: 'minecraft:iron_ingot'
                }
        )
        event.shaped(
                Item.of('concatenationcore:cutting_tool'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: '#concatenation:cutting_tools',
                        A: 'minecraft:iron_ingot'
                }
        )
        event.shaped(
                Item.of('concatenationcore:breaking_tool'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        B: '#concatenation:breaking_tools',
                        A: 'minecraft:iron_ingot'
                }
        )
        event.shaped(
                Item.of('concatenationcore:silver_paper'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:gold_paper',
                        B: 'thermal:silver_ingot',
                        A: 'concatenationcore:glowing_gold'
                }
        )
        event.shaped(
                Item.of('concatenationcore:concatenator'),
                [
                        ' A ',
                        'BCD',
                        ' E '
                ],
                {
                        A: 'born_in_chaos_v1:lifestealer_skull',
                        B: 'ars_technica:spy_monocle',
                        E: 'ae2:sky_dust',
                        C: 'concatenationcore:gold_paper',
                        D: 'concatenationcore:soleipse'
                }
        )
        event.shapeless(
                Item.of(
                        "concatenationcore:the_error",
                        '{display:{Name:\'{"text":"Tarot : The Error","color":"yellow","italic":false}\'},CurioAttributeModifiers:[{AttributeName:"generic.attack_speed",Name:"generic.attack_speed",Amount:0.5,Operation:1,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        'tarotcards:the_lovers',
                        'concatenationcore:concatenator'
                ]
        ).keepIngredient('concatenationcore:concatenator')

        event.shaped(
                Item.of('tarotcards:the_hierophant'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'concatenationcore:silver_paper',
                        B: 'createbigcannons:nethersteel_ingot',
                        C: 'tarotcards:the_tower'
                }
        ).keepIngredient('tarotcards:the_tower')
        event.shaped(
                Item.of('tarotcards:the_hierophant'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'concatenationcore:silver_paper',
                        B: 'thermal:signalum_ingot',
                        C: 'tarotcards:the_high_priestess'
                }
        ).keepIngredient('tarotcards:the_high_priestess')
        event.shaped(
                Item.of('tarotcards:the_hermit'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'thermal:bronze_ingot',
                        A: 'concatenationcore:silver_paper',
                        C: 'tarotcards:the_high_priestess'
                }
        ).keepIngredient('tarotcards:the_high_priestess')
        event.shaped(
                Item.of('tarotcards:the_hierophant'),
                [
                        'ABA',
                        'CDC',
                        'ACA'
                ],
                {
                        B: 'concatenationcore:descran',
                        D: 'tarotcards:temperance',
                        C: 'concatenationcore:experience_orb',
                        A: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('tarotcards:temperance')
        event.shaped(
                Item.of('tarotcards:the_hermit'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'tarotcards:the_sun',
                        B: 'elementalcraft:swift_alloy_ingot',
                        A: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('tarotcards:the_sun')
        event.shaped(
                Item.of('tarotcards:the_magician'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        E: 'create:blaze_burner',
                        C: 'create:experience_nugget',
                        B: 'elementalcraft:inert_crystal',
                        D: 'tarotcards:the_tower',
                        A: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('tarotcards:the_tower')
        event.shaped(
                Item.of('tarotcards:the_magician'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: '#concatenation:magic_cards_t2',
                        B: 'irons_spellbooks:arcane_essence',
                        A: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('tarotcards:temperance'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: '#concatenation:magic_cards_t2',
                        B: 'irons_spellbooks:arcane_essence',
                        A: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')

        // Empress
        event.shaped(
                Item.of('tarotcards:the_empress'),
                [
                        'ABC',
                        'DEF',
                        'CGA'
                ],
                {
                        F: 'farmersdelight:chicken_soup',
                        E: 'tarotcards:wheel_of_fortune',
                        A: 'minecraft:gold_ingot',
                        G: 'farmersdelight:chocolate_pie',
                        C: 'minecraft:glowstone',
                        B: 'immersive_weathering:golden_moss_clump',
                        D: 'minecraft:pumpkin_pie'
                }
        ).keepIngredient('tarotcards:wheel_of_fortune')
        event.shapeless(
                Item.of('farmersdelight:rice'),
                [
                        'thermal:rice_seeds'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:rice'),
                [
                        'minecolonies:rice'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:tomato'),
                [
                        'thermal:tomato'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:tomato'),
                [
                        'minecolonies:tomato'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:cabbage'),
                [
                        'minecolonies:cabbage'
                ]
        )
        event.shapeless(
                Item.of('thermal:corn'),
                [
                        'minecolonies:corn'
                ]
        )
        event.shaped(
                Item.of('farmersdelight:cutting_board'),
                [
                        'ABB',
                        'ABB',
                        ' C '
                ],
                {
                        C: 'tarotcards:the_empress',
                        A: 'minecraft:stick',
                        B: '#minecraft:planks'
                }
        ).keepIngredient('tarotcards:the_empress')

        // Death
        event.shaped(
                Item.of('tarotcards:death'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        D: 'tarotcards:wheel_of_fortune',
                        A: 'concatenationcore:glowing_gold_block',
                        B: 'born_in_chaos_v1:shattered_skull',
                        E: 'born_in_chaos_v1:transformative_flower',
                        C: 'born_in_chaos_v1:sea_terror_eye',
                        F: 'born_in_chaos_v1:bone_heart'
                }
        ).keepIngredient('tarotcards:wheel_of_fortune')

        event.shaped(
                Item.of('born_in_chaos_v1:dark_upgrade'),
                [
                        'ABA',
                        'CDC',
                        'CEC'
                ],
                {
                        D: 'tarotcards:death',
                        E: 'minecraft:netherite_upgrade_smithing_template',
                        A: 'born_in_chaos_v1:dark_metal_nugget',
                        B: 'born_in_chaos_v1:dark_upgrade',
                        C: 'born_in_chaos_v1:seedof_chaos'
                }
        ).keepIngredient('tarotcards:death')
        event.shaped(
                Item.of('concatenationcore:dense_alloy'),
                [
                        'ADA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'minecraft:iron_ingot',
                        A: 'minecraft:deepslate',
                        C: 'born_in_chaos_v1:dark_metal_ingot',
                        D: 'tarotcards:death'
                }
        ).keepIngredient('tarotcards:death')

        event.shaped(
                Item.of('born_in_chaos_v1:dark_metal_block'),
                [
                        'AAA',
                        'AAA',
                        'AAA'
                ],
                {
                        A: 'born_in_chaos_v1:dark_metal_ingot'
                }
        )
        event.shaped(
                Item.of('born_in_chaos_v1:dark_grid', 24),
                [
                        'AAA',
                        'AAA',
                        '   '
                ],
                {
                        A: 'born_in_chaos_v1:dark_metal_ingot'
                }
        )
        event.shapeless(
                Item.of('born_in_chaos_v1:dark_metal_nugget', 9),
                [
                        'born_in_chaos_v1:dark_metal_ingot'
                ]
        )

        event.shapeless(
                Item.of('thermal:raw_lead'),
                [
                        '#forge:raw_materials/lead'
                ]
        )
        event.shapeless(
                Item.of('thermal:raw_nickel'),
                [
                        '#forge:raw_materials/nickel'
                ]
        )
        event.shapeless(
                Item.of('thermal:raw_tin'),
                [
                        '#forge:raw_materials/tin'
                ]
        )

        event.shaped(
                Item.of('concatenationcore:gold_paper'),
                [
                        'ABA',
                        'BBB',
                        'ABA'
                ],
                {
                        B: 'minecraft:paper',
                        A: 'concatenationcore:glowing_gold'
                }
        )
});