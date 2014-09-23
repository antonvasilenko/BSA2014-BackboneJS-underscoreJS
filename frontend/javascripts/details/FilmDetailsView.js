define(['backbone'],
function (Backbone) {
    // TODO rework to user marionette.ItemIvew
    var FilmDetailsView = Backbone.Marionette.ItemView.extend({
        // WTF why 'el': '#film-details-container' not working with marionette
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