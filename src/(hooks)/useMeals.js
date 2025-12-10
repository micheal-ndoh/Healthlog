import { useState } from 'react';

export const useMeals = () => {
  const [meals, setMeals] = useState([]);

  const addMeal = (meal) => {
    setMeals(prevMeals => [...prevMeals, { ...meal, id: Date.now() }]);
  };

  return { meals, addMeal };
};
