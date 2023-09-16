const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/api', async (req, res) => {
  try {
    const user = await Person.find({}, '-__v -_id');
    res.json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    return  res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

