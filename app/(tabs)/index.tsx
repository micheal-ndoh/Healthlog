import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { ScrollView, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { FONT_SIZES, FONT_WEIGHTS } from '../../src/(constants)/theme';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container as ViewStyle}>
      <ThemedView style={styles.header as ViewStyle}>
        <ThemedText style={styles.headerText as TextStyle}>Good Morning</ThemedText>
        <ThemedText style={styles.subHeaderText as TextStyle}>Track your health and fitness</ThemedText>
      </ThemedView>

      <View style={styles.card as ViewStyle}>
        <ThemedText style={styles.cardTitle as TextStyle}>Water Intake</ThemedText>
        <ThemedText>8 glasses</ThemedText>
      </View>

      <View style={styles.card as ViewStyle}>
        <ThemedText style={styles.cardTitle as TextStyle}>Meals</ThemedText>
        <ThemedText>3 meals logged</ThemedText>
      </View>

      <View style={styles.card as ViewStyle}>
        <ThemedText style={styles.cardTitle as TextStyle}>Workouts</ThemedText>
        <ThemedText>1 workout completed</ThemedText>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: FONT_SIZES.display1,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
  },
  subHeaderText: {
    fontSize: FONT_SIZES.body1,
    color: '#666',
    marginTop: 4,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
    marginBottom: 10,
  },
});
