define(['backbone', 'underscore', 'jquery', 'models/FilmDetails'], function(Backbone, _, $, FilmDetails) {
    var FilmDetailsView = Backbone.View.extend({
        el: '#film-details-container',
        template: _.template($('#film-details-template').html()),

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        setModelById: function (id) {
            var that = this;
            if (that.model.get('id') != id) {
                that.model = new FilmDetails({ id: id });
            }
            if (!that.model.get('loaded')) {
                that.model.fetch({
                    success: function () {
                        that.model.set('loaded', true);
                        that.render();
                    }
                });
            } else {
                that.render();
            }

        }
    });
    return FilmDetailsView;
});