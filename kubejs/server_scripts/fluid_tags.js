//priority: 700
ServerEvents.tags('item', event => {
    event.add('forge:honey', [
        'cofh_core:honey',
        'create:honey'
    ]);

})