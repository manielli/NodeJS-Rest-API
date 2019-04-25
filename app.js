const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const movies = require('./controllers/moviesController');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}));

app.post('/api/v1/movies', (req, res) => {
    const { title, released } = req.body;
    movies
        .create(title, released)
        .then(() => movies.list())
        .then(data => res.json(data))
        .catch(error => console.log(error));
});

app.get('/api/v1/movies', (req, res) => {
    movies
        .list()
        .then(data => res.json(data))
        .catch(error => console.log(error));
});


app.get('/api/v1/movies', (req, res) => {
    movies
        .show(req.body.id)
        .then(data => res.json(data))
        .catch(error => console.log(error))
});

app.put('/api/v1/movies', (req, res) => {
    movies
        .update(req.body)
        .then(() => movies.list())
        .then(data => res.json(data))
        .catch(error => console.log(error));
});

app.delete('/api/v1/movies', (req, res) => {
    movies
        .del(req.body.id)
        .then(() => movies.list())
        .then(data => res.json(data))
        .catch(error => console.log(error));
});

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});
