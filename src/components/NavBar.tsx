import * as React from 'react';
import { Appbar } from 'react-native-paper';

const NavBar = ({ previous, navigation, title }) => {
  return (
    <Appbar.Header>
      {previous ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={title} />
    </Appbar.Header>
  );
};

export default NavBar;
