import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';
import AreaListView from '../components/AreaListView';
import RunningView from '../components/RunningView';
import TopBar from '../components/TopBar';
import WorkoutView from '../components/WorkoutView';

const listViews = [
  {
    component: (
      <View style={styles.header}>
        <Text style={styles.title}>Your Program</Text>
        <TouchableOpacity>
          <Text style={styles.details}>Details</Text>
        </TouchableOpacity>
      </View>
    ),
    id: 'program',
  },
  { component: <WorkoutView />, id: 'workout' },
  { component: <RunningView />, id: 'running' },
  {
    component: (
      <View style={styles.header}>
        <Text style={styles.title}>Area of Focus</Text>
        <TouchableOpacity>
          <Text style={styles.details}>more</Text>
        </TouchableOpacity>
      </View>
    ),
    id: 'focus',
  },
  { component: <AreaListView />, id: 'area' },
];

const TrainingScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <FlatList
        data={listViews}
        renderItem={({ item }) => item.component}
        keyExtractor={(item) => item.id}
        style={styles.scrollView}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 16,
  },
  title: {
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold,
  },
  details: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.nearlyDarkBlue,
    fontWeight: FONT_WEIGHTS.bold,
  },
});

export default TrainingScreen;
