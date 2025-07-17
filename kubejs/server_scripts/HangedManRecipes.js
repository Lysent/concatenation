ServerEvents.recipes(event => {

    event.shaped(
            Item.of('tarotcards:the_hanged_man'),
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
});
