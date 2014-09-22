define(['backbone', 'marionette', 'film/FilmView', 'film/Film'],
function (Backbone, Marionette, FilmView, Film) {

    var FilmCollectionView = Marionette.CompositeView.extend({
        el: '#films-container',
        childViewContainer: "#films-list-container",
        childView: FilmView,
        ui: {
            addName: "#film-add-name",
            addYear: "#film-add-year",
            list: "#films-list-container"
        },

        events: {
            'all': "logEvent",
            'click button#add': 'addItem'
        },

        collectionEvents: {
            'add': "renderNewFilm"
        },

        logEvent: function (eventName) {
            console.log(eventName + ' was triggered!');
        },

        initialize: function () {
            this.bindUIElements();
        },

        renderNewFilm: function (model) {
            var view = new FilmView({
                model: model
            });
            this.ui.list.append(view.$el);
        },

        addItem: function () {
            var item = new Film({
                name: this.ui.addName.val(),
                year: this.ui.addYear.val()
            });
            this.collection.create(item, { wait: true });
            this.ui.addName.val('');
            this.ui.addYear.val('');
        },

    });

    return FilmCollectionView;
});

