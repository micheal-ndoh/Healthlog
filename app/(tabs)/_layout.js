import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';
import icons from '../../src/(constants)/icons';
import { COLORS } from '../../src/(constants)/theme';

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: COLORS.white,
          borderTopWidth: 0,
          elevation: 0,
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.tab_1s : icons.tab_1}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.tab_2s : icons.tab_2}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="add"
        options={{
          tabBarButton: () => (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <View
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 30,
                  backgroundColor: COLORS.nearlyDarkBlue,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Ionicons name="add" size={32} color={COLORS.white} />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="my-diary"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.tab_3s : icons.tab_3}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? icons.tab_4s : icons.tab_4}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
