var _ = require("underscore");

var FilmService = function () {

    this.getFilm = function (id) {
        id = Number(id);
        return _.findWhere(this.FilmList, { id: id });
    };

    this.getFilmList = function (id) {
        if (id) {
            var item = _.findWhere(this.FilmList, { id: Number(id) });
            if (item) {
                return { name: item.name, year: item.year, id: item.id };
            }
        } else {
            return _.map(this.FilmList, function (item) {
                return { name: item.name, year: item.year, id: item.id }
            });
        }
    };

    this.deleteFilm = function (id) {
        this.FilmList = _.reject(this.FilmList, function (item) { return item.id === Number(id); });
    }

    this.getNextId = function () {
        var ids = _.pluck(this.FilmList, 'id');
        return _.max(ids) + 1;
    };

    this.addFilm = function (item) {
        var film = item;
        if (typeof (film.id) != 'number' || film.id < 0) {
            film.id = this.getNextId();
        }
        this.FilmList.push(film);
    };



    this.FilmList = [
		{
		    poster: "http://images.moviepostershop.com/the-wizard-of-oz-movie-poster-1998-1010261967.jpg",
		    name: "The Wizard of Oz",
		    id: 1,
		    year: "(1939)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/casablanca-movie-poster-1942-1010351926.jpg",
		    name: "Casablanca",
		    id: 2,
		    year: "(1942)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/scarface-movie-poster-1983-1010197973.jpg",
		    name: "Scarface",
		    id: 3,
		    year: "(1983)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/gone-with-the-wind-movie-poster-1974-1010271313.jpg",
		    name: "Gone With the Wind",
		    id: 4,
		    year: "(1974)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/star-wars-movie-poster-1977-1010482225.jpg",
		    name: "Star Wars",
		    id: 5,
		    year: "(1977)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/titanic-movie-poster-1997-1010339699.jpg",
		    name: "Titanic",
		    id: 6,
		    year: "(1997)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/the-matrix-movie-poster-1999-1010265382.jpg",
		    name: "The Matrix",
		    id: 7,
		    year: "(1999)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/pulp-fiction-movie-poster-1994-1010375631.jpg",
		    name: "Pulp Fiction",
		    id: 8,
		    year: "(1994)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/the-godfather-movie-poster-1972-1010267745.jpg",
		    name: "The Godfather",
		    id: 9,
		    year: "(1972)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/rocky-movie-poster-1977-1010260161.jpg",
		    name: "Rocky",
		    id: 10,
		    year: "(1977)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/fight-club-movie-poster-1999-1010215604.jpg",
		    name: "Fight Club",
		    id: 11,
		    year: "(1999)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/braveheart-movie-poster-1995-1010191193.jpg",
		    name: "Braveheart",
		    id: 12,
		    year: "(1995)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/the-shawshank-redemption-movie-poster-1994-1010191906.jpg",
		    name: "The Shawshank Redemption",
		    id: 13,
		    year: "(1994)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/the-good-the-bad-and-the-ugly-movie-poster-1966-1010203305.jpg",
		    name: "The Good, The Bad and The Ugly",
		    id: 14,
		    year: "(1966)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/bullitt-movie-poster-1968-1010144161.jpg",
		    name: "Bullitt",
		    id: 15,
		    year: "(1968)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/the-empire-strikes-back-movie-poster-1980-1010482232.jpg",
		    name: "The Empire Strikes Back",
		    id: 16,
		    year: "(1980)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/caddyshack-movie-poster-1980-1010286017.jpg",
		    name: "Caddyshack",
		    id: 17,
		    year: "(1980)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/sunset-boulevard-movie-poster-1950-1010142705.jpg",
		    name: "Sunset Boulevard",
		    id: 18,
		    year: "(1950)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
		{
		    poster: "http://images.moviepostershop.com/2001-a-space-odyssey-movie-poster-1968-1010144308.jpg",
		    name: "2001: A Space Odyssey",
		    id: 19,
		    year: "(1968)",
		    details0: "details1",
		    details2: "details2",
		    details3: "details3",
		    details4: "details4",
		    details5: "details5",
		    details6: "details6",
		    details7: "details7",
		    details8: "details8",
		},
    ];
};

module.exports = new FilmService();