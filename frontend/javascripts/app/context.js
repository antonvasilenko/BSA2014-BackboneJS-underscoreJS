define(['details/FilmDetails',
        'details/FilmDetailsView',
        'film/FilmCollection',
        'film/FilmCollectionView'],
function (FilmDetails, FilmDetailsView, FilmCollection, FilmCollectionView) {
    var detailsModel = new FilmDetails();
    var context = {
        filmDetails: detailsModel,
        filmDetailsView: new FilmDetailsView({ model: detailsModel }),
        filmsView: new FilmCollectionView({ collection: new FilmCollection() }),
    };
    return context;
});