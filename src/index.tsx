import React, { useContext } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AuctionContext from './context/AutionContext';

import {
  HomeScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  FinalizarRegistroScreen,
  PinRecuperarContrasena
} from './screens';
import Tabs from './tabs';
import ItemDetailScreen from './screens/ItemDetailScreen';
import CreateItemScreen from './screens/CreateItemScreen';

import NavBar from './components/NavBar';

const Stack = createStackNavigator();

export default () => {
  const { authenticated } = useContext(AuctionContext);
  // const authenticated = true;
  return (
    <Stack.Navigator
      screenOptions={{ header: (props) => <NavBar {...props} /> }}
    >
      {authenticated ? (
        <>
          <Stack.Screen
            name="Tabs"
            options={{ headerShown: false }}
            component={Tabs}
          />
          <Stack.Screen name="ItemDetail" component={ItemDetailScreen} />
          <Stack.Screen name="CreateItem" component={CreateItemScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen
            name="FinalizarRegistro"
            component={FinalizarRegistroScreen}
          />
          <Stack.Screen
            name="ForgotPassword"
            component={ForgotPasswordScreen}
          />
          <Stack.Screen
            name="PinRecuperar"
            component={PinRecuperarContrasena}
          />
        </>
      )}
    </Stack.Navigator>
  );
};
