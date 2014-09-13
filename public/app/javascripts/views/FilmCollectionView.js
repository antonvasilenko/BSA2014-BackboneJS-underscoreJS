/* global Backbone */
var task2 = task2 || {};

var FilmCollectionView = Backbone.View.extend({
    el: '#films-container',
    initialize: function () {
        this.collection.on('add', this.renderNewFilm, this);
    },
    events: {
        'click button#add': 'addItem'
    },

    renderNewFilm: function (model) {
        var view = new FilmView({
            model: model
        });
        this.$el.find("#films-list-container").append(view.$el);
    },

    addItem: function () {
        var item = new Film({
            id: task2.filmIdGenerator.getNextId(),
            name: this.$el.find("#film-add-name").val(),
            year: this.$el.find("#film-add-year").val()
        });
        this.collection.create(item);
        this.$el.find("#film-add-name").val('');
        this.$el.find("#film-add-year").val('');
    },

});

task2.filmsView = new FilmCollectionView({
    collection: new FilmCollection()
});

