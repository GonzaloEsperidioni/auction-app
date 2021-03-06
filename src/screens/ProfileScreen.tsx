import React, { memo, useContext, useState, useEffect } from 'react';
import Button from '../components/Button';
import { Navigation } from '../types';
import AutionContext from '../context/AutionContext';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Avatar, Title, Text } from 'react-native-paper';

type Props = {
  navigation: Navigation;
  route: any;
};

const Dashboard = ({ navigation, route }: Props) => {
  const { authenticated, setAuthenticated, user } = useContext(AutionContext);

  const profileData = user;

  return (
    <>
      <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.header}>
            <Avatar.Text size={124} label="JP" />
            <View style={styles.headerText}>
              <Title style={styles.title}>{profileData.name}</Title>
              <Text style={styles.text}>{profileData.rol}</Text>
              <Text style={styles.text}>{profileData.phoneNumber}</Text>
              <Text style={styles.text}>{profileData.address}</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
        <Button mode="outlined">Historial</Button>
        <Button
          mode="outlined"
          onPress={() => {
            navigation.push('PaymentMethodsScreen');
          }}
        >
          Métodos de Pago
        </Button>
        <Button
          mode="outlined"
          onPress={() => {
            navigation.push('UpdateProfile', { profileData });
          }}
        >
          Editar Perfil
        </Button>
        <Button
          mode="outlined"
          onPress={() => {
            setAuthenticated(false);
          }}
        >
          Cerrar Sesion
        </Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%'
  },
  header: {
    flex: 1,
    flexDirection: 'row'
  },
  headerText: {
    flex: 1,
    paddingLeft: 24
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%'
  },
  title: {
    marginBottom: 10
  },
  text: {
    marginBottom: 12
  }
});

export default memo(Dashboard);
