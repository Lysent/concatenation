ServerEvents.highPriorityData(event => {
  event.addJson(
    'kubejs:forge/biome_modifier/air_mage_spawn.json',
    {
      "type": "forge:add_spawns",
      "biomes": "minecraft:is_overworld",
      "spawners": [
        {
          "type": "ars_elemental:air_mage",
          "weight": 500,   // TEST VALUE (extremely common)
          "minCount": 1,
          "maxCount": 3
        }
      ]
    }
  )
})