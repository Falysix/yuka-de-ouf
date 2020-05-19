import React, { useState, useEffect } from 'react';
import { Text, View, FlatList } from 'react-native';
import { style } from './style';
import { SearchBar, Card } from 'react-native-elements';
import ItemCard from '../../components/ItemCard';

const SearchScreen = () => {
  const [search, setSearch] = useState('');
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    searchProducts();
  }, [search]);

  const updateSearch = (newSearch) => {
    setSearch(newSearch)
  };

  const searchProducts = async () => {
    const urlSearch = 'https://world.openfoodfacts.org/cgi/search.pl?search_terms=' + search + '&action=process&json=1';
    try {
      const req = await fetch(urlSearch);
      if (req.ok) {
          const apiProducts = await req.json() || {};
          setProductsList(apiProducts.products.filter(item => item.generic_name_fr && item.generic_name_fr.length > 0))
      } 
      else {
          alert('Erreur de connexion');
          throw Error("Not 200");
      }
    } catch (err) {
        console.log(err)
    }
  }

  return (
    <View style={style.view}>
      <View style={style.titleView}>
        <Text style={style.title}>Cherche ton produit !</Text>
      </View>
      <View>
        <SearchBar
          placeholder="Nom du produit"
          onChangeText={updateSearch}
          value={search}
        />
        <Card>
          <Text>Résultats : { productsList.length }</Text>
        </Card>
        <FlatList
          data={productsList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => 
            <ItemCard item={{
              name: item.generic_name_fr || '',
              barcode: item.code || '',
              infos: item
            }} />
          }
          style={style.list}
        />
      </View>
    </View>
  );
}

export default SearchScreen;