import React, { memo, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Container from '../components/Container';
import CatalogItem from '../components/CatalogItem';
import { Navigation } from '../types';
import NavBar from '../components/NavBar';
import AutionContext from '../context/AutionContext';
import Tabs from '../tabs';
import { ScrollView, StyleSheet, View } from 'react-native';
import { List, TextInput, Button } from 'react-native-paper';

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
        <View style={styles.row}>
          <TextInput style={styles.m} label="Monto" />
          <Button style={styles.m} mode="contained">
            Pujar
          </Button>
        </View>
      </Container>
    </>
  );
};
const styles = StyleSheet.create({
  main: {
    width: '100%'
  },
  m: {
    flex: 0.47
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});

export default memo(Dashboard);
