//priority: 200
ServerEvents.recipes(event => {

    [
        'strangematter:resonant_circuit',
        'strangematter:resonant_coil',
        'strangematter:research_tablet',
        'kismet:synthetic_organ',
        'strangematter:tinfoil_hat'
    ].forEach(item => event.remove({ output: item }));

    event.replaceInput(
        { output: 'strangematter:field_scanner' },
        'minecraft:redstone',
        'concatenationcore:stickyredstone'
    );

    event.remove({ output: 'strangematter:resonite_ingot', type: 'minecraft:smelting' })
    event.remove({ output: 'strangematter:resonite_ingot', type: 'minecraft:blasting' })

    // Prudence
    event.shaped(
        Item.of(
            "concatenationcore:prudence",
            '{display:{Name:\'{"text":"Tarot : Prudence","color":"yellow","italic":false}\'},CurioAttributeModifiers:[{AttributeName:"generic.armor_toughness",Name:"generic.armor_toughness",Amount:2,Operation:0,UUID:[I;-1943734245,557076157,-1664112441,-338651852],Slot:"curio"}]}'
        ),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: '#concatenation:top_cards',
            A: 'concatenationcore:glowing_gold_block',
            B: 'strangematter:resonite_ingot'
        }
    ).keepIngredient('#concatenation:top_cards')
    event.shaped(
        Item.of('strangematter:raw_resonite', 8),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'hexerei:selenite_shard',
            A: 'hexerei:blood_bottle'
        }
    )
    event.shaped(
        Item.of('strangematter:raw_resonite', 6),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'concatenationcore:descran',
            A: 'hexerei:blood_bottle'
        }
    )
    event.shaped(
        Item.of('strangematter:resonant_coil'),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            C: 'concatenationcore:copper_lead_coil',
            B: 'strangematter:resonite_nugget',
            A: 'strangematter:resonite_ingot'
        }
    )
    event.shaped(
        Item.of('strangematter:resonant_circuit'),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            C: 'strangematter:energetic_shard',
            A: 'concatenationcore:stickyredstone',
            B: 'strangematter:resonite_ingot'
        }
    )
    event.shapeless(
        Item.of('strangematter:resonant_circuit'),
        [
            '#concatenation:circuits',
            'strangematter:energetic_shard',
            'strangematter:resonite_ingot'
        ]
    )
    event.shaped(
        Item.of('perdition:halcyon'),
        [
            '  A',
            'BC ',
            'DB '
        ],
        {
            B: 'strangematter:resonite_nugget',
            C: 'strangematter:resonite_ingot',
            A: 'thermal:silver_ingot',
            D: 'strangematter:spatial_shard'
        }
    )
    event.shaped(
        Item.of('perdition:halcyon'),
        [
            ' AB',
            'CBA',
            'DC '
        ],
        {
            C: 'waystones:attuned_shard',
            D: 'waystones:warp_stone',
            A: 'elementalcraft:springaline_shard',
            B: 'thermal:silver_ingot'
        }
    )
    event.shaped(
        Item.of('perdition:halcyon'),
        [
            '  A',
            ' B ',
            'C  '
        ],
        {
            A: 'psi:ivory_psimetal',
            B: 'psi:ebony_psimetal',
            C: 'strangematter:spatial_shard'
        }
    )
    event.shapeless(
        Item.of('strangematter:research_tablet'),
        [
            'concatenationcore:prudence',
            'minecraft:glass_pane',
            'strangematter:resonant_circuit'
        ]
    ).keepIngredient('concatenationcore:prudence')
    event.shaped(
        Item.of('concatenationcore:woven_pearl'),
        [
            'AB ',
            '   ',
            '   '
        ],
        {
            B: 'minecraft:ender_pearl',
            A: 'perdition:halcyon'
        }
    )
    event.shaped(
        Item.of('rftoolsbase:dimensionalshard', 8),
        [
            ' AB',
            'CDE',
            'FG '
        ],
        {
            B: 'strangematter:gravitic_shard',
            C: 'strangematter:shade_shard',
            D: 'minecraft:prismarine_crystals',
            E: 'strangematter:energetic_shard',
            A: 'strangematter:chrono_shard',
            G: 'strangematter:insight_shard',
            F: 'strangematter:spatial_shard'
        }
    )
    event.shaped(
        Item.of('elementalcraft:crude_fire_gem'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'strangematter:gravitic_shard',
            A: 'strangematter:raw_resonite'
        }
    )
    event.shaped(
        Item.of('elementalcraft:crude_water_gem'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'strangematter:raw_resonite',
            B: 'strangematter:spatial_shard'
        }
    )
    event.shaped(
        Item.of('elementalcraft:crude_earth_gem'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'strangematter:raw_resonite',
            B: 'strangematter:insight_shard'
        }
    )
    event.shaped(
        Item.of('elementalcraft:crude_air_gem'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'strangematter:raw_resonite',
            B: 'strangematter:chrono_shard'
        }
    )
    event.shapeless(
        Item.of('psi:psigem'),
        [
            'strangematter:shade_shard',
            'rftoolsbase:infused_diamond',
            'strangematter:energetic_shard'
        ]
    )
    event.shapeless(
        Item.of('concatenationcore:meteorite', 12),
        [
            'perdition:rough_compound',
            'strangematter:resonite_block'
        ]
    )
    // event.shaped(
    //     Item.of('strangematter:raw_resonite', 1),
    //     [
    //         ' A ',
    //         'ABA',
    //         ' A '
    //     ],
    //     {
    //         B: 'minecraft:amethyst_shard',
    //         A: 'elementalcraft:powerful_earth_shard'
    //     }
    // )
    // event.shaped(
    //     Item.of('strangematter:raw_resonite', 4),
    //     [
    //         'ABA',
    //         'BCB',
    //         'ABA'
    //     ],
    //     {
    //         B: 'elementalcraft:whiterock',
    //         C: 'minecraft:amethyst_shard',
    //         A: 'minecraft:obsidian'
    //     }
    // )
    // event.shaped(
    //     Item.of('strangematter:raw_resonite', 12),
    //     [
    //         ' A ',
    //         'ABA',
    //         ' A '
    //     ],
    //     {
    //         A: 'elementalcraft:elemental_firefuel',
    //         B: 'minecraft:amethyst_shard'
    //     }
    // )
    event.shaped(
        Item.of('strangematter:raw_resonite', 4),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'perdition:corruptite',
            A: 'minecraft:obsidian'
        }
    )
    event.shaped(
        Item.of('strangematter:raw_resonite'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            A: 'perdition:limbo_bush',
            B: 'perdition:corruptite'
        }
    )
    event.shaped(
        Item.of('hexerei:moon_dust'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'concatenationcore:woven_pearl',
            A: 'perdition:scintillating_dust'
        }
    )
    event.shaped(
        Item.of('bloodmagic:demonitegravel'),
        [
            'ABB',
            'BCB',
            'BBB'
        ],
        {
            B: 'perdition:ochra_inhumana',
            A: 'concatenationcore:mixing_tool',
            C: 'hexerei:moon_dust'
        }
    )
    event.shaped(
        Item.of('elementalcraft:swift_alloy_nugget', 5),
        [
            '   ',
            'ABA',
            '   '
        ],
        {
            B: 'strangematter:chrono_shard',
            A: 'concatenationcore:pyrite'
        }
    )
    event.shaped(
        Item.of('elementalcraft:inert_crystal', 2),
        [
            'ABB',
            'B  ',
            '   '
        ],
        {
            B: 'perdition:limbo_berries',
            A: 'concatenationcore:cutting_tool'
        }
    )
    event.shaped(
        Item.of('hexerei:selenite_shard', 4),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'perdition:corruptite',
            A: 'perdition:scintillating_dust'
        }
    )
    event.shaped(
        Item.of('strangematter:raw_resonite'),
        [
            ' A ',
            'ABA',
            ' A '
        ],
        {
            B: 'concatenationcore:meteorite',
            A: 'concatenationcore:experience_orb'
        }
    )
    event.shaped(
        Item.of('strangematter:anomalous_grass', 8),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'strangematter:insight_shard',
            A: 'minecraft:grass_block'
        }
    )
    event.shapeless(
        Item.of('hexerei:selenite_shard'),
        [
            'perdition:dolomita_demiurgicus',
            'minecraft:calcite',
            'thermal:sulfur',
            '#concatenation:firing_item',
            '#concatenation:watering_item'
        ]
    )
    event.shaped(
        Item.of('perdition:elemental_soil', 2),
        [
            'AAA',
            'ABA',
            'AAA'
        ],
        {
            B: 'elementalcraft:earthcrystal',
            A: 'strangematter:anomalous_grass'
        }
    )

    event.custom({
        type: 'strangematter:reality_forge',
        pattern: [
            'DDD',
            'AEA',
            'DDD'
        ],
        key: {
            'D': { item: 'kismet:kismet_plating' },
            'A': { item: 'kismet:conglomerated_organ' },
            'E': { item: 'kismet:brain' }
        },
        result: {
            item: 'kismet:synthetic_organ',
            count: 1
        },
        shards: {
            'gravitic': 0,
            'energetic': 1,
            'chrono': 1,
            'insight': 0,
            'shade': 0,
            'spatial': 1
        },
        required_research: 'reality_forge'
    }).id('concatenation:synthetic_organ');

    // Kismet
    event.shapeless(
        Item.of('kismet:organ_regrower'),
        [
            'born_in_chaos_v1:ethereal_spirit',
            'concatenationcore:sugarbase',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh',
            'minecraft:rotten_flesh'
        ]
    )
    event.shapeless(
        Item.of('kismet:kismet_plating', 2),
        [
            'kismet:kismet_plating',
            'concatenationcore:alclad',
            'strangematter:resonite_ingot',
            '#concatenation:firing_item',
            'concatenationcore:hammer'
        ]
    )
    event.shaped(
        Item.of('kismet:synthetic_organ'),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            E: 'kismet:conglomerated_organ',
            B: 'strangematter:resonant_circuit',
            A: 'kismet:kismet_plating',
            D: 'strangematter:stabilized_core',
            C: 'strangematter:resonant_coil'
        }
    )
    event.shaped(
        Item.of('strangematter:tinfoil_hat'),
        [
            'AAA',
            'ABA',
            ' C '
        ],
        {
            A: 'thermal:tin_ingot',
            C: '#concatenation:hammers',
            B: 'strangematter:resonant_coil'
        }
    )

    event.recipes.minecraft.smelting(
        'strangematter:raw_resonite',
        'strangematter:resonite_ore'
    ).xp(0.1).cookingTime(100);
    event.recipes.minecraft.blasting(
        'strangematter:raw_resonite',
        'strangematter:resonite_ore'
    ).xp(0.1).cookingTime(50);

    // Should be in compats
    event.shaped(
        Item.of('strangematter:resonant_coil', 1),
        [
            ' A ',
            'BCB',
            ' A '
        ],
        {
            C: 'perdition:petrified_stake',
            B: 'strangematter:resonite_nugget',
            A: 'strangematter:resonite_ingot'
        }
    )
    event.shapeless(
        Item.of('perdition:limbo_bush'),
        [
            'perdition:limbo_berries',
            'perdition:blackened_resin'
        ]
    )
});