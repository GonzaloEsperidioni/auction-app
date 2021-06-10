import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuctionContext from './context/AutionContext';

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen
} from './screens';
import Tabs from './tabs';

const Stack = createStackNavigator();

export default () => {
  const { authenticated } = useContext(AuctionContext);
  // const authenticated = true;
  return (
    <Stack.Navigator>
      {authenticated ? (
        <>
          <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
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
  );
};
