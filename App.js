import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from './src/core/theme';
import Main from './src/index';
import { AutionProvider } from './src/context/AutionContext';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AutionProvider>
        <Main></Main>
        <StatusBar></StatusBar>
      </AutionProvider>
    </PaperProvider>
  );
}
