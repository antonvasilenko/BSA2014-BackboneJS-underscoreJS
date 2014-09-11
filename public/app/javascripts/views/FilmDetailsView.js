/* global Backbone */
var task2 = task2 || {};

var FilmDetailsView = Backbone.View.extend({
    el: '#film-details-container',
    template: _.template($('#film-details-template').html()),

	initialize: function(){
		this.render();
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;
	}
});

task2.filmDetailsView = new FilmDetailsView({
    model: task2.filmDetails
});