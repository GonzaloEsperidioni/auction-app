import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View } from 'react-native';
import ItemsScreen from './screens/ItemsScreen';
import { Profile, Dashboard, MainScreen } from './screens';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const Tabs = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Dashboard">
      <Tab.Screen
        name="Items"
        children={() => <ItemsScreen navigation={navigation} />}
      />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen
        name="Tickets"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Auction"
        component={MainScreen}
        options={{
          tabBarLabel: 'Auction',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
