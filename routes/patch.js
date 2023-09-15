const express = require('express');
const router = express.Router();
const Person = require('../models/person');

router.patch('/api/:user_id', async (req, res) => {
  const { user_id } = req.params;
  const { name } = req.body;
  const query = isNaN(user_id) ? { name: user_id } : { id: user_id };

  if (Object.keys(req.body).length > 1 || typeof name != 'string')
    return res.status(400).json({ error: "Bad Request" });

  try {
    const user = await Person.findOneAndUpdate(query, { name }, { new: false });
    if (!user)
      return res.status(404).json({ error: 'User Not Found' });
    res.status(200).json(user.lean());
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


