const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-projekt-drabarek-s23711', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;