import React, { memo, useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import ItemCard from '../components/ItemCard';

const itemsDeCatalogo = [
  { creditCardNumber: '4242424242424242', brand: 'visa' },
  { creditCardNumber: '4242424242424242', brand: 'visa' },
  { creditCardNumber: '5555555555555555', brand: 'mastercard' }
];

const PaymentMethodsScreen = ({ navigation }) => {
  return (
    <>
      <Header>Medios de Pago</Header>
      <ScrollView>
        <List.Section>
          {itemsDeCatalogo.map((item) => {
            return (
              <List.Item
                title={item.creditCardNumber}
                onPress={() => {
                  navigation.push('ItemScreen', item);
                }}
                left={() =>
                  item.brand === 'visa' ? (
                    <List.Icon icon={require(`../assets/visa.png`)} />
                  ) : (
                    <List.Icon icon={require(`../assets/mastercard.png`)} />
                  )
                }
              />
            );
          })}
        </List.Section>
        <Button
          mode="outlined"
          onPress={() => {
            navigation.push('CreatePaymentMethod');
          }}
        >
          Agregar Medio de Pago
        </Button>
      </ScrollView>
    </>
  );
};

export default PaymentMethodsScreen;
