import { useEffect, useState } from 'react';
import { useAuth } from '../(context)/AuthContext';

export const useMeals = () => {
  const [meals, setMeals] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMeals = async () => {
      if (!user) return;
      try {
        const response = await fetch('http://localhost:3000/api/meals', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setMeals(data);
        }
      } catch (error) {
        console.error('Failed to fetch meals', error);
      }
    };

    fetchMeals();
  }, [user]);

  const addMeal = async (meal) => {
    if (!user) return;
    try {
      const response = await fetch('http://localhost:3000/api/meals', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ title: meal.title, calories: meal.kacl }),
      });
      const data = await response.json();
      if (response.ok) {
        setMeals(prevMeals => [...prevMeals, data]);
      }
    } catch (error) {
      console.error('Failed to add meal', error);
    }
  };

  return { meals, addMeal };
};
