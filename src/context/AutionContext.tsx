import React, { useState } from 'react';

const AutionContext = React.createContext(null);

const CATALOGOS = [
  {
    id: 2,
    categoria: 'oro',
    fechaInicio: '2021-07-01 12:00',
    imagen:
      'https://http2.mlstatic.com/reloj-invicta-set-2-relojes-automatico-coleccion-nuevo-t-e-r-D_NQ_NP_965267-MLM27403285938_052018-F.jpg',
    items: [
      {
        nombre: 'Set Relojes',
        imagen:
          'https://http2.mlstatic.com/relogio-automatico-masculino-tevise-estilo-rolex-submariner-D_NQ_NP_851259-MLB31686500277_082019-F.jpg',
        descripcion: 'Set de Relojes clasicos tiene solo unos meses de uso',
        valorBase: 15000
      }
    ]
  },
  {
    id: 3,
    categoria: 'comun',
    fechaInicio: '2021-07-02 18:00',
    imagen:
      'http://foryourcue.com/wp-content/uploads/2012/09/picasso-art-icons-collage.jpg',
    items: [
      {
        nombre: 'Set Pinturas Clasicas',
        imagen:
          'https://pymstatic.com/25357/conversions/picasso-mujer-default.jpg',
        descripcion:
          'Set de replicas de pinturas de Picasso, trabajo realizado en el año 2016',
        valorBase: 3000
      },
      {
        nombre: 'Set Pinturas Clasicas',
        imagen:
          'https://pymstatic.com/25357/conversions/picasso-mujer-default.jpg',
        descripcion:
          'Set de replicas de pinturas de Picasso, trabajo realizado en el año 2016',
        valorBase: 2323
      },
      {
        nombre: 'Set Pinturas Clasicas',
        imagen:
          'https://pymstatic.com/25357/conversions/picasso-mujer-default.jpg',
        descripcion:
          'Set de replicas de pinturas de Picasso, trabajo realizado en el año 2016',
        valorBase: 12312
      }
    ]
  },
  {
    id: 12,
    categoria: 'platino',
    fechaInicio: '2021-07-03 18:00',
    imagen:
      'https://thumbs.dreamstime.com/b/collage-de-la-bandera-del-caf%C3%A9-con-los-granos-express-cruas%C3%A1n-y-131630322.jpg',
    items: [
      {
        nombre: 'Taza de Café',
        imagen:
          'https://grupomarmor.com.mx/wp-content/uploads/2019/06/taza-cafe.jpg',
        descripcion:
          'Hermosa taza de cafe, esta taza esta hecha de arcilla griega de la mejor calidad. Es un producto nuevo importado directanente desde Grecia',
        valorBase: 1000
      }
    ]
  },
  {
    id: 13,
    categoria: 'platino',
    fechaInicio: '2021-07-04 18:00',
    imagen:
      'https://thumbs.dreamstime.com/b/collage-de-la-bandera-del-caf%C3%A9-con-los-granos-express-cruas%C3%A1n-y-131630322.jpg',
    items: [
      {
        nombre: 'Taza de Café',
        imagen:
          'https://grupomarmor.com.mx/wp-content/uploads/2019/06/taza-cafe.jpg',
        descripcion:
          'Hermosa taza de cafe, esta taza esta hecha de arcilla griega de la mejor calidad. Es un producto nuevo importado directanente desde Grecia',
        valorBase: 1000
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
