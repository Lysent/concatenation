EntityEvents.spawned(event => {
  if (event.level.isClientSide()) return
  if (event.entity.type !== 'minecraft:zombie') return

  event.server.scheduleInTicks(1, () => {
    if (!event.entity.isAlive()) return

    if (Math.random() > 0.03) return

    const pos = event.entity.blockPosition()
    event.entity.discard()

    const mages = [
      'ars_elemental:air_mage',
      'ars_elemental:earth_mage',
      'ars_elemental:fire_mage',
      'ars_elemental:water_mage'
    ]
    const chosenMage = mages[Math.floor(Math.random() * mages.length)]

    const mageEntity = event.level.createEntity(chosenMage)
    if (!mageEntity) {
      console.warn(`Failed to create entity: ${chosenMage}`)
      return
    }

    mageEntity.setPos(pos.getX() + 0.5, pos.getY(), pos.getZ() + 0.5)
    event.level.addFreshEntity(mageEntity)
  })
})
