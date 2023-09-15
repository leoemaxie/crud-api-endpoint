const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.get('/api/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const query = isNaN(user_id) ? { name: user_id } : { id: user_id };

  try {
    const user = await Person.findOne(query);

    if (!user)
      return res.status(404).json({ error: 'User Not Found' });

    const { id, name } = user;
    res.json({ id, name });
  } catch (err) {
    console.error('Error retrieving user:', err);
    return  res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


