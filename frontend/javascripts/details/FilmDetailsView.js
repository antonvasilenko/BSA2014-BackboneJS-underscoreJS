define(['backbone'],
function (Backbone) {
    var FilmDetailsView = Backbone.Marionette.ItemView.extend({
        id: 'film-details-container',
        template: "#film-details-template",

        // refresh approach #2
        /*initialize: function() {
            Backbone.on('filmDetails:loaded', function() {
                this.render();
            }, this);
        }*/
    });
    return FilmDetailsView;
});