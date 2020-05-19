import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

const ItemCard = (props) => {
    const { item } = props;
    return(
        <Card title={item.name}>
            <View style={{ flexDirection:'row', flexWrap: 'wrap' }}>
                { item.infos && item.infos.image_front_url ?
                <Image
                    source={{
                        uri: item.infos.image_front_url
                    }}
                    style={{
                    width: 80,
                    resizeMode:'contain',
                    flex: 1,
                    marginRight: 20
                    }}
                /> : null
                }
                { item.infos && item.infos.ingredients_text_fr ?
                <Text style={{flex: 5}}>
                    { item.infos.ingredients_text_fr }
                </Text> : null
                }
            </View>
            {
                item.infos && item.infos.nutriscore_grade ?
                <Card 
                containerStyle={
                    { 
                    borderColor: {
                        'a': 'green',
                        'b': 'green',
                        'c': 'orange',
                        'd': 'orange',
                        'e': 'red'
                    }[item.infos.nutriscore_grade],
                    borderWidth: 8,
                    borderRadius: 5
                    }
                }
                >
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <Text>Nutriscore : </Text>
                    <Text>{ item.infos.nutriscore_grade.toUpperCase() }</Text>
                </View>
                </Card> : null
            }
        </Card>
    );
}

export default ItemCard;