const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  dateofbirth: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  contactNo: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  school: {
    type: String,
    required: true,
  },
  postalid: {
    type: Number,
    required: true,
  },
  passportNo: {
    type: String,
    required: true,
  },
  bcNo: {
    type: Number,
    required: true,
  },
  achievement: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  injuries: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);
