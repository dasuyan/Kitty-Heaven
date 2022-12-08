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
    surname: {
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
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: {
                msg: "notEmpty"
            },
            len: {
                args: [2, 50],
                msg: "len_2_50"
            },
            isEmail: {
                msg: 'isEmail'
            }
        }
    },
    primaryRole: {
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
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Caretaker;