import React, { memo } from 'react';
import { Image, StyleSheet } from 'react-native';
import { theme } from '../core/theme';

const Logo = () => (
  <Image
    source={require('../assets/subastapp-logo.png')}
    style={styles.image}
  />
);

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 128,
    marginBottom: 12,
    backgroundColor: theme.colors.primary
  }
});

export default memo(Logo);
