define(['backbone'], function (Backbone) {
    
    var Film = Backbone.Model.extend({
        defaults : {
            year : 2014,
            name : '',
            id : undefined
        }
    });
    return Film;
});