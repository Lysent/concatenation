EmiPlusPlusEvents.registerGroups(event => {
    event.register("concatenation:facades", "ae2:facade")
    event.register("concatenation:botany_pots", "#botanypots:all_botany_pots")
    event.register("concatenation:syringes", "rftoolsutility:syringe")
    event.register("concatenation:ancient_knowledge", "spelled:ancient_knowledge_tome")

    event.register("concatenation:mekanism_fluid_ctanks", "mekanism:creative_fluid_tank")
    event.register("concatenation:mekanism_chemical_ctanks", "mekanism:creative_chemical_tank")

    event.register("concatenation:tconstruct_part_builders", "tconstruct:part_builder")
    event.register("concatenation:tconstruct_tinker_stations", "tconstruct:tinker_station")
    event.register("concatenation:tconstruct_tinkers_anvil", "tconstruct:tinkers_anvil")
    event.register("concatenation:tconstruct_scorched_anvil", "tconstruct:scorched_anvil")
    event.register("concatenation:leaf_pile", "#immersive_weathering:leaf_piles")
    event.register("concatenation:spikes", "supplementaries:bamboo_spikes")

    //Not working
    event.register("concatenation:tconstruct_seared_tanks", "tconstruct:seared_fuel_tank")
    event.register("concatenation:tconstruct_seared_tanks", "tconstruct:seared_ingot_fuel_tank")
    event.register("concatenation:tconstruct_scorched_tanks", "tconstruct:scorched_fuel_tank")
    event.register("concatenation:tconstruct_scorched_tanks", "tconstruct:scorched_ingot_fuel_tank")

    event.register("concatenation:mob_charm_fragments", "reliquary:mob_charm_fragment")
    event.register("concatenation:mob_charms", "reliquary:mob_charm")
})