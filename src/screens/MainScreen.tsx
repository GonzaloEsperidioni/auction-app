import React, { memo, useContext, useState } from 'react';
import { Navigation } from '../types';

import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import ScreenWrapper from '../components/ScreenWrapper';
import NavBar from '../components/NavBar';

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
  }
];

const Dashboard = ({ navigation }: Props) => {
  const [hint, setHint] = useState('');
  const filteredItems = items.filter((i) => !i.name.indexOf(hint));
  return (
    <>
      <NavBar title="Auction"></NavBar>
      <Searchbar
        value={hint}
        onChangeText={setHint}
        placeholder="Buscar articulo"
      ></Searchbar>
      <ScreenWrapper contentContainerStyle={styles.main}>
        <ScrollView style={styles.main} contentContainerStyle={styles.content}>
          {filteredItems &&
            filteredItems.map((i) => (
              <Card
                onPress={() =>
                  navigation.push('CatalogScreen', {
                    itemId: i.id,
                    name: i.name
                  })
                }
                style={styles.card}
                mode={'outlined'}
              >
                <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
                <Card.Title title={i.name} />
              </Card>
            ))}
        </ScrollView>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '120%',
    flex: 1
  },
  content: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 12,
    paddingBottom: 0
  },
  card: {
    width: '48%',
    margin: '1%'
  }
});

export default memo(Dashboard);
