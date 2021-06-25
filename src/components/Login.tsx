import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Image } from 'react-native';

const Login = ({ _onLoginPressed }) => {
  return (
    <TouchableOpacity onPress={_onLoginPressed}>
      <Image source={require('../assets/login_enter.png')} />
    </TouchableOpacity>
  );
};

export default Login;
