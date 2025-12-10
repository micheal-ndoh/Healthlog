import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../(constants)/theme';

const MediterraneanDietView = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Mediterranean diet</Text>
        <TouchableOpacity>
          <Text style={styles.details}>Details</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.caloriesInfo}>
          <View style={styles.calorieDetail}>
            <Text style={styles.calorieLabel}>Eaten</Text>
            <Text style={styles.calorieValue}>1127 kcal</Text>
          </View>
          <View style={styles.calorieDetail}>
            <Text style={styles.calorieLabel}>Burned</Text>
            <Text style={styles.calorieValue}>102 kcal</Text>
          </View>
        </View>
        <View style={styles.circularProgressContainer}>
          <AnimatedCircularProgress
            size={120}
            width={8}
            fill={75}
            tintColor={COLORS.primary}
            backgroundColor={COLORS.lightGrey}
            rotation={0}
            lineCap="round"
          >
            {() => (
              <View style={styles.progressTextContainer}>
                <Text style={styles.progressValue}>1503</Text>
                <Text style={styles.progressLabel}>kcal left</Text>
              </View>
            )}
          </AnimatedCircularProgress>
        </View>
      </View>
      <View style={styles.macrosContainer}>
        <View style={styles.macro}>
          <Text style={styles.macroLabel}>Carbs</Text>
          <View style={styles.macroBar}>
            <View style={[styles.macroFill, { width: '50%', backgroundColor: COLORS.secondary }]} />
          </View>
          <Text style={styles.macroValue}>12g left</Text>
        </View>
        <View style={styles.macro}>
          <Text style={styles.macroLabel}>Protein</Text>
          <View style={styles.macroBar}>
            <View style={[styles.macroFill, { width: '70%', backgroundColor: COLORS.secondary }]} />
          </View>
          <Text style={styles.macroValue}>30g left</Text>
        </View>
        <View style={styles.macro}>
          <Text style={styles.macroLabel}>Fat</Text>
          <View style={styles.macroBar}>
            <View style={[styles.macroFill, { width: '40%', backgroundColor: COLORS.secondary }]} />
          </View>
          <Text style={styles.macroValue}>10g left</Text>
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
    fontSize: FONT_SIZES.h6,
    fontWeight: FONT_WEIGHTS.bold,
  },
  details: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.primary,
    fontWeight: FONT_WEIGHTS.bold,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  caloriesInfo: {
    flex: 1,
  },
  calorieDetail: {
    marginBottom: 8,
  },
  calorieLabel: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.grey,
  },
  calorieValue: {
    fontSize: FONT_SIZES.h6,
    fontWeight: FONT_WEIGHTS.bold,
  },
  circularProgressContainer: {
    marginLeft: 16,
  },
  progressTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressValue: {
    fontSize: FONT_SIZES.h5,
    fontWeight: FONT_WEIGHTS.bold,
  },
  progressLabel: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.grey,
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  macro: {
    flex: 1,
    alignItems: 'center',
  },
  macroLabel: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.grey,
  },
  macroBar: {
    height: 4,
    width: '80%',
    backgroundColor: COLORS.lightGrey,
    borderRadius: 2,
    marginTop: 4,
    marginBottom: 4,
  },
  macroFill: {
    height: 4,
    borderRadius: 2,
  },
  macroValue: {
    fontSize: FONT_SIZES.body2,
    color: COLORS.grey,
  },
});

export default MediterraneanDietView;
