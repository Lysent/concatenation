//priority: 200
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
                'celestisynth:lunar_stone_boots',
                'tacz:ammo_box',
                'tacz:workbench_a',
                'tacz:workbench_c',
                'tacz:gun_smith_table',
                'mcore:steel_helmet',
                'mcore:steel_chestplate',
                'mcore:steel_leggings',
                'mcore:steel_boots',
                'psi:cad_assembler',
                'psi:programmer',
                'psi:cad_assembly_iron',
                'psi:cad_assembly_gold',
                'psi:cad_assembly_psimetal',
                'psi:cad_assembly_ebony_psimetal',
                'psi:cad_assembly_ivory_psimetal',
                'createtaczauto:casing_45_70'
        ]

        remove.forEach(item => {
                event.remove({ output: item })
        })

        const taczids = [
                "casing_12_gauge_recipe",
                "casing_46x_30_recipe",
                "casing_50_ae_recipe",
                "casing_57x_28_recipe",
                "casing_58x_42_recipe",
                "casing_68x_51fury_recipe",
                "casing_308_recipe",
                "recipe_338_lapua_recipe",
                "casing_357_magnum_recipe",
                "casing_556x_45mm_recipe",
                "casing_762x_25_recipe",
                "casing_762x_39mm_recipe",
                "casing_762x_54_recipe",
                "casing_3060_recipe",
                "casing_9mm_recipe",
                "casing_rpg_recipe"
        ];

        const celesids = [
                "aquaflora",
                "breezebreaker",
                "crescentia",
                "frostbound",
                "keres",
                "poltergeist",
                "rainfall_serenity",
                "solaris"
        ];

        taczids.forEach(id => {
                event.remove({ id: `createtaczauto:${id}` });
        });

        celesids.forEach(id => {
                event.remove({ id: `celestisynth:${id}` });
        });

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
                        A: 'concatenationcore:glowing_gold_block',
                        C: 'thermal:electrum_block',
                        D: '#concatenation:middle_cards'
                }
        ).keepIngredient('#concatenation:middle_cards')
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
                        C: 'tfmg:aluminum_cable_hub',
                        B: 'ars_nouveau:redstone_relay',
                        F: 'minecraft:respawn_anchor',
                        E: 'minecraft:crying_obsidian'
                }
        ).keepIngredient('tarotcards:strength')
        event.shapeless(
                Item.of('concatenationcore:celestial_calralite'),
                [
                        'concatenationcore:breaking_tool',
                        'tconstruct:raw_cobalt',
                        'createmetallurgy:raw_tungsten',
                        'tconstruct:raw_cobalt',
                        'mcore:raw_titanium',
                        '#concatenation:firing_item'
                ]
        ).damageIngredient('concatenationcore:breaking_tool')
        // event.shaped(
        //         Item.of('concatenationcore:celestial_calralite'),
        //         [
        //                 'ABC',
        //                 'BD ',
        //                 '   '
        //         ],
        //         {
        //                 B: 'tconstruct:raw_cobalt',
        //                 C: 'createmetallurgy:raw_tungsten',
        //                 D: 'elementalcraft:fire_shard',
        //                 A: 'concatenationcore:breaking_tool'
        //         }
        // ).damageIngredient('concatenationcore:breaking_tool')
        // event.shaped(
        //         Item.of('concatenationcore:celestial_calralite'),
        //         [
        //                 'ABC',
        //                 'BD ',
        //                 '   '
        //         ],
        //         {
        //                 B: 'tconstruct:raw_cobalt',
        //                 C: 'createmetallurgy:raw_tungsten',
        //                 D: 'ars_nouveau:fire_essence',
        //                 A: 'concatenationcore:breaking_tool'
        //         }
        // ).damageIngredient('concatenationcore:breaking_tool')
        event.shaped(
                Item.of('tconstruct:soulsteel_ingot'),
                [
                        ' D ',
                        'BCE',
                        ' A '
                ],
                {
                        C: 'concatenationcore:celestial_calralite',
                        B: 'elementalcraft:powerful_water_shard',
                        A: 'elementalcraft:powerful_earth_shard',
                        E: 'elementalcraft:powerful_fire_shard',
                        D: 'elementalcraft:powerful_air_shard'
                }
        )
        event.shaped(
                Item.of('celestisynth:solar_crystal_helmet'),
                [
                        'ABA',
                        'A A',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('celestisynth:solar_crystal_boots'),
                [
                        'A A',
                        'ABA',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('celestisynth:solar_crystal_leggings'),
                [
                        'ABA',
                        'A A',
                        'ACA'
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('celestisynth:solar_crystal_chestplate'),
                [
                        'ABA',
                        'ACA',
                        'AAA'
                ],
                {
                        B: 'tarotcards:strength',
                        A: 'concatenationcore:soleipse',
                        C: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')

        event.shaped(
                Item.of('celestisynth:lunar_stone_helmet'),
                [
                        'ABA',
                        'A A',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('celestisynth:lunar_stone_boots'),
                [
                        'A A',
                        'ABA',
                        ' C '
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('celestisynth:lunar_stone_leggings'),
                [
                        'ABA',
                        'A A',
                        'ACA'
                ],
                {
                        C: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        B: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('celestisynth:lunar_stone_chestplate'),
                [
                        'ABA',
                        'ACA',
                        'AAA'
                ],
                {
                        B: 'tarotcards:strength',
                        A: 'concatenationcore:lunepse',
                        C: 'tconstruct:soulsteel_ingot'
                }
        ).keepIngredient('tarotcards:strength')
        event.shaped(
                Item.of('concatenationcore:soleipse'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        A: 'minecraft:blaze_powder',
                        B: 'celestisynth:solar_crystal',
                        C: 'concatenationcore:glowing_gold'
                }
        )
        event.shaped(
                Item.of('concatenationcore:lunepse'),
                [
                        'ABA',
                        'BCB',
                        'ABA'
                ],
                {
                        B: 'celestisynth:lunar_scrap',
                        A: 'minecraft:chorus_fruit',
                        C: 'born_in_chaos_v1:dark_metal_nugget'
                }
        )
        event.shaped(
                Item.of('concatenationcore:celestial_handle'),
                [
                        '  C',
                        ' B ',
                        'A  '
                ],
                {
                        B: 'celestisynth:celestial_netherite_ingot',
                        A: 'concatenationcore:lunepse',
                        C: 'concatenationcore:soleipse'
                }
        )

        // Judgement
        event.shaped(
                Item.of('tarotcards:judgement'),
                [
                        'ABA',
                        'CDE',
                        'AFA'
                ],
                {
                        C: 'tfmg:aluminum_block',
                        E: 'thermal:gunpowder_block',
                        D: 'tarotcards:the_tower',
                        F: 'reliquary:holy_hand_grenade',
                        B: 'tfmg:napalm_bomb',
                        A: 'concatenationcore:glowing_gold_block'
                }
        ).keepIngredient('tarotcards:the_tower')
        event.shaped(
                Item.of('tacz:gun_smith_table'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: '#forge:stripped_logs',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'tfmg:cast_iron_block',
                        D: 'tarotcards:judgement'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of('tacz:workbench_c', '{BlockId:"tacz:attachment_workbench"}'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: 'tfmg:lead_glass',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'tfmg:cast_iron_block',
                        D: 'tarotcards:judgement'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of('tacz:workbench_a', '{BlockId:"tacz:ammo_workbench"}'),
                [
                        'AAA',
                        'BCB',
                        'BDB'
                ],
                {
                        A: 'tacz:ammo_box',
                        B: 'createmetallurgy:steel_ingot',
                        C: 'tfmg:cast_iron_block',
                        D: 'tarotcards:judgement'
                }
        ).keepIngredient('tarotcards:judgement')
        event.shaped(
                Item.of('tacz:ammo_box', '{Level:2}'),
                [
                        'ABA',
                        'A A',
                        'AAA'
                ],
                {
                        A: 'createmetallurgy:steel_ingot',
                        B: 'minecraft:diamond'
                }
        )
        event.shaped(
                Item.of('tacz:ammo_box', '{Level:1}'),
                [
                        'ABA',
                        'A A',
                        'AAA'
                ],
                {
                        B: 'minecraft:gold_ingot',
                        A: 'createmetallurgy:steel_ingot'
                }
        )
        event.shaped(
                Item.of('tacz:ammo_box', '{Level:0}'),
                [
                        'ABA',
                        'A A',
                        'AAA'
                ],
                {
                        B: 'minecraft:iron_ingot',
                        A: 'createmetallurgy:steel_ingot'
                }
        )
        event.shaped(
                Item.of('mcore:steel_sheet', 8),
                [
                        'ABC',
                        'CCD',
                        '   '
                ],
                {
                        B: '#concatenation:hammers',
                        C: 'createmetallurgy:steel_ingot',
                        D: 'tconstruct:hepatizon_ingot',
                        A: 'concatenationcore:full_swords'
                }
        ).keepIngredient('concatenationcore:full_swords')
        event.shaped(
                Item.of('mcore:titanium_sheet', 8),
                [
                        'ABC',
                        'CDE',
                        'F  '
                ],
                {
                        E: 'concatenationcore:celestial_calralite',
                        B: '#concatenation:hammers',
                        A: 'concatenationcore:full_swords',
                        C: 'mcore:titanium_ingot',
                        D: 'createmetallurgy:tungsten_ingot',
                        F: 'mcore:steel_sheet'
                }
        ).keepIngredient('concatenationcore:full_swords')
        event.shapeless(
                Item.of('minecraft:wooden_sword'),
                [
                        'minecraft:stick',
                        'concatenationcore:full_swords'
                ]
        ).keepIngredient('concatenationcore:full_swords')
        event.shapeless(
                Item.of('asr:wooden_giant_sword'),
                [
                        'minecraft:stick',
                        'concatenationcore:full_swords',
                        'minecraft:stick'
                ]
        ).keepIngredient('concatenationcore:full_swords')
        event.shapeless(
                Item.of('mcore:titanium_block'),
                [
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot',
                        'mcore:titanium_ingot'
                ]
        )
        event.shapeless(
                Item.of('mcore:titanium_nugget', 9),
                [
                        'mcore:titanium_ingot'
                ]
        )
        event.shaped(
                Item.of('marbledsarsenal:black_plate_carrier_light',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:4,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"body"}]}'),
                [
                        'A A',
                        'BCB',
                        'ADA'
                ],
                {
                        D: 'createmetallurgy:steel_ingot',
                        B: 'tconstruct:hepatizon_ingot',
                        A: 'thermal:steel_plate',
                        C: 'thermal:netherite_plate'
                }
        )
        event.shaped(
                Item.of('marbledsarsenal:black_plate_carrier_heavy',
                        '{CurioAttributeModifiers:[{AttributeName:"generic.armor",Name:"generic.armor",Amount:8,Operation:0,UUID:[I;-1049641899,-1698279708,-1222758712,1471568110],Slot:"body"}]}'),
                [
                        'A A',
                        'BCB',
                        'ADA'
                ],
                {
                        D: 'marbledsarsenal:armor_plate',
                        C: 'marbledsarsenal:black_plate_carrier_light',
                        B: 'mcore:titanium_sheet',
                        A: 'mcore:steel_sheet'
                }
        )
        event.shapeless(
                Item.of('marbledsarsenal:olive_plate_carrier_light'),
                [
                        'minecraft:green_dye',
                        'marbledsarsenal:black_plate_carrier_light'
                ]
        )
        event.shapeless(
                Item.of('marbledsarsenal:olive_plate_carrier_heavy'),
                [
                        'minecraft:green_dye',
                        'marbledsarsenal:black_plate_carrier_heavy'
                ]
        )

        // Wands
        event.shaped(
                Item.of('psi:cad_assembler'),
                [
                        'AAA',
                        'BCB',
                        'BBB'
                ],
                {
                        B: 'createmetallurgy:steel_ingot',
                        A: 'create:mechanical_crafter',
                        C: 'concatenationcore:full_wands'
                }
        ).keepIngredient('concatenationcore:full_wands')
        event.shaped(
                Item.of('psi:cad_assembler'),
                [
                        'ABA',
                        'ACA',
                        'AAA'
                ],
                {
                        A: 'createmetallurgy:steel_ingot',
                        C: 'concatenationcore:full_wands',
                        B: 'thermal:machine_crafter'
                }
        ).keepIngredient('concatenationcore:full_wands')
        event.shaped(
                Item.of('psi:programmer'),
                [
                        'DBD',
                        'ACA',
                        'AAA'
                ],
                {
                        A: 'createmetallurgy:steel_ingot',
                        C: 'concatenationcore:full_wands',
                        B: 'elementalcraft:focus',
                        D: 'elementalcraft:springaline_shard'
                }
        ).keepIngredient('concatenationcore:full_wands')
        event.shaped(
                Item.of('psi:cad_assembly_iron'),
                [
                        'AAA',
                        'AA ',
                        'B  '
                ],
                {
                        B: '#concatenation:assembly_stock',
                        A: 'minecraft:iron_ingot'
                }
        )
        event.shaped(
                Item.of('psi:cad_assembly_gold'),
                [
                        'AAA',
                        'AA ',
                        'B  '
                ],
                {
                        B: '#concatenation:assembly_stock',
                        A: 'minecraft:gold_ingot'
                }
        )
        event.shaped(
                Item.of('psi:cad_assembly_psimetal'),
                [
                        'AAA',
                        'AA ',
                        'B  '
                ],
                {
                        B: '#concatenation:assembly_stock',
                        A: 'psi:psimetal'
                }
        )
        event.shaped(
                Item.of('psi:cad_assembly_ivory_psimetal'),
                [
                        'AAA',
                        'AA ',
                        'B  '
                ],
                {
                        B: '#concatenation:assembly_stock',
                        A: 'psi:ivory_psimetal'
                }
        )
        event.shaped(
                Item.of('psi:cad_assembly_ebony_psimetal'),
                [
                        'AAA',
                        'AA ',
                        'B  '
                ],
                {
                        B: '#concatenation:assembly_stock',
                        A: 'psi:ebony_psimetal'
                }
        )
        event.shapeless(
                Item.of('tacz:ammo', 6, '{AmmoId:"applied_armorer:etched_quartz_bullet"}'),
                [
                        'createtaczauto:casing_338_lapua',
                        'createtaczauto:casing_338_lapua',
                        'createtaczauto:casing_338_lapua',
                        'createtaczauto:casing_338_lapua',
                        'createtaczauto:casing_338_lapua',
                        'createtaczauto:casing_338_lapua',
                        'createtaczauto:tiny_gunpowder_pile',
                        'ae2:certus_quartz_crystal'
                ]
        )
        event.shapeless(
                Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"create_armorer:special_melee_wrench",HasBulletInBarrel:1b}'),
                [
                        'create:wrench'
                ]
        )
        event.shaped(
                Item.of('tacz:workbench_b', '{BlockId:"ars_armorer:ars_workbench"}'),
                [
                        'AAA',
                        'BCB',
                        'DED'
                ],
                {
                        B: 'minecraft:gold_ingot',
                        D: 'ars_nouveau:purple_archwood_log',
                        A: 'ars_nouveau:archwood_slab',
                        C: 'concatenationcore:sourcesilver',
                        E: 'ars_nouveau:apprentice_spell_book'
                }
        ).keepIngredient('ars_nouveau:apprentice_spell_book')

        event.shaped(
                Item.of('tacz:workbench_b', '{BlockId:"create_armorer:create_workbench"}'),
                [
                        'ABA',
                        'CDC',
                        'EFE'
                ],
                {
                        B: 'create:brass_sheet',
                        C: 'createmetallurgy:steel_ingot',
                        D: 'create:wrench',
                        F: 'tarotcards:judgement',
                        A: '#forge:stripped_logs',
                        E: 'minecraft:deepslate_bricks'
                }
        ).keepIngredient('tarotcards:judgement')

        event.shaped(
                Item.of('tacz:workbench_c', '{BlockId:"applied_armorer:worckbench_applied_armorer"}'),
                [
                        'AEA',
                        'CDC',
                        'ABA'
                ],
                {
                        D: 'ae2:terminal',
                        A: 'concatenationcore:celestial_calralite',
                        B: 'ae2:charged_certus_quartz_crystal',
                        C: 'tfmg:aluminum_cable_hub',
                        E: 'concatenationcore:primed_calculation_processor'
                }
        )

        event.shaped(
                Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:6,GunFireMode:"SEMI",GunId:"ars_armorer:special_source_flying_blade",HasBulletInBarrel:1b}'),
                [
                        'ABA',
                        'ACA',
                        'ADA'
                ],
                {
                        C: 'reliquary:magicbane',
                        A: 'concatenationcore:sourcesilver',
                        D: 'elementalcraft:springaline_shard',
                        B: 'concatenationcore:glowing_gold'
                }
        )

        event.shaped(
                Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:200,GunFireMode:"SEMI",GunId:"ars_armorer:mortar_source_thrower",HasBulletInBarrel:1b}'),
                [
                        'ABA',
                        'DCF',
                        'AEA'
                ],
                {
                        E: 'ars_nouveau:source_jar',
                        D: 'concatenationcore:elemental_lens',
                        B: 'ars_elemental:fire_turret',
                        A: 'concatenationcore:sourcesilver',
                        C: 'concatenationcore:glowing_gold',
                        F: 'reliquary:destruction_catalyst'
                }
        )

        event.shaped(
                Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:200,GunFireMode:"BURST",GunId:"ars_armorer:special_miner_drill",HasBulletInBarrel:1b}'),
                [
                        'ABA',
                        'CDC',
                        'AEA'
                ],
                {
                        D: 'reliquary:destruction_catalyst',
                        E: 'ars_nouveau:source_jar',
                        B: 'ars_elemental:fire_turret',
                        A: 'concatenationcore:sourcesilver',
                        C: 'concatenationcore:glowing_gold'
                }
        )
});
