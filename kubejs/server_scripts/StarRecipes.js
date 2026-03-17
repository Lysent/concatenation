ServerEvents.recipes(event => {

    [
        "irons_spellbooks:inscription_table",
        "irons_spellbooks:scroll_forge",
        "irons_spellbooks:arcane_anvil",
        "projecte:interdiction_torch",
        "projecte:collector_mk1",
        "projecte:relay_mk1",
        "projecte:rm_morning_star",
        "projecte:rm_katar",
        "projecte:gem_helmet",
        "projecte:gem_boots",
        "projecte:gem_leggings",
        "projecte:gem_chestplate"

    ].forEach(item => event.remove({ output: item }));

    event.replaceInput(
        { output: 'projecte:gem_leggings' },
        'projecte:watch_of_flowing_time',
        'projecte:life_stone'
    );


    // star card
    event.shaped(
        Item.of("tarotcards:the_star"),
        [
            "ABA",
            "CDE",
            "AFA"
        ],
        {
            E: "celestisynth:solar_crystal",
            B: "elementalcraft:pristine_air_gem",
            A: "concatenationcore:gold_paper",
            C: "#concatenation:wither_ingredient",
            D: "tarotcards:the_magician",
            F: "elementalcraft:pristine_earth_gem"
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
    // event.shaped(
    //     Item.of('thermal:laser_diode'),
    //     [
    //         'ABC',
    //         'DEF',
    //         'CGC'
    //     ],
    //     {
    //         A: 'tarotcards:the_star',
    //         F: 'concatenationcore:riparian',
    //         C: 'irons_spellbooks:legendary_ink',
    //         G: 'concatenationcore:temblor',
    //         E: 'minecraft:nether_star',
    //         B: 'concatenationcore:windflaw',
    //         D: 'concatenationcore:conflagration'
    //     }
    // ).keepIngredient("tarotcards:the_star")

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

    // The Devil
    event.shaped(
        Item.of('tarotcards:the_devil'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            B: 'projecte:aeternalis_fuel',
            C: 'projecte:philosophers_stone',
            A: 'concatenationcore:gold_paper'
        }
    )
    event.shapeless(
        Item.of('projecte:mobius_fuel'),
        [
            'projecte:philosophers_stone',
            'elementalcraft:elemental_firefuel'
        ]
    ).replaceIngredient('elementalcraft:elemental_firefuel', 'supplementaries:ash')
    event.shapeless(
        Item.of('projecte:alchemical_coal', 4),
        [
            'projecte:philosophers_stone',
            'elementalcraft:elemental_firefuel'
        ]
    ).replaceIngredient('elementalcraft:elemental_firefuel', 'supplementaries:ash')
    event.shapeless(
        Item.of('projecte:alchemical_coal', 4),
        [
            'projecte:philosophers_stone',
            'projecte:mobius_fuel'
        ]
    )
    event.shapeless(
        Item.of('projecte:alchemical_coal', 9),
        [
            'projecte:alchemical_coal_block'
        ]
    )
    event.shaped(
        Item.of('projecte:interdiction_torch', 8),
        [
            'AB ',
            '   ',
            '   '
        ],
        {
            A: 'reliquary:interdiction_torch',
            B: 'projecte:medium_covalence_dust'
        }
    )

    // The Devil

    event.shaped(
        Item.of('projecte:collector_mk1'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            C: 'concatenationcore:glowing_gold_block',
            A: 'minecraft:glowstone',
            D: 'projecte:aeternalis_fuel_block',
            E: 'bloodmagic:sacrificerune2',
            B: 'concatenationcore:protean_glass'
        }
    )
    event.shaped(
        Item.of('projecte:relay_mk1'),
        [
            'ABA',
            'CDC',
            'AAA'
        ],
        {
            D: 'projecte:aeternalis_fuel_block',
            A: 'minecraft:obsidian',
            C: 'minecraft:crying_obsidian',
            B: 'concatenationcore:protean_glass'
        }
    )

    //Temporary
    event.shaped(
        Item.of('concatenationcore:antimony'),
        [
            'ABC',
            'DDD',
            'D  '
        ],
        {
            D: 'theurgy:sal_ammoniac_crystal',
            A: 'concatenationcore:breaking_tool',
            C: 'thermal:lead_ingot',
            B: 'concatenationcore:ectorite'
        }
    )
    event.shaped(
        Item.of('concatenationcore:antimony'),
        [
            'ABC',
            'DDD',
            'D  '
        ],
        {
            D: 'theurgy:sal_ammoniac_crystal',
            B: 'concatenationcore:bloodstained_steel',
            A: 'concatenationcore:breaking_tool',
            C: 'thermal:lead_ingot'
        }
    )
    event.shaped(
        Item.of('concatenationcore:antimony'),
        [
            'ABC',
            'CDD',
            'DDD'
        ],
        {
            D: 'theurgy:sal_ammoniac_crystal',
            B: 'concatenationcore:blood_powder',
            A: 'concatenationcore:breaking_tool',
            C: 'thermal:lead_ingot'
        }
    )

    event.shaped(
        Item.of('projecte:rm_morning_star'),
        [
            'ABC',
            'DED',
            'DDD'
        ],
        {
            C: 'projecte:rm_shovel',
            A: 'projecte:rm_hammer',
            E: 'tarotcards:the_world',
            D: 'projecte:red_matter',
            B: 'projecte:rm_pick'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('projecte:rm_katar'),
        [
            'ABC',
            'DEF',
            'FFF'
        ],
        {
            A: 'projecte:rm_shears',
            B: 'projecte:rm_axe',
            D: 'projecte:rm_hoe',
            C: 'projecte:rm_sword',
            E: 'tarotcards:the_world',
            F: 'projecte:red_matter'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shapeless(
        Item.of('projecte:gem_helmet'),
        [
            'projecte:rm_helmet',
            'projecte:evertide_amulet',
            'projecte:soul_stone',
            Item.of('projecte:klein_star_omega', '{StoredEMC:51200000}'),
            'tarotcards:the_world'
        ]
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('projecte:gem_leggings'),
        [
            'ABC',
            'DE ',
            '   '
        ],
        {
            A: 'projecte:rm_leggings',
            B: 'projecte:black_hole_band',
            D: Item.of('projecte:klein_star_omega', '{StoredEMC:51200000}'),
            E: 'tarotcards:the_world',
            C: 'projecte:life_stone'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('projecte:gem_chestplate'),
        [
            'ABC',
            'DE ',
            '   '
        ],
        {
            C: 'projecte:body_stone',
            B: 'projecte:volcanite_amulet',
            D: Item.of('projecte:klein_star_omega', '{StoredEMC:51200000}'),
            E: 'tarotcards:the_world',
            A: 'projecte:rm_chestplate'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('projecte:gem_boots'),
        [
            'ABB',
            'CD ',
            '   '
        ],
        {
            B: 'projecte:swiftwolf_rending_gale',
            C: Item.of('projecte:klein_star_omega', '{StoredEMC:51200000}'),
            D: 'tarotcards:the_world',
            A: 'projecte:rm_boots'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('advanced_ae:quantum_helmet'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            E: 'advanced_ae:quantum_storage_component',
            B: 'ae2:wireless_access_point',
            C: 'advanced_ae:quantum_processor',
            D: 'tarotcards:the_world',
            A: 'advanced_ae:quantum_alloy_plate'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('advanced_ae:quantum_chestplate'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            E: 'advanced_ae:quantum_storage_component',
            B: 'ae2:wireless_access_point',
            C: 'advanced_ae:quantum_processor',
            D: 'tarotcards:the_world',
            A: 'advanced_ae:quantum_alloy_plate'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('advanced_ae:quantum_leggings'),
        [
            'ABA',
            'CDC',
            'CEC'
        ],
        {
            E: 'advanced_ae:quantum_storage_component',
            B: 'ae2:wireless_access_point',
            C: 'advanced_ae:quantum_processor',
            D: 'tarotcards:the_world',
            A: 'advanced_ae:quantum_alloy_plate'
        }
    ).keepIngredient('tarotcards:the_world')
    event.shaped(
        Item.of('advanced_ae:quantum_boots'),
        [
            'ABA',
            'ACA',
            'DED'
        ],
        {
            E: 'advanced_ae:quantum_storage_component',
            B: 'ae2:wireless_access_point',
            A: 'advanced_ae:quantum_processor',
            C: 'tarotcards:the_world',
            D: 'advanced_ae:quantum_alloy_plate'
        }
    ).keepIngredient('tarotcards:the_world')

});