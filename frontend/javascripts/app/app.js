define(['marionette', 'app/AppController', 'app/AppRouter', 'app/Behavior'],
function (Marionette, AppController, AppRouter, Behavior) {

    var MyApp = new Marionette.Application();

    // TODO do we need this regions here at all, if we defined similar things in Controller?
    // no, we don't
    /*MyApp.addRegions({
        filmsRegion: '#films',
    });*/

    MyApp.on('start', function () {
        var behavior = Behavior;
        var appController = new AppController();
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    MyApp.start();
});