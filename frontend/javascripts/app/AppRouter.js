define(['backbone', 'jquery'],
function (Backbone, $) {

    var AppRouter = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': "showFilmsList",
            'film/:id': "showFilmDetails"
        }
    });

    var RouteController = function () {
    };

    RouteController.prototype.showFilmsList = function () {
        console.log('showFilmsList');
        Backbone.trigger('show:filmsList');
    };

    RouteController.prototype.showFilmDetails = function(id) {
        console.log('showFilmDetails');
        Backbone.trigger('show:filmDetails', id);
    };

    var router = new AppRouter({
        controller: new RouteController()
    });

    return router;
});