ServerEvents.recipes(event => {

        const remove = [
                'quarryplus:solid_fuel_quarry',
                'quarryplus:workbench',
                'concatenationcore:galvanized_iron',
                'ae2:charger',
                'solarflux:sp_1',
                'solarflux:sp_2',
                'solarflux:photovoltaic_cell_1',
                'concatenationcore:crushed_iron',
                'concatenationcore:stickyredstone',
                'create_enchantment_industry:printer',
                'createmetallurgy:graphite',
                'createmetallurgy:graphite_gear_mold',
                'quarryplus:quarry',
                'quarryplus:pump_plus',
                'quarryplus:exp_pump',
                'quarryplus:adv_pump',
                'quarryplus:fuel_module_normal',
                'quarryplus:repeat_tick_module',
                'quarryplus:filter_module'

        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'solarflux:sp_1', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'solarflux:sp_2', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:iron_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:tin_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:gold_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:copper_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:lead_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:silver_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:nickel_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:steel_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:rose_gold_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:bronze_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:electrum_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:invar_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:constantan_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:signalum_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:lumium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:enderium_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:lapis_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:diamond_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:emerald_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:quartz_gear', type: 'minecraft:crafting_shaped' })


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
                        '#concatenation:firing_item',
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
                Item.of('solarflux:sp_1', 4),
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
                Item.of('solarflux:sp_2', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        C: '#concatenation:circuits',
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
                        B: '#concatenation:higher_circuits',
                        E: 'concatenationcore:pump_rotor',
                        D: 'quarryplus:solid_fuel_quarry',
                        A: 'concatenationcore:galvanized_iron_casing',
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
        event.shaped(
                Item.of('concatenationcore:stickyredstone', 4),
                [
                        'AAB',
                        'AC ',
                        'AC '
                ],
                {
                        B: 'concatenation:hammers',
                        A: 'minecraft:redstone',
                        C: '#forge:slimeballs'
                }
        )
        event.shaped(
                Item.of('quarryplus:marker'),
                [
                        'A  ',
                        'BC ',
                        '   '
                ],
                {
                        A: 'minecraft:glowstone_dust',
                        C: 'minecraft:yellow_dye',
                        B: 'minecraft:torch'
                }
        )
        event.shaped(
                Item.of('quarryplus:fuel_module_normal'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'minecraft:blaze_rod',
                        A: 'minecraft:copper_block',
                        C: 'minecraft:blast_furnace'
                }
        )
        event.shaped(
                Item.of('quarryplus:filter_module'),
                [
                        'ABA',
                        ' C ',
                        'ABA'
                ],
                {
                        C: 'minecraft:ender_pearl',
                        B: 'minecraft:flint_and_steel',
                        A: 'minecraft:string'
                }
        )
        event.shaped(
                Item.of('quarryplus:repeat_tick_module', 4),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'createmetallurgy:steel_ingot',
                        B: 'rftoolsbase:infused_diamond',
                        C: 'reliquary:molten_core'
                }
        )
        event.shaped(
                Item.of('quarryplus:repeat_tick_module'),
                [
                        'ABA',
                        'CCC',
                        'ABA'
                ],
                {
                        A: 'concatenationcore:galvanized_iron',
                        B: 'minecraft:diamond',
                        C: 'thermal:rf_coil'
                }
        )
        event.shaped(
                Item.of('create_enchantment_industry:printer'),
                [
                        ' A ',
                        ' B ',
                        'CDC'
                ],
                {
                        C: 'elementalcraft:drenched_iron_ingot',
                        B: 'minecraft:dried_kelp',
                        D: 'elementalcraft:swift_alloy_ingot',
                        A: 'create:copper_casing'
                }
        )
        event.shaped(
                Item.of('createaddition:electrum_wire', 3),
                [
                        'AB ',
                        '   ',
                        '   '
                ],
                {
                        A: '#concatenation:hammers',
                        B: 'thermal:electrum_plate'
                }
        )
        event.shaped(
                Item.of('concatenationcore:crushed_iron', 3),
                [
                        'AB ',
                        '   ',
                        '   '
                ],
                {
                        A: 'concatenationcore:cutting_tool',
                        B: 'createmetallurgy:iron_dust'
                }
        ).damageIngredient('concatenationcore:breaking_tool')
        event.shaped(
                Item.of('concatenationcore:crushed_zinc', 3),
                [
                        'AB ',
                        '   ',
                        '   '
                ],
                {
                        B: 'createmetallurgy:zinc_dust',
                        A: 'concatenationcore:cutting_tool'
                }
        ).damageIngredient('concatenationcore:breaking_tool')

        event.shapeless(
                Item.of('hexerei:mugwort_leaves', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:mugwort_leaves'
                ]
        )
        event.shapeless(
                Item.of('hexerei:yellow_dock_flowers', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:yellow_dock_flowers'
                ]
        )
        event.shapeless(
                Item.of('hexerei:willow_vines', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:willow_vines'
                ]
        )
        event.shapeless(
                Item.of('minecraft:pitcher_plant', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:pitcher_plant'
                ]
        )
        event.shapeless(
                Item.of('minecraft:mangrove_propagule', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:mangrove_propagule'
                ]
        )
        event.shapeless(
                Item.of('minecraft:fern', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:fern'
                ]
        )
        event.shapeless(
                Item.of('minecraft:dandelion', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:dandelion'
                ]
        )
        event.shapeless(
                Item.of('minecraft:poppy', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:poppy'
                ]
        )
        event.shapeless(
                Item.of('minecraft:blue_orchid', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:blue_orchid'
                ]
        )
        event.shapeless(
                Item.of('minecraft:allium', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:allium'
                ]
        )
        event.shapeless(
                Item.of('minecraft:azure_bluet', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:azure_bluet'
                ]
        )
        event.shapeless(
                Item.of('minecraft:red_tulip', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:red_tulip'
                ]
        )
        event.shapeless(
                Item.of('minecraft:orange_tulip', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:orange_tulip'
                ]
        )
        event.shapeless(
                Item.of('minecraft:white_tulip', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:white_tulip'
                ]
        )
        event.shapeless(
                Item.of('minecraft:pink_tulip', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:pink_tulip'
                ]
        )
        event.shapeless(
                Item.of('minecraft:oxeye_daisy', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:oxeye_daisy'
                ]
        )
        event.shapeless(
                Item.of('minecraft:lily_of_the_valley', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:lily_of_the_valley'
                ]
        )
        event.shapeless(
                Item.of('hexerei:sage', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:sage'
                ]
        )
        event.shapeless(
                Item.of('minecraft:cornflower', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:cornflower'
                ]
        )
        event.shapeless(
                Item.of('minecraft:torchflower', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:torchflower'
                ]
        )
        event.shapeless(
                Item.of('minecraft:pink_petals', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:pink_petals'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_cabbages', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_cabbages'
                ]
        )
        event.shapeless(
                Item.of('minecraft:lilac', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:lilac'
                ]
        )
        event.shapeless(
                Item.of('minecraft:sunflower', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:sunflower'
                ]
        )
        event.shapeless(
                Item.of('minecraft:rose_bush', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:rose_bush'
                ]
        )
        event.shapeless(
                Item.of('hexerei:belladonna_flowers', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:belladonna_flowers'
                ]
        )
        event.shapeless(
                Item.of('hexerei:mugwort_flowers', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:mugwort_flowers'
                ]
        )
        event.shapeless(
                Item.of('born_in_chaos_v1:river_mint', 4),
                [
                        'concatenationcore:transplant',
                        'born_in_chaos_v1:river_mint'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_onions', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_onions'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_potatoes', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_potatoes'
                ]
        )
        event.shapeless(
                Item.of('born_in_chaos_v1:marigolds', 4),
                [
                        'concatenationcore:transplant',
                        'born_in_chaos_v1:marigolds'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_tomatoes', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_tomatoes'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_beetroots', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_beetroots'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_carrots', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_carrots'
                ]
        )
        event.shapeless(
                Item.of('farmersdelight:wild_rice', 4),
                [
                        'concatenationcore:transplant',
                        'farmersdelight:wild_rice'
                ]
        )
        event.shapeless(
                Item.of('hexerei:belladonna_plant', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:belladonna_plant'
                ]
        )
        event.shapeless(
                Item.of('hexerei:mandrake_plant', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:mandrake_plant'
                ]
        )
        event.shapeless(
                Item.of('hexerei:mugwort_bush', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:mugwort_bush'
                ]
        )
        event.shapeless(
                Item.of('hexerei:yellow_dock_bush', 4),
                [
                        'concatenationcore:transplant',
                        'hexerei:yellow_dock_bush'
                ]
        )
        event.shapeless(
                Item.of('minecraft:red_mushroom', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:red_mushroom'
                ]
        )
        event.shapeless(
                Item.of('minecraft:brown_mushroom', 4),
                [
                        'concatenationcore:transplant',
                        'minecraft:brown_mushroom'
                ]
        )
        event.shaped(
                Item.of('createmetallurgy:graphite', 4),
                [
                        'ABB',
                        'BCD',
                        'BDD'
                ],
                {
                        D: 'minecraft:clay_ball',
                        C: 'minecraft:coal_block',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'minecraft:coal'
                }
        )
        event.shaped(
                Item.of('createmetallurgy:graphite_gear_mold', 4),
                [
                        'ABC',
                        'BDB',
                        ' B '
                ],
                {
                        D: 'hammerlib:gears/wooden',
                        C: '#concatenation:firing_item',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite'
                }
        )
        event.shaped(
                Item.of('thermal:tin_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:tin_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:iron_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:iron_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:gold_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:gold_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:copper_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:copper_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:lead_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:lead_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:silver_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:silver_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:nickel_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:nickel_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:steel_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:steel_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:rose_gold_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: '#forge:ingots/rose_gold',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:bronze_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:bronze_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:electrum_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:electrum_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:invar_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:invar_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:constantan_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:constantan_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:signalum_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:signalum_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:lumium_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:lumium_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:enderium_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'thermal:enderium_ingot',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:lapis_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:lapis_lazuli',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:diamond_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:diamond',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:emerald_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:emerald',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )

        event.shaped(
                Item.of('thermal:quartz_gear'),
                [
                        'ABC',
                        'CCC',
                        'CD '
                ],
                {
                        D: 'minecraft:iron_nugget',
                        C: 'minecraft:quartz',
                        A: 'concatenationcore:ironclad_hammer',
                        B: 'createmetallurgy:graphite_gear_mold'
                }
        )
        event.shapeless(
                Item.of('minecraft:bone_meal', 64),
                [
                        'concatenationcore:transplant'
                ]
        )
        event.shapeless(
                Item.of('thermal:compost'),
                [
                        'concatenationcore:transplant',
                        'minecraft:dirt'
                ]
        )
        event.shapeless(
                Item.of('create:tree_fertilizer'),
                [
                        'concatenationcore:transplant',
                        'minecraft:bone_meal'
                ]
        )
        event.shapeless(
                Item.of('thermal:phytogro', 8),
                [
                        'concatenationcore:transplant',
                        'thermal:apatite_dust'
                ]
        )

        event.recipes.minecraft.blasting(
                'minecraft:glass',
                'minecraft:sand'
        ).xp(0.1).cookingTime(100);

        event.recipes.thermal.pulverizer(Item.of('createmetallurgy:zinc_dust').withChance(1.5), 'create:zinc_ingot').energy(100)
});