import { useState } from 'react';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts(prevWorkouts => [...prevWorkouts, { ...workout, id: Date.now() }]);
  };

  return { workouts, addWorkout };
};
