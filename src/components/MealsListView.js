import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { mealsData } from '../(constants)/mealsData';
import { useMeals } from '../(hooks)/useMeals';
import MealCard from './MealCard';

const MealsListView = () => {
  const { addMeal } = useMeals();

  const renderItem = ({ item }) => <MealCard meal={item} onAddMeal={addMeal} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={mealsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 220,
  },
});

export default MealsListView;
