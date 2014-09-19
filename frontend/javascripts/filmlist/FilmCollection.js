define(['backbone', 'models/Film'],
function (Backbone, Film) {
    var FilmCollection = Backbone.Collection.extend({
        url: '/api/films',
        model: Film,
        initialize: function () {
            this.fetch();
        }
    });
    return FilmCollection;
});