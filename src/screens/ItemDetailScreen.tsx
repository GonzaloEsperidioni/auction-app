import Header from '../components/Header';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Paragraph from '../components/Paragraph';

const ItemDetailScreen = ({ navigation }) => {
  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Detalle Item"></NavBar>
      <Header>Titulo</Header>
      <Paragraph>Descripcion</Paragraph>
    </>
  );
};

export default ItemDetailScreen;
