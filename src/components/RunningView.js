import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const RunningView = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/fitness_app/back.png')} style={styles.backgroundImage} />
      <Image source={require('../../../assets/fitness_app/runner.png')} style={styles.runnerImage} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>You're doing great!</Text>
        <Text style={styles.subtitle}>Keep it up and stick to your plan!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    height: 90,
    borderRadius: 16,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.grey,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
    width: '100%',
    height: '100%',
  },
  runnerImage: {
    position: 'absolute',
    top: -20,
    left: 0,
    width: 110,
    height: 110,
  },
  textContainer: {
    marginLeft: 120,
    justifyContent: 'center',
    height: '100%',
  },
  title: {
    fontSize: FONT_SIZES.body1,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.nearlyDarkBlue,
  },
  subtitle: {
    fontSize: FONT_SIZES.caption,
    color: COLORS.lightText,
    marginTop: 4,
  },
});

export default RunningView;
