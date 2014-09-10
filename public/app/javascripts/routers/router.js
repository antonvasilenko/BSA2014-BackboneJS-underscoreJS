/* global Backbone */
var task2 = task2 || {};

(function() {
    'use strict';

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
            console.log('details page called for film id '+ id );
        }
    });

    task2.FilmRouter = new FilmRouter();
    Backbone.history.start();
})();