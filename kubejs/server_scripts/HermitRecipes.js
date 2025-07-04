ServerEvents.recipes(event => {
        const remove = [
                'tconstruct:seared_melter',
                'create:whisk'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'create:shaft', type: 'minecraft:crafting_shaped' })

        event.shaped(
                Item.of('tconstruct:seared_melter'),
                [
                        ' A ',
                        'BCB',
                        'DDD'
                ],
                {
                        D: 'tconstruct:seared_brick',
                        C: 'thermal:tin_ingot',
                        B: 'tconstruct:seared_glass',
                        A: 'tarotcards:the_hermit'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('concatenationcore:circuit'),
                [
                        'ABC',
                        'BDC',
                        'ABC'
                ],
                {
                        C: 'minecraft:iron_ingot',
                        D: 'minecraft:redstone',
                        A: 'thermal:rose_gold_ingot',
                        B: 'createaddition:electrum_wire'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_2'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'solarflux:sp_1',
                        B: 'concatenationcore:circuit'
                }
        )
        event.shaped(
                Item.of('create:whisk'),
                [
                        ' A ',
                        'BAB',
                        'CBC'
                ],
                {
                        B: 'create:brass_sheet',
                        A: 'create:andesite_alloy',
                        C: 'create:iron_sheet'
                }
        )
});
