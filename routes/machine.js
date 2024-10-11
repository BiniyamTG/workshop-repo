const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../middlewares/authMiddleware');
const Machine = require('../models/Machine');

// Add machine route
router.post('/add', verifyAdmin, async (req, res) => {
  const { name, description, hospitals } = req.body;
  
  const newMachine = new Machine({
    name,
    description,
    hospitals,
    createdBy: req.user.id
  });

  try {
    await newMachine.save();
    res.status(201).json({ message: 'Machine added successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error adding machine' });
  }
});

module.exports = router;
