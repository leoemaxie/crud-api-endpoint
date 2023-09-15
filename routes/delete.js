const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.delete('/api/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const user = await Person.findOneAndUpdate({ id }, { name });
  
    if (!user)
      return res.status(404).json({ error: 'User not found' });

    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


