import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuctionContext from './context/AutionContext';
import NavBar from './components/NavBar';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard
} from './screens';

const Stack = createStackNavigator();

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
              component={Dashboard}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
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
