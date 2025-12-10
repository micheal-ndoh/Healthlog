import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Animated, Text as RNText, StyleSheet, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_FAMILY } from '../(constants)/theme';

const AnimatedAppBar = ({ scrollY }) => {
  const [date, setDate] = useState(new Date());

  const changeDate = (days) => {
    setDate(prevDate => {
      const newDate = new Date(prevDate);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    });
  };
  const topBarOpacity = scrollY.interpolate({
    inputRange: [0, 24],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  });

  const topBarTranslateY = scrollY.interpolate({
    inputRange: [0, 24],
    outputRange: [30, 0],
    extrapolate: 'clamp',
  });

  const titleFontSize = scrollY.interpolate({
    inputRange: [0, 24],
    outputRange: [28, 22],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { 
          opacity: topBarOpacity, 
          transform: [{ translateY: topBarTranslateY }],
          shadowOpacity: topBarOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 0.4],
          }),
        }
      ]}
    >
      <View style={styles.contentContainer}>
        <Animated.Text style={[styles.title, { fontSize: titleFontSize }]}>My Diary</Animated.Text>
        <View style={styles.dateContainer}>
          <TouchableOpacity onPress={() => changeDate(-1)}>
            <Ionicons name="chevron-back" size={24} color={COLORS.grey} />
          </TouchableOpacity>
          <Ionicons name="calendar-outline" size={18} color={COLORS.grey} />
          <RNText style={styles.dateText}>{date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</RNText>
          <TouchableOpacity onPress={() => changeDate(1)}>
            <Ionicons name="chevron-forward" size={24} color={COLORS.grey} />
          </TouchableOpacity>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: COLORS.white,
    borderBottomLeftRadius: 32,
    paddingTop: 40, // Adjust for status bar
    paddingBottom: 12,
    shadowColor: COLORS.grey,
    shadowOffset: { width: 1.1, height: 1.1 },
    shadowRadius: 10,
    elevation: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: FONT_FAMILY.workSans,
    fontWeight: '700',
    letterSpacing: 1.2,
    color: COLORS.darkerText,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateText: {
    fontFamily: FONT_FAMILY.roboto,
    fontSize: 18,
    letterSpacing: -0.2,
    color: COLORS.darkerText,
    marginLeft: 8,
  },
});

export default AnimatedAppBar;
