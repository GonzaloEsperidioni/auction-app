import React, { memo, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
<<<<<<< HEAD
=======
import Button from '../components/Button';
>>>>>>> df8e63c398a5bb5bf874c164590685899afb0b09
import Container from '../components/Container';
import CatalogItem from '../components/CatalogItem';
import { Navigation } from '../types';
import NavBar from '../components/NavBar';
import AutionContext from '../context/AutionContext';
import Tabs from '../tabs';
<<<<<<< HEAD
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, TextInput, Button } from 'react-native-paper';
=======
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';
>>>>>>> df8e63c398a5bb5bf874c164590685899afb0b09

type Props = {
  navigation: Navigation;
  route: any;
};

const Dashboard = ({ route, navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);
  const { id, name } = route.params;

  const itemsDeCatalogo = [1, 2, 3, 4, 5];
  return (
    <>
      <Container>
        <Header>Item nro {id}</Header>
        <Header>{name}</Header>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%'
  }
});

export default memo(Dashboard);
