const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'rahasia',
    database: 'test'
});

module.exports = connection