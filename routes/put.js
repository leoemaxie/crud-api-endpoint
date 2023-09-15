const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.put('/api/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { name } = req.body;

  try {
    const user = await Person.findOneAndUpdate({ user_id }, { name }, { new: true });

    if (!user)
      return res.status(404).json({ error: 'User not found' });

    const { id, name } = user;
    res.status(200).json({ id, name });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


