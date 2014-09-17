define(['backbone', 'models/Film', 'collections/FilmIdGenerator'],
function (Backbone, Film, filmIdGenerator) {
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