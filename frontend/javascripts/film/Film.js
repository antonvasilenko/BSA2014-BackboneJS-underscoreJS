define(['backbone', 'memento'], function (Backbone) {

    var Film = Backbone.Model.extend({
        urlRoot: '/api/films',
        defaults: {
            year: 2014,
            name: '',
            id: undefined
        },

        validation: {
            name: {
                required: true,
                msg: 'Film title required'
            },
            year: {
                required: true,
                length: 6,
                pattern: /^\((\d){4}\)/,
                msg: "Please enter a valid year in format '(year)'"
            }
        },

        initialize: function () {
            var memento = new Backbone.Memento(this);
            _.extend(this, memento);
            this.on('validated', function () {
                console.log('validated');
            }, this);
        },

        getValidationError: function() {
            if (this.validationError) {
                return _.values(this.validationError).join(', ');
            } else {
                return null;
            }
        }
    });
    return Film;
});