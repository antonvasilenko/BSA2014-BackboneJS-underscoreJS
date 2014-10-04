define(['backbone', 'memento'], function (Backbone) {
    
    var Film = Backbone.Model.extend({
        urlRoot: '/api/films',
        defaults : {
            year : 2014,
            name : '',
            id : undefined
        },

        initialize: function () {
            var memento = new Backbone.Memento(this);
            _.extend(this, memento);
        },
    });
    return Film;
});