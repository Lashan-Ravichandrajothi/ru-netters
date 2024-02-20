require('dotenv').config()

const express = require('express');
const playerRoutes = require('./routes/players')
 
const app = express();

app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/players', playerRoutes)

app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})

process.env