import React, { memo, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Container from '../components/Container';
import CatalogItem from '../components/CatalogItem';
import { Navigation } from '../types';
import NavBar from '../components/NavBar';
import AutionContext from '../context/AutionContext';
import Tabs from '../tabs';
import { ScrollView, StyleSheet } from 'react-native';
import { List } from 'react-native-paper';

type Props = {
  navigation: Navigation;
  route: any;
};

const Dashboard = ({ route, navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);
  const { itemId, name } = route.params;

  const itemsDeCatalogo = [
    {
      id: 1,
      name: 'Escritorio'
    },
    {
      id: 2,
      name: 'Mesita de luz'
    },
    {
      id: 3,
      name: 'Mesa cocina'
    }
  ];
  return (
    <>
      <Container>
        <Header>Catalogo nro {itemId}</Header>
        <Header>{name}</Header>
        <ScrollView style={styles.main}>
          <List.Section>
            <List.Subheader>Lista de articulos</List.Subheader>
            {itemsDeCatalogo.map((item) => {
              return (
                <List.Item
                  title={item.name}
                  onPress={() => {
                    navigation.push('ItemScreen', item);
                  }}
                  left={() => <List.Icon icon="folder" />}
                />
              );
            })}
          </List.Section>
        </ScrollView>
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