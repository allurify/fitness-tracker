router.post('/join', async (req, res) => {
  const { userId, challengeId } = req.body;
  const alreadyJoined = await UserChallenge.findOne({ userId, challengeId });
  if (alreadyJoined) return res.json({ message: 'Already joined' });

  const join = new UserChallenge({ userId, challengeId });
  await join.save();
  res.json({ message: 'Joined successfully' });
});
