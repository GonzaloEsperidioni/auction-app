import Header from '../components/Header';
import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Background from '../components/Background';
import { theme } from '../core/theme';
const ItemDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Detalle Item"></NavBar>
      <Background>
        <Header>{item.titulo}</Header>
        <Paragraph>{item.descripcion}</Paragraph>
        {item.precioBase !== '' && (
          <>
            <Paragraph>Precio base: {item.precioBase}</Paragraph>
            <Button mode="contained" color={theme.colors.secondary}>
              Aceptar oferta
            </Button>
            <Button mode="contained" color={'red'}>
              Rechazar oferta
            </Button>
          </>
        )}
        {item.precioBase === '' && (
          <Paragraph>Su item aun no ha sido validado.</Paragraph>
        )}
      </Background>
    </>
  );
};

export default ItemDetailScreen;
