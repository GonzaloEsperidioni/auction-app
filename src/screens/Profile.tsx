import React, { memo, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Container from '../components/Container';
import { Navigation } from '../types';
import NavBar from '../components/NavBar';
import AutionContext from '../context/AutionContext';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { Avatar, Title, Text } from 'react-native-paper';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);

  return (
    <>
      <NavBar title="Perfil"></NavBar>
      <View style={styles.background}>
        <KeyboardAvoidingView style={styles.container} behavior="padding">
          <View style={styles.header}>
            <Avatar.Text size={124} label="JP" />
            <View style={styles.headerText}>
              <Title style={styles.title}>Nombre</Title>
              <Text style={styles.text}>Categoria</Text>
              <Text style={styles.text}>Telefono</Text>
              <Text style={styles.text}>Direccion</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
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
