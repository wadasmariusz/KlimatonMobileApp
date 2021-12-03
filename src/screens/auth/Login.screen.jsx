import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../constants/colors'
import myStyles from '../../constants/myStyles'

const LoginScreen = props => {

  return (
    <View style={styles.background}>
      <SafeAreaView style={styles.flex}>
        <Text>Hwllo</Text>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.secondary,
  },
  errorText: {
    ...myStyles.errorText,
    marginVertical: 10
  },
  successMessage: {
    color: colors.green,
    marginVertical: 10
  },
  input: {
    marginVertical: 10,
  },
  logo: {
    height: myStyles.screenWidth * 0.4,
    width: myStyles.screenWidth * 0.65,
    resizeMode: 'contain',
  },
  iconView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    paddingBottom: 10,
  },
  flex: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginHorizontal: myStyles.marginHorizontal,
  },
  submitBtn: {
    marginTop: 20,
  },
  forgotPasswordText: {
    color: colors.primary,
    fontWeight: 'bold',
  }
})

export default LoginScreen