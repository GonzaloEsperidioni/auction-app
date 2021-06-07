import React from 'react';
import { Paragraph } from 'react-native-paper';
import Background from '../components/Background';
import NavBar from '../components/NavBar';

const ItemsScreen = ({ navigation }) => {
  return (
    <>
      <NavBar goBack={() => navigation.goBack()} title="Subastas"></NavBar>
      <Background>
        <Paragraph>Items Screen</Paragraph>
      </Background>
    </>
  );
};
export default ItemsScreen;
