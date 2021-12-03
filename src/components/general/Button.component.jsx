import React from 'react'
import {ActivityIndicator, StyleSheet, Text, TouchableOpacity,} from 'react-native'

import myStyles from '../../constants/myStyles'
import colors from "../../constants/colors";

const Button = ({ children, text, type, onPress, isLoading, color, style }) => {
  const buttonPressed = () => {
    (onPress && !isLoading) && onPress()
  }

  switch (type) {
    case 'text':
      return (
        <TouchableOpacity
          style={styles.textButton}
          onPress={buttonPressed}>
          <Text style={{...styles.textButtonText, ...{
            color: color ? color : styles.textButtonText.color,
          }}}>{children || text}</Text>
        </TouchableOpacity>
      )
    default:
      return (
        <TouchableOpacity
          style={[styles.buttonView, style]}
          onPress={buttonPressed}
        >
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={colors.white}
            />
          )}
          <Text style={{...styles.buttonText, ...{
            color: color ? color : colors.textWhite
          }}}>{children || text}</Text>
        </TouchableOpacity>
      )
  }
}

const styles = StyleSheet.create({
  textButtonText: {
    textDecorationLine: 'underline',
    fontSize: 16,
  },
  textButton: {
    alignItems: 'center',
  },
  buttonText: {
    ...myStyles.title,
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
  },
  buttonView: {
    ...myStyles.button,
    padding: 10,
  },
})

export default Button