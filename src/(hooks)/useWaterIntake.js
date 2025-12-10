import { useEffect, useState } from 'react';
import { useAuth } from '../(context)/AuthContext';

export const useWaterIntake = () => {
  const [waterIntake, setWaterIntake] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const fetchWaterIntake = async () => {
      if (!user) return;
      try {
        const response = await fetch('http://localhost:3000/api/water', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setWaterIntake(data.amount);
        }
      } catch (error) {
        console.error('Failed to fetch water intake', error);
      }
    };

    fetchWaterIntake();
  }, [user]);

  const updateWaterIntake = async (newAmount) => {
    if (!user) return;
    try {
      const response = await fetch('http://localhost:3000/api/water', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ amount: newAmount }),
      });
      const data = await response.json();
      if (response.ok) {
        setWaterIntake(data.amount);
      }
    } catch (error) {
      console.error('Failed to update water intake', error);
    }
  };

  const addWater = (amount) => {
    const newWaterIntake = waterIntake + amount;
    updateWaterIntake(newWaterIntake);
  };

  const removeWater = (amount) => {
    const newWaterIntake = Math.max(0, waterIntake - amount);
    updateWaterIntake(newWaterIntake);
  };

  
  return { waterIntake, addWater, removeWater };
};
