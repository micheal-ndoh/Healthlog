import React from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../(constants)/theme';
import AnimatedAppBar from '../components/AnimatedAppBar';
import BodyMeasurementView from '../components/BodyMeasurementView';
import GlassView from '../components/GlassView';
import MealsListView from '../components/MealsListView';
import MediterraneanDietView from '../components/MediterraneanDietView';
import TitleView from '../components/TitleView';
import WaterView from '../components/WaterView';

const MyDiaryScreen = () => {
  const scrollY = new Animated.Value(0);

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={16}
        ListHeaderComponent={
          <>
            <View style={{ height: 88 }} />{/* Add padding for app bar */}
            <TitleView title="Mediterranean diet" subtitle="Details" />
            <MediterraneanDietView />
            <TitleView title="Meals today" subtitle="Customize" />
            <MealsListView />
            <TitleView title="Body measurement" subtitle="Today" />
            <BodyMeasurementView />
            <TitleView title="Water" subtitle="Aqua SmartBottle" />
            <WaterView />
            <GlassView />
          </>
        }
        data={[]}
        renderItem={null}
        keyExtractor={(item, index) => index.toString()}
      />
      <AnimatedAppBar scrollY={scrollY} />
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
