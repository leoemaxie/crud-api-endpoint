const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.put('/api/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const user = await Person.findOneAndUpdate({ id }, { name }, { new: true });

    if (!user)
      return res.status(404).json({ error: 'User not found' });

    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


