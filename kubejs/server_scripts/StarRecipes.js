ServerEvents.recipes(event => {

    [
        "irons_spellbooks:inscription_table",
        "irons_spellbooks:scroll_forge",
        "irons_spellbooks:arcane_anvil",

    ].forEach(item => event.remove({ output: item }));


    // star card
    event.shaped(
        Item.of("tarotcards:the_star"),
        [
            "ABA",
            "CDE",
            "AFA"
        ],
        {
            E: "create_dd:music_disc_waltz_of_the_flowers",
            B: "elementalcraft:fine_air_gem",
            A: "concatenationcore:gold_paper",
            C: "minecraft:nether_star",
            D: "tarotcards:the_magician",
            F: "elementalcraft:fine_earth_gem"
        }
    ).keepIngredient("tarotcards:the_magician")
    event.shaped(
        Item.of("tarotcards:the_star"),
        [
            "ABA",
            "CDE",
            "AFA"
        ],
        {
            C: "hexerei:moon_dust",
            F: "celestisynth:starstruck_scrap",
            B: "celestisynth:starstruck_feather",
            D: "tarotcards:temperance",
            E: "concatenationcore:descran",
            A: "concatenationcore:gold_paper"
        }
    ).keepIngredient("tarotcards:temperance");

    // gated recipes
    event.shaped(
        Item.of("irons_spellbooks:inscription_table"),
        [
            " CB",
            "SSS",
            "F F"
        ],
        {
            S: "#minecraft:wooden_slabs",
            F: "#minecraft:wooden_fences",
            B: "minecraft:book",
            C: "tarotcards:the_star"
        }
    ).keepIngredient("tarotcards:the_star");
    event.shaped(
        Item.of("irons_spellbooks:scroll_forge"),
        [
            "SSS",
            " RC",
            "OOO"
        ],
        {
            S: "minecraft:polished_deepslate",
            O: "minecraft:crying_obsidian",
            R: "minecraft:respawn_anchor",
            C: "tarotcards:the_star"
        }
    ).keepIngredient("tarotcards:the_star");
    event.shaped(
        Item.of("irons_spellbooks:arcane_anvil"),
        [
            "MMM",
            " GC",
            "SAS"
        ],
        {
            S: "minecraft:polished_deepslate",
            A: "minecraft:anvil",
            M: "minecraft:amethyst_block",
            G: "#concatenation:magic_lens",
            C: "tarotcards:the_star"
        }
    ).keepIngredient("tarotcards:the_star");

    // additional recipes
    event.shapeless( // blood vial via hexerei
        Item.of("irons_spellbooks:blood_vial"),
        [
            "hexerei:blood_bottle",
            "minecraft:iron_nugget",
        ]
    );

    event.shaped( // blank rune via blood magic
        Item.of("irons_spellbooks:blank_rune"),
        [
            " R ",
            "RSR",
            " R "
        ],
        {
            R: "bloodmagic:masterritualstone",
            S: "minecraft:polished_deepslate_slab",
        }
    );
    event.shapeless( // blank rune via ars nouveau
        Item.of("irons_spellbooks:blank_rune"),
        [
            "ars_nouveau:thread_spellpower",
            "minecraft:polished_deepslate_slab",
        ]
    );

    event.shaped( // arcane salvage via blood magic
        Item.of("irons_spellbooks:arcane_salvage"),
        [
            "EME",
            "MSM",
            "EME"
        ],
        {
            E: "irons_spellbooks:arcane_essence",
            S: "minecraft:netherite_scrap",
            M: "bloodmagic:arcaneashes"
        }
    );
    event.shaped( // arcane salvage via ars nouveau
        Item.of("irons_spellbooks:arcane_salvage"),
        [
            "EME",
            "MSM",
            "EME"
        ],
        {
            E: "irons_spellbooks:arcane_essence",
            S: "minecraft:netherite_scrap",
            M: "ars_nouveau:conjuration_essence"
        }
    );

    event.shapeless( // craftable armour piles
        Item.of("irons_spellbooks:armor_pile", 4),
        [
            "minecraft:netherite_scrap",
            "irons_spellbooks:arcane_essence",
        ]
    );

    event.shaped( // true cooldown ring
        Item.of(
            "irons_spellbooks:affinity_ring", 
            "{display:{Name:'{\"text\":\"Ring of True Speed\"}'},CurioAttributeModifiers:[{AttributeName:\"irons_spellbooks:cooldown_reduction\",Name:\"irons_spellbooks:cooldown_reduction\",Amount:2,Operation:2,UUID:[I;-1093106719,2113816580,-1757804057,158672533],Slot:\"ring\"},{AttributeName:\"irons_spellbooks:cast_time_reduction\",Name:\"irons_spellbooks:cast_time_reduction\",Amount:0.5,Operation:2,UUID:[I;527994327,1899842476,-1977030579,1597526457],Slot:\"ring\"}]}"
        ),
        [
            "CCC",
            "CRC",
            "CCC"
        ],
        {
            C: "irons_spellbooks:cooldown_ring",
            R: "irons_spellbooks:affinity_ring",
        }
    );

});