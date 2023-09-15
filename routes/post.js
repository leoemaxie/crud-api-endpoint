const express = require('express');
const router = express.Router();
const Person = require('../models/person');
const generateID = require('../utils.js');

router.post('/api', async (req, res) => {
  const { name } = req.body;
  const id = generateID(name);
  const newPerson = new Person({ id, name });

  if (Object.keys(req.body).length > 1 || typeof name != 'string')
    return res.status(400).json({ error: "Bad Request" });

  try {
    await newPerson.save();
    res.status(201).json({ id, name });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
