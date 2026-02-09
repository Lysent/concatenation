ServerEvents.recipes(event => {
        event.remove({output: 'the_deep_void:glutton_block'})
        event.remove({output: 'the_deep_void:reinforced_pickaxe'})
        event.remove({output: 'the_deep_void:hunters_helmet'})
        event.remove({output: 'the_deep_void:hunters_chestplate'})
        event.remove({output: 'the_deep_void:hunters_leggings'})
        event.remove({output: 'the_deep_void:hunters_boots'})
        event.shaped(
                Item.of('the_deep_void:reinforced_pickaxe'),
                [
                        'ABF',
                        'CDB',
                        'ECA'
                ],
                {
                        F: 'concatenationcore:the_error',
                        E: 'the_deep_void:ancient_onyx',
                        D: 'the_deep_void:onyx_pickaxe',
                        C: 'the_deep_void:black_moss',
                        B: 'the_deep_void:grim_gem',
                        A: 'the_deep_void:void_matter'
                }
        ).keepIngredient('concatenationcore:the_error')
        event.shaped(
                Item.of('the_deep_void:glutton_block'),
                [
                        'ADA',
                        'BCB',
                        'ABA'
                ],
                {
                        D: 'the_deep_void:ambrosial_flesh_chunk',
                        C: 'the_deep_void:block_of_ancient_flesh',
                        B: 'the_deep_void:ash_block',
                        A: 'the_deep_void:refined_onyx'
                }
        ).keepIngredient('concatenationcore:the_error')
        event.shaped(
                Item.of(
                        "concatenationcore:the_error",
                        '{display:{Name:\'{"text":"Tarot : The Error","color":"yellow","italic":false}\'},CurioAttributeModifiers:[{AttributeName:"generic.attack_speed",Name:"generic.attack_speed",Amount:0.5,Operation:1,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                    'BCB',
                    'DAE',
                    'BFB'
                ],
                { 
                    A: 'tarotcards:the_lovers',
                    B: 'the_deep_void:block_of_refined_onyx',
                    C: 'the_deep_void:heart_of_the_mind',
                    D: 'the_deep_void:call_upon_the_hive',
                    E: 'the_deep_void:nerves_of_steel',
                    F: 'the_deep_void:void_mirror'
                }
        ).keepIngredient('tarotcards:the_lovers')
        event.shaped(
                Item.of('the_deep_void:hunters_helmet'),
                [
                        'ABA',
                        ' C ',
                        'DBD'
                ],
                {
                        D: 'the_deep_void:block_of_bone_pile',
                        C: 'concatenationcore:dense_alloy',
                        B: 'the_deep_void:hunter_hide',
                        A: 'born_in_chaos_v1:monster_skin'
                }
        )
        event.shaped(
                Item.of('the_deep_void:hunters_chestplate'),
                [
                        'A A',
                        'ACA',
                        'BDB'
                ],
                {
                        D: 'the_deep_void:block_of_bone_pile',
                        C: 'concatenationcore:dense_alloy',
                        B: 'the_deep_void:hunter_hide',
                        A: 'born_in_chaos_v1:monster_skin'
                }
        )
        event.shaped(
                Item.of('the_deep_void:hunters_leggings'),
                [
                        'ACA',
                        'B B',
                        'D D'
                ],
                {
                        D: 'the_deep_void:block_of_bone_pile',
                        C: 'concatenationcore:dense_alloy',
                        B: 'the_deep_void:hunter_hide',
                        A: 'born_in_chaos_v1:monster_skin'
                }
        )
        event.shaped(
                Item.of('the_deep_void:hunters_boots'),
                [
                        'A A',
                        'BCB',
                        'D D'
                ],
                {
                        D: 'the_deep_void:block_of_bone_pile',
                        C: 'concatenationcore:dense_alloy',
                        B: 'the_deep_void:hunter_hide',
                        A: 'born_in_chaos_v1:monster_skin'
                }
        )
        event.shaped(
                Item.of('the_deep_void:grim_shard', 9),
                [
                        'CCC',
                        'BAB',
                        'BDB'
                ],
                {
                    D: 'the_deep_void:liquid_void_bucket',
                    C: 'theurgy:alchemical_salt_mineral',    
                    B: 'the_deep_void:desolate_soil',
                    A: 'the_deep_void:grim_shard'
                }
        ) //these are the most placeholdery placeholder recipes...
        event.shaped(
                Item.of('the_deep_void:ancient_onyx'),
                [
                        'BCB',
                        ' A ',
                        'BDB'
                ],
                {
                    D: 'the_deep_void:liquid_void_bucket',
                    C: 'the_deep_void:desolate_soil',    
                    B: 'the_deep_void:onyx',
                    A: 'theurgy:alchemical_sulfur_gems_precious'
                }
        )

        event.shaped(
                Item.of('the_deep_void:hatching_enzyme'),
                [
                        'BCB',
                        'CAC',
                        'DCD'
                ],
                {
                    D: 'the_deep_void:bone_mush',
                    C: 'the_deep_void:goo_ball',    
                    B: 'the_deep_void:rotten_bone',
                    A: 'minecolonies:mint_jelly'
                }
        )
        event.recipes.thermal.pulverizer(Item.of('the_deep_void:disturbing_root').withChance(0.02), 'the_deep_void:infested_rotten_log').energy(100)
        // event.recipes.theurgy.fermentation(
        // "2x the_deep_void:onyx",
        // '1bx minecraft:water',
        // ['the_deep_void:ancient_onyx'],
        // 100
        // )
//  event.shaped(
//                 Item.of('the_deep_void:disturbing_root'),
//                 [
//                         'BCB',
//                         'CAC',
//                         'BCB'
//                 ],
//                 {
//                     C: 'the_deep_void:void_roots',    
//                     B: 'the_deep_void:peeping_roots',
//                     A: 'theurgy:mercury_shard'
//                 }
//         )
    // event.custom({
    //     "type": "theurgy:digestion",
    //     "category": "misc",
    //     "fluid": {
    //         "amount": 200,
    //         "ingredient": {
    //         "fluid": "the_deep_void:liquid_void"
    //         }
    //     },
    //     "ingredients": [
    //         {
    //         "count": 1,
    //         "ingredient": {
    //             "item": "the_deep_void:grim_shard"
    //         }
    //         },
    //         {
    //         "count": 8,
    //         "ingredient": {
    //             "item": "the_deep_void:desolate_soil"
    //         }
    //         }
    //     ],
    //     "result": {
    //         "count": 8,
    //         "id": "the_deep_void:grim_shard"
    //     },
    //     "time": 400
    // })
    // event.custom({
    //     "type": "theurgy:fermentation",
    //     "category": "misc",
    //     "fluid": {
    //         "amount": 50,
    //         "ingredient": {
    //         "fluid": "the_deep_void:liquid_void"
    //         }
    //     },
    //     "ingredients": [
    //         {
    //         "count": 4,
    //         "ingredient": {
    //             "item": "the_deep_void:onyx"
    //         }
    //         },
    //         {
    //         "count": 1,
    //         "ingredient": {
    //             "item": "the_deep_void:desolate_soil"
    //         }
    //         }
    //     ],
    //     "result": {
    //         "count": 1,
    //         "id": "the_deep_void:ancient_onyx"
    //     },
    //     "time": 100
    // })
    // event.recipes.theurgy.digestion(
    //     "8x the_deep_void:grim_shard",
    //     '1bx the_deep_void:liquid_void',
    //     ['the_deep_void:grim_shard', 'the_deep_void:desolate_soil'],
    //     500
    // )
    // event.recipes.theurgy.fermentation(
    //     "the_deep_void:ancient_onyx",
    //     '1bx the_deep_void:liquid_void',
    //     ['4x the_deep_void:onyx', 'the_deep_void:desolate_soil'],
    //     100
    // )
    // event.shaped(
    //             Item.of('theurgy:alchemical_sulfur_grim_gem'),
    //             [
    //                     'BBB',
    //                     'BAB',
    //                     'BBB'
    //             ],
    //             {
    //                     B: 'the_deep_void:grim_shard',
    //                     A: 'theurgy:alchemical_niter_rare_gem'
    //             }
    //     )
});