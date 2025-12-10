import { StyleSheet, Text, View } from 'react-native';

const DietScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Diet Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DietScreen;
