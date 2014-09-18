define(['underscore', 'marionette', 'app/AppController'],
function(_, Marionette, AppController){

    var MyApp = new Marionette.Application();

    MyApp.addRegions({
        listRegion: '#films-container',
        detailsRegion: '#film-details-container'
    });

    MyApp.on('start', function(){
        var appController = new AppController();
    });

});