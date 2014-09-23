define(['film/FilmsController'],
function(FilmsController) {
    var AppController = function() {
        var filmsController = new FilmsController();
    };
    return AppController;
});