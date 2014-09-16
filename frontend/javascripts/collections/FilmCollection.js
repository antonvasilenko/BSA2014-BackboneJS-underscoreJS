define(['backbone', './FilmIdGenerator', '../models/Film'],
function (Backbone, filmIdGenerator, Film) {
    var FilmCollection = Backbone.Collection.extend({
        url: '/api/films',
        model: Film,
        initialize: function () {
            this.on('add', function (model) {
                filmIdGenerator.updateIdIfNeeded(model.id);
            }, this);
            this.fetch();
        }
    });
    return FilmCollection;
});