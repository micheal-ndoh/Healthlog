import { useEffect, useState } from 'react';
import { useAuth } from '../(context)/AuthContext';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!user) return;
      try {
        const response = await fetch('http://localhost:3000/api/workouts', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setWorkouts(data);
        }
      } catch (error) {
        console.error('Failed to fetch workouts', error);
      }
    };

    fetchWorkouts();
  }, [user]);

  const addWorkout = async (workout) => {
    if (!user) return;
    try {
      const response = await fetch('http://localhost:3000/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ title: workout.title, duration: workout.duration }),
      });
      const data = await response.json();
      if (response.ok) {
        setWorkouts(prevWorkouts => [...prevWorkouts, data]);
      }
    } catch (error) {
      console.error('Failed to add workout', error);
    }
  };

  return { workouts, addWorkout };
};
