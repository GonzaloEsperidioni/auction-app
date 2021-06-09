import React, { useEffect, useState } from 'react';
import { Paragraph } from 'react-native-paper';
import Header from '../components/Header';
import Background from '../components/Background';
import ItemsList from '../components/ItemsList';
import NavBar from '../components/NavBar';
import client from '../client/client';

const ItemsScreen = ({ navigation }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await client.get('/products');
      setItems(data);
    };
    search();
  }, []);
  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Subastas"></NavBar>
      <Header>Mis items</Header>
      <ItemsList items={items} />
    </>
  );
};
export default ItemsScreen;
