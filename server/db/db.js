const Sequelize = require('sequelize');

const config = {
    logging: false,
    password: 'falconandkir10'
};

const db = new Sequelize(
    'postgres://localhost:5432/dev', config
);

module.exports = db;

