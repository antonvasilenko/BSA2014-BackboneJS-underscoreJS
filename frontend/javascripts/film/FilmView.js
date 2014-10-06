define(['backbone', 'underscore'],
function (Backbone, _) {

    var FilmView = Backbone.Marionette.ItemView.extend({
        className: 'film-container',
        template: "#film-template",
        ui: {
            newName: ".film-edit-name",
            newYear: ".film-edit-year",
            name: ".film-name",
            year: ".film-year",
        },
        events: {
            'click a.destroy': 'delete',
            'click a.edit': 'startEdit',
            'click a.save': 'saveChanges',
            'click a.undo': 'undoChanges',
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
            this.$el.removeClass('editing');
            var name = this.model.get('name');
            var year = this.model.get('year');
            this.ui.name.val(name);
            this.ui.year.val(year);
            this.ui.newName.val(name);
            this.ui.newYear.val(year);
        },

        doneEdit: function (e) {
            e.preventDefault();
            var newName = this.ui.newName.val();
            var newYear = this.ui.newYear.val();
            this.model.store();
            this.model.set({ name: newName, year: newYear });
            this.render();
            this.intClearView();
        },

        undoChanges: function (e) {
            e.preventDefault();
            this.model.restore();
            this.render();
        },

        saveChanges: function (e) {
            e.preventDefault();
            if (!this.model.save()) {
                if (!this.model.isValid())
                    alert(this.model.getValidationError());
                else
                    console.log('something wrong during save happened');
            } else {
                this.render();
            }
        },

        cancelEdit: function (e) {
            e.preventDefault();
            this.intClearView();
        }
    });

    return FilmView;
});
