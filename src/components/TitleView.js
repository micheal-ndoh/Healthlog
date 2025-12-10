import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const TitleView = ({ title, subtitle }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  title: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold,
    color: COLORS.darkerText,
  },
  subtitle: {
    fontSize: FONT_SIZES.subtitle,
    color: COLORS.darkText,
  },
});

export default TitleView;
