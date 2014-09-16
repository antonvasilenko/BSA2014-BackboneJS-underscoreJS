define(['../models/FilmDetails',
        '../views/FilmDetailsView',
        '../collections/FilmCollection',
        '../views/FilmCollectionView'],
function (FilmDetails, FilmDetailsView, FilmCollection, FilmCollectionView) {
    var detailsModel = new FilmDetails();
    var context = {
        filmDetails: detailsModel,
        filmDetailsView: new FilmDetailsView({ model: detailsModel }),
        filmsView: new FilmCollectionView({ collection: new FilmCollection() })
    };
    return context;
});