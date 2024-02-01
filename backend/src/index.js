const mongoose = require('mongoose')
const express = require('express')
const routes = require('./Routes/Route.js')
const cors = require('cors')

const app = express()

mongoose.connect("mongodb+srv://rambhasahu57908:rSG8SvZLk44qyos7@cluster0.rslnd97.mongodb.net/Node-API?retryWrites=true&w=majority")
    .then(() => { console.log("MongoDb connected sucessfylly") })
    .catch((err) => { console.log(err) })

app.use(express.json())
app.use(cors())

app.use('/', routes)

const PORT = 4000 || process.env.PORT

app.listen(PORT, () => {
    console.log("server running on port", PORT)
})