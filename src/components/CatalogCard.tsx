import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { Card, Button, Text } from 'react-native-paper';
import CountDown from '../components/CountDown';
const CatalogCard = ({ onPress }) => {
  const mode = 'elevated';
  // Timer References

  return (
    <Card style={styles.card} mode={mode}>
      <ImageBackground
        style={styles.image}
        source={{
          uri: 'https://i.blogs.es/d86eb3/subasta-autos-los-pinos/1366_2000.jpg'
        }}
      >
        <View style={styles.overlay}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Subasta #1990</Text>
            <Text style={styles.headerText}>Categoria: Platino</Text>
          </View>
          <View>
            <Text style={styles.text}>
              Fecha de inicio: 05/07/2021 12:30 PM
            </Text>
          </View>
          <View style={styles.itemsListContainer}>
            <Text style={styles.text}>Listado de items:</Text>
            <Text style={styles.item}>{'\u2022'} Guitarra Fender</Text>
            <Text style={styles.item}>{'\u2022'} Pedal Wah Wah</Text>
          </View>
          <View style={styles.footer}>
            <View>
              <CountDown timestamp={120}></CountDown>
            </View>
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
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    margin: 4,
    width: '100%',
    borderRadius: 8
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
    marginVertical: '12px'
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
    padding: '8px',
    width: '100%'
  },
  item: {
    paddingLeft: '4px',
    color: '#ffffff'
  },
  footer: {
    paddingHorizontal: '12px',
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
