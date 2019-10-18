require('dotenv').config()
const express = require ('express')
const massive = require('massive')
const ctrl = require('./controller')
const app = express()

app.use(express.json())

const { SERVER_PORT, CONNECTION_STRING} = process.env

massive(CONNECTION_STRING).then(db => {
    app.set("db", db);
    console.log('db connected')
})

// ENDPOINTS
app.post('/api/madlibs', ctrl.saveInputs)
app.get('/api/madlibs', ctrl.getOutput)


app.listen(SERVER_PORT, () => console.log(`Server running on port ${SERVER_PORT}`))