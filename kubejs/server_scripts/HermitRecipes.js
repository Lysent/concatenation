ServerEvents.recipes(event => {
        const remove = [
                'tconstruct:seared_melter',
                'create:whisk',
                'tconstruct:grout',
                'thermal:machine_frame',
                'create:empty_blaze_burner',
                'create:large_cogwheel',
                'create:mechanical_mixer',
                'create:mechanical_press',
                'create:fluid_tank',
                'create_enchantment_industry:enchanting_guide',
                'createbigcannons:cast_iron_ingot',
                'createmetallurgy:coke',
                'createdeco:zinc_sheet'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped' })
        // event.remove({ output: 'create:shaft', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:electrum_ingot', type: 'minecraft:crafting_shapeless' })

        event.replaceInput(
                { mod: 'createbigcannons' },
                'createbigcannons:cast_iron_ingot',
                'tfmg:cast_iron_ingot'
        )
        event.replaceInput(
                { input: 'createdeco:zinc_sheet' },
                'createdeco:zinc_sheet',
                'createaddition:zinc_sheet'
        )

        event.replaceInput(
                { input: 'ae2:calculation_processor' },
                'ae2:calculation_processor',
                'concatenationcore:primed_calculation_processor'
        )

        event.shaped(
                Item.of('tconstruct:seared_melter'),
                [
                        ' A ',
                        'BCB',
                        'DDD'
                ],
                {
                        D: 'tconstruct:seared_brick',
                        C: 'thermal:tin_ingot',
                        B: 'tconstruct:seared_glass',
                        A: 'tarotcards:the_hermit'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('concatenationcore:circuit'),
                [
                        'ABC',
                        'BDC',
                        'ABC'
                ],
                {
                        C: 'minecraft:iron_ingot',
                        D: 'minecraft:redstone',
                        A: '#forge:ingots/rose_gold',
                        B: 'createaddition:electrum_wire'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_2'),
                [
                        'AAA',
                        'ABA',
                        'AAA'
                ],
                {
                        A: 'solarflux:sp_1',
                        B: '#concatenation:higher_circuits'
                }
        )
        event.shaped(
                Item.of('create:whisk'),
                [
                        ' A ',
                        'BAB',
                        'CBC'
                ],
                {
                        B: 'create:brass_sheet',
                        A: 'create:andesite_alloy',
                        C: 'create:iron_sheet'
                }
        )
        event.shapeless(
                Item.of('tconstruct:grout'),
                [
                        'minecraft:clay_ball',
                        'minecraft:sand',
                        'minecraft:gravel',
                        'concatenationcore:mixing_tool'
                ]
        ).damageIngredient('concatenationcore:mixing_tool')
        event.shapeless(
                Item.of('tconstruct:grout', 4),
                [
                        'minecraft:clay',
                        'minecraft:sand',
                        'minecraft:sand',
                        'minecraft:sand',
                        'minecraft:gravel',
                        'minecraft:gravel',
                        'minecraft:gravel',
                        'minecraft:gravel',
                        'concatenationcore:mixing_tool'
                ]
        ).damageIngredient('concatenationcore:mixing_tool')
        event.shaped(
                Item.of('industrialforegoing:machine_frame_simple'),
                [
                        'ABA',
                        'CDC',
                        'EBE'
                ],
                {
                        B: 'concatenationcore:altcircuit',
                        C: 'thermal:obsidian_glass',
                        A: 'minecraft:iron_ingot',
                        E: 'concatenationcore:galvanized_iron',
                        D: 'thermal:tin_gear'
                }
        )
        event.shaped(
                Item.of('industrialforegoing:machine_frame_simple'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'thermal:obsidian_glass',
                        A: 'createmetallurgy:steel_ingot',
                        D: 'concatenationcore:circuit',
                        B: 'thermal:tin_gear'
                }
        )
        event.shaped(
                Item.of('create:empty_blaze_burner'),
                [
                        'ABA',
                        'CDC',
                        'ACA'
                ],
                {
                        C: 'minecraft:polished_blackstone',
                        D: 'minecraft:nether_wart_block',
                        A: '#forge:plates/iron',
                        B: 'minecraft:iron_bars'
                }
        )
        event.shaped(
                Item.of('tarotcards:the_tower'),
                [
                        'ABA',
                        'CDC',
                        'ABA'
                ],
                {
                        C: 'create_dd:bore_block',
                        A: 'concatenationcore:gold_paper',
                        D: 'tarotcards:the_hermit',
                        B: 'create:flywheel'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('create:mechanical_press'),
                [
                        'ABA',
                        'CDC',
                        'CEC'
                ],
                {
                        C: 'create:shaft',
                        E: 'minecraft:iron_block',
                        B: 'create:andesite_casing',
                        D: 'tarotcards:the_tower',
                        A: 'minecraft:piston'
                }
        ).keepIngredient('tarotcards:the_tower')
        event.shaped(
                Item.of('create:mechanical_mixer'),
                [
                        'ABA',
                        'CDC',
                        'CEC'
                ],
                {
                        C: 'create:shaft',
                        E: 'create:whisk',
                        A: 'create:andesite_casing',
                        D: 'tarotcards:the_tower',
                        B: 'create:cogwheel'
                }
        ).keepIngredient('tarotcards:the_tower')
        event.shaped(
                Item.of('create:large_cogwheel'),
                [
                        'ABA',
                        'ACA',
                        'ABA'
                ],
                {
                        B: 'create:shaft',
                        C: 'minecraft:stripped_oak_log',
                        A: 'minecraft:oak_planks'
                }
        )
        event.shaped(
                Item.of('concatenationcore:primed_calculation_processor'),
                [
                        ' A ',
                        ' B ',
                        ' C '
                ],
                {
                        C: '#forge:plates/silver',
                        B: 'ae2:calculation_processor',
                        A: '#forge:ingots/electrum'
                }
        )
        event.shaped(
                Item.of('solarflux:sp_1', 2),
                [
                        'AAA',
                        'BCB',
                        'BBB'
                ],
                {
                        B: 'create:brass_ingot',
                        C: 'concatenationcore:circuit',
                        A: 'solarflux:mirror'
                }
        )
        event.shaped(
                Item.of('create:fluid_tank'),
                [
                        ' A ',
                        ' B ',
                        ' A '
                ],
                {
                        B: 'tfmg:lead_glass',
                        A: '#forge:plates/copper'
                }
        )
        event.shaped(
                Item.of('industrialforegoing:machine_frame_simple'),
                [
                        'ABA',
                        'CDC',
                        'EBE'
                ],
                {
                        C: 'thermal:obsidian_glass',
                        E: 'createdeco:industrial_iron_ingot',
                        D: 'concatenationcore:circuit',
                        B: 'thermal:bronze_gear',
                        A: 'createdeco:andesite_sheet'
                }
        )
        event.shaped(
                Item.of('create_enchantment_industry:enchanting_guide'),
                [
                        ' A ',
                        'BC ',
                        '   '
                ],
                {
                        C: 'minecraft:writable_book',
                        B: 'create:sturdy_sheet',
                        A: 'elementalcraft:springaline_shard'
                }
        )
        event.shapeless(
                Item.of('thermal:coal_coke'),
                [
                        'concatenationcore:breaking_tool',
                        'minecraft:charcoal',
                        'tfmg:coal_coke'
                ]
        )
});
