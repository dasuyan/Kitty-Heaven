const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Caretaker = sequelize.define('Caretaker', {
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
    surname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    primaryRole: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Caretaker;