import React from 'react';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import { useState } from 'react';

const UpdateProfile = ({ navigation, route }) => {
  const { profileData, setProfileData } = route.params;
  const [formProfileData, setFormProfileData] = useState(profileData);

  const updateName = (value) => {
    setFormProfileData({
      ...formProfileData,
      name: value
    });
  };
  const updatePhoneNumber = (value) => {
    setFormProfileData({
      ...formProfileData,
      phoneNumber: value
    });
  };
  const updateAddress = (value) => {
    setFormProfileData({
      ...formProfileData,
      address: value
    });
  };
  return (
    <>
      <Header>Editar Perfil</Header>

      <TextInput
        label="Nombre y Apellido"
        returnKeyType="next"
        defaultValue={profileData.name}
        onChangeText={updateName}
      />

      <TextInput
        label="Número de Teléfono"
        returnKeyType="next"
        defaultValue={profileData.phoneNumber}
        onChangeText={updatePhoneNumber}
      />

      <TextInput
        label="Dirección"
        returnKeyType="done"
        defaultValue={profileData.address}
        onChangeText={updateAddress}
      />

      <Button
        mode="contained"
        onPress={() => {
          navigation.navigate({
            name: 'ProfileScreen',
            params: { formProfileData },
            merge: true
          });
        }}
      >
        Actualizar Perfil
      </Button>
    </>
  );
};

export default UpdateProfile;
