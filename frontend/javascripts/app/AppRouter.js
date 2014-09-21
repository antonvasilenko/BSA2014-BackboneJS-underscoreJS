define(['marionette', 'jquery', 'app/context'],
function (Marionette, $, context) {

    var AppRouter = Marionette.AppRouter.extend({
        // TODO: use appRoutes that point to controller methods 
        // instead of default backbone routes

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
            context.filmDetailsView.setModelById(id);
            console.log('details page called for film id ' + id);
        }
    });
    return AppRouter;
});