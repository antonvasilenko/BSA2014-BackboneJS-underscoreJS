// TODO not used at all for now
define(['details/FilmDetails',
        'details/FilmDetailsView',
        'film/FilmCollection',
        'film/FilmCollectionView'],
function (FilmDetails, FilmDetailsView, FilmCollection, FilmCollectionView) {
    //var detailsModel = new FilmDetails();
    var context = {
        //filmsView: new FilmCollectionView({ collection: new FilmCollection() }),
    };

    // VERY IMPORTANT. We should invoke render of the view!
    // don't need it now, after moving to regions
    //context.filmsView.render();
    return context;
});