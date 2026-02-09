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
                'concatenationcore:gold_paper',
                'travelerscompass:travelerscompass',
                'explorerscompass:explorerscompass',
                'naturescompass:naturescompass',
                'born_in_chaos_v1:eternal_candy',
                'chunkloaders:basic_chunk_loader',
                'chunkloaders:single_chunk_loader',
                'chunkloaders:advanced_chunk_loader',
                'chunkloaders:ultimate_chunk_loader'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'patchouli:guide_book', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'born_in_chaos_v1:dark_metal_nugget', type: 'minecraft:crafting_shapeless' })

        event.remove({ output: 'minecraft:chainmail_helmet', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'minecraft:chainmail_chestplate', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'minecraft:chainmail_leggings', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'minecraft:chainmail_boots', type: 'minecraft:crafting_shaped' })

        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"via_romana:guide"}'),
                [
                        'minecraft:book',
                        '#minecraft:signs'
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
        event.shapeless(
                Item.of('patchouli:guide_book', '{"patchouli:book":"spelled:knowledge_tome"}'),
                [
                        'minecraft:book',
                        'elementalcraft:aircrystal'
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
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;1432871981,202948320,-1124753125,99443156],Slot:"curio"}]}'
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

        // event.shaped(
        //         Item.of(
        //                 'concatenationcore:full_wands',
        //                 '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1204986711,1002462118,-1782657419,420111003],Slot:"curio"}]}'
        //         ),
        //         [
        //                 'ABA',
        //                 'CDE',
        //                 'ABA'
        //         ],
        //         {
        //                 A: '#forge:coins/gold',
        //                 E: 'create:brass_hand',
        //                 D: '#concatenation:middle_cards',
        //                 C: 'constructionwand:diamond_wand',
        //                 B: 'ars_nouveau:source_gem'
        //         }
        // ).keepIngredient('#concatenation:middle_cards')

        event.shaped(
                Item.of(
                        "concatenationcore:full_wands",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;1705130042,-1877268193,55341167,-1314486008],Slot:"curio"}]}'
                ),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'mekanism:ingot_refined_glowstone',
                        C: 'mekanism:meka_tool',
                        A: '#forge:coins/gold'
                }
        ).keepIngredient('mekanism:meka_tool')

        event.shaped(
                Item.of(
                        'concatenationcore:full_wands',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-553839471,214497367,-777692245,-1901218643],Slot:"curio"}]}'
                ),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        A: '#forge:coins/gold',
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
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1987685943,640028002,1337522698,-174613559],Slot:"curio"}]}'
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
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;640975409,-1649242158,2093438149,1748160931],Slot:"curio"}]}'
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
        // event.shaped(
        //         Item.of(
        //                 "concatenationcore:full_vessels",
        //                 '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;640975309,-1644542158,2093428149,1748520931],Slot:"curio"}]}'
        //         ),
        //         [
        //                 'ABA',
        //                 'CDC',
        //                 'AEA'
        //         ],
        //         {
        //                 A: 'thermal:enderium_coin',
        //                 C: 'concatenationcore:compacted_steel',
        //                 B: 'mekanism:ingot_osmium',
        //                 D: 'tarotcards:the_high_priestess',
        //                 E: 'thermal:energy_cell'
        //         }
        // ).keepIngredient('tarotcards:the_high_priestess')


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
                        B: 'thermal:silver_block',
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
        // event.shapeless(
        //         Item.of(
        //                 "concatenationcore:the_error",
        //                 '{display:{Name:\'{"text":"Tarot : The Error","color":"yellow","italic":false}\'},CurioAttributeModifiers:[{AttributeName:"generic.attack_speed",Name:"generic.attack_speed",Amount:0.5,Operation:1,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
        //         ),
        //         [
        //                 'tarotcards:the_lovers',
        //                 'concatenationcore:concatenator'
        //         ]
        // ).keepIngredient('concatenationcore:concatenator')

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
                        B: 'concatenationcore:light_totem',
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
                        'ADA',
                        'BCB',
                        'AEA'
                ],
                {
                        C: '#concatenation:magic_cards_t2',
                        B: 'irons_spellbooks:arcane_essence',
                        A: 'concatenationcore:silver_paper',
                        D: 'concatenationcore:descran',
                        E: '#elementalcraft:crystals/elemental'
                }
        ).keepIngredient('#concatenation:magic_cards_t2')
        event.shaped(
                Item.of('tarotcards:temperance'),
                [
                        'ADA',
                        'BCB',
                        'AEA'
                ],
                {
                        C: '#concatenation:magic_cards_t2',
                        B: 'irons_spellbooks:arcane_essence',
                        A: 'concatenationcore:silver_paper',
                        D: 'elementalcraft:swift_alloy_ingot',
                        E: 'perdition:limbo_berries'
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
                        'thermal:rice'
                ]
        )
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
        event.shapeless(
                Item.of('concatenationcore:sugarbase'),
                [
                        '#concatenation:knives',
                        'tarotcards:the_empress',
                        'farmersdelight:wheat_dough',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar'
                ]
        ).keepIngredient('tarotcards:the_empress').damageIngredient('#concatenation:knives')
        event.shapeless(
                Item.of('concatenationcore:sugarbase', 2),
                [
                        'concatenationcore:sugarbase',
                        'farmersdelight:wheat_dough',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar',
                        'minecraft:sugar'
                ]
        )
        event.shaped(
                Item.of('concatenationcore:spicy_drop', 4),
                [
                        'ABC',
                        'DD ',
                        '   '
                ],
                {
                        D: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        A: '#concatenation:knives',
                        C: 'born_in_chaos_v1:caramel_pepper'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:spicy_drop'),
                [
                        'ABC',
                        'DDD',
                        'DD '
                ],
                {
                        D: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        A: '#concatenation:knives',
                        C: 'thermal:redstone_mushroom_spores'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:spicy_drop'),
                [
                        'ABC',
                        'DDE',
                        '   '
                ],
                {
                        D: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        E: 'farmersdelight:wheat_dough',
                        C: 'hexerei:blood_bottle',
                        A: '#concatenation:knives'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:spicy_drop', 2),
                [
                        'ABC',
                        'DD ',
                        '   '
                ],
                {
                        D: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        C: 'minecolonies:nether_pepper',
                        A: '#concatenation:knives'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:caramel_square', 4),
                [
                        'ABC',
                        'D  ',
                        '   '
                ],
                {
                        D: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        A: '#concatenation:knives',
                        C: 'born_in_chaos_v1:caramel_pepper'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:shiny_eclair', 2),
                [
                        'ABC',
                        'CDD',
                        'E  '
                ],
                {
                        E: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        D: 'farmersdelight:wheat_dough',
                        A: '#concatenation:knives',
                        C: 'minecraft:cocoa_beans'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:mint_apple', 4),
                [
                        'ABC',
                        'D  ',
                        '   '
                ],
                {
                        B: 'concatenationcore:sugarbase',
                        A: '#concatenation:knives',
                        D: 'create:honeyed_apple',
                        C: 'born_in_chaos_v1:river_mint'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:mint_apple', 2),
                [
                        'ABC',
                        'DEE',
                        'EEE'
                ],
                {
                        B: 'concatenationcore:sugarbase',
                        D: 'minecraft:apple',
                        A: '#concatenation:knives',
                        E: 'minecraft:honey_bottle',
                        C: 'born_in_chaos_v1:river_mint'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:yumpearls'),
                [
                        'ABC',
                        'DEF',
                        '   '
                ],
                {
                        F: 'concatenationcore:mint_apple',
                        B: 'concatenationcore:sugarbase',
                        E: 'concatenationcore:caramel_square',
                        A: '#concatenation:knives',
                        C: 'concatenationcore:shiny_eclair',
                        D: 'concatenationcore:spicy_drop'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('concatenationcore:allcandy'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        D: 'born_in_chaos_v1:chocolate_heart',
                        C: 'born_in_chaos_v1:coffee_candy',
                        I: 'born_in_chaos_v1:mint_ice_cream',
                        A: 'born_in_chaos_v1:holiday_candy',
                        G: 'born_in_chaos_v1:caramel_pepper',
                        F: 'born_in_chaos_v1:gummy_vampire_teeth',
                        E: 'concatenationcore:yumpearls',
                        H: 'born_in_chaos_v1:river_mint',
                        B: 'born_in_chaos_v1:mint_candy'
                }
        )
        event.shapeless(
                Item.of('born_in_chaos_v1:holiday_candy', 4),
                [
                        '#concatenation:knives',
                        'concatenationcore:sugarbase',
                        'minecraft:sugar',
                        'farmersdelight:pumpkin_slice',
                        'minecraft:honey_bottle'
                ]
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('born_in_chaos_v1:coffee_candy', 2),
                [
                        'ABC',
                        'CDD',
                        '   '
                ],
                {
                        D: 'minecraft:sugar',
                        B: 'concatenationcore:sugarbase',
                        A: '#concatenation:knives',
                        C: 'minecraft:cocoa_beans'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('born_in_chaos_v1:river_mint'),
                [
                        'ABB',
                        'C  ',
                        '   '
                ],
                {
                        C: 'concatenationcore:sugarbase',
                        A: '#concatenation:knives',
                        B: 'minecolonies:mint'
                }
        ).damageIngredient('#concatenation:knives')
        event.shaped(
                Item.of('born_in_chaos_v1:chocolate_heart'),
                [
                        'ABC',
                        'DDE',
                        'EE '
                ],
                {
                        E: 'minecraft:red_dye',
                        C: 'concatenationcore:sugarbase',
                        B: 'born_in_chaos_v1:coffee_candy',
                        A: '#concatenation:knives',
                        D: 'minecraft:cocoa_beans'
                }
        ).damageIngredient('#concatenation:knives')
        event.shapeless(
                Item.of('born_in_chaos_v1:chocolate_heart', 2),
                [
                        'born_in_chaos_v1:coffee_candy',
                        'hexerei:blood_bottle',
                        '#concatenation:knives'
                ]
        ).damageIngredient('#concatenation:knives')
        event.shapeless(
                Item.of('born_in_chaos_v1:chocolate_heart', 3),
                [
                        '#concatenation:knives',
                        'born_in_chaos_v1:coffee_candy',
                        'hexerei:blood_bottle',
                        'born_in_chaos_v1:holiday_candy'
                ]
        ).damageIngredient('#concatenation:knives')

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
                Item.of('born_in_chaos_v1:eternal_candy'),
                [
                        'ABC',
                        'DEF',
                        'GHI'
                ],
                {
                        B: 'concatenationcore:allcandy',
                        F: 'born_in_chaos_v1:coffee_candy',
                        G: 'tarotcards:the_empress',
                        D: 'born_in_chaos_v1:mint_ice_cream',
                        E: 'born_in_chaos_v1:transmuting_elixir',
                        A: 'born_in_chaos_v1:caramel_pepper',
                        H: 'minecraft:stick',
                        C: 'born_in_chaos_v1:gummy_vampire_teeth',
                        I: 'tarotcards:death'
                }
        ).keepIngredient('tarotcards:the_empress').keepIngredient('tarotcards:death')

        event.shaped(
                Item.of('born_in_chaos_v1:dark_upgrade', 3),
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
        event.shaped(
                Item.of('tarotcards:the_emperor'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'minecolonies:ancienttome',
                        A: 'concatenationcore:gold_paper',
                        B: 'minecolonies:sifter_mesh_diamond'
                }
        )
        event.shapeless(
                Item.of('minecraft:glowstone_dust'),
                [
                        'concatenationcore:cutting_tool',
                        'celestisynth:solar_crystal'
                ]
        )

        // The World
        event.shaped(
                Item.of('concatenationcore:aeon'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        F: 'concatenationcore:eternel_sud',
                        E: 'concatenationcore:eternel_est',
                        B: 'concatenationcore:eternel_nord',
                        C: 'concatenationcore:eternel_ouest',
                        A: 'concatenationcore:gold_paper',
                        D: 'ae2:singularity'
                }
        )
        event.shaped(
                Item.of('concatenationcore:eternel_nord'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        F: 'tarotcards:the_emperor',
                        D: 'tarotcards:wheel_of_fortune',
                        A: 'tarotcards:the_empress',
                        B: 'concatenationcore:glowing_gold_block',
                        C: 'tarotcards:death',
                        E: 'tarotcards:the_chariot'
                }
        )
        event.shaped(
                Item.of('concatenationcore:eternel_ouest'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        D: 'tarotcards:justice',
                        B: 'concatenationcore:glowing_gold_block',
                        E: 'tarotcards:the_tower',
                        C: 'tarotcards:the_hierophant',
                        F: 'tarotcards:the_hermit',
                        A: 'tarotcards:the_high_priestess'
                }
        )
        event.shaped(
                Item.of('concatenationcore:eternel_sud'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        E: 'tarotcards:the_hanged_man',
                        F: 'tarotcards:the_lovers',
                        C: 'tarotcards:the_sun',
                        B: 'concatenationcore:glowing_gold_block',
                        D: 'tarotcards:strength',
                        A: 'tarotcards:judgement'
                }
        )
        event.shaped(
                Item.of('concatenationcore:eternel_est'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        C: 'tarotcards:the_star',
                        D: 'tarotcards:the_devil',
                        E: 'tarotcards:temperance',
                        B: 'concatenationcore:glowing_gold_block',
                        A: 'tarotcards:the_magician',
                        F: 'tarotcards:the_moon'
                }
        )
        event.shaped(
                Item.of('tarotcards:the_world'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        F: 'concatenationcore:the_error',
                        D: 'concatenationcore:aeon',
                        A: 'concatenationcore:gold_paper',
                        E: 'projecte:red_matter',
                        C: 'hpm:corvette_steamship_item',
                        B: 'tarotcards:the_fool'
                }
        )
        event.shaped(
                Item.of('tarotcards:temperance'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:redstone',
                        B: 'concatenationcore:silver_paper',
                        C: 'tarotcards:the_world'
                }
        ).keepIngredient('tarotcards:the_world')
        event.shaped(
                Item.of('tarotcards:the_magician'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'elementalcraft:inert_crystal',
                        C: 'tarotcards:the_world',
                        B: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('tarotcards:the_world')
        event.shaped(
                Item.of('tarotcards:the_hierophant'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        C: 'tarotcards:the_world',
                        B: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('tarotcards:the_world')
        event.shaped(
                Item.of('tarotcards:the_hermit'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:clay_ball',
                        C: 'tarotcards:the_world',
                        B: 'concatenationcore:silver_paper'
                }
        ).keepIngredient('tarotcards:the_world')
        event.shaped(
                Item.of('tarotcards:the_fool'),
                [
                        'ABC',
                        'BDB',
                        'EBF'
                ],
                {
                        C: 'minecraft:rabbit_foot',
                        E: 'minecraft:coarse_dirt',
                        F: 'minecraft:writable_book',
                        B: 'concatenationcore:gold_paper',
                        D: 'tarotcards:the_world',
                        A: 'immersive_weathering:moss_clump'
                }
        ).keepIngredient('tarotcards:the_world')
        event.shaped(
                Item.of('minecraft:string', 4),
                [
                        'AB ',
                        '   ',
                        '   '
                ],
                {
                        A: 'concatenationcore:cutting_tool',
                        B: 'minecraft:white_wool'
                }
        )
        event.shaped(
                Item.of('tarotcards:wheel_of_fortune'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        F: 'minecraft:rabbit_foot',
                        E: 'minecraft:heart_of_the_sea',
                        B: 'minecraft:end_stone',
                        C: 'minecraft:sculk_catalyst',
                        A: 'concatenationcore:gold_paper',
                        D: 'concatenationcore:silver_paper'
                }
        )
        event.shaped(
                Item.of('travelerscompass:travelerscompass'),
                [
                        'AAA',
                        'ABA',
                        'ACA'
                ],
                {
                        A: 'concatenationcore:fortune_fragment',
                        C: 'minecraft:lodestone',
                        B: '#concatenation:high_compasses'
                }
        )
        event.shapeless(
                Item.of('concatenationcore:fortune_fragment'),
                [
                        'concatenationcore:cutting_tool',
                        'ars_nouveau:caster_tome',
                        'ars_nouveau:caster_tome',
                        'ars_nouveau:caster_tome',
                        'ars_nouveau:caster_tome'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:fortune_fragment'),
                [
                        'concatenationcore:cutting_tool',
                        '#irons_spellbooks:salvageable_curio',
                        '#irons_spellbooks:salvageable_curio',
                        '#irons_spellbooks:salvageable_curio',
                        '#irons_spellbooks:salvageable_curio'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:fortune_fragment'),
                [
                        'concatenationcore:cutting_tool',
                        'immersive_weathering:enchanted_golden_moss_clump',
                        'immersive_weathering:enchanted_golden_moss_clump',
                        'immersive_weathering:enchanted_golden_moss_clump'
                ]
        )
        event.shaped(
                Item.of('explorerscompass:explorerscompass'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'travelerscompass:travelerscompass',
                        E: 'concatenationcore:fortune_fragment',
                        C: 'minecraft:end_crystal',
                        A: 'minecraft:cobweb',
                        B: 'immersive_weathering:enchanted_golden_moss_clump'
                }
        )
        event.shaped(
                Item.of('naturescompass:naturescompass'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'travelerscompass:travelerscompass',
                        C: 'minecraft:amethyst_cluster',
                        E: 'concatenationcore:fortune_fragment',
                        A: 'minecraft:vine',
                        B: 'immersive_weathering:enchanted_golden_moss_clump'
                }
        )
        event.shaped(
                Item.of('minecraft:stone', 2),
                [
                        'A  ',
                        '   ',
                        '   '
                ],
                {
                        A: 'perdition:marmor_exaltatus'
                }
        )

        event.shapeless(
                Item.of(
                        "concatenationcore:full_pentacles",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;640975409,-1649242158,2093438149,1748160931],Slot:"curio"}]}'
                ),
                [
                        'concatenationcore:full_pentacles'
                ]
        )
        event.shapeless(
                Item.of(
                        "concatenationcore:full_swords",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1987685943,640028002,1337522698,-174613559],Slot:"curio"}]}'
                ),
                [
                        'concatenationcore:full_swords'
                ]
        )
        event.shapeless(
                Item.of(
                        'concatenationcore:full_wands',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;-1204986711,1002462118,-1782657419,420111003],Slot:"curio"}]}'
                ),
                [
                        'concatenationcore:full_wands'
                ]
        )
        event.shapeless(
                Item.of(
                        "concatenationcore:full_cups",
                        '{CurioAttributeModifiers:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:2,Operation:0,UUID:[I;1432871981,202948320,-1124753125,99443156],Slot:"curio"}]}'
                ),
                [
                        'concatenationcore:full_cups'
                ]
        )
        event.shapeless(
                Item.of(
                        "concatenationcore:protection_charm",
                        '{AttributeModifiers:[{AttributeName:"generic.luck",Name:"generic.luck",Amount:1,Operation:0,UUID:[I;-627705973,885605043,-1990155892,-718506500],Slot:"offhand"}]}'
                ),
                [
                        'minecraft:paper',
                        'minecraft:red_dye',
                        'minecraft:ink_sac',
                        'born_in_chaos_v1:ethereal_spirit',
                        '#concatenation:firing_item',
                        'tarotcards:death'
                ]
        ).keepIngredient('tarotcards:death')
        event.shapeless(
                Item.of('concatenationcore:stalker_ward'),
                [
                        'concatenationcore:protection_charm',
                        'born_in_chaos_v1:nightmare_stalker_skull',
                        'born_in_chaos_v1:fire_dust',
                        'concatenationcore:experience_orb',
                        'minecraft:glow_ink_sac',
                        'minecraft:black_dye'
                ]
        )
        event.shaped(
                Item.of('summonerscrolls:zombie_summoner_scroll'),
                [
                        'ABA',
                        'CAD',
                        'EEE'
                ],
                {
                        D: 'minecraft:ink_sac',
                        E: 'minecraft:rotten_flesh',
                        C: 'born_in_chaos_v1:ethereal_spirit',
                        A: 'minecraft:paper',
                        B: 'tarotcards:death'
                }
        ).keepIngredient('tarotcards:death')
        event.shaped(
                Item.of('summonerscrolls:skeleton_summoner_scroll'),
                [
                        'ABA',
                        'CAD',
                        'EEE'
                ],
                {
                        D: 'minecraft:ink_sac',
                        C: 'born_in_chaos_v1:ethereal_spirit',
                        A: 'minecraft:paper',
                        E: 'minecraft:bone',
                        B: 'tarotcards:death'
                }
        ).keepIngredient('tarotcards:death')
        event.shaped(
                Item.of('chunkloaders:single_chunk_loader'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:celestial_calralite',
                        A: 'rftoolsbase:infused_diamond',
                        C: 'celestisynth:celestial_core_heated'
                }
        )
        event.shaped(
                Item.of('chunkloaders:basic_chunk_loader'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:celestial_calralite',
                        A: 'rftoolsbase:infused_enderpearl',
                        C: 'chunkloaders:single_chunk_loader',
                        D: 'celestisynth:celestial_core_heated'
                }
        )
        event.shaped(
                Item.of('chunkloaders:advanced_chunk_loader'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'chunkloaders:basic_chunk_loader',
                        B: 'concatenationcore:glowing_gold_block',
                        A: 'concatenationcore:experience_orb',
                        D: 'celestisynth:celestial_core_heated'
                }
        )
        event.shaped(
                Item.of('chunkloaders:ultimate_chunk_loader'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'chunkloaders:advanced_chunk_loader',
                        A: 'concatenationcore:experience_orb',
                        D: 'celestisynth:celestial_core_heated',
                        B: 'concatenationcore:silver_paper'
                }
        )
        event.shapeless(
                Item.of('create:limestone'),
                [
                        'minecraft:stone',
                        'minecraft:stone',
                        'mekanism:salt'
                ]
        )

        event.shapeless(
                Item.of('ars_nouveau:experience_gem', 9),
                [
                        '#concatenation:mob_charm'
                ]
        )

        event.shapeless(
                Item.of('ars_nouveau:experience_gem', 9),
                [
                        '#concatenation:knowledge'
                ]
        )
});