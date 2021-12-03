import React from 'react'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import myStyles from '@styles/myStyles'

const MarkerCallout = ({ marker }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{marker?.name}</Text>
            <Text style={styles.address}>{marker?.address}</Text>
        </View>
        
    )
}

const styles = StyleSheet.create({
    address: {
        ...myStyles.text,
        textAlign: 'center',
    },
    name: {
        ...myStyles.smallTitle,
        fontSize: 15,
        textAlign: 'center',
    },
    container: {
        flex: 1,
        width: 200,
        //minHeight: 40,
        //backgroundColor: 'red',
    },
})

export default MarkerCallout
