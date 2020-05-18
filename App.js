import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScanScreen from './src/screens/ScanScreen';
import SearchScreen from './src/screens/SearchScreen';
import ProductScreen from './src/screens/ProductScreen';

const Tab = createBottomTabNavigator();

const App = () => {
  const [productList, setProductList] = useState([]) 

  addProduct = (product) => {
    let newList = [...productList];
    newList.push(product);
    setProductList(newList);
    console.log(product, productList);
  }

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Recherche" component={SearchScreen} />
        <Tab.Screen name='Scan'>
          {() => <ScanScreen addProduct={() => addProduct} />}
        </Tab.Screen>
        <Tab.Screen name='Mes produits'>
          {() => <ProductScreen productList={productList} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;