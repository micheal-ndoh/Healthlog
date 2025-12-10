import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import icons from '../(constants)/icons';
import { COLORS } from '../(constants)/theme';

const TopBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <TouchableOpacity>
          <Image source={icons.back} style={styles.arrow} />
        </TouchableOpacity>
        <Text style={styles.date}>15 May</Text>
        <TouchableOpacity>
          <Image source={icons.back} style={[styles.arrow, styles.nextArrow]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Image source={icons.bell} style={styles.bell} />
      </TouchableOpacity>
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
    backgroundColor: COLORS.white,
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    width: 24,
    height: 24,
    tintColor: COLORS.grey,
  },
  nextArrow: {
    transform: [{ rotate: '180deg' }],
  },
  date: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    color: COLORS.darkerText,
  },
  bell: {
    width: 24,
    height: 24,
  },
});

export default TopBar;
