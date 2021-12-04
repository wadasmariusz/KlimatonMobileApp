import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import DrawerTemplate from './DrawerTemplate'
import DrawerLabel from './DrawerLabel'
import { MapNavigator} from '@navigators/Navigators'
import LoginScreen from '../screens/auth/Login.screen'
import { useSelector } from 'react-redux'
import { getMenuIcon } from '../helpers/menu/getMenuIcon'
import { getMenuLabel } from '../helpers/menu/getMenuLabel'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import myStyles from '../constants/myStyles'
import colors from '../constants/colors'

const DrawerNavigatorTemplate = createDrawerNavigator()
const DrawerNavigator = () => {
  const token = useSelector((state) => state.auth.token);

  return (
    <DrawerNavigatorTemplate.Navigator
      screenOptions={{
        ...myStyles.defaultNavOptions,
        drawerStyle: {
          backgroundColor: colors.primary,
        },
      }}
      drawerContent={props => <DrawerTemplate {...props}/>}
    >
      <DrawerNavigatorTemplate.Screen
        name='Map'
        component={MapNavigator}
        options={{
          drawerLabel: getMenuLabel('Mapa'),
          drawerIcon: getMenuIcon(Entypo, "map"),
        }}
      />
      {!token && (
        <DrawerNavigatorTemplate.Screen
          name='Login'
          component={LoginScreen}
          options={{
            drawerLabel: getMenuLabel('Zaloguj się'),
            drawerIcon: getMenuIcon(MaterialIcons, "account-circle"),
          }}
        />
      )}
    </DrawerNavigatorTemplate.Navigator>
  )
}

export default DrawerNavigator
