import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icons from '../(constants)/icons';
import { COLORS } from '../(constants)/theme';
import TabIcon from '../components/TabIcon';
import DietScreen from '../screens/DietScreen';
import MyDiaryScreen from '../screens/MyDiaryScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TrainingScreen from '../screens/TrainingScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 0,
          height: 60,
        },
      }}
    >
      <Tab.Screen
        name="My Diary"
        component={MyDiaryScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.tab_1}
              selectedIcon={icons.tab_1s}
              label="My Diary"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Training"
        component={TrainingScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.tab_2}
              selectedIcon={icons.tab_2s}
              label="Training"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Diet"
        component={DietScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.tab_3}
              selectedIcon={icons.tab_3s}
              label="Diet"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={icons.tab_4}
              selectedIcon={icons.tab_4s}
              label="Profile"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
