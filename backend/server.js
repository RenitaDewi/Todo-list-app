const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!')) //req : request, res : respons
app.listen(3000, () => console.log('Example app listening on port 3000!')) //listen mengaktifkan servernya di port 3000