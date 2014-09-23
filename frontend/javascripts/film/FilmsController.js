define(['backbone',
        'film/FilmCollectionView', 'film/FilmCollection',
        'details/FilmDetailsView', 'details/FilmDetails'],
function(Backbone,
        FilmCollectionView, FilmCollection,
        FilmDetailsView, FilmDetails) {
    var FilmsController = function() {

        var FilmsRegion = Backbone.Marionette.Region.extend({
            el: "#films"
        });
        this.filmsRegion = new FilmsRegion();
        this.filmDetails = {
            model: null,
            view: null
        };
        this.bindListeners();
    };

    FilmsController.prototype.bindListeners = function() {
        Backbone.on("show:filmsList", function() {
            this.filmsRegion.show(new FilmCollectionView({
                 collection: new FilmCollection()
            }));
        }, this);

        Backbone.on("show:filmDetails", function (id) {
            var that = this;
            if (!that.filmDetails.model || that.filmDetails.model.get('id') != id) {
                that.filmDetails.model = new FilmDetails({ id: id });
            }
            var model = that.filmDetails.model;
            that.filmDetails.view = new FilmDetailsView({ model : model });
            if (!model.get('loaded')) {
                model.fetch({
                    success : function() {
                        model.set('loaded', true);
                        // refresh approach 1
                        that.filmDetails.view.render();
                        // refresh approach #2
                        //Backbone.trigger('filmDetails:loaded', id);
                    }
                });
            }
            that.filmsRegion.show(that.filmDetails.view);

        }, this);
    };

    return FilmsController;
});