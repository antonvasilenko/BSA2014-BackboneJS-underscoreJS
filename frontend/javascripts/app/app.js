define(['underscore', 'marionette', 'app/AppController', 'app/AppRouter'],
function (_, Marionette, AppController, AppRouter) {

    var MyApp = new Marionette.Application();

    MyApp.addRegions({
        listRegion: '#films-container',
        detailsRegion: '#film-details-container'
    });

    MyApp.on('start', function(){
        var appController = new AppController();
        var routes = new AppRouter();
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    MyApp.start();
});