import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { COLORS } from '../(constants)/theme';
import MyDiaryScreen from '../screens/MyDiaryScreen';
import TrainingScreen from '../screens/TrainingScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.nearlyDarkBlue,
        tabBarInactiveTintColor: COLORS.grey,
        tabBarStyle: {
          backgroundColor: COLORS.white,
        },
      }}
    >
      <Tab.Screen name="My Diary" component={MyDiaryScreen} />
      <Tab.Screen name="Training" component={TrainingScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
