import React, { useState } from 'react';

const AutionContext = React.createContext(null);

const CATALOGOS = [
  {
    id: 1990,
    categoria: 'platino',
    fechaInicio: 'fecha',
    imagen: 'url',
    items: [
      {
        nombre: 'guitarra Les paul',
        imagen: 'URL',
        descripcion: 'asdasdsadsadsa',
        valorBase: 1000
      },
      {
        nombre: 'pipi flauta',
        imagen: 'URL',
        descripcion: 'asdasdsadsadsa',
        valorBase: 2000
      }
    ]
  },
  {
    id: 312,
    categoria: 'oro',
    fechaInicio: 'fecha',
    imagen: 'url',
    items: [
      {
        nombre: 'ANASHEX PIANO',
        imagen: 'URL',
        descripcion: 'asdasdsadsadsa',
        valorBase: 500
      }
    ]
  },
  {
    id: 12,
    categoria: 'platino',
    fechaInicio: '2021-06-03 18:00',
    imagen:
      'https://thumbs.dreamstime.com/b/collage-de-la-bandera-del-caf%C3%A9-con-los-granos-express-cruas%C3%A1n-y-131630322.jpg',
    items: [
      {
        nombre: 'Taza de Café',
        imagen:
          'https://grupomarmor.com.mx/wp-content/uploads/2019/06/taza-cafe.jpg',
        descripcion:
          'Hermosa taza de cafe, esta taza esta hecha de arcilla griega de la mejor calidad. Es un producto nuevo importado directanente desde Grecia',
        valorBase: 1.0
      }
    ]
  }
];

const PAYMENTH_METHODS = [
  { creditCardNumber: '4242424242424242', brand: 'visa' },
  { creditCardNumber: '4242424242424242', brand: 'visa' },
  { creditCardNumber: '5555555555555555', brand: 'mastercard' }
];

export const AutionProvider = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [catalogos, setCatalogos] = useState(CATALOGOS);
  const [user, setUser] = useState({});
  const [paymentMethods, setPaymentMethods] = useState(PAYMENTH_METHODS);

  const data = {
    authenticated,
    setAuthenticated,
    catalogos,
    user,
    setUser,
    paymentMethods,
    setPaymentMethods,
    isInvitado: user && user.rol === 'invitado'
  };
  return (
    <AutionContext.Provider value={data}>{children}</AutionContext.Provider>
  );
};

export default AutionContext;
