ServerEvents.recipes(event => {

        event.remove({ output: 'patchouli:guide_book', type: 'minecraft:crafting_shapeless' })

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
                        'CurioAttributeModifier:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:1,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
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
                        D: 'tarotcards:the_high_priestess'
                }
        ).keepIngredient('tarotcards:the_high_priestess')
        event.shaped(
                Item.of(
                        "concatenationcore:full_wands",
                        'CurioAttributeModifier:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:1,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        "CCC",
                        "CCC",
                        "CCC"
                ],
                {
                        C: "concatenationcore:bricksword"
                }
        );
        event.shaped(
                Item.of(
                        "concatenationcore:full_swords",
                        'CurioAttributeModifier:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:1,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
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
                        'CurioAttributeModifier:[{AttributeName:"generic.max_health",Name:"generic.max_health",Amount:1,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"curio"}]}'
                ),
                [
                        "CCC",
                        "CCC",
                        "CCC"
                ],
                {
                        C: "concatenationcore:bricksword"
                }
        );

        event.shapeless(
                Item.of('minecraft:water_bucket'),
                [
                        'concatenationcore:full_cups',
                        'minecraft:bucket'
                ]
        ).keepIngredient('concatenationcore:full_cups')
});