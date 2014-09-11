/* global Backbone */
var task2 = task2 || {};

var FilmDetails = Backbone.Model.extend({
    urlRoot: '/api/filmdetails',
    defaults: {
        year: 2014,
        name: 'noname',
        id: undefined,
        poster: "./assets/Placeholder.png"
    },
    initialize: function () {
        this.fetch();
    }
});

task2.filmDetails = new FilmDetails();