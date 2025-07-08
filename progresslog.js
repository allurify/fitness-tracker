router.post('/log', async (req, res) => {
  const { userId, challengeId, value } = req.body;
  const challenge = await Challenge.findById(challengeId);
  const userChallenge = await UserChallenge.findOne({ userId, challengeId });

  const today = new Date().setHours(0, 0, 0, 0);
  const existing = userChallenge.progress.find(p => new Date(p.date).getTime() === today);

  if (existing) existing.value = value;
  else userChallenge.progress.push({ date: today, value });

  // Auto-check completion
  if (
    userChallenge.progress.length >= challenge.duration &&
    userChallenge.progress.every(p => p.value >= challenge.target)
  ) {
    userChallenge.completed = true;
  }

  await userChallenge.save();
  res.json({ message: 'Progress logged', userChallenge });
});
