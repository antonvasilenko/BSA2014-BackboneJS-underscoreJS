require(['backbone', 'jquery', './context', '../views/FilmDetailsView'],
function (Backbone, $, context, filmDetailsView) {

    // Film router
    var FilmRouter = Backbone.Router.extend({
        routes: {
            '': "listFilms",
            'film/:id': "filmDetails"
        },

        listFilms: function () {
            $('#films-container').show();
            $('#film-details-container').hide();
            console.log('films list page called');
        },

        filmDetails: function (id) {
            $('#films-container').hide();
            $('#film-details-container').show();
            // TODO remove filmDetails singleton
            filmDetailsView.setModelById(id);
            console.log('details page called for film id ' + id);
        }
    });

    var router = new FilmRouter();
    Backbone.history.start();
    return router;
});