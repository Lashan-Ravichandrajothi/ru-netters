require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const playerRoutes = require('./routes/players')

const app = express();
const PORT = process.env.PORT || 4000;
const cors = require('cors');

app.use(cors({ origin: 'https://ru-netters.netlify.app' }));


app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.use('/api/players', playerRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log('Connected to db & listening on port', PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

process.env