import * as React from 'react';
import { List } from 'react-native-paper';

const ItemsList = ({ items }) => (
  <>
    {items.map((item, i) => (
      <List.Item
        key={i}
        title={item.name}
        description={item.description}
        style={{
          backgroundColor: 'white',
          marginBottom: 1,
          borderColor: 'black'
        }}
      />
    ))}
  </>
);

export default ItemsList;
