import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    view: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    titleView: {
        height: '20%',
        width: '100%', 
        justifyContent: 'flex-end', 
        paddingLeft: 30,
        paddingBottom: 40
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    scanner: {
        height: '30%',
        margin: 30
    }
});