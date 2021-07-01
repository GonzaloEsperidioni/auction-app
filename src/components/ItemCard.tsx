import React, { useContext } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import AuctionContext from '../context/AutionContext';
const ItemCard = ({
  onPress = () => {},
  nombre,
  imagen,
  descripcion,
  valorBase
}) => {
  const { user, isInvitado } = useContext(AuctionContext);

  const mode = 'elevated';
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.headerText}>{nombre}</Text>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: imagen
          }}
        ></Image>
        <View style={styles.aside}>
          <Text style={styles.desc}>{descripcion}</Text>
          {!isInvitado && (
            <Text style={styles.price}>Precio base ${valorBase}</Text>
          )}
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
    fontSize: 24,
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
