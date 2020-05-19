import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import { style } from './style';
import ItemCard from '../../components/Item';

const ProductScreen = (props) => {

  return (
    <View style={style.container}>
      <View style={style.titleView}>
        <Text style={style.title}>Tous tes produits !</Text>
      </View>
      <FlatList
        data={props.productList.reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={
          ({item}) => <ItemCard item={item} />
        }
        style={style.list}
      />
    </View>
  );
}

export default ProductScreen;