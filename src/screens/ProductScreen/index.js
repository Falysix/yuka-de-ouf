import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { style } from './style';
import ItemCard from '../../components/ItemCard';

const ProductScreen = (props) => {

  const products = props.productList.reverse();

  return (
    <View style={style.container}>
      <View style={style.titleView}>
        <Text style={style.title}>Tous tes produits !</Text>
      </View>
      <FlatList
        data={products.reverse()}
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