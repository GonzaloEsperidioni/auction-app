import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { AutionProvider } from "./context/AutionContext";

import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ForgotPasswordScreen,
  Dashboard,
} from "./screens";

const Router = createStackNavigator(
  {
    HomeScreen,
    LoginScreen,
    RegisterScreen,
    ForgotPasswordScreen,
    Dashboard,
  },
  {
    initialRouteName: "HomeScreen",
    headerMode: "none",
  }
);

const Index = createAppContainer(Router);

export default () => {
  return (
    <AutionProvider>
      <Index />
    </AutionProvider>
  );
};
