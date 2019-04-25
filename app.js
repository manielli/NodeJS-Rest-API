const path = require('path');
const express = require('express');
const app = express();
const methodOverride = require('method-override');
const movies = require('./db/db');
const list = require('./db/db');
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride((req, res) => {
    if (req.body && req.body._method) {
        const method = req.body._method;
        return method;
    }
}));

app.get('/api/v1/movies', (req, res) => {
    movies
        .list()
        .then(data => res.json(data));
});

const PORT = 3000;
const HOST = 'localhost';
app.listen(PORT, HOST, () => {
    console.log(`Server is listening on http://${HOST}:${PORT}`);
});
