var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path'),
	filmService = require('./filmService');

app.use(express.static(__dirname + '/public'));
var staticPath = path.normalize(__dirname + '/bower_components');
app.use('/bower_components', express.static(staticPath));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/api/films', function (req, res) {
    res.send(filmService.getFilmList());
});

app.get('/api/films/:id', function (req, res) {
    var film = filmService.getFilmList(req.params.id);
    if (film) {
        res.send(film);
    } else {
        res.send('No film with id ' + req.params.id);
    }
});

app.delete('/api/films/:id', function (req, res) {
    var film = filmService.deleteFilm(req.params.id);
    res.end();
});

app.post('/api/films', function(req, res){
    var film = filmService.addFilm(req.body);
    res.send(film);
});

app.put('/api/films/:id', function (req, res) {
    filmService.updateFilm(req.body);
    res.status(200).end();
});

app.get('/api/filmdetails/:id', function (req, res) {
    res.send(filmService.getFilm(req.params.id));
});

app.get('/api', function (req, res) {
    var text = [
		'<b>localhost:3000/api/films</b>',
		'returns the list of films available',
		'<br />',
		'<b>localhost:3000/api/films/%id%</b>',
		'where %id% is id of the film from the list',
		'<br />',
		'<b>localhost:3000/api/filmdetails/%id%</b>',
		'where <b>%filmname%</b> is a name of the film from the filmlist',
		'<br />',
		'<b>localhost:3000/app</b>',
		'this is the root of your web app'];
    res.send(text.join('<br />'));

});

app.listen(3000);
console.log('Server started on port 3000. Go to http://localhost:3000/api for further instructions');