import React from 'react';
import { Text, StyleSheet } from 'react-native'
import myStyles from '../../constants/myStyles'

export const getMenuLabel = (title) => ({color}) => {
  return <Text style={{...styles.text, color: color}}>{title}</Text>
}

const styles = StyleSheet.create({
  text: {
    ...myStyles.title,
    fontSize: 14,
  },
})