ServerEvents.recipes(event => {
        const remove = [
                'tconstruct:seared_melter',
                'create:andesite_alloy',
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

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
        ).returningItem('tarotcards:the_hermit')
});
