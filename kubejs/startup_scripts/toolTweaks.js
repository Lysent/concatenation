//priority: 900
ItemEvents.modification(event => {
	// tools & armor
	const paxelPenalty = speed => Math.max(speed * 0.7, speed - 0.3);

	let d = 0;
	let p = "";
	[
		//
		// tools
		//
		"setAttackDamage",

		// tfmg steel
		950,
		["tfmg:steel_pickaxe", 4],
		["tfmg:steel_shovel", 4.5],
		["tfmg:steel_axe", 9],
		["tfmg:steel_sword", 7],

		1200,
		["mekanismtools:steel_pickaxe", 4],
		["mekanismtools:steel_shovel", 4.5],
		["mekanismtools:steel_axe", 9],
		["mekanismtools:steel_sword", 8],

		// psi psimetal
		1200,
		["psi:psimetal_pickaxe", 4],
		["psi:psimetal_shovel", 4.5],
		["psi:psimetal_axe", 9],
		["psi:psimetal_sword", 6],

		// create DD golded rose
		// 2850,
		// ["create_dd:gilded_rose_pickaxe", 5],
		// ["create_dd:gilded_rose_shovel", 5.5],
		// ["create_dd:gilded_rose_axe", 11],
		// ["create_dd:gilded_rose_sword", 7],

		// blood magic sentient tools
		// (doesn't work)
		// 1100,
		// ["bloodmagic:soulpickaxe", 5],
		// ["bloodmagic:soulshovel", 5.5],
		// ["bloodmagic:soulaxe", 11],
		// ["bloodmagic:soulsword", 9],
		// ["bloodmagic:soulscythe", 7],

		// tfmg aluminium
		1000,
		["tfmg:aluminum_pickaxe", 4],
		["tfmg:aluminum_shovel", 4.5],
		["tfmg:aluminum_axe", 9],
		["tfmg:aluminum_sword", 6],

		// tfmg lead
		32,
		["tfmg:lead_pickaxe", 5],
		["tfmg:lead_shovel", 5.5],
		["tfmg:lead_axe", 10],
		["tfmg:lead_sword", 9],

		// certus quartz
		750,
		["ae2:certus_quartz_pickaxe", 5],
		["ae2:certus_quartz_shovel", 5.5],
		["ae2:certus_quartz_axe", 9],
		// ["ae2:certus_quartz_cutting_knife", 9],
		["ae2:certus_quartz_sword", 8],
		["ae2:certus_quartz_hoe", 2],

		// fluix
		1250,
		["ae2:fluix_pickaxe", 5],
		["ae2:fluix_shovel", 5.5],
		["ae2:fluix_axe", 11],
		["ae2:fluix_sword", 10],
		["ae2:fluix_hoe", 2],

		// paxels
		59, ["mekanismtools:wood_paxel", 3, paxelPenalty(0.8)],
		131, ["mekanismtools:stone_paxel", 4, paxelPenalty(0.8)],
		32, ["mekanismtools:gold_paxel", 5, paxelPenalty(1)],
		250, ["mekanismtools:iron_paxel", 5, paxelPenalty(0.9)],
		1561, ["mekanismtools:diamond_paxel", 6, paxelPenalty(1)],
		375, ["mekanismtools:bronze_paxel", 5, paxelPenalty(1)],
		128, ["mekanismtools:lapis_lazuli_paxel", 4, paxelPenalty(1.1)],
		375, ["mekanismtools:osmium_paxel", 5, paxelPenalty(0.7)],
		3000, ["mekanismtools:refined_glowstone_paxel", 8, paxelPenalty(1.1)],
		4500, ["mekanismtools:refined_obsidian_paxel", 8, paxelPenalty(1.1)],
		1200, ["mekanismtools:steel_paxel", 6, paxelPenalty(1)],

		// deep void weapons
		1561,
		["the_deep_void:void_matter_greatsword", 15],
		["the_deep_void:grim_scythe", 12],
		["the_deep_void:cruel_stiletto", 10],
		2456, 
		["the_deep_void:hard_flesh_sword", 15],
		["the_deep_void:claw_blade", 8],
		["the_deep_void:animosity", 10],
		["the_deep_void:ichor_sword", 21],
		["the_deep_void:judgement", 21],
		["the_deep_void:soul_cleaver", 22],
		["the_deep_void:the_harvest", 30],
		["the_deep_void:tombstone", 50],
		3461,
		["the_deep_void:voidrium_sword", 18],
		["the_deep_void:lavendite_voidrium_sword", 17],
		9999,
		//["the_deep_void:knives_glove", 23],

		//
		// armor
		//
		"setArmorProtection",

		// tfmg steel
		315, ["tfmg:steel_helmet", 2],
		420, ["tfmg:steel_chestplate", 7],
		385, ["tfmg:steel_leggings", 5],
		340, ["tfmg:steel_boots", 2],

		// psi psimetal
		800, ["psi:psimetal_helmet", 7],
		1100, ["psi:psimetal_chestplate", 12],
		990, ["psi:psimetal_leggings", 9],
		850, ["psi:psimetal_boots", 7],

		// blood magic living armor
		// 400, ["bloodmagic:livinghelmet", 4],
		// 560, ["bloodmagic:livingplate", 6],
		// 512, ["bloodmagic:livingleggings", 5],
		// 440, ["bloodmagic:livingboots", 2],

		// celestisynth lunar/solar armor
		1000,
		["celestisynth:lunar_stone_helmet", 8],
		["celestisynth:solar_crystal_helmet", 8],
		1560,
		["celestisynth:lunar_stone_plate", 11],
		["celestisynth:solar_crystal_plate", 11],
		1325,
		["celestisynth:lunar_stone_leggings", 7],
		["celestisynth:solar_crystal_leggings", 7],
		1100,
		["celestisynth:lunar_stone_boots", 9],
		["celestisynth:solar_crystal_boots", 9],

		// hexerei witch
		// unchanged
		// 275,
		// ["hexerei:witch_helmet", 3],
		// ["hexerei:mushroom_witch_helmet", 3],
		// 400, ["hexerei:witch_chestplate", 3],
		// 325, ["hexerei:witch_boots", 3],

		// deep void armor
		1740, ["the_deep_void:harvester_mask_helmet", 6],
		1000, ["the_deep_void:bloody_rib_cage_chestplate", 10],
		715, ["the_deep_void:flesh_armor_helmet", 5],
		1040, ["the_deep_void:flesh_armor_chestplate", 7],
		975, ["the_deep_void:flesh_armor_leggings", 6],
		845, ["the_deep_void:flesh_armor_boots", 4],
		1040, ["the_deep_void:crawler_royalty_chestplate", 11],

		// Juggernaut
		10000,
		["marbledsarsenal:black_juggernaut_armor_helmet", 10],
		["marbledsarsenal:olive_juggernaut_armor_helmet", 10],
		15600,
		["marbledsarsenal:black_juggernaut_armor_chestplate", 14],
		["marbledsarsenal:olive_juggernaut_armor_chestplate", 14],
		13250,
		["marbledsarsenal:black_juggernaut_armor_leggings", 12],
		["marbledsarsenal:olive_juggernaut_armor_leggings", 12],
		11000,
		["marbledsarsenal:black_juggernaut_armor_boots", 10],
		["marbledsarsenal:olive_juggernaut_armor_boots", 10],

	].forEach(en => {
		if (typeof en === "number") return d = en;
		if (typeof en === "string") return p = en;

		const [id, dmg, spd] = en;

		event.modify(id, item => {
			// console.log(Object.keys(item));
			item.maxDamage = d;
			console.log(item[p]);
			item[p](dmg);
			if (spd !== undefined) item.speed = spd;
		});
	});
});