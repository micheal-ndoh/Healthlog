import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const WORKOUTS_KEY = 'workouts';

export const useWorkouts = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const loadWorkouts = async () => {
      try {
        const storedWorkouts = await AsyncStorage.getItem(WORKOUTS_KEY);
        if (storedWorkouts !== null) {
          setWorkouts(JSON.parse(storedWorkouts));
        }
      } catch (error) {
        console.error('Failed to load workouts from storage', error);
      }
    };

    loadWorkouts();
  }, []);

  const addWorkout = async (workout) => {
    try {
      const newWorkouts = [...workouts, workout];
      setWorkouts(newWorkouts);
      await AsyncStorage.setItem(WORKOUTS_KEY, JSON.stringify(newWorkouts));
    } catch (error) {
      console.error('Failed to save workouts to storage', error);
    }
  };

  return { workouts, addWorkout };
};
