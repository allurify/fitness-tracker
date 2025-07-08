// routes/userRoutes.js
router.get('/bmi/:userId', async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId);

  if (!user || !user.weight || !user.height) {
    return res.status(400).json({ error: 'Weight and height required' });
  }

  const heightInMeters = user.height / 100;
  const bmi = user.weight / (heightInMeters ** 2);
  let category = '';

  if (bmi < 18.5) category = 'Underweight';
  else if (bmi < 25) category = 'Normal weight';
  else if (bmi < 30) category = 'Overweight';
  else category = 'Obese';

  res.json({
    bmi: bmi.toFixed(2),
    category
  });
});
