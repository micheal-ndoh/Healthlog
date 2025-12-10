const express = require('express');
const prisma = require('../prisma/client');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get water intake for the current day
router.get('/', authMiddleware, async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const waterIntake = await prisma.waterIntake.findUnique({
      where: {
        userId_date: {
          userId: req.userId,
          date: today,
        },
      },
    });

    res.json(waterIntake || { amount: 0 });
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Add or update water intake for the current day
router.post('/', authMiddleware, async (req, res) => {
  const { amount } = req.body;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  try {
    const waterIntake = await prisma.waterIntake.upsert({
      where: {
        userId_date: {
          userId: req.userId,
          date: today,
        },
      },
      update: { amount },
      create: {
        amount,
        date: today,
        userId: req.userId,
      },
    });

    res.json(waterIntake);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
