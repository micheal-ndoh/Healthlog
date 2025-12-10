import { ThemedText } from '@/components/themed-text';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import * as icons from '../../src/(constants)/icons';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../src/(constants)/theme';

const GlassView = () => (
  <View style={{ alignItems: 'center', paddingVertical: 20 }}>
    <Image source={icons.glass} style={{ width: 100, height: 100, resizeMode: 'contain' }} />
    <ThemedText style={{ marginTop: 10, fontWeight: 'bold' }}>8 glasses</ThemedText>
  </View>
);

const MealsListView = () => (
  <View style={styles.card}>
    <ThemedText style={styles.cardTitle}>Meals Today</ThemedText>
    <View style={styles.mealItem}>
      <Image source={icons.breakfast} style={styles.mealIcon} />
      <View>
        <ThemedText>Breakfast</ThemedText>
        <ThemedText style={styles.mealInfo}>525 kcal</ThemedText>
      </View>
    </View>
    <View style={styles.mealItem}>
      <Image source={icons.lunch} style={styles.mealIcon} />
      <View>
        <ThemedText>Lunch</ThemedText>
        <ThemedText style={styles.mealInfo}>602 kcal</ThemedText>
      </View>
    </View>
  </View>
);

const BodyMeasurementView = () => (
  <View style={styles.card}>
    <ThemedText style={styles.cardTitle}>Body Measurement</ThemedText>
    <View style={styles.measurementContainer}>
      <View style={styles.measurementBox}>
        <ThemedText style={styles.measurementValue}>175cm</ThemedText>
        <ThemedText style={styles.measurementLabel}>Height</ThemedText>
      </View>
      <View style={styles.measurementBox}>
        <ThemedText style={styles.measurementValue}>75kg</ThemedText>
        <ThemedText style={styles.measurementLabel}>Weight</ThemedText>
      </View>
    </View>
  </View>
);

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerText}>HealthLog</ThemedText>
      </View>
      <GlassView />
      <MealsListView />
      <BodyMeasurementView />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: COLORS.white,
  },
  headerText: {
    fontSize: FONT_SIZES.display1,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
  },
  card: {
    backgroundColor: COLORS.white,
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  cardTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
    marginBottom: 10,
  },
  mealItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  mealIcon: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  mealInfo: {
    color: COLORS.grey,
  },
  measurementContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  measurementBox: {
    alignItems: 'center',
  },
  measurementValue: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
  },
  measurementLabel: {
    color: COLORS.grey,
    marginTop: 4,
  },
});
