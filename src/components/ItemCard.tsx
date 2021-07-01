import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import CountDown from './CountDown';
const ItemCard = ({ onPress = () => {} }) => {
  const mode = 'elevated';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Guitarra Les Paul</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.mrcdinstrumentos.com.mx/shared/productos/11996/LPC-EBCH1.jpg'
          }}
        ></Image>
        <View style={styles.aside}>
          <Text style={styles.desc}>Descripcion del producto</Text>
          <Text style={styles.price}>$5454</Text>
          <Button onPress={onPress} style={styles.detail}>
            Detalle
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginBottom: 8
  },
  headerText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomColor: '#000000',
    borderBottomWidth: 2
  },
  card: {
    // backgroundColor: '#000000a0',
    borderBottomColor: '#000000a0',
    borderBottomWidth: 1,
    padding: 8,
    width: '100%',
    marginBottom: 20
  },
  container: {
    flex: 0
  },
  image: {
    width: 150,
    height: 150
  },
  aside: {
    padding: 10
  },
  desc: {
    fontSize: 20,
    color: '#767575',
    marginBottom: 20
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center'
    // justifyContent: 'space-between'
  },
  price: {
    width: 150,
    fontSize: 24,
    backgroundColor: '#F4e76F',
    color: '#000000',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8
  },
  detail: {
    color: '#FFFFFF',
    backgroundColor: '#2341DE'
  }
});

export default ItemCard;
