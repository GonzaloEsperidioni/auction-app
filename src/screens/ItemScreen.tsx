import React, { memo, useContext, useState } from 'react';
import Button from '../components/Button';
import { Navigation } from '../types';
import AutionContext from '../context/AutionContext';
import { StyleSheet, View, Text, Image } from 'react-native';
import TextInput from '../components/TextInput';

type Props = {
  navigation: Navigation;
  route: any;
};

const Dashboard = ({ route, navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);
  const [text, setText] = React.useState('');
  const [pujaMinima, setPujaMinima] = useState(100);
  const { id, name } = route.params;

  const itemsDeCatalogo = [1, 2, 3, 4, 5];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Guitarra Les Paul</Text>
      </View>
      <View style={styles.content}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://www.mrcdinstrumentos.com.mx/shared/productos/11996/LPC-EBCH1.jpg'
          }}
        ></Image>
        <View style={styles.aside}>
          <Text style={styles.desc}>Descripcion del producto</Text>
          <Text style={styles.descText}>
            Guitarra bla bla Lorem ipsum dolor sit amet consectetur, adipisicing
            elit. Ad distinctio qui corrupti deserunt minus, nemo recusandae
            vero. Eos quos reprehenderit modi, in dolores quasi sunt totam
            molestias, id odit tempore!
          </Text>
          <View style={styles.info}>
            <Text style={styles.price}>12:23:02</Text>
            <Text style={styles.price}>$5454</Text>
          </View>
          <View>
            <TextInput
              label="Precio"
              value={text}
              onChangeText={(text) => setText(text)}
              error={Number(text) <= pujaMinima}
              errorText={
                Number(text) <= pujaMinima &&
                `La puja minima tiene que ser de ${pujaMinima}`
              }
            />
            <Button style={styles.detail}>Pujar</Button>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 24
  },
  header: {
    width: '100%',
    marginBottom: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontWeight: 'bold'
  },
  headerText: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    borderBottomColor: '#000000',
    borderBottomWidth: 2
  },
  content: {
    width: '100%',
    alignItems: 'center'
  },
  card: {
    // backgroundColor: '#000000a0',
    borderBottomColor: '#000000a0',
    borderBottomWidth: 1,
    padding: 8,
    width: '100%',
    marginBottom: 20
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
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  price: {
    backgroundColor: '#F4e76F',
    color: '#000000',
    padding: 8,
    borderRadius: 8
  },
  detail: {
    color: '#FFFFFF',
    backgroundColor: '#2341DE',
    width: 100
  },
  descText: {
    fontSize: 16
  }
});

export default memo(Dashboard);
