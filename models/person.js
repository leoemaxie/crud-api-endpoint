const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    minLength: 2,
    required: true,
    unique: true,
  },
});

module.exports = mongoose.model('Person', personSchema);

