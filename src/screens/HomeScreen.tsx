import React, { memo, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';
import { Navigation } from '../types';
import AutionContext from '../context/AutionContext';

type Props = {
  navigation: Navigation;
};

const HomeScreen = ({ navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);
  const login = () => {
    setAuthenticated(true);
  };
  return (
    <Background>
      <Logo />
      <Header>SubastApp</Header>

      <Paragraph>La mejor forma de subastar online.</Paragraph>
      <Button mode="contained" onPress={() => navigation.navigate('Login')}>
        Login
      </Button>
      <Button mode="outlined" onPress={() => navigation.navigate('Register')}>
        Registrarse
      </Button>
      <Button mode="text" onPress={login}>
        Ingresar como invitado
      </Button>
    </Background>
  );
};

export default memo(HomeScreen);
