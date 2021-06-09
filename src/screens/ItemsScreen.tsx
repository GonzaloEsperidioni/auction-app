import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
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
      <ItemsList navigation={navigation} items={items} />
    </>
  );
};
export default ItemsScreen;
