define(['marionette', 'jquery', 'app/context'],
function (Marionette, $, context) {

    var AppRouter = Marionette.AppRouter.extend({
        appRoutes: {
            '': "showFilmsList",
            'film/:id': "showFilmDetails"
        }
    });

    var RouteController = function () {
    };

    RouteController.prototype.showFilmsList = function () {
        console.log('showFilmsList');
        $('#films-container').show();
        $('#film-details-container').hide();
    };

    RouteController.prototype.showFilmDetails = function(id) {
        console.log('showFilmDetails');
        $('#films-container').hide();
        $('#film-details-container').show();
        // TODO remove filmDetails singleton
        context.filmDetailsView.setModelById(id);
    };

    var router = new AppRouter({
        controller: new RouteController()
    });

    return router;
});