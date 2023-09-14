const express = require('express');
const router = express.Router();
const Person = require('../models/person');

/**
 * @swagger
 * /api:
 *   patch:
 *     summary: Updates the details of a user in the database
 *     tags:                                                     *       - Persons
 *     requestBody:
 *       content:
 *         application/json:
 *       schema:
 *         type: object
 *        properties:
 *          name:
 *            type: string
 *          required:
 *            - name
 *     schema:
 *       $ref: '#/components/schemas/Person'
 *     responses:
 *       200:
 *         description: OK
 *       404:
 *         description: User Not Found
 *       500:
 *         description: Internal Server Error
 */
router.patch('/api/:id', async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  try {
    const user = await Person.findOneAndUpdate({ id }, { name }, { new: true });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


