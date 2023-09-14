const express = require('express');
const router = express.Router();
const Person = require('../models/person');

/**
 * @swagger
 * /api:
 *   get:
 *     summary: Fetches the detwils of a person in the database
 *     responses:
 *       404:
 *         description: User Not Found 
 *       500:
 *         description: Internal Server Error
 */
router.get('/api/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const user = await Person.findOne({ id }).select('-__v');

    if (!user) {
      return res.status(404).json({ error: 'User Not Found' });
    }
    res.json(user);
  } catch (err) {
    console.error('Error retrieving user:', err);
    return  res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


