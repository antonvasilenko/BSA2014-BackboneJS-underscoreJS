/* global Backbone */
var task2 = task2 || {};

var FilmCollection = Backbone.Collection.extend({
	url: '/api/films',
	model: Film,
	initialize: function(){
		this.fetch();
	}

});

task2.films = new FilmCollection();