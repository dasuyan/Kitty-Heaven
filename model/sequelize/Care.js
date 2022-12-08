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
                msg: "notEmpty"
            },
            isDate: {
                msg: "isDate"
            }
        }
    },
    dateTo: {
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            },
            isDate: {
                msg: "isDate"
            }
        }
    },
    totalCost: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            },
            isDecimal: {
                msg: "isDecimal"
            },
            min: {
                args: [0],
                msg: "min_0"
            },
            max: {
                args: [1000000],
                msg: "max_1000000"
            }
        }
    },
    cat_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            }
        }
    },
    caretaker_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            }
        }
    }
});

module.exports = Care;