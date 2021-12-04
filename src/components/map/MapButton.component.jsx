import React, { Children } from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux';
import colors from '../../constants/colors'
import myStyles from '../../constants/myStyles';

export const MapButton = ({onPress, children}) => {
  const darkMode = useSelector(state => state.theme.theme);

  return (
    <TouchableOpacity style={[styles.button, {backgroundColor: darkMode ? colors.primary : colors.background}]} onPress={onPress}>
      {children}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 9,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
    width: 45,
    height: 45,
    marginTop: 10,
  },
})