import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const MEALS_KEY = 'meals';

export const useMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const loadMeals = async () => {
      try {
        const storedMeals = await AsyncStorage.getItem(MEALS_KEY);
        if (storedMeals !== null) {
          setMeals(JSON.parse(storedMeals));
        }
      } catch (error) {
        console.error('Failed to load meals from storage', error);
      }
    };

    loadMeals();
  }, []);

  const addMeal = async (meal) => {
    try {
      const newMeals = [...meals, meal];
      setMeals(newMeals);
      await AsyncStorage.setItem(MEALS_KEY, JSON.stringify(newMeals));
    } catch (error) {
      console.error('Failed to save meals to storage', error);
    }
  };

  return { meals, addMeal };
};
