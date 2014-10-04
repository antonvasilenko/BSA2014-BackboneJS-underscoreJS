define(['backbone'],
function (Backbone) {

    var FilmView = Backbone.Marionette.ItemView.extend({
        className : 'film-container',
        template : "#film-template",
        ui : {
            newName : ".film-edit-name",
            newYear: ".film-edit-year",
        },
        events : {
            'click a.destroy' : 'delete',
            'click a.edit' : 'startEdit',
            'click a.save' : 'saveChanges',
            'click a.undo' : 'undoChanges',
            'click a.done': 'doneEdit',
            'click a.cancel': 'cancelEdit'
        },
        behaviors: {
            Highlight : {
                selectorName : '.film-name',
                common : "white",
                highlighted : "#E6E6FA"
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
                this.model.store();
                this.model.set({ name : newName, year : newYear });
                this.render();
            }
            this.intClearView();
        },

        undoChanges: function(e) {
            e.preventDefault();
            this.model.restore();
            this.render();
        },

        saveChanges: function (e) {
            e.preventDefault();
            if (!this.model.save())
                console.log('something wrong during save happened');
            else {
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
