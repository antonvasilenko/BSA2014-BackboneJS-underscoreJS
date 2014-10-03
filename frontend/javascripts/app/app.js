define(['marionette', 'app/AppController', 'app/AppRouter', 'app/Behavior'],
function (Marionette, AppController, AppRouter, Behavior) {

    var MyApp = new Marionette.Application();

    // TODO do we need this regions here at all, if we defined similar things in Controller?
    MyApp.addRegions({
        filmsRegion: '#films',
    });

    MyApp.on('start', function () {
        var behavior = Behavior;
        var appController = new AppController();
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    MyApp.start();

    // TODO:
    // 1) any real workd sample of localStorage usage.
    // Is it just shared context between models/views?
    // Or something more?
});