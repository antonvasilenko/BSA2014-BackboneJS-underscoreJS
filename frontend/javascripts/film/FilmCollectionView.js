define(['marionette', 'film/FilmView', 'film/Film'],
function (Marionette, FilmView, Film) {

    var FilmCollectionView = Marionette.CompositeView.extend({
        template: "#films-list-template",
        el: '#films-container',
        childViewContainer: "#films-list-container",
        childView: FilmView,
        ui: {
            addName: "#film-add-name",
            addYear: "#film-add-year",
            list: "#films-list-container"
        },

        events: {
            'click button#add': 'addItem' //move to controller
        },

        addItem: function () {
            var item = new Film({
                name: this.ui.addName.val(),
                year: this.ui.addYear.val()
            });
            this.collection.create(item, { wait: true });
            this.ui.addName.val('');
            this.ui.addYear.val('');
        }

    });

    return FilmCollectionView;
});

