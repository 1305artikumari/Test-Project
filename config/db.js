const sequenlize = require('sequelize');
const mysql = new sequenlize('sellers', 'root', 'Arti@123', {
    host: 'localhost',
    dialect: 'mysql'
})
module.exports = mysql;
