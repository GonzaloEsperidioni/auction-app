import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import ItemsList from '../components/ItemsList';
import NavBar from '../components/NavBar';
import client from '../client/client';
import Button from '../components/Button';
import { useIsFocused } from '@react-navigation/core';

const ItemsScreen = ({ navigation }) => {
  const [items, setItems] = useState([
    {
      titulo: 'Item',
      descripcion: 'desc',
      estado: 'EN VERIFICACION'
    },
    {
      titulo: 'Item',
      descripcion: 'desc',
      estado: 'VERIFICADO',
      precioBase: 1550
    }
  ]);
  const isFocused = useIsFocused();

  useEffect(() => {
    const search = async () => {
      const { data } = await client.get('/products');
      setItems(data);
    };
    search();
  }, [isFocused]);

  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Subastas"></NavBar>
      <Header>Mis items</Header>
      <ItemsList navigation={navigation} items={items} />
      <Button onPress={() => navigation.navigate('CreateItem')}>
        Agregar Item
      </Button>
    </>
  );
};
export default ItemsScreen;
