import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES } from '../(constants)/theme';
import { useWorkouts } from '../(hooks)/useWorkouts';

const WorkoutView = () => {
  const { addWorkout, markWorkoutAsComplete } = useWorkouts();

  const workout = {
    title: 'Legs Toning and Glutes Workout at Home',
    duration: '68 min',
  };

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Next workout</Text>
        <Text style={styles.workoutTitle}>{workout.title}</Text>
        <View style={styles.durationContainer}>
          <Ionicons name="timer-outline" size={16} color={COLORS.white} />
          <Text style={styles.duration}>{workout.duration}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => addWorkout(workout)} style={styles.addButton}>
        <Ionicons name="arrow-forward" size={24} color="#6F56E8" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    padding: 16,
    borderRadius: 16,
    backgroundColor: COLORS.nearlyDarkBlue, // Placeholder for gradient
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.white,
  },
  workoutTitle: {
    fontSize: FONT_SIZES.title,
    color: COLORS.white,
    marginTop: 8,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  duration: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.white,
    marginLeft: 8,
  },
  addButton: {
    backgroundColor: COLORS.white,
    borderRadius: 22,
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
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

export default WorkoutView;
