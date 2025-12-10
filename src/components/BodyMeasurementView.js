import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const BodyMeasurementView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Body measurement</Text>
        <TouchableOpacity>
          <Text style={styles.today}>Today</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.measurements}>
        <View style={styles.measurementContainer}>
          <Text style={styles.measurementValue}>175cm</Text>
          <Text style={styles.measurementLabel}>Height</Text>
        </View>
        <View style={styles.measurementContainer}>
          <Text style={styles.measurementValue}>75kg</Text>
          <Text style={styles.measurementLabel}>Weight</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    margin: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold,
  },
  today: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.nearlyDarkBlue,
    fontWeight: FONT_WEIGHTS.bold,
  },
  measurements: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  measurementContainer: {
    alignItems: 'center',
  },
  measurementValue: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold,
  },
  measurementLabel: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.grey,
    marginTop: 4,
  },
});

export default BodyMeasurementView;
