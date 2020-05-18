import * as React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import BarCodeScanner from '../../components/BarCodeScanner';

const ScanScreen = () => {
    return (
        <View style={style.view}>
            <View style={style.titleView}>
                <Text style={style.title}>Scanne ton produit !</Text>
            </View>
            <View style={{flex: 2, width: '100%' }}>
                <BarCodeScanner style={style.scanner} onScan={() => addProduct({name:'Une bière !'}) } />
            </View>
      </View>
    );
  }

  export default ScanScreen;