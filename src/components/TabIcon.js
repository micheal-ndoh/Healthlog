import { Image, StyleSheet, Text, View } from 'react-native';
import { COLORS } from '../(constants)/theme';

const TabIcon = ({ focused, icon, selectedIcon, label }) => {
  return (
    <View style={styles.container}>
      <Image
        source={focused ? selectedIcon : icon}
        resizeMode="contain"
        style={styles.icon}
      />
      <Text style={[styles.label, { color: focused ? COLORS.nearlyDarkBlue : COLORS.grey }]}>
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  label: {
    fontSize: 12,
    marginTop: 4,
  },
});

export default TabIcon;
