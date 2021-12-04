import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import colors from '../../constants/colors'
import { Entypo } from '@expo/vector-icons';
import myStyles from '../../constants/myStyles';

export const AddReportButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Entypo name="plus" size={22} color={colors.textWhite} style={styles.icon} />
      <Text style={styles.buttonText}>Dodaj zgłoszenie</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    padding: 9,
    marginTop: 10,
    marginRight: myStyles.marginHorizontal,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  buttonText: {
    color: colors.textWhite,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 5,
  }
})