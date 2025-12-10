import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
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
    width: 130,
    marginHorizontal: 8,
  },
  gradient: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
  },
  image: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -10,
    left: -10,
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
    marginTop: 60,
  },
  meals: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.white,
    marginTop: 8,
  },
  kaclContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 'auto',
  },
  kaclValue: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.white,
  },
  kaclLabel: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.white,
    marginLeft: 4,
    marginBottom: 4,
  },
  addButton: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 4,
    shadowColor: COLORS.nearlyBlack,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});

export default MealCard;
