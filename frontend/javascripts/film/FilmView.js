define(['marionette'],
function (Marionette) {

    var FilmView = Marionette.ItemView.extend({
        className: 'film-container',
        template: "#film-template",
        ui: {
            newName: ".film-edit-name",
            newYear: ".film-edit-year"
        },
        events: {
            'click a.destroy': 'delete',
            'click a.edit': 'startEdit',
            'click a.done': 'doneEdit',
            'click a.cancel': 'cancelEdit'
        },
        behaviors: {
            Highlight: {
                selectorName: '.film-name',
                common: "white",
                highlighted: "#E6E6FA"
            }
        },

        delete: function (e) {
            e.preventDefault();
            this.model.destroy();
            this.remove();
        },

        startEdit: function (e) {
            e.preventDefault();
            this.$el.addClass('editing');
        },

        intClearView: function () {
            var root = this.$el;
            root.removeClass('editing');
            root.find(".film-name").val(this.model.get('name'));
            root.find(".film-year").val(this.model.get('year'));
        },

        doneEdit: function (e) {
            e.preventDefault();
            var newName = this.ui.newName.val();
            var newYear = this.ui.newYear.val();
            if (newName && newYear) {
                if (!this.model.save({ name: newName, year: newYear }))
                    console.log('somethig wrong during save happened');
                else {
                    this.render();
                }
            }
            this.intClearView();
        },
        cancelEdit: function (e) {
            e.preventDefault();
            this.intClearView();
        }
    });

    return FilmView;
});
