import React, { useState, useEffect } from 'react';
import client from '../client/client';
import Button from '../components/Button';
import Container from '../components/Container';
import Paragraph from '../components/Paragraph';
import TextInput from '../components/TextInput';
import { Image, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const CreateItemScreen = ({ navigation }) => {
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } =
          await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const createItem = async () => {
    let request = {
      description: title,
      fullDescription: description
    };
    const result = await client.post('/products', request);
    navigation.back();
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
        <Button mode="text" onPress={pickImage}>
          Subir Imagen
        </Button>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <Button mode="outlined" onPress={createItem}>
          Crear
        </Button>
      </Container>
    </>
  );
};

export default CreateItemScreen;
