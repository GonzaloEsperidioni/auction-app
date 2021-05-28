import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Provider as PaperProvider } from 'react-native-paper';
import { theme } from "./src/core/theme";
import Main from './src/index';

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Main></Main>
      <StatusBar></StatusBar>
    </PaperProvider>
  );
}