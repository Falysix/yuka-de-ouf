import * as React from 'react';
import { Text, View } from 'react-native';
import { style } from './style';
import BarCodeScanner from '../../components/BarCodeScanner';

const ScanScreen = (props) => {
    const  addProductFromBarCode = async (barcode) => {
        console.log(barcode);
        const { value, type } = barcode;
        const apikey = '9DECAB516027D09660263CEB72080975';
        const url = 'https://api.upcdatabase.org/product/' + value + '?apikey=' + apikey;

        try {
            const req = await fetch(url);
            if (req.ok) {
                const product = await req.json() || {};
                console.log(JSON.stringify(product));
                props.addProduct({ 
                    barcode: product.barcode,
                    name: product.description
                })
            } 
            else {
                throw Error("Not 200");
            }
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <View style={style.view}>
            <View style={style.titleView}>
                <Text style={style.title}>Scanne ton produit !</Text>
            </View>
            <View style={{flex: 2, width: '100%' }}>
                <BarCodeScanner 
                    style={style.scanner} 
                    onScan={
                        (barcode) => addProductFromBarCode(barcode)
                    } 
                />
            </View>
      </View>
    );
  }

  export default ScanScreen;