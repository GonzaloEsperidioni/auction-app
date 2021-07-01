import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import {
  Alert,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView
} from 'react-native';
import Header from '../components/Header';
import LottieView from 'lottie-react-native';
import CreditCardForm, { Button, FormModel } from 'rn-credit-card';

const CreatePaymentMethod = () => {
  const formMethods = useForm<FormModel>({
    // to trigger the validation on the blur event
    mode: 'onBlur',
    defaultValues: {
      holderName: '',
      cardNumber: '',
      expiration: '',
      cvv: ''
    }
  });
  const { handleSubmit, formState } = formMethods;

  function onSubmit(model: FormModel) {
    Alert.alert('Success: ' + JSON.stringify(model, null, 2));
  }
  return (
    <>
      <Header>Medios de Pago</Header>
      <FormProvider {...formMethods}>
        <SafeAreaView style={styles.container}>
          <KeyboardAvoidingView style={styles.avoider}>
            <CreditCardForm
              LottieView={LottieView}
              horizontalStart
              overrides={{
                labelText: {
                  marginTop: 16
                }
              }}
            />
          </KeyboardAvoidingView>
          {formState.isValid && (
            <Button
              style={styles.button}
              title={'Agregar Medio de Pago'}
              onPress={handleSubmit(onSubmit)}
            />
          )}
        </SafeAreaView>
      </FormProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  avoider: {
    flex: 1,
    padding: 36
  },
  button: {
    margin: 36,
    marginTop: 0
  }
});

export default CreatePaymentMethod;
