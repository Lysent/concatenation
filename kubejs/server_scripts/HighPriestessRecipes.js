ServerEvents.recipes(event => {

    event.shaped(
            Item.of('tarotcards:the_high_priestess'),
            [
                    'ABA',
                    'CDC',
                    'ACA'
            ],
            {
                    D: '#concatenation:tech_cards',
                    A: 'concatenationcore:gold_paper',
                    B: 'thermal:machine_frame',
                    C: 'thermal:steel_dust'
            }
    ).keepIngredient('#concatenation:tech_cards')
});