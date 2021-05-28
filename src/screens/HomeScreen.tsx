import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => (
  <Background>
    <Logo />
    <Header>SubastApp</Header>

    <Paragraph>
      La mejor forma de subastar online.
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Registrarse
    </Button>
    <Button mode="text" onPress={() => navigation.navigate('LoginScreen')}>
      Ingresar como invitado
    </Button>
  </Background>
);

export default memo(HomeScreen);
