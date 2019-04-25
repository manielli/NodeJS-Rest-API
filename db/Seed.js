const faker = require('faker');

exports.seed = function (knex) {
    return knex('movies')
        .del()
        .then(() => {
            const movies = Array.from({ length: 25 }).map(() => {
                return {
                    title: faker.space.planet(),
                    released: faker.date.past()
                };
            });

            return knex('movies').insert(movies);
        });

};
