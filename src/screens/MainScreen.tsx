import React, { memo, useContext } from 'react';
import { Navigation } from '../types';

import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Searchbar } from 'react-native-paper';
import ScreenWrapper from '../components/ScreenWrapper';
import NavBar from '../components/NavBar';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  return (
    <>
      <NavBar title="Auction"></NavBar>
      <Searchbar placeholder="Buscar articulo"></Searchbar>
      <ScreenWrapper contentContainerStyle={styles.main}>
        <ScrollView style={styles.main} contentContainerStyle={styles.content}>
          <Card style={styles.card} mode={'outlined'}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 2" />
          </Card>
          <Card style={styles.card} mode={'outlined'}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 2" />
          </Card>
          <Card style={styles.card} mode={'outlined'}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 2" />
          </Card>
          <Card style={styles.card} mode={'outlined'}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 2" />
          </Card>
          <Card style={styles.card} mode={'outlined'}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 2" />
          </Card>
          <Card style={styles.card} mode={'outlined'}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 2" />
          </Card>
        </ScrollView>
      </ScreenWrapper>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '120%',
    flex: 1,
    backgroundColor: 'red'
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
