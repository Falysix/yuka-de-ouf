import { StyleSheet } from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1
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
        marginBottom: 15
    }
});