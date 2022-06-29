const Sequelize = require('sequelize');
const env = require('../env');

module.exports = new Sequelize(env.connectionString, {
    dialect: 'postgres',
    schema: 'cimforms',
    host: '20.44.50.17:5432',
    define: {
        timestamps: false,
        freezeTableName: true
    },
    pool:{
        min : 0,
        max:5,
        aquire :5000,
        idle : 10000
    }

})