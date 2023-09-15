const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.post('/api', async (req, res) => {
  const { name } = req.body;
  const newPerson = new Person({ name });

  if (Object.keys(req.body).length > 1)
    return res.status(400).json({ error: "Bad Request" });

  try {
    await newPerson.save();
    res.status(201).json(newPerson);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
