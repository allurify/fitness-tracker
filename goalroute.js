const express = require('express');
const router = express.Router();
const WeightGoal = require('../models/WeightGoal');

// Create new weight goal
router.post('/', async (req, res) => {
  const goal = new WeightGoal(req.body);
  await goal.save();
  res.json({ message: 'Weight goal set!', goal });
});

// Get user's weight goal
router.get('/:userId', async (req, res) => {
  const goal = await WeightGoal.findOne({ userId: req.params.userId });
  res.json(goal);
});

// Update current weight + check progress
router.put('/update/:userId', async (req, res) => {
  const { userId } = req.params;
  const { currentWeight } = req.body;

  const goal = await WeightGoal.findOne({ userId });
  if (!goal) return res.status(404).json({ error: 'Goal not found' });

  goal.currentWeight = currentWeight;

  const hasAchieved =
    (goal.currentWeight <= goal.targetWeight && goal.currentWeight < goal.startWeight) || // weight loss
    (goal.currentWeight >= goal.targetWeight && goal.currentWeight > goal.startWeight);   // weight gain

  const today = new Date();
  if (hasAchieved) goal.status = 'achieved';
  else if (today > goal.endDate) goal.status = 'missed';
  else goal.status = 'ongoing';

  await goal.save();
  res.json({ message: 'Weight updated', goal });
});

module.exports = router;

