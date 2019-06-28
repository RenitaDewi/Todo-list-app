require('dotenv').config()
const express = require('express')
const app = express()
const TaskListController = require('./controllers/TaskListController.js')
const TaskCreateController = require('./controllers/TaskCreateController.js')
const TaskDeleteController = require('./controllers/TaskDeleteController.js')
const TaskUpdateController = require('./controllers/TaskUpdateController.js')

//GET KHUSUS MENGAMBIL DATA2 YANG ADA DI DATABASE
app.get('/', TaskListController)
//untuk menambahkan data
app.post('/', TaskCreateController)
//untuk menghapus data
app.delete('/', TaskDeleteController)
//untuk mengupdatedata
app.put('/', TaskUpdateController)

app.listen(3000, () => console.log('Example app listening on port 3000!')) //listen mengaktifkan servernya di port 3000