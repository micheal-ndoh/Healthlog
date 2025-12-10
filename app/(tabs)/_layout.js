import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';
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
        name="my-diary"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/fitness_app/tab_1s.png') : require('../../assets/fitness_app/tab_1.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/fitness_app/tab_2s.png') : require('../../assets/fitness_app/tab_2.png')}
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
                <Image source={require('../../assets/fitness_app/plus.png')} style={{ width: 30, height: 30 }} />
              </View>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="bottom_tab_3"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/fitness_app/tab_3s.png') : require('../../assets/fitness_app/tab_3.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bottom_tab_4"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? require('../../assets/fitness_app/tab_4s.png') : require('../../assets/fitness_app/tab_4.png')}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
