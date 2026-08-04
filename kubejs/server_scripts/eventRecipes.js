//priority: 200
ServerEvents.recipes(event => {

    // The Economy, Fools!
    event.shaped(
        Item.of('concatenationcore:gold_card'),
        [
            'AAA',
            'CDC',
            'ABA'
        ],
        {
            A: '#concatenation:smooth_material',
            C: '#concatenation:circuits',
            B: 'concatenationcore:gold_paper',
            D: 'concatenationcore:merchant_permit_1'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_1'),
        [
            'ABA',
            'CDC',
            'ABA'
        ],
        {
            B: 'minecraft:diamond_block',
            D: 'concatenationcore:one_hundred_twenty_five_karaon',
            A: 'minecraft:iron_block',
            C: 'concatenationcore:twice_compacted_wood'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_2'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:diamond_block',
            C: 'concatenationcore:shimmering_gold_block',
            D: 'concatenationcore:merchant_permit_1',
            B: 'minecraft:netherite_block',
            E: 'concatenationcore:six_hundred_twenty_five_karaon'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_2'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: 'minecraft:diamond_block',
            D: 'concatenationcore:gold_card',
            B: 'minecraft:netherite_block',
            C: 'concatenationcore:glowing_gold_block',
            E: 'concatenationcore:six_hundred_twenty_five_karaon'
        }
    )
    event.shaped(
        Item.of('concatenationcore:merchant_permit_3'),
        [
            'ABA',
            'ACA',
            'ABA'
        ],
        {
            C: 'concatenationcore:merchant_permit_2',
            B: 'concatenationcore:three_thousand_one_hundred_twenty_five_karaon',
            A: 'concatenationcore:silver_paper'
        }
    )
    event.shaped(
        Item.of('concatenationcore:one_karaon'),
        [
            'AAA',
            'AAA',
            'AAA'
        ],
        {
            A: 'thermal:enderium_coin'
        }
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 5),
        ['concatenationcore:five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 5),
        ['concatenationcore:twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 25),
        ['concatenationcore:twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:twenty_five_karaon', 5),
        ['concatenationcore:one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 25),
        ['concatenationcore:one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 125),
        ['concatenationcore:one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_hundred_twenty_five_karaon', 5),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:twenty_five_karaon', 25),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 125),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 625),
        ['concatenationcore:six_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:six_hundred_twenty_five_karaon', 5),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_hundred_twenty_five_karaon', 25),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:twenty_five_karaon', 125),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:five_karaon', 625),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )
    event.shapeless(
        Item.of('concatenationcore:one_karaon', 3125),
        ['concatenationcore:three_thousand_one_hundred_twenty_five_karaon']
    )

    // Winter 2025
    event.shaped(
        Item.of('concatenationcore:doom_candy_cane'),
        [
            'ABA',
            'CAD',
            'AEA'
        ],
        {
            D: 'minecraft:red_dye',
            E: 'reliquary:frozen_core',
            B: 'minecraft:green_dye',
            A: 'supplementaries:sugar_cube',
            C: 'born_in_chaos_v1:dark_ice'
        }
    )

    // Timaeus

    event.shaped(
        Item.of('concatenationcore:solar_core'),
        [
            'ABC',
            'DEF',
            'GBH'
        ],
        {
            F: 'strangematter:shade_shard_crystal',
            E: 'concatenationcore:prudence',
            H: 'strangematter:gravitic_shard_crystal',
            D: 'strangematter:energetic_shard_crystal',
            C: 'strangematter:spatial_shard_crystal',
            B: 'perdition:scintillate_pile',
            G: 'strangematter:chrono_shard_crystal',
            A: 'strangematter:insight_shard_crystal'
        }
    ).keepIngredient('concatenationcore:prudence')

    event.shaped(
        Item.of('mokels_bossfight_saphyra:sigil_of_the_red_sun'),
        [
            'ABA',
            'CDE',
            'ABA'
        ],
        {
            B: 'concatenationcore:fortune_fragment',
            C: 'tarotcards:the_devil',
            D: 'concatenationcore:solar_core',
            E: 'tarotcards:justice',
            A: 'concatenationcore:silver_paper'
        }
    ).keepIngredient('tarotcards:the_devil').keepIngredient('tarotcards:justice')
    event.shaped(
        Item.of('mokels_bossfight_saphyra:key_2'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'strangematter:gravitic_shard',
            B: 'mokels_bossfight_saphyra:sunveil'
        }
    )
    event.shaped(
        Item.of('concatenationcore:blasphemy_fragment'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            B: 'perdition:displacement_stone_6',
            D: 'mokels_bossfight_saphyra:witch_staff',
            E: 'perdition:cut_dis_gem',
            C: 'projecte:red_matter',
            A: 'rftoolsdim:legendary_essence'
        }
    )

});