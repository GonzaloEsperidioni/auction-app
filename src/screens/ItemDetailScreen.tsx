import Header from '../components/Header';
import React from 'react';
import NavBar from '../components/NavBar';

const ItemDetailScreen = ({ navigation }) => {
  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Detalle Item"></NavBar>
      <Header>Detalle Item</Header>
    </>
  );
};

export default ItemDetailScreen;
