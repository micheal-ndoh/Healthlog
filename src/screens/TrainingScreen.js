import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';
import AreaListView from '../components/AreaListView';
import RunningView from '../components/RunningView';
import TopBar from '../components/TopBar';
import WorkoutView from '../components/WorkoutView';

const TrainingScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Text style={styles.title}>Your Program</Text>
          <TouchableOpacity>
            <Text style={styles.details}>Details</Text>
          </TouchableOpacity>
        </View>
        <WorkoutView />
        <RunningView />
        <View style={styles.header}>
          <Text style={styles.title}>Area of Focus</Text>
          <TouchableOpacity>
            <Text style={styles.details}>more</Text>
          </TouchableOpacity>
        </View>
        <AreaListView />
      </ScrollView>
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
    fontSize: FONT_SIZES.h6,
    fontWeight: FONT_WEIGHTS.bold,
  },
  details: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
});

export default TrainingScreen;
