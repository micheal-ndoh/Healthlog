import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const MealCard = ({ meal, onAddMeal }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[meal.startColor, meal.endColor]}
        style={styles.gradient}
      >
        <Image source={meal.image} style={styles.image} />
        <Text style={styles.title}>{meal.title}</Text>
        <Text style={styles.meals}>{meal.meals.join('\n')}</Text>
        {meal.kacl !== 0 && (
          <View style={styles.kaclContainer}>
            {meal.kacl !== 0 ? (
              <>
                <Text style={styles.kaclValue}>{meal.kacl}</Text>
                <Text style={styles.kaclLabel}>kcal</Text>
              </>
            ) : (
              <TouchableOpacity onPress={() => onAddMeal(meal)} style={styles.addButton}>
                <Ionicons name="add" size={24} color={meal.endColor} />
              </TouchableOpacity>
            )}
          </View>
        )}
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    marginHorizontal: 8,
  },
  gradient: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'space-between',
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    marginTop: 8,
  },
  meals: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.white,
    marginTop: 4,
  },
  kaclContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginTop: 8,
  },
  kaclValue: {
    fontSize: FONT_SIZES.h5,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
  },
  kaclLabel: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.white,
    marginLeft: 4,
  },
  addButton: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 8,
    alignSelf: 'flex-end',
    marginTop: 8,
  },
});

export default MealCard;
