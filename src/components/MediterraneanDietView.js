import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const MediterraneanDietView = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mediterranean Diet</Text>
      <Text style={styles.description}>
        A heart-healthy eating plan that includes fruits, vegetables, whole grains, and healthy fats.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    margin: 16,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.darkerText,
  },
  description: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.lightText,
    marginTop: 8,
  },
});

export default MediterraneanDietView;
