import React, { useState } from 'react';
import client from '../client/client';
import Button from '../components/Button';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';

const CreateItemScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');

  const createItem = async () => {
    let request = {
      description: title,
      fullDescription: description
    };
    const result = await client.post('/products', request);
    navigation.navigate('Tabs');
  };
  return (
    <>
      <Container>
        <Paragraph>Título</Paragraph>
        <TextInput
          label="Titulo"
          value={title}
          autoCapitalize="none"
          onChangeText={setTitle}
        />
        <Paragraph>Descripcion</Paragraph>
        <TextInput
          label="Descripcion"
          autoCapitalize="none"
          value={description}
          onChangeText={setDescription}
        />
        <Button mode="outlined" onPress={createItem}>
          Crear
        </Button>
      </Container>
    </>
  );
};

export default CreateItemScreen;
