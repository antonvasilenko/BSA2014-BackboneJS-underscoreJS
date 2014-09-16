require(['backbone', '../app/context'], function(Backbone, context) {

    var FilmDetails = Backbone.Model.extend({
        urlRoot : '/api/filmdetails',
        defaults : {
            year : 2014,
            name : 'noname',
            id : undefined,
            poster : "./assets/Placeholder.png",
            loaded : false
        },
        initialize : function() {
            this.fetch();
        }
    });
    return new FilmDetails();
});