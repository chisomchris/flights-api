const express = require('express')

const app = express()

const PORT = 3000

const flightRouter = require('./routes/flightsRoute')

app.use('/flights', express.json(), flightRouter)

app.get('/', (req, res, next) => {
    res.send('welcome ooo to flights api')
})

app.use((req, res, next) => {
    res.status(404).send("page not found")
})

app.listen(PORT, () => {
    console.log('server running on localhost, port: ' + PORT)
})