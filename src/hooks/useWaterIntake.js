import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const WATER_INTAKE_KEY = 'water_intake';

export const useWaterIntake = () => {
  const [waterIntake, setWaterIntake] = useState(0);

  useEffect(() => {
    const loadWaterIntake = async () => {
      try {
        const storedWaterIntake = await AsyncStorage.getItem(WATER_INTAKE_KEY);
        if (storedWaterIntake !== null) {
          setWaterIntake(JSON.parse(storedWaterIntake));
        }
      } catch (error) {
        console.error('Failed to load water intake from storage', error);
      }
    };

    loadWaterIntake();
  }, []);

  const addWater = async (amount) => {
    try {
      const newWaterIntake = waterIntake + amount;
      setWaterIntake(newWaterIntake);
      await AsyncStorage.setItem(WATER_INTAKE_KEY, JSON.stringify(newWaterIntake));
    } catch (error) {
      console.error('Failed to save water intake to storage', error);
    }
  };

  const removeWater = async (amount) => {
    try {
      const newWaterIntake = Math.max(0, waterIntake - amount);
      setWaterIntake(newWaterIntake);
      await AsyncStorage.setItem(WATER_INTAKE_KEY, JSON.stringify(newWaterIntake));
    } catch (error) {
      console.error('Failed to save water intake to storage', error);
    }
  };

  return { waterIntake, addWater, removeWater };
};
