import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanScreen from './src/screens/ScanScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProductScreen from './src/screens/ProductScreen';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native'

const Tab = createBottomTabNavigator();

const App = () => {
  const [productList, setProductList] = useState([]) 

  useEffect(() => {
    getData();
  }, []);

  const addProduct = (product) => {
    let newList = [...productList];
    newList.push(product);
    setProductList(newList);
    storeData(newList);
  }

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@productsList', jsonValue)
    } catch (e) {
      throw Error('AsyncStorage Error');
    }
  }

  const getData = async () => {
    try {
      let value = await AsyncStorage.getItem('@productsList');
      if(value && value !== null) {
        value = JSON.parse(value);
        setProductList(value);
      }
    } catch(e) {
      throw Error('AsyncStorage Error');
    }
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recherche" component={SearchScreen} />
        <Tab.Screen name='Scan'>
          {() => <ScanScreen addProduct={addProduct} />}
        </Tab.Screen>
        <Tab.Screen name='Mes produits'>
          {() => <ProductScreen productList={productList} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;