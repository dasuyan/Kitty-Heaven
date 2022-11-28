const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Cat = sequelize.define('Cat', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = Cat;