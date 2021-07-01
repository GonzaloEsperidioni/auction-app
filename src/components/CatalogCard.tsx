import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
const CatalogCard = ({
  onPress,
  id,
  categoria,
  fechaInicio,
  imagen,
  items
}) => {
  // Timer References
  const vivo = true;
  const tiempoRestante = '01:02';
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={{
          uri: imagen
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Subasta #{id}</Text>
            <Text style={styles.headerText}>{categoria.toUpperCase()}</Text>
          </View>
          <View>
            <Text style={styles.text}>Fecha de inicio: {fechaInicio}</Text>
          </View>
          <View style={styles.itemsListContainer}>
            <Text style={styles.text}>Listado de items:</Text>
            {items &&
              items.map((item) => (
                <Text style={styles.item}>
                  {'\u2022'} {item.nombre}
                </Text>
              ))}
          </View>
          <View style={styles.footer}>
            <Button
              labelStyle={{ color: '#ffffff' }}
              style={{
                backgroundColor: vivo ? 'green' : '#f5cb5c'
              }}
            >
              {vivo ? 'EN VIVO' : `${tiempoRestante}`}
            </Button>
            <Button
              icon="format-list-bulleted-square"
              mode="contained"
              onPress={onPress}
              labelStyle={{ color: '#ffffff' }}
            >
              Catalogo
            </Button>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
    width: '100%',
    borderRadius: 8,
    height: 200
  },
  text: {
    color: '#ffffff'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },
  headerText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 18
  },
  itemsListContainer: {
    marginVertical: 12
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: 8
  },
  overlay: {
    backgroundColor: '#000000a0',
    height: '100%',
    padding: 8,
    width: '100%'
  },
  item: {
    // paddingLeft: '4px',
    color: '#ffffff'
  },
  footer: {
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  remainingText: {
    fontSize: 18,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  }
});

export default CatalogCard;
