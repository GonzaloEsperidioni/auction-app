import React from 'react';
import { Paragraph } from 'react-native-paper';
import Header from '../components/Header';
import Background from '../components/Background';
import ItemsList from '../components/ItemsList';
import NavBar from '../components/NavBar';

const items = [
  {
    name: 'Tasa de te',
    description: 'Tasa de te heredada',
    imageUrl: ''
  },
  {
    name: 'Tetera',
    description: 'Tetera heredada',
    imageUrl: ''
  }
];

const ItemsScreen = ({ navigation }) => {
  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Subastas"></NavBar>
      <Header>Mis items</Header>
      <ItemsList items={items} />
    </>
  );
};
export default ItemsScreen;
