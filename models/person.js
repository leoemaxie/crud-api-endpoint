const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    minLength: 2,
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = mongoose.model('Person', personSchema);

