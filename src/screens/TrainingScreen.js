import React from 'react';
import { Animated, FlatList, StyleSheet, View } from 'react-native';
import { COLORS } from '../(constants)/theme';
import AreaListView from '../components/AreaListView';
import TitleView from '../components/TitleView';
import TrainingAnimatedAppBar from '../components/TrainingAnimatedAppBar';
import WorkoutView from '../components/WorkoutView';

const TrainingScreen = () => {
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
            <TitleView title="Your Program" subtitle="Details" />
            <WorkoutView />
            <TitleView title="Area of Focus" subtitle="more" />
          </>
        }
        data={[]}
        renderItem={null}
        keyExtractor={(item, index) => index.toString()}
        ListFooterComponent={<AreaListView />}
      />
      <TrainingAnimatedAppBar scrollY={scrollY} />
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

export default TrainingScreen;
