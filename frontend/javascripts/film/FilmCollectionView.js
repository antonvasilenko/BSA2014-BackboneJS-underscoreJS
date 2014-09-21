define(['backbone', './FilmView', './Film'],
function (Backbone, FilmView, Film) {

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
            var addName = this.$el.find("#film-add-name");
            var addYear = this.$el.find("#film-add-year");
            var item = new Film({
                name: addName.val(),
                year: addYear.val()
            });
            this.collection.create(item, {wait:true});
            addName.val('');
            addYear.val('');
        },

    });

    return FilmCollectionView;
});

