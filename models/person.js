const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  id: Number,
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Person', personSchema);

