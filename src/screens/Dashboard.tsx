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

type Props = {
  navigation: Navigation;
};

const Dashboard = ({ navigation }: Props) => {
  const { authenticated, setAuthenticated } = useContext(AutionContext);

  return (
    <>
      <NavBar title="Subastas"></NavBar>
      <Container>
        <Header>Let’s start</Header>
        {authenticated && (
          <Paragraph>
            Your amazing app starts here. Open you favourite code editor and
            start editing this project.
          </Paragraph>
        )}
        <Button mode="outlined" onPress={() => setAuthenticated(false)}>
          Logout
        </Button>
      </Container>
    </>
  );
};

export default memo(Dashboard);
