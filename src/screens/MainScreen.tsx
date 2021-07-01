import React, { memo, useContext, useState } from 'react';
import { Navigation } from '../types';

import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import ScreenWrapper from '../components/ScreenWrapper';
import NavBar from '../components/NavBar';
import CatalogCard from '../components/CatalogCard';
type Props = {
  navigation: Navigation;
};

const items = [
  {
    name: 'Arte',
    id: 1
  },
  {
    name: 'Vajillas inglesas',
    id: 2
  },
  {
    name: 'Muebles premium',
    id: 3
  },
  {
    name: 'Arte',
    id: 4
  },
  {
    name: 'Vajillas inglesas',
    id: 5
  },
  {
    name: 'Muebles premium',
    id: 6
  }
];

const Dashboard = ({ navigation }: Props) => {
  const [hint, setHint] = useState('');
  const filteredItems = items.filter((i) => !i.name.indexOf(hint));
  return (
    <>
      <Searchbar
        value={hint}
        onChangeText={setHint}
        placeholder="Buscar articulo"
      ></Searchbar>
      <ScrollView contentContainerStyle={styles.content}>
        {filteredItems &&
          filteredItems.map((i) => (
            <CatalogCard
              key={i.id}
              onPress={() =>
                navigation.push('CatalogScreen', {
                  itemId: i.id,
                  name: i.name
                })
              }
            ></CatalogCard>
          ))}
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '120%',
    flex: 1
  },
  content: {
    // flex: 1,
    // width: '100%',
    flexGrow: 1,
    // height: '100%',
    // flexDirection: 'row',
    // flexWrap: 'wrap',
    padding: 12
    // paddingBottom: 0
  }
});

export default memo(Dashboard);
