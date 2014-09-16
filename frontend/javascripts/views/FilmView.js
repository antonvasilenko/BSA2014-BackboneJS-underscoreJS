require(['backbone', 'underscore', 'jquery'], function(Backbone, _, $) {
    
});
var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	initialize: function(){
		this.render();
	},

    events: {
        'click a.destroy': 'delete',
        'click a.edit': 'edit',
        'click a.done': 'doneEdit',
        'click a.cancel': 'cancelEdit'
    },

	render: function(){
	    this.$el.html(this.template(this.model.toJSON()));
	    this.$newName = this.$el.find(".film-edit-name");
	    this.$newYear = this.$el.find(".film-edit-year");
		return this;
	},

	delete: function (e) {
	    e.preventDefault();
	    this.model.destroy();
	    this.remove();
	},

	edit: function (e) {
	    e.preventDefault();
	    this.$el.addClass('editing');
	},

    intClearView: function() {
        this.$el.removeClass('editing');
        $el.find(".film-name").val(this.model.get('name'));
        $el.find(".film-year").val(this.model.get('name'));
    },

    doneEdit: function (e) {
        e.preventDefault();
        var newName = this.$newName.val();
        var newYear = this.$newYear.val();
        if (newName && newYear) {
            if (!this.model.save({ name : newName, year : newYear }))
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