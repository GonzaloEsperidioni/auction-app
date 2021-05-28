import * as React from 'react';
import { Appbar } from 'react-native-paper';

const NavBar = ({ goBack, title }) => {

    return (
        <Appbar.Header>
            <Appbar.BackAction onPress={goBack} />
            <Appbar.Content title={title} />
        </Appbar.Header>
    );
};

export default NavBar;