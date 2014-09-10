var FilmCollection = Backbone.Collection.extend({
	url: '/api/films',
	model: Film,
	initialize: function(){
		this.fetch();
	}

});

var films = new FilmCollection();