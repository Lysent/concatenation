ServerEvents.recipes(event => {

        const remove = [
                'quarryplus:solid_fuel_quarry',
                'quarryplus:workbench',
                'concatenationcore:galvanized_iron',
                'ae2:charger',
                'solarflux:sp_1',
                'solarflux:sp_2',
                'solarflux:photovoltaic_cell_1',
                'concatenationcore:crushed_iron'

        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'solarflux:sp_1', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'solarflux:sp_2', type: 'minecraft:crafting_shaped' })

        event.shaped(
                Item.of('quarryplus:solid_fuel_quarry'),
                [
                        'AEA',
                        'CDC',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:boiler',
                        C: 'thermal:drill_head',
                        A: 'concatenationcore:zinc_casing',
                        E: 'ironchest:iron_chest',
                        D: 'concatenationcore:quarry_brain'
                }
        )
        event.shaped(
                Item.of('concatenationcore:quarry_brain'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        E: 'minecraft:repeater',
                        C: 'thermal:tin_gear',
                        A: 'concatenationcore:galvanized_iron',
                        B: 'minecraft:powered_rail',
                        D: 'minecraft:copper_block'
                }
        )
        event.shaped(
                Item.of('concatenationcore:zinc_casing'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:bricks',
                        B: 'createdeco:zinc_support',
                        C: 'concatenationcore:galvanized_iron'
                }
        )
        event.shapeless(
                Item.of('concatenationcore:crushed_zinc'),
                [
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        'create:zinc_nugget',
                        '#concatenation:hammers'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:crushed_iron'),
                [
                        'minecraft:iron_nugget',
                        'minecraft:iron_nugget',
                        'minecraft:iron_nugget',
                        'minecraft:iron_nugget',
                        'minecraft:iron_nugget',
                        '#concatenation:hammers'
                ]
        )
        event.shaped(
                Item.of('concatenationcore:unfired_galvanized_iron'),
                [
                        'ABB',
                        'BC ',
                        '   '
                ],
                {
                        B: 'minecraft:clay_ball',
                        A: 'concatenationcore:crushed_zinc',
                        C: 'concatenationcore:crushed_iron'
                }
        )
        event.shaped(
                Item.of('concatenationcore:boiler'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:galvanized_iron',
                        A: 'minecraft:copper_block',
                        C: 'minecraft:blast_furnace'
                }
        )
        event.shaped(
                Item.of('concatenationcore:galvanized_iron'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:galvanized_iron_nugget',
                        B: 'tarotcards:the_hierophant'
                }
        ).keepIngredient('tarotcards:the_hierophant')
        event.shaped(
                Item.of('concatenationcore:compressed_sky_stone', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'ae2:sky_stone_block',
                        B: 'tarotcards:the_hierophant'
                }
        ).keepIngredient('tarotcards:the_hierophant')
        event.shapeless(
                Item.of('concatenationcore:alclad'),
                [
                        'concatenationcore:meteorite',
                        'concatenationcore:meteorite',
                        'concatenationcore:crushed_zinc',
                        'concatenationcore:crushed_zinc',
                        'minecraft:fire_charge',
                        '#concatenation:hammers'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:alclad'),
                [
                        'concatenationcore:meteorite',
                        'concatenationcore:meteorite',
                        'concatenationcore:crushed_zinc',
                        'concatenationcore:crushed_zinc',
                        'elementalcraft:fire_shard',
                        '#concatenation:hammers'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:alclad'),
                [
                        'concatenationcore:meteorite',
                        'concatenationcore:meteorite',
                        'concatenationcore:crushed_zinc',
                        'concatenationcore:crushed_zinc',
                        'elementalcraft:firecrystal',
                        '#concatenation:hammers'
                ]
        )
        event.shapeless(
                Item.of('concatenationcore:alclad'),
                [
                        'concatenationcore:meteorite',
                        'concatenationcore:meteorite',
                        'concatenationcore:crushed_zinc',
                        'concatenationcore:crushed_zinc',
                        'ars_nouveau:fire_essence',
                        '#concatenation:hammers'
                ]
        )
        event.shaped(
                Item.of('oreberriesreplanted:essence_berry_bush', 4),
                [
                        'AAA',
                        'ACA',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:transplant',
                        A: 'concatenationcore:experience_orb',
                        C: 'oreberriesreplanted:essence_berry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:essence_berry_bush', 4),
                [
                        'AAA',
                        'ACA',
                        'ABA'
                ],
                {
                        B: 'concatenationcore:transplant',
                        A: '#forge:consumables/experience_3',
                        C: 'oreberriesreplanted:essence_berry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:essence_berry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:essence_berry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:silver_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:silver_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:zinc_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:zinc_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:osmium_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:osmium_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:uranium_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:uranium_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:nickel_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:nickel_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:lead_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:lead_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:aluminum_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:aluminum_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:tin_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:tin_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:copper_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:copper_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:gold_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:gold_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:iron_oreberry_bush', 2),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'concatenationcore:transplant',
                        B: 'oreberriesreplanted:iron_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:iron_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'minecraft:iron_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:iron_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:gold_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'minecraft:gold_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:gold_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:copper_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'minecraft:copper_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:copper_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:tin_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'thermal:tin_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:tin_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:lead_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'thermal:lead_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:lead_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:nickel_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'thermal:nickel_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:nickel_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:uranium_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'mekanism:ingot_uranium',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:uranium_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:osmium_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'mekanism:ingot_osmium',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:osmium_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:zinc_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'create:zinc_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:zinc_oreberry_bush'
                }
        )
        event.shaped(
                Item.of('oreberriesreplanted:silver_oreberry_bush', 3),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'concatenationcore:transplant',
                        A: 'thermal:silver_ingot',
                        B: 'oreberriesreplanted:essence_berry_bush',
                        D: 'oreberriesreplanted:silver_oreberry_bush'
                }
        )
        event.shapeless(
                Item.of('minecraft:iron_ingot'),
                [
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry',
                        'oreberriesreplanted:iron_oreberry'
                ]
        )
        event.shapeless(
                Item.of('minecraft:gold_ingot'),
                [
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry',
                        'oreberriesreplanted:gold_oreberry'
                ]
        )
        event.shapeless(
                Item.of('minecraft:copper_ingot'),
                [
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry',
                        'oreberriesreplanted:copper_oreberry'
                ]
        )
        event.shapeless(
                Item.of('thermal:tin_ingot'),
                [
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry',
                        'oreberriesreplanted:tin_oreberry'
                ]
        )
        event.shapeless(
                Item.of('thermal:lead_ingot'),
                [
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry',
                        'oreberriesreplanted:lead_oreberry'
                ]
        )
        event.shapeless(
                Item.of('thermal:nickel_ingot'),
                [
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry',
                        'oreberriesreplanted:nickel_oreberry'
                ]
        )
        event.shapeless(
                Item.of('mekanism:ingot_uranium'),
                [
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry',
                        'oreberriesreplanted:uranium_oreberry'
                ]
        )
        event.shapeless(
                Item.of('mekanism:ingot_osmium'),
                [
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry',
                        'oreberriesreplanted:osmium_oreberry'
                ]
        )
        event.shapeless(
                Item.of('create:zinc_ingot'),
                [
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry',
                        'oreberriesreplanted:zinc_oreberry'
                ]
        )
        event.shapeless(
                Item.of('thermal:silver_ingot'),
                [
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry',
                        'oreberriesreplanted:silver_oreberry'
                ]
        )
        event.shaped(
                Item.of('ae2:charger'),
                [
                        'AAA',
                        'BC ',
                        'AAA'
                ],
                {
                        B: 'concatenationcore:altcircuit',
                        A: 'concatenationcore:alclad',
                        C: 'ae2:certus_quartz_crystal'
                }
        )
        event.shaped(
                Item.of('quarryplus:quarry'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        E: 'concatenationcore:altcircuit',
                        B: 'ironchest:crystal_chest',
                        C: 'concatenationcore:diamond_drill_head',
                        D: 'quarryplus:solid_fuel_quarry',
                        A: 'concatenationcore:galvanized_iron_casing'
                }
        )
        event.shaped(
                Item.of('concatenationcore:galvanized_iron_casing'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'createdeco:iron_support',
                        B: 'concatenationcore:galvanized_iron',
                        C: 'minecraft:copper_block'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_1'),
                [
                        'AAA',
                        'BCB',
                        'BBB'
                ],
                {
                        C: 'concatenationcore:altcircuit',
                        B: 'minecraft:iron_ingot',
                        A: 'solarflux:mirror'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_2'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: 'concatenationcore:altcircuit',
                        A: 'solarflux:sp_1',
                        B: 'concatenationcore:alclad'
                }
        )
        event.shaped(
                Item.of('quarryplus:status_checker'),
                [
                        ' A ',
                        ' B ',
                        '   '
                ],
                {
                        A: 'concatenationcore:stickyredstone',
                        B: 'concatenationcore:galvanized_iron'
                }
        )
        event.shaped(
                Item.of('quarryplus:exp_pump'),
                [
                        'ABA',
                        'CDC',
                        'ACA'
                ],
                {
                        D: 'createdeco:copper_support',
                        A: 'concatenationcore:zinc_casing',
                        B: 'concatenationcore:shrike',
                        C: 'minecraft:experience_bottle'
                }
        )
        event.shaped(
                Item.of('quarryplus:pump_plus'),
                [
                        'ABA',
                        'BCB',
                        'ADA'
                ],
                {
                        D: 'concatenationcore:pump_rotor',
                        C: 'minecraft:glass',
                        A: 'concatenationcore:zinc_casing',
                        B: 'createdeco:zinc_support'
                }
        )
        event.shaped(
                Item.of('quarryplus:adv_pump'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        B: 'concatenationcore:altcircuit',
                        E: 'concatenationcore:pump_rotor',
                        D: 'quarryplus:solid_fuel_quarry',
                        A: 'createdeco:zinc_support',
                        C: 'concatenationcore:white_alclad'
                }
        )
        event.shaped(
                Item.of('concatenationcore:pump_rotor'),
                [
                        ' A ',
                        'ABA',
                        ' A '
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'concatenationcore:galvanized_iron'
                }
        )
        event.shaped(
                Item.of('concatenationcore:diamond_drill_head'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        B: 'thermal:drill_head',
                        A: 'minecraft:diamond'
                }
        )
        event.shaped(
                Item.of('concatenationcore:altcircuit'),
                [
                        'ABC',
                        'BDA',
                        'ABC'
                ],
                {
                        A: 'minecraft:iron_ingot',
                        B: 'concatenationcore:stickyredstone',
                        D: 'concatenationcore:alclad',
                        C: 'minecraft:copper_ingot'
                }
        )
});