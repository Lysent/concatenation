ServerEvents.recipes(event => {

    event.shaped(
            Item.of('concatenationcore:kestrel'),
            [
                    '  A',
                    ' B ',
                    'CD '
            ],
            {
                    B: 'asr:ender_giant_sword',
                    D: 'tarotcards:temperance',
                    A: 'minecraft:ender_eye',
                    C: 'concatenationcore:gold_handle'
            }
    ).keepIngredient('tarotcards:temperance')
});
