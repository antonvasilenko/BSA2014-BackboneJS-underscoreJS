/* global Backbone */
define(['./FilmIdGenerator'], function(filmIdGenerator) {
    var FilmCollection = Backbone.Collection.extend({
        url: '/api/films',
        model: Film,
        initialize: function () {
            this.on('add', function (model) {
                task2.filmIdGenerator.updateIdIfNeeded(model.id);
            }, this);
            this.fetch();
        }
    });
    return FilmCollection;
});