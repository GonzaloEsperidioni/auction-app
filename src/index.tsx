import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AuctionContext from './context/AutionContext';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Profile,
  Dashboard,
  MainScreen
} from './screens';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainAppNavigation = () => (
  <Tab.Navigator initialRouteName="Auction">
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
export default () => {
  const { authenticated } = useContext(AuctionContext);
  // const authenticated = true;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {authenticated ? (
          <>
            <Stack.Screen
              name="Dashboard"
              options={{ headerShown: false }}
              component={MainAppNavigation}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={HomeScreen}
            />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPasswordScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
