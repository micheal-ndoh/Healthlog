import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { mealsData } from '../(constants)/mealsData';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';
import { useMeals } from '../(hooks)/useMeals';
import MealCard from './MealCard';

const MealsListView = () => {
  const { addMeal } = useMeals();

  const renderItem = ({ item }) => <MealCard meal={item} onAddMeal={addMeal} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Meals today</Text>
        <TouchableOpacity>
          <Text style={styles.customize}>Customize</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={mealsData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  title: {
    fontSize: FONT_SIZES.h6,
    fontWeight: FONT_WEIGHTS.bold,
  },
  customize: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
});

export default MealsListView;
