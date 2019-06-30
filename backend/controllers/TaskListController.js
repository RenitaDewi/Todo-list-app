const mysql = require('../database')
module.exports = (req, res) => {
    mysql.query()
    res.send('Hello NodeJS!') //req : request, res : respons
}