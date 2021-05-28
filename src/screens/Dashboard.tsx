import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Paragraph from '../components/Paragraph';
import Button from '../components/Button';
import { Navigation } from '../types';
import NavBar from '../components/NavBar';

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => (
  <>
    <NavBar goBack={() => navigation.goBack()} title="Subastas"></NavBar>
    <Background>
      <Logo />
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favourite code editor and start
        editing this project.
    </Paragraph>
      <Button mode="outlined" onPress={() => navigation.navigate('HomeScreen')}>
        Logout
    </Button>
    </Background>
  </>
);

export default memo(Dashboard);
