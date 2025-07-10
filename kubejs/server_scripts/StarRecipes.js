ServerEvents.recipes(event => {

    const remove = [
        'mna:manaweaver_wand',
        'mna:occulus'
    ]

    remove.forEach(item => {
        event.remove({ output: item })
    })

    event.shaped(
        Item.of('tarotcards:the_star'),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            E: 'create_dd:music_disc_waltz_of_the_flowers',
            B: 'elementalcraft:jewel',
            A: 'concatenationcore:gold_paper',
            C: 'minecraft:nether_star',
            D: 'tarotcards:the_magician'
        }
    ).keepIngredient('tarotcards:the_magician')
    event.shaped(
        Item.of('tarotcards:the_star'),
        [
            'ABA',
            'CDE',
            'AFA'
        ],
        {
            C: 'hexerei:moon_dust',
            F: 'celestisynth:starstruck_scrap',
            B: 'celestisynth:starstruck_feather',
            D: 'tarotcards:temperance',
            E: 'concatenationcore:descran',
            A: 'concatenationcore:gold_paper'
        }
    ).keepIngredient('tarotcards:temperance')
    event.shaped(
        Item.of('mna:occulus'),
        [
            'ABA',
            'CDC',
            ' E '
        ],
        {
            A: 'mna:vinteum_dust',
            D: 'tarotcards:the_star',
            E: 'mna:ornate_table',
            B: 'minecraft:glass',
            C: 'mna:vinteum_ingot'
        }
    ).keepIngredient('tarotcards:the_star')
    event.shaped(
        Item.of('mna:manaweaver_wand'),
        [
            ' AB',
            ' CA',
            'CD '
        ],
        {
            B: 'mna:vinteum_dust',
            D: 'tarotcards:the_star',
            C: 'minecraft:stick',
            A: 'mna:vinteum_ingot'
        }
    ).keepIngredient('tarotcards:the_star')
});