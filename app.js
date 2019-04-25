const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const movies = require('./controllers/moviesController');

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// app.use(methodOverride((req, res) => {
//     if (req.body && req.body._method) {
//         const method = req.body._method;
//         return method;
//     }
// }));

app.post('/api/v1/movies', (req, res) => {
    const { title, released } = req.body;
    movies
        .create(title, released)
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.get('/api/v1/movies', (req, res) => {
    movies
        .list()
        .then(data => res.json(data))
        .catch(error => res.json(error));
});


app.get('/api/v1/movies/:id', (req, res) => {
    movies
        .show(req.params.id)
        .then(data => res.json(data))
        .catch(error => res.json(error))
});

app.put('/api/v1/movies/:id', (req, res) => {
    movies
        .update(req.params.id, req.body)
        .then(() => movies.list())
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

app.delete('/api/v1/movies/:id', (req, res) => {
    movies
        .del(req.params.id)
        .then(() => movies.list())
        .then(data => res.json(data))
        .catch(error => res.json(error));
});

const PORT = process.env.PORT || 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});
