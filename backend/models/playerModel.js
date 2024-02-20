const mongoose = require('mongoose')

const Schema = mongoose.Schema

const playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    contactNo: {
        type: Number,
        required: true
    }
}, [])

module.exports = mongoose.model('Player', playerSchema)
