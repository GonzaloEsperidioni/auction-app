import React, { memo, useContext, useState } from 'react';
import { Navigation } from '../types';

import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import ScreenWrapper from '../components/ScreenWrapper';
import NavBar from '../components/NavBar';
import AutionContext from '../context/AutionContext';
import CatalogCard from '../components/CatalogCard';
type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { authenticated, setAuthenticated, catalogos } =
    useContext(AutionContext);

  const [hint, setHint] = useState('');
  const filteredItems = catalogos;
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
              {...i}
              onPress={() =>
                navigation.push('CatalogScreen', {
                  catalogId: i.id
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
