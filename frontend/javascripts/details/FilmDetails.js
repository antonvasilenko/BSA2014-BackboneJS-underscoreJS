define(['backbone'], function(Backbone) {

    var FilmDetails = Backbone.Model.extend({
        urlRoot : '/api/filmdetails',
        defaults : {
            year : 2014,
            name : 'noname',
            id : undefined,
            poster : "./assets/Placeholder.png",
            loaded : false
        }
    });
    return FilmDetails;
});