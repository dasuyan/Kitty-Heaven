const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Care = sequelize.define('Care', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    dateFrom: {
        type: Sequelize.DATE,
        allowNull: false
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: false
    },
    totalCost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    cat_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    caretaker_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
});

module.exports = Care;