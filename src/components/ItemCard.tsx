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
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold',
    marginBottom: '8px'
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  },
  card: {
    backgroundColor: '#000000a0',
    height: '100%',
    padding: '8px',
    width: '100%'
  },
  container: {
    flexDirection: 'row'
  },
  image: {
    width: 150,
    height: 150
  }
});

export default ItemCard;
