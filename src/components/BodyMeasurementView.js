import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const BodyMeasurementView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.measurementContainer}>
        <Text style={styles.measurementValue}>175cm</Text>
        <Text style={styles.measurementLabel}>Height</Text>
      </View>
      <View style={styles.measurementContainer}>
        <Text style={styles.measurementValue}>75kg</Text>
        <Text style={styles.measurementLabel}>Weight</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: COLORS.white,
    borderRadius: 16,
    margin: 16,
  },
  measurementContainer: {
    alignItems: 'center',
  },
  measurementValue: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.darkerText,
  },
  measurementLabel: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.lightText,
    marginTop: 8,
  },
});

export default BodyMeasurementView;
