define(['backbone', 'jquery'],
function (Backbone, $) {

    var AppRouter = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            '': "showFilmsList",
            'film/:id': "showFilmDetails"
        },

        onRoute: function(name, path, args) {
            window.localStorage.setItem('currentTab', path);
        }
    });

    var RouteController = function () {
    };

    RouteController.prototype.showFilmsList = function () {
        console.log('showFilmsList');
        Backbone.trigger('show:filmsList');
    };

    RouteController.prototype.showFilmDetails = function (id) {
        console.log('showFilmDetails');
        window.localStorage.setItem('currentFilmId', id);
        Backbone.trigger('show:filmDetails', id);
    };

    var router = new AppRouter({
        controller: new RouteController()
    });

    return router;
});