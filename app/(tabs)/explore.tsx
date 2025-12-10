import { ThemedText } from '@/components/themed-text';
import { FlatList, Image, ScrollView, StyleSheet, TextInput, View } from 'react-native';
import * as icons from '../../src/(constants)/icons';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../src/(constants)/theme';

const categories = [
  { name: 'Workouts', icon: icons.runner },
  { name: 'Meals', icon: icons.lunch },
  { name: 'Plans', icon: icons.tab_4s },
];

const popularWorkouts = [
  { title: 'Full Body HIIT', image: icons.area1 },
  { title: 'Yoga for Beginners', image: icons.area2 },
  { title: 'Advanced Abs', image: icons.area3 },
];

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <ThemedText style={styles.headerText}>Explore</ThemedText>
        <View style={styles.searchBar}>
          <TextInput placeholder="Search workouts, meals, or plans" style={styles.searchInput} />
        </View>
      </View>

      <View style={styles.content}>
        <ThemedText style={styles.sectionTitle}>Categories</ThemedText>
        <FlatList
          data={categories}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.categoryCard}>
              <Image source={item.icon} style={styles.categoryIcon} />
              <ThemedText>{item.name}</ThemedText>
            </View>
          )}
          keyExtractor={(item) => item.name}
        />

        <ThemedText style={styles.sectionTitle}>Popular Workouts</ThemedText>
        {popularWorkouts.map((item) => (
          <View key={item.title} style={styles.workoutCard}>
            <Image source={item.image} style={styles.workoutImage} />
            <ThemedText style={styles.workoutTitle}>{item.title}</ThemedText>
          </View>
        ))}
      </View>
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
  searchBar: {
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: COLORS.background,
    padding: 15,
    borderRadius: 10,
    fontSize: FONT_SIZES.body1,
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: FONT_SIZES.headline,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
    marginVertical: 20,
  },
  categoryCard: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryIcon: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  workoutCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  workoutImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  workoutTitle: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold as 'bold',
  },
});
