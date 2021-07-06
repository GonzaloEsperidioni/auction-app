import * as React from 'react';
import { List } from 'react-native-paper';

const ItemsList = ({ items, navigation }) => (
  <>
    {items
      ? items.map((item, i) => (
          <List.Item
            style={{
              marginBottom: 1,
              borderColor: 'black',
              backgroundColor: item.estado === 'VERIFICADO' ? 'green' : 'white'
            }}
            titleStyle={{
              fontSize: 24,
              color: item.estado === 'VERIFICADO' ? 'white' : 'black'
            }}
            descriptionStyle={{
              color: item.estado === 'VERIFICADO' ? 'white' : 'black'
            }}
            key={i}
            title={item.titulo}
            description={item.estado}
            right={(props) =>
              item.estado === 'VERIFICADO' && (
                <List.Icon {...props} color={'white'} icon="check" />
              )
            }
            onPress={() => navigation.navigate('ItemDetail', { item })}
          />
        ))
      : null}
  </>
);

export default ItemsList;
