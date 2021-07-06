import React, { memo, useState } from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { emailValidator } from '../core/utils';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import Button from '../components/Button';
import { Navigation } from '../types';
import OTPTextInput from 'react-native-otp-textinput';

type Props = {
  navigation: Navigation;
};

const PinRecuperarContrasena = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });

  const _onSendPressed = () => {
    navigation.navigate('Home');
  };

  return (
    <Background>
      <Logo />

      <Header>Recupera contrasena</Header>
      <Text>Ingrese el pin que recibio en su email</Text>
      <OTPTextInput />

      <TextInput label="Nueva contrasena" returnKeyType="done" />

      <Button mode="contained" onPress={_onSendPressed} style={styles.button}>
        Ingresar
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  back: {
    width: '100%',
    marginTop: 12
  },
  button: {
    marginTop: 12
  },
  label: {
    color: theme.colors.secondary,
    width: '100%'
  }
});

export default memo(PinRecuperarContrasena);
