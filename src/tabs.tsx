import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { Image, View } from 'react-native';
import ItemsScreen from './screens/ItemsScreen';
import {
  ProfileScreen,
  Dashboard,
  MainScreen,
  PaymentMethodsScreen,
  CreatePaymentMethod,
  UpdateProfile
} from './screens';
import CatalogScreen from './screens/CatalogScreen';
import ItemScreen from './screens/ItemScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import NavBar from './components/NavBar';
const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Catalog = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: (props) => <NavBar {...props} /> }}
    >
      <>
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="CatalogScreen" component={CatalogScreen} />
        <Stack.Screen name="ItemScreen" component={ItemScreen} />
      </>
    </Stack.Navigator>
  );
};

const Profile = () => {
  return (
    <Stack.Navigator
      screenOptions={{ header: (props) => <NavBar {...props} /> }}
    >
      <>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen
          name="PaymentMethodsScreen"
          component={PaymentMethodsScreen}
        />
        <Stack.Screen
          name="CreatePaymentMethod"
          component={CreatePaymentMethod}
        />
        <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      </>
    </Stack.Navigator>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator initialRouteName="Auction">
      <Tab.Screen
        name="Auction"
        component={Catalog}
        options={{
          tabBarLabel: 'Catálogo',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      <Tab.Screen
        name="Items"
        component={ItemsScreen}
        options={{
          tabBarLabel: 'Mis Artículos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
      {/* <Tab.Screen
        name="Tickets"
        component={Dashboard}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      /> */}

      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Mi Perfil',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
