ServerEvents.recipes(event => {

    const remove = [
                'celestisynth:starlit_factory',
                'celestisynth:solar_crystal_helmet',
                'celestisynth:solar_crystal_chestplate',
                'celestisynth:solar_crystal_leggings',
                'celestisynth:solar_crystal_boots',
                'celestisynth:lunar_stone_helmet',
                'celestisynth:lunar_stone_chestplate',
                'celestisynth:lunar_stone_leggings',
                'celestisynth:lunar_stone_boots'

        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

    event.shaped(
            Item.of('tarotcards:strength'),
            [
                    'ABA',
                    'CDE',
                    'AFA'
            ],
            {
                    B: 'celestisynth:solar_crystal',
                    E: 'elementalcraft:swift_alloy_block',
                    F: 'celestisynth:lunar_scrap',
                    A: 'concatenationcore:glowing_gold',
                    C: 'thermal:electrum_block',
                    D: 'concatenation:middle_cards'
            }
    ).keepIngredient('concatenation:middle_cards')
    event.shaped(
    Item.of('celestisynth:starlit_factory'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        A: 'celestisynth:celestial_netherite_ingot',
        D: 'tarotcards:strength',
        C: 'create:industrial_iron_block',
        B: 'ars_nouveau:redstone_relay',
        F: 'minecraft:respawn_anchor',
        E: 'minecraft:crying_obsidian'
    }
)
});
