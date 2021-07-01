import React, { memo, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { theme } from '../core/theme';
import { Navigation } from '../types';
import { Paragraph, Dialog, Portal } from 'react-native-paper';
import OTPTextInput from 'react-native-otp-textinput';
import {
  emailValidator,
  passwordValidator,
  nameValidator
} from '../core/utils';

type Props = {
  navigation: Navigation;
};

const FinalizarRegistroScreen = ({ navigation }: Props) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const [visible, setVisible] = React.useState(false);

  const showDialog = () => setVisible(true);

  const hideDialog = () => {
    navigation.navigate('Home');
    setVisible(false);
  };

  const _onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    showDialog();
  };

  return (
    <View style={styles.container}>
      <Header>Finalizar Registro</Header>

      <TextInput
        label="Email"
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
        label="Contraseña"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View>
        <OTPTextInput />
      </View>
      <Button mode="contained" onPress={_onSignUpPressed} style={styles.button}>
        Registrarse
      </Button>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Te has registrado correctamente!</Dialog.Title>
          <Dialog.Content>
            <Paragraph>
              Tus datos estan siendo validados, una vez finalizado este proceso,
              recibiras un email para continuar con el completado de tu cuenta.
            </Paragraph>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>Cerrar</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <View style={styles.row}>
        <Text style={styles.label}>Ya enviaste tus datos? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('FinalizarRegistro')}
        >
          <Text style={styles.link}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary
  },
  button: {
    marginTop: 24
  },
  row: {
    flexDirection: 'row',
    marginTop: 4
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary
  },
  container: {
    padding: 24
  }
});

export default memo(FinalizarRegistroScreen);
