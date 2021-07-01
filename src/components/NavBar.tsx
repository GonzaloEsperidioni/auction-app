import React, { useContext } from 'react';
import { Appbar } from 'react-native-paper';
import AuctionContext from '../context/AutionContext';

const NavBar = ({ previous, navigation, title, ...props }) => {
  const { user, setAuthenticated, setUser } = useContext(AuctionContext);
  const _handleMore = () => {
    setUser({});
    setAuthenticated(false);
  };

  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
      {user && user.rol === 'invitado' && (
        <Appbar.Action icon="home" onPress={_handleMore} />
      )}
    </Appbar.Header>
  );
};

export default NavBar;
