import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import DrawerNavigator from './DrawerNavigator'
import { useSelector } from 'react-redux';
import StartupScreen from '../screens/general/Startup.screen';

export const AppNavigator = () => {
  const token = useSelector((state) => state.auth.token);
  const triedLogin = useSelector((state) => state.auth.triedLogin);

  return (
    <NavigationContainer>
      {triedLogin ? <DrawerNavigator /> : <StartupScreen />}
    </NavigationContainer>
  )
}

export default AppNavigator
