define(['underscore', 'marionette', 'app/AppController', 'app/AppRouter'],
function (_, Marionette, AppController, AppRouter) {

    var MyApp = new Marionette.Application();

    // TODO do we need this regions here at all, if we defined similar things in Controller
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