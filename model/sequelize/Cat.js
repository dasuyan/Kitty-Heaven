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
                msg: "Pole jest wymagane"
            },
            len: {
                args: [2, 50],
                msg: "Pole powinno zawierać od 2 do 50 znaków"
            }
        }
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isInt: {
              msg: "Pole powinno zawierać liczbę całkowitą"
            },
            min: {
                args: [0],
                msg: "Pole powinno zawierać liczbę większą lub równą 0"
            },
            max: {
                args: [50],
                msg: "Pole powinno zawierać liczbę mniejszą lub równą 50"
            }
        }
    },
    breed: {
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: "Pole powinno zawierać od 0 do 50 znaków"
            }
        }
    }
});

module.exports = Cat;