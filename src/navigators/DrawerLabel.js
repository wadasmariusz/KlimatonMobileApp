import React from 'react'
import { Text, StyleSheet } from 'react-native'

import myStyles from '@styles/myStyles'
import colors from '@styles/colors'

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
