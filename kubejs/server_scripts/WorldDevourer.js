//priority: 100

// Generation command to create loot tables
ServerEvents.customCommand("genworlddevourer", () => {

	Utils.server.runCommand("/say [WDEVR] Started");

	const $LootDataType = Java.loadClass("net.minecraft.world.level.storage.loot.LootDataType")

	const lootData = Utils.server.getLootData();
	const allTables = lootData.getKeys($LootDataType.TABLE);
	const list = allTables
		.stream()
		.map(id => id.toString())
		.toList();
	const listNoBlock = allTables
		.stream()
		.filter(id => !id.path.contains("block"))
		.map(id => id.toString())
		.toList();

	Utils.server.runCommand("/say [WDEVR] Obtained reslocs");

	JsonIO.write("kubejs/data/foolsendeavour/loot_tables/chests/exalted_devoured_world.json", {
		"pools": [
			{
				"rolls": 1,
				"entries": list.map(resloc => ({
					"type": "minecraft:loot_table",
					"name": resloc
				}))
			}
		]
	});

	JsonIO.write("kubejs/data/foolsendeavour/loot_tables/chests/devoured_world.json", {
		"pools": [
			{
				"rolls": 1,
				"entries": listNoBlock.map(resloc => ({
					"type": "minecraft:loot_table",
					"name": resloc
				}))
			}
		]
	});

	Utils.server.runCommand("/say [WDEVR] Wrote loot table");
});

// recipe
ServerEvents.recipes(event => {
	event.shaped(
		Item.of("concatenationcore:world_devourer"),
		[
			"BTC",
			"tWL",
			"rER"
		],
		{
			T: "projecte:transmutation_tablet",
			B: "rftoolsdim:dimension_builder",
			t: "rftoolsdim:realized_dimension_tab",
			r: "rftoolsutility:matter_receiver",
			R: "projecte:relay_mk3",
			L: "projecte:catalytic_lens",
			C: "projecte:condenser_mk2",
			E: "rftoolsdim:legendary_essence",
			W: "tarotcards:the_world"
		}
	).keepIngredient("tarotcards:the_world")
})