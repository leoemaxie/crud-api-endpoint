const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    alias: 'id',
  },
  name: {
    type: String,
    minLength: 2,
    required: true,
    trim: true,
    unique: true,
  },
});

module.exports = mongoose.model('Person', personSchema);

