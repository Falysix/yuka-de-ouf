import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
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
        fontWeight: 'bold'
    },
    list: {
        width: '100%',
        height: '30%'
    }
});