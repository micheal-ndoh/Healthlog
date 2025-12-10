import { BlurView } from 'expo-blur';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONT_SIZES } from '../(constants)/theme';

const GlassView = ({ children }) => {
  return (
    <View style={styles.container}>
      <BlurView
        style={styles.absolute}
        intensity={50}
        tint="light"
      />
      <View style={styles.contentContainer}>
        <Image source={require('../../../assets/fitness_app/glass.png')} style={styles.glassImage} />
        <Text style={styles.text}>Prepare your stomach for lunch with one or two glasses of water</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderRadius: 16,
    backgroundColor: 'rgba(215, 224, 249, 0.7)', // HexColor("#D7E0F9") with opacity
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  glassImage: {
    width: 80,
    height: 80,
    position: 'absolute',
    top: -28,
    left: -16,
  },
  text: {
    marginLeft: 68,
    fontSize: FONT_SIZES.subtitle,
    color: COLORS.nearlyDarkBlue,
    opacity: 0.6,
  },
  absolute: {
    ...StyleSheet.absoluteFillObject,
    borderRadius: 16,
  },
});

export default GlassView;
