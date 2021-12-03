import React from 'react'
import { View, ActivityIndicator as SystemActivityIndicator, StyleSheet, } from 'react-native'

import colors from '../../constants/colors'

const ActivityIndicator = props => {
  return (
    <View
      pointerEvents='none'
      style={styles.container}>
      <SystemActivityIndicator 
        color={colors.blue}
        size='large'
      />
    </View>
  )
}

const styles = StyleSheet.create({
	container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
	},
})

export default ActivityIndicator