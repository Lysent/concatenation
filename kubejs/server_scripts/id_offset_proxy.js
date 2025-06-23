ServerEvents.recipes(event => {

    event.shapeless(
            Item.of('integrateddynamics:enhancement_offset', "{value:2048}"),
            [
                    'integrateddynamics:proxy',
                    'integrateddynamics:enhancement_offset'
            ]
    )
});
