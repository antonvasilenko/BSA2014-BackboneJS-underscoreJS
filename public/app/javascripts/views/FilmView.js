var FilmView = Backbone.View.extend({
	className: 'film-container',
	template: _.template($('#film-template').html()),

	initialize: function(){
		this.render();
	},

    events: {
        'click a.destroy': 'clear'
    },

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	},

	clear: function () {
	    this.model.destroy();
	    this.remove();
	}
});