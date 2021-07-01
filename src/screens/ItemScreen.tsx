import React, { memo, useContext, useState, useEffect } from 'react';
import Button from '../components/Button';
import { Navigation } from '../types';
import AutionContext from '../context/AutionContext';
import {
  StyleSheet,
  View,
  Text,
  Image,
  KeyboardAvoidingView
} from 'react-native';
import TextInput from '../components/TextInput';
import { Snackbar } from 'react-native-paper';
import Countdown from '../components/CountDown';
import { Headline } from 'react-native-paper';
import client from '../client/client';
type Props = {
  navigation: Navigation;
  route: any;
};
const RANGOS = {
  invitado: [],
  comun: ['comun'],
  especial: ['comun', 'especial'],
  plata: ['comun', 'especial', 'plata'],
  oro: ['comun', 'especial', 'plata', 'oro'],
  platino: ['comun', 'especial', 'plata', 'oro', 'platino']
};
const Dashboard = ({ route, navigation }: Props) => {
  const { item, catalogo } = route.params;
  const { nombre, descripcion, imagen, valorBase } = item;
  const { isInvitado, setAuthenticated, catalogos, user } =
    useContext(AutionContext);
  const [text, setText] = React.useState('');
  const [valorActual, setValorActual] = useState(valorBase);
  const [pujaValida, setPujaValida] = useState(false);
  const [time, setTime] = useState(60 * 5);
  const [autorizado, setAutorizado] = useState(
    RANGOS[user.rol].includes(catalogo.categoria)
  );
  const calcularMinimoDePuja = (base) => {
    // menor al 1% valor Base en todas cat
    // oro y platino

    return Math.floor(base + base * 0.01);
  };

  const calcularMaximoDePuja = (pujaActual) => {
    // menor al 1% valor Base en todas cat
    // oro y platino
    return Math.floor(pujaActual + pujaActual * 0.2);
  };
  const [pujaMinima, setPujaMinima] = useState(calcularMinimoDePuja(valorBase));
  const [pujaMaxima, setPujaMaxima] = useState(
    calcularMaximoDePuja(valorActual)
  );
  const [visible, setVisible] = React.useState(false);
  const [pujas, setPujas] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await client.get('pujas');
      setPujas(data);
      setValorActual(data[data.length - 1].precio);
      setPujaMinima(calcularMinimoDePuja(Number(data[data.length - 1].precio)));
      setPujaMaxima(calcularMaximoDePuja(Number(data[data.length - 1].precio)));
    };
    search();
  }, [visible]);
  useEffect(() => {
    setPujaValida(Number(text) >= pujaMinima && Number(text) <= pujaMaxima);
  }, [text]);
  const doPujar = async () => {
    setPujaValida(Number(text) >= pujaMinima && Number(text) <= pujaMaxima);
    if (Number(text) >= pujaMinima && Number(text) <= pujaMaxima) {
      setVisible(true);
      setTime(5 * 60);
      const response = await client.post('/pujas', {
        precio: text,
        idCatalogo: catalogo.id,
        mail: user.email
      });
      setTimeout(() => setVisible(false), 1000);
      setValorActual(Number(text));
      setPujaMinima(calcularMinimoDePuja(Number(text)));
      setPujaMaxima(calcularMaximoDePuja(Number(text)));
      setText('');
    }
  };

  return (
    <KeyboardAvoidingView>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{nombre}</Text>
        </View>
        <View style={styles.content}>
          <Image
            style={styles.image}
            source={{
              uri: imagen
            }}
          ></Image>
          <View style={styles.aside}>
            <Text style={styles.desc}>Descripcion del producto</Text>
            <Text style={styles.descText}>{descripcion}</Text>
            {!isInvitado && autorizado && (
              <>
                {pujas && pujas[0] ? (
                  <View>
                    <Text>Ultima oferta: {pujas[pujas.length - 1].precio}</Text>
                    <Text>
                      Mail de ofertante: {pujas[pujas.length - 1].mail}
                    </Text>
                  </View>
                ) : (
                  <View>
                    <Text style={{ marginTop: 10, fontSize: 20 }}>
                      No hay ofertas, se el primero en pujar!
                    </Text>
                  </View>
                )}
                <View style={styles.info}>
                  {!visible && (
                    <Countdown
                      timestamp={time}
                      callback={() => console.log('GANASTE')}
                    />
                  )}
                  <Text style={styles.price}>$ {valorActual}</Text>
                </View>
                <View>
                  <TextInput
                    label="Precio"
                    value={text}
                    onChangeText={(text) => setText(text)}
                    error={text !== '' && Number(text) < pujaMinima}
                    errorText={
                      text !== '' &&
                      Number(text) < pujaMinima &&
                      `La puja minima tiene que ser de ${pujaMinima}`
                    }
                  />
                  <Button
                    disabled={!pujaValida}
                    onPress={doPujar}
                    style={{
                      ...styles.detail,
                      backgroundColor: pujaValida ? 'blue' : 'gray'
                    }}
                  >
                    Pujar
                  </Button>
                </View>
              </>
            )}
            {!autorizado && (
              <Headline style={styles.cat}>
                NO TIENES LA CATEGORIA NECESARIA PARA PARTICIPAR EN ESTA SUBASTA
              </Headline>
            )}
          </View>
        </View>
      </View>
      <Snackbar visible={visible}>Su puja ingreso correctamente!.</Snackbar>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    padding: 24
  },
  cat: {
    marginTop: 20
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
