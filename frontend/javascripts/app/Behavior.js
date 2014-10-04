define(['marionette'],
function (Marionette) {
    var behaviors = {};
    Marionette.Behaviors.behaviorsLookup = function () {
        return behaviors;
    };

    behaviors.Highlight = Marionette.Behavior.extend({
        ui: function() {
            return {
                target : this.options.selectorName
            };
        },
        initialize: function () {
            //console.log("hover initialized");
        },

        onShow: function () {
            var that = this;
            that.ui.target.hover(function () {
                that.ui.target.css('background-color', that.options.highlighted);
            }, function () {
                that.ui.target.css('background-color', that.options.common);
            });
        }
    });
    return behaviors;
});