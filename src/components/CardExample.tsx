import * as React from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';
import {
  Avatar,
  Paragraph,
  Card,
  Button,
  IconButton,
  useTheme,
  Text,
  Switch
} from 'react-native-paper';
import ScreenWrapper from './ScreenWrapper';

const CardExample = () => {
  const {
    colors: { background }
  } = useTheme();
  const mode = 'elevated';

  return (
    <ScreenWrapper contentContainerStyle={styles.content}>
      <ScrollView
        style={[styles.container, { backgroundColor: background }]}
        contentContainerStyle={styles.content}
      >
        <Card style={styles.card} mode={mode}>
          <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
          <Card.Title title="Abandoned Ship" />
          <Card.Content>
            <Paragraph>
              The Abandoned Ship is a wrecked ship located on Route 108 in
              Hoenn, originally being a ship named the S.S. Cactus. The second
              part of the ship can only be accessed by using Dive and contains
              the Scanner.
            </Paragraph>
          </Card.Content>
        </Card>
      </ScrollView>
    </ScreenWrapper>
  );
};

CardExample.title = 'Card';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap'
  },
  content: {
    padding: 4
  },
  card: {
    margin: 4,
    width: '50'
  },
  preference: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 8
  }
});

export default CardExample;
