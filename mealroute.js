const express = require('express');
const router = express.Router();
const Meal = require('../models/meal');

// Create Meal
router.post('/', async (req, res) => {
  try {
    const meal = await Meal.create(req.body);
    res.status(201).json(meal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get All Meals
router.get('/', async (req, res) => {
  try {
    const meals = await Meal.find();
    res.json(meals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update Meal by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Meal.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ error: 'Meal not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Meal by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Meal.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Meal not found' });
    res.json({ message: 'Meal deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
