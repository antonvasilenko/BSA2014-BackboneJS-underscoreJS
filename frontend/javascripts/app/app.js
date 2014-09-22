define(['underscore', 'marionette', 'app/AppController', 'app/AppRouter'],
function (_, Marionette, AppController, AppRouter) {

    var MyApp = new Marionette.Application();

    MyApp.addRegions({
        filmsRegion: '#films',
    });

    MyApp.on('start', function(){
        var appController = new AppController();
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    MyApp.start();
});