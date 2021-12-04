import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import LoginScreen from '../../screens/auth/Login.screen' 
import myStyles from '../../constants/myStyles' 
import RegisterScreen from '../../screens/auth/Register.screen'

const AuthStackNavigator = createStackNavigator()
const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={myStyles.defaultNavOptions}>
      <AuthStackNavigator.Screen name='Login' component={LoginScreen} />
      <AuthStackNavigator.Screen name='Register' component={RegisterScreen} />
    </AuthStackNavigator.Navigator>
  )
}

export default AuthNavigator