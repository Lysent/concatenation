ItemEvents.modification(event => {
	// tools & armor
	let d = 0;
	let p = "";
	[
		// tools
		"setAttackDamage",

		// tfmg steel
		950,
		["tfmg:steel_pickaxe", 4],
		["tfmg:steel_shovel", 4.5],
		["tfmg:steel_axe", 9],
		["tfmg:steel_sword", 7],

		// psi psimetal
		1200,
		["psi:psimetal_pickaxe", 4],
		["psi:psimetal_shovel", 4.5],
		["psi:psimetal_axe", 9],
		["psi:psimetal_sword", 6],

		// create DD golded rose
		2850,
		["create_dd:gilded_rose_pickaxe", 5],
		["create_dd:gilded_rose_shovel", 5.5],
		["create_dd:gilded_rose_axe", 11],
		["create_dd:gilded_rose_sword", 7],

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

		// armor
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

	].forEach(en => {
		if (typeof en === "number") return d = en;
		if (typeof en === "string") return p = en;

		const [id, dmg] = en;

		event.modify(id, item => {
			// console.log(Object.keys(item));
			item.maxDamage = d;
			console.log(item[p]);
			item[p](dmg);
		});
	});
});