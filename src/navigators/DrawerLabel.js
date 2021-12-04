import React from 'react'
import { Text, StyleSheet } from 'react-native'

import myStyles from '../constants/myStyles'
import colors from '../constants/colors'

const DrawerLabel = props => {
    return (
        <Text style={styles.text}>{props.children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        ...myStyles.title,
        color: colors.textBlack,
        fontSize: 14,
    },
})

export default DrawerLabel
