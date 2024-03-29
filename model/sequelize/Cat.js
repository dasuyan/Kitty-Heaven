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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            },
            len: {
                args: [2, 50],
                msg: "len_2_50"
            }
        }
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            },
            isInt: {
              msg: "isInt"
            },
            min: {
                args: [0],
                msg: "min_0"
            },
            max: {
                args: [50],
                msg: "max_50"
            }
        }
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: "len_0_50"
            }
        }
    }
});

module.exports = Cat;