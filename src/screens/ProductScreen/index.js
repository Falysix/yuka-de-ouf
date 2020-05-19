import React, { useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { style } from './style';

const ProductScreen = (props) => {

  return (
    <View style={style.container}>
      <View style={style.titleView}>
        <Text style={style.title}>Tous tes produits !</Text>
      </View>
      <FlatList
        data={props.productList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item}) => <Text style={style.item}>{item.name}</Text>
        }
        style={style.list}
      />
    </View>
  );
}

export default ProductScreen;