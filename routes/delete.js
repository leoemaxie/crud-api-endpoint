const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.delete('/api/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const query = isNaN(user_id) ? { name: user_id } : { id: user_id };
  
  try {
    await Person.deleteOne(query);
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


