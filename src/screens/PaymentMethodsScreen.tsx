import React, { memo, useContext, useEffect, useState } from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import { ScrollView } from 'react-native';
import { List } from 'react-native-paper';
import AutionContext from '../context/AutionContext';

const PaymentMethodsScreen = ({ navigation }) => {
  const { paymentMethods } = useContext(AutionContext);
  console.log(paymentMethods);

  return (
    <>
      <Header>Medios de Pago</Header>
      <ScrollView>
        <List.Section>
          {paymentMethods.map((paymentMethod) => {
            return (
              <List.Item
                title={paymentMethod.creditCardNumber}
                onPress={() => {
                  navigation.push('ItemScreen', paymentMethod);
                }}
                left={() =>
                  paymentMethod.brand === 'visa' ? (
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
