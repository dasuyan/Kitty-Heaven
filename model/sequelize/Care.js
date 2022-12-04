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
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno zawierać datę"
            }
        }
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDate: {
                msg: "Pole powinno zawierać datę"
            }
        }
    },
    totalCost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            isDecimal: {
                msg: "Pole powinno zawierać liczbę"
            },
            min: {
                args: [0],
                msg: "Pole powinno zawierać liczbę większą lub równą 0"
            },
            max: {
                args: [1000000],
                msg: "Pole powinno zawierać liczbę mniejszą niż 1000000"
            }
        }
    },
    cat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    },
    caretaker_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            }
        }
    }
});

module.exports = Care;