const knex = require('../db/db');

const create = (title, released) => 
    knex('movies')
        .insert({title, released});

const list = () => 
    knex('movies')
        .select('*');

const show = (id) => 
    knex('movies')
        .where({ id });

const update = () => 
    knex('movies')
        .update({ title, released })
        .where({ id });

const del = (id) => 
    knex('movies')
        .where({ id })
        .del();

module.exports = {
    create,
    list,
    show,
    update,
    del
};
