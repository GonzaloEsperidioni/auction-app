import * as React from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
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
        <TouchableOpacity>
          <Card style={styles.card} mode={mode}>
            <Card.Cover source={require('../assets/wrecked-ship.jpg')} />
            <Card.Title title="Articulo 1" />
          </Card>
        </TouchableOpacity>
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
