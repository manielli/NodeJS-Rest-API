const faker = require('faker');

exports.seed = function (knex) {
    return knex('movies')
        .del()
        .then(() => {
            const movies = Array.from({ length: 25 }).map(() => {
                return {
                    title: faker.lorem.word(),
                    released: Math.floor(Math.random() * 120 + 1900)
                };
            });

            return knex('movies').insert(movies);
        });

};
