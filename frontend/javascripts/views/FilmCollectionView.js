require(['backbone', 'FilmView', '../models/Film', '../collections/FilmIdGenerator', '../app/context'],
    function (Backbone, FilmView, Film, filmIdGenerator, context) {

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
                    id: filmIdGenerator.getNextId(),
                    name: addName.val(),
                    year: addYear.val()
                });
                this.collection.create(item);
                addName.val('');
                addYear.val('');
            },

        });

        return FilmCollectionView;
    });



/*task2.filmsView = new FilmCollectionView({
    collection: new FilmCollection()
});*/

