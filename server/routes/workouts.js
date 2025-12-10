const express = require('express');
const prisma = require('../prisma/client');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all workouts for the current day
router.get('/', authMiddleware, async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  try {
    const workouts = await prisma.workout.findMany({
      where: {
        userId: req.userId,
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    });
    res.json(workouts);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Add a new workout
router.post('/', authMiddleware, async (req, res) => {
  const { title, duration } = req.body;

  try {
    const workout = await prisma.workout.create({
      data: {
        title,
        duration,
        userId: req.userId,
      },
    });
    res.status(201).json(workout);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
