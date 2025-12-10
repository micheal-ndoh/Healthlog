const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

const waterRoutes = require('./routes/water');
app.use('/api/water', waterRoutes);

const mealRoutes = require('./routes/meals');
app.use('/api/meals', mealRoutes);

const workoutRoutes = require('./routes/workouts');
app.use('/api/workouts', workoutRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
