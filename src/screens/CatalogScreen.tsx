import React, { memo, useContext, useEffect, useState } from 'react';
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
import { ScrollView, View } from 'react-native';
import { List } from 'react-native-paper';
import client from '../client/client';
import ItemCard from '../components/ItemCard';
type Props = {
  navigation: Navigation;
  route: any;
};

const Dashboard = ({ route, navigation }: Props) => {
  const { authenticated, setAuthenticated, catalogos } =
    useContext(AutionContext);
  const { catalogId, name } = route.params;
  const [itemsDeCatalogo, setItemsDeCatalogo] = useState([]);
  const catalogo = catalogos.find((ca) => ca.id === catalogId);
  return (
    <>
      <Header>Catalogo nro {catalogo.id}</Header>
      <View style={{ flex: 1 }}>
        <ScrollView>
          {catalogo &&
            catalogo.items.map((item) => (
              <ItemCard
                {...item}
                onPress={() => {
                  navigation.push('ItemScreen', { item });
                }}
              ></ItemCard>
            ))}
        </ScrollView>
      </View>
    </>
  );
};

export default memo(Dashboard);
