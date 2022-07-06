const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/index.html')
// })
// app.post('/equipment', (req, res) => {
//     console.log(req.body)
// })
const connectionString = 'mongodb+srv://bear:*1@cluster0.77wby1r.mongodb.net/?retryWrites=true&w=majority'
MongoClient.connect(connectionString, { useUnifiedTopology: true })
    .then(client => {
        console.log("connected to database")
        const db = client.db('dnd-inventory')
        const inventoryCollection = db.collection('equipment')
        app.set('view engine', 'ejs')
        app.use(bodyParser.urlencoded({
            extended: true
        }));
        app.get('/', (req, res) => {
            db.collection('equipment').find().toArray()
                .then(results => {
                    res.render('index.ejs', { equipment: results })
                })
                .catch(error => console.error(error))
        })
        app.post('/equipment', (req, res) => {
            inventoryCollection.insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                })
                .catch(error => console.error(error))
        })
        app.listen(3000, () => { console.log('listening on 3000') })
    })
    .catch(error => console.log(error))