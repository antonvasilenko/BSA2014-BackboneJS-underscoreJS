var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	initialize: function(){
		this.render();
	},

    events: {
        'click a.destroy': 'clear',
        'click a.edit': 'edit',
        'click a.done': 'doneEdit'
    },

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	clear: function () {
	    this.model.destroy();
	    this.remove();
	    return false;
	},

	edit: function () {
	    this.$el.addClass('editing');
        return false;
	},
    doneEdit: function() {
        this.$el.removeClass('editing');
        return false;
    }
});