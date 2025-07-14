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
});