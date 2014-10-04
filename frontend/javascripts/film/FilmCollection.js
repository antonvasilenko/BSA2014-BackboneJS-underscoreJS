define(['backbone', './Film', 'memento'],
function (Backbone, Film, localStorage) {
    var FilmCollection = Backbone.Collection.extend({
        url: '/api/films',
        model: Film,
        initialize: function () {
            this.fetch();
        }
    });
    return FilmCollection;
});