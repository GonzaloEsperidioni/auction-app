import React, { memo, useContext } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import Container from '../components/Container';
import { Navigation } from '../types';
import NavBar from '../components/NavBar';
import AutionContext from '../context/AutionContext';
import Tabs from '../tabs';
import { View } from 'react-native';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);

  return (
    <>
      <NavBar title="Subastas"></NavBar>
      <Container>
        <Header>Bievenidos</Header>
        {authenticated && (
          <View>
            <Paragraph>
              Mantenete al tanto de las ultimas novedades y subastas.
            </Paragraph>
            <Paragraph>
              Terecomendamos activar las notificaciones para siempre estar al
              dia.
            </Paragraph>
          </View>
        )}
        <Button mode="outlined" onPress={() => setAuthenticated(false)}>
          Cerrar sesion
        </Button>
      </Container>
    </>
  );
};

export default memo(Dashboard);
