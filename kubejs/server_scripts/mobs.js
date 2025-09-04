EntityEvents.spawned(event => {
  if (event.entity.type == "celestisynth:star_monolith") {
    event.entity.potionEffects.add("minecraft:wither", 1250, 3, false, false) 
  }

  if (event.entity.type == "celestisynth:traverser" && event.level.dimension == "minecraft:the_nether") {
    event.entity.potionEffects.add("minecraft:wither", 180, 6, false, false) 
  }
})