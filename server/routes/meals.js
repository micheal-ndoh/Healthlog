const express = require('express');
const prisma = require('../prisma/client');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

// Get all meals for the current day
router.get('/', authMiddleware, async (req, res) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  try {
    const meals = await prisma.meal.findMany({
      where: {
        userId: req.userId,
        date: {
          gte: today,
          lt: tomorrow,
        },
      },
    });
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Add a new meal
router.post('/', authMiddleware, async (req, res) => {
  const { title, calories } = req.body;

  try {
    const meal = await prisma.meal.create({
      data: {
        title,
        calories,
        userId: req.userId,
      },
    });
    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ error: 'Something went wrong' });
  }
});

module.exports = router;
