import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../constants/colors'

export const SocialButton = ({image, onPress}) => {
  return (
    <TouchableOpacity
      style={styles.socialButton}
      onPress={onPress}
    >
      <Image
        style={styles.icon}
        source={image}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  socialButton: {
    borderWidth: 2,
    borderColor: colors.gray,
    padding: 8,
    borderRadius: 10,
  },
  icon: {
    width: 30,
    height: 30,
  }
})