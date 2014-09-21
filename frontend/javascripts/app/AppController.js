define(['film/FilmsController', 'details/FilmDetailsController'],
function(FilmsController, FilmDetailsController) {
    var AppController = function() {
        var filmsController = new FilmsController();
        var filmDetailsController = new FilmDetailsController();
    };
    console.log("AppController injected");
    return AppController;
});