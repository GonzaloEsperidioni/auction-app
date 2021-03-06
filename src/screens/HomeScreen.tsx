import React, { memo, useContext, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import AutionContext from '../context/AutionContext';
import Login from '../components/Login';

type Props = {
  navigation: Navigation;
};

const LoginScreen = ({ navigation }: Props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });
  const { setAuthenticated, setUser } = useContext(AutionContext);

  const getRol = (email) => {
    if (email.includes('platino')) return 'platino';
    if (email.includes('oro')) return 'oro';
    if (email.includes('plata')) return 'plata';
    if (email.includes('especial')) return 'especial';
    return 'comun';
  };
  const _onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setUser({
      name: 'Gonzalo Iglesias',
      phoneNumber: '1138252190',
      address: 'Gregorio de Laferrere 1115',
      email: email.value,
      rol: getRol(email.value)
    });
    setAuthenticated(true);
  };

  return (
    <Background>
      <Logo />
      <TextInput
        label="Ingrese su email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Ingrese su contrase??a"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />

      <Button mode="contained" onPress={_onLoginPressed}>
        INGRESAR
      </Button>

      <View style={styles.forgotPassword}>
        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.label}>Recuperar contrase??a</Text>
        </TouchableOpacity>
      </View>

      <Button
        mode="contained"
        color={theme.colors.secondary}
        onPress={() => navigation.navigate('Register')}
      >
        Registrarse
      </Button>

      <Button
        mode="contained"
        color={theme.colors.secondary}
        onPress={() => {
          setUser({
            rol: 'invitado'
          });
          setAuthenticated(true);
        }}
      >
        Ingresar como invitado
      </Button>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 24
  },
  row: {
    flexDirection: 'row',
    marginTop: 4
  },
  label: {
    color: theme.colors.secondary
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary
  }
});

export default memo(LoginScreen);
