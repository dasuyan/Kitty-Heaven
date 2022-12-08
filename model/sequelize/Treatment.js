const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Treatment = sequelize.define('Treatment', {
    _id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            }
        }
    },
    cost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            }
        }
    },
    contraindications: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
        }
    }
});

module.exports = Treatment;