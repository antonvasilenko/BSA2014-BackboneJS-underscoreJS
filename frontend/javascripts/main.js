require.config({
	baseUrl: '/javascripts',

	paths: {
		jquery: '../../bower_components/jquery/dist/jquery.min',
		underscore: '../../bower_components/underscore/underscore',
		backbone: '../../bower_components/backbone/backbone',
		marionette: '../../bower_components/marionette/lib/backbone.marionette',
	}
});

require(['app/app'], function (app) {
    /* TODO Question list
    1. How to intercept and log 'all' events, i.e. from FilmCollectionView
    2. Provide example of navigation. how router should work? (development branch)
    Do we need it at all? (navigate via events)
    3. Is it better to forward click #btnAdd -> to 'film:added' inside same view 
       or it's redundant? (not needed)
    4. Composite view with childView and childView container doesn't attach new collection items.
       It only works if manually config 'collectionEvents.add' event in options.
    */
    
});
