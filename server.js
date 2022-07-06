const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.listen(3000, () => { console.log('listening on 3000') })


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
app.post('/equipment', (req, res) => {
    console.log(req.body)
})

MongoClient.connect('mongodb+srv://bear:Mdsoccer1@cluster0.77wby1r.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
    .then(client => {
        console.log("connected to database")
    })
    .catch(error => console.log(error))