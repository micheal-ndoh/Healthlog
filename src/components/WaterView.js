import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';
import { useWaterIntake } from '../(hooks)/useWaterIntake';
import SkiaWave from './SkiaWave';

const WaterView = () => {
  const { waterIntake, addWater, removeWater } = useWaterIntake();
  const dailyGoal = 3500;
  const percentage = (waterIntake / dailyGoal) * 100;

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.waterValue}>{waterIntake}ml</Text>
        <Text style={styles.waterGoal}>of daily goal {dailyGoal / 1000}L</Text>
      </View>
      <View style={styles.actionsContainer}>
        <TouchableOpacity onPress={() => addWater(250)} style={styles.actionButton}>
          <Ionicons name="add-circle-outline" size={32} color={COLORS.nearlyDarkBlue} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => removeWater(250)} style={styles.actionButton}>
          <Ionicons name="remove-circle-outline" size={32} color={COLORS.nearlyDarkBlue} />
        </TouchableOpacity>
      </View>
      <View style={styles.waveContainer}>
        <SkiaWave percentage={percentage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
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
  infoContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  waterValue: {
    fontSize: FONT_SIZES.display1,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.nearlyDarkBlue,
  },
  waterGoal: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.lightText,
    marginTop: 8,
  },
  actionsContainer: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginHorizontal: 16,
  },
  actionButton: {
    padding: 8,
  },
  waveContainer: {
    width: 60,
    height: 160,
    backgroundColor: '#E8EDFE',
    borderRadius: 80,
    overflow: 'hidden',
  },
  wave: {
    width: 60,
    aspectRatio: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
  },
});

export default WaterView;
