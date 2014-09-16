/* global Backbone */
var task2 = task2 || {};

var FilmCollection = Backbone.Collection.extend({
	url: '/api/films',
	model: Film,
	initialize: function () {
	    this.on('add', function(model) {
	        task2.filmIdGenerator.updateIdIfNeeded(model.id);
	    }, this);
		this.fetch();
	}
});

(function() {
    function FilmIdGenerator(){
        var id = 0;
        return {
            getNextId: function () {
                // TODO: return negative numbers here
                // implement returning correct id from server
                id += 1;
                return id;
            },
            updateIdIfNeeded: function(extId) {
                if (extId > id)
                    id = extId;
            }
        };
    }
    task2.filmIdGenerator = new FilmIdGenerator();
})();