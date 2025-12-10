import { ScrollView, StyleSheet, View } from 'react-native';
import { COLORS } from '../(constants)/theme';
import BodyMeasurementView from '../components/BodyMeasurementView';
import MealsListView from '../components/MealsListView';
import MediterraneanDietView from '../components/MediterraneanDietView';
import TopBar from '../components/TopBar';

const MyDiaryScreen = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <ScrollView style={styles.scrollView}>
        <MediterraneanDietView />
        <MealsListView />
        <BodyMeasurementView />
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
});

export default MyDiaryScreen;
