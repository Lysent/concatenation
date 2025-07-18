ServerEvents.recipes(event => {

    [
        "irons_spellbooks:inscription_table",
        "irons_spellbooks:scroll_forge",
        "irons_spellbooks:arcane_anvil",

    ].forEach(item => event.remove({ output: item }));


    // star card
    event.shaped(
        Item.of('tarotcards:the_star'),
        [
            'ABA',
            'CDE',
            'AfA'
        ],
        {
            E: 'create_dd:music_disc_waltz_of_the_flowers',
            B: 'elementalcraft:fine_air_gem',
            A: 'concatenationcore:gold_paper',
            C: 'minecraft:nether_star',
            D: 'tarotcards:the_magician',
            F: 'elementalcraft:fine_earth_gem'
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
    ).keepIngredient('tarotcards:temperance');

    // gated recipes
    event.shaped(
        Item.of('irons_spellbooks:inscription_table'),
        [
            ' CB',
            'SSS',
            'F F'
        ],
        {
            S: "#minecraft:wooden_slabs",
            F: "#minecraft:wooden_fences",
            B: "minecraft:book",
            C: "tarotcards:the_star"
        }
    ).keepIngredient('tarotcards:the_star');
    event.shaped(
        Item.of('irons_spellbooks:scroll_forge'),
        [
            'SSS',
            ' RC',
            'OOO'
        ],
        {
            S: "minecraft:polished_deepslate",
            O: "minecraft:crying_obsidian",
            R: "minecraft:respawn_anchor",
            C: "tarotcards:the_star"
        }
    ).keepIngredient('tarotcards:the_star');
    event.shaped(
        Item.of('irons_spellbooks:arcane_anvil'),
        [
            'MMM',
            ' GC',
            'SAS'
        ],
        {
            S: "minecraft:polished_deepslate",
            A: "minecraft:anvil",
            M: "minecraft:amethyst_block",
            G: "#concatenation:magic_lens",
            C: "tarotcards:the_star"
        }
    ).keepIngredient('tarotcards:the_star');

    // additional recipes
    event.shapeless( // blood vial via hexerei
        Item.of('irons_spellbooks:blood_vial'),
        [
            'hexerei:blood_bottle',
            'minecraft:iron_nugget',
        ]
    );

    event.shaped( // blank rune via blood magic
        Item.of('irons_spellbooks:blank_rune'),
        [
            " R ",
            "RSR",
            " R "
        ],
        {
            R: 'bloodmagic:masterritualstone',
            S: 'minecraft:polished_deepslate_slab',
        }
    );
    event.shapeless( // blank rune via ars nouveau
        Item.of('irons_spellbooks:blank_rune'),
        [
            'ars_nouveau:thread_spellpower',
            'minecraft:polished_deepslate_slab',
        ]
    );

    event.shaped( // arcane salvage via blood magic
        Item.of('irons_spellbooks:arcane_salvage'),
        [
            "EME",
            "MSM",
            "EME"
        ],
        {
            E: "irons_spellbooks:arcane_essence",
            S: 'minecraft:netherite_scrap',
            M: 'bloodmagic:arcaneashes'
        }
    );
    event.shaped( // arcane salvage via ars nouveau
        Item.of('irons_spellbooks:arcane_salvage'),
        [
            "EME",
            "MSM",
            "EME"
        ],
        {
            E: "irons_spellbooks:arcane_essence",
            S: 'minecraft:netherite_scrap',
            M: 'ars_nouveau:conjuration_essence'
        }
    );

});