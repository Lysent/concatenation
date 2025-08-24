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
                'createdeco:zinc_sheet',
                'mekanismtools:lapis_lazuli_paxel',
                'mekanismtools:bronze_paxel',
                'mekanismtools:netherite_paxel',
                'mekanismtools:diamond_paxel',
                'mekanismtools:steel_paxel',
                'mekanismtools:refined_obsidian_paxel',
                'mekanismtools:refined_glowstone_paxel',
                'mekanismtools:osmium_paxel',
                'mekanismtools:gold_paxel',
                'mekanismtools:stone_paxel',
                'mekanismtools:wood_paxel',
                'mekanismtools:iron_paxel'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        event.remove({ output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped' })
        // event.remove({ output: 'create:shaft', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:electrum_ingot', type: 'minecraft:crafting_shapeless' })
        event.remove({ output: 'thermal:bronze_gear', type: 'minecraft:crafting_shaped' })
        event.remove({ output: 'thermal:tin_gear', type: 'minecraft:crafting_shaped' })

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
                Item.of('solarflux:sp_2', 2),
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
                        'DA ',
                        ' B ',
                        ' C '
                ],
                {
                        C: '#forge:plates/silver',
                        B: 'ae2:calculation_processor',
                        A: '#forge:gears/electrum',
                        D: 'concatenationcore:ironclad_hammer'
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
                        C: '#concatenation:circuits',
                        A: 'solarflux:mirror'
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
                        B: 'thermal:bronze_ingot',
                        C: '#concatenation:circuits',
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
                        E: 'create:brass_ingot',
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

        event.shaped(
                Item.of('mekanismtools:wood_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        D: 'asr:wooden_giant_sword',
                        C: 'minecraft:wooden_pickaxe',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        A: 'minecraft:wooden_axe',
                        B: 'minecraft:wooden_shovel'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:stone_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        A: 'minecraft:stone_axe',
                        B: 'minecraft:stone_shovel',
                        D: 'asr:stone_giant_sword',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        C: 'minecraft:stone_pickaxe'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:gold_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        A: 'minecraft:golden_axe',
                        D: 'asr:golden_giant_sword',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        B: 'minecraft:golden_shovel',
                        C: 'minecraft:golden_pickaxe'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:osmium_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        C: 'mekanismtools:osmium_pickaxe',
                        D: 'mekanismtools:osmium_sword',
                        A: 'mekanismtools:osmium_axe',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        B: 'mekanismtools:osmium_shovel'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:refined_glowstone_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        C: 'mekanismtools:refined_glowstone_pickaxe',
                        D: 'mekanismtools:refined_glowstone_sword',
                        A: 'mekanismtools:refined_glowstone_axe',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        B: 'mekanismtools:refined_glowstone_shovel'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:refined_obsidian_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        A: 'mekanismtools:refined_obsidian_axe',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        D: 'mekanismtools:refined_obsidian_sword',
                        B: 'mekanismtools:refined_obsidian_shovel',
                        C: 'mekanismtools:refined_obsidian_pickaxe'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:steel_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        A: 'mekanismtools:steel_axe',
                        C: 'mekanismtools:steel_pickaxe',
                        D: 'mekanismtools:steel_sword',
                        B: 'mekanismtools:steel_shovel',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:diamond_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        B: 'minecraft:diamond_shovel',
                        A: 'minecraft:diamond_axe',
                        D: 'asr:diamond_giant_sword',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit',
                        C: 'minecraft:diamond_pickaxe'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:netherite_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        B: 'minecraft:netherite_shovel',
                        C: 'minecraft:netherite_pickaxe',
                        E: 'minecraft:stick',
                        A: 'minecraft:netherite_axe',
                        F: 'tarotcards:the_hermit',
                        D: 'minecraft:netherite_sword'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:bronze_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        A: 'mekanismtools:bronze_axe',
                        C: 'mekanismtools:bronze_pickaxe',
                        B: 'mekanismtools:bronze_shovel',
                        D: 'mekanismtools:bronze_sword',
                        E: 'minecraft:stick',
                        F: 'tarotcards:the_hermit'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:lapis_lazuli_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        C: 'mekanismtools:lapis_lazuli_pickaxe',
                        A: 'mekanismtools:lapis_lazuli_axe',
                        E: 'minecraft:stick',
                        B: 'mekanismtools:lapis_lazuli_shovel',
                        D: 'mekanismtools:lapis_lazuli_sword',
                        F: 'tarotcards:the_hermit'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shaped(
                Item.of('mekanismtools:iron_paxel'),
                [
                        'ABC',
                        'DEF',
                        ' E '
                ],
                {
                        A: 'minecraft:iron_axe',
                        B: 'minecraft:iron_shovel',
                        E: 'minecraft:stick',
                        C: 'minecraft:iron_pickaxe',
                        D: 'asr:iron_giant_sword',
                        F: 'tarotcards:the_hermit'
                }
        ).keepIngredient('tarotcards:the_hermit')
        event.shapeless(
                Item.of('createdeco:andesite_sheet'),
                [
                        '#concatenation:hammers',
                        'create:andesite_alloy_block'
                ]
        )
});
