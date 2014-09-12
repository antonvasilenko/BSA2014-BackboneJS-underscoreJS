/* global Backbone */
var task2 = task2 || {};

var FilmCollectionView = Backbone.View.extend({
	el: '#films-container',
	initialize: function(){
		this.collection.on('add', this.renderNewFilm, this);
	},
	events: {
	    'click input#add': 'addItem'
	},

	renderNewFilm: function(model){
		var view = new FilmView({
			model: model
		});
		this.$el.find("#films-list-container").append(view.$el);
	},

	addItem: function () {
	    var item = new Film();
	    task2.films.add(item); // add item to collection; view is updated via event 'add'
	},
});

task2.filmsView = new FilmCollectionView({
	collection: task2.films
});

