import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { MapNavigator} from '@navigators/Navigators'
import { useSelector } from 'react-redux'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

import DrawerTemplate from './DrawerTemplate'
import { getMenuIcon } from '../helpers/menu/getMenuIcon'
import { getMenuLabel } from '../helpers/menu/getMenuLabel'
import myStyles from '../constants/myStyles'
import colors from '../constants/colors'
import AuthNavigator from './stack-navigators/AuthStackNavigator'
import { MyReports } from '../screens/reports/MyReports.screen'
import { ReportList } from '../screens/reports/ReportList.screen'

const DrawerNavigatorTemplate = createDrawerNavigator()
const DrawerNavigator = () => {
  const token = useSelector((state) => state.auth.token);
  const darkMode = useSelector((state) => state.theme.theme);

  return (
    <DrawerNavigatorTemplate.Navigator
      screenOptions={{
        ...myStyles.defaultNavOptions,
        drawerStyle: {
          backgroundColor: darkMode ? colors.primary : colors.background,
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
      <DrawerNavigatorTemplate.Screen
        name='Reports'
        component={ReportList}
        options={{
          drawerLabel: getMenuLabel('Zgłoszenia'),
          drawerIcon: getMenuIcon(MaterialIcons, "report-problem"),
        }}
      />
      {!!token ? (
        <DrawerNavigatorTemplate.Screen
          name='MyReports'
          component={MyReports}
          options={{
            drawerLabel: getMenuLabel('Moje zgłoszenia'),
            drawerIcon: getMenuIcon(MaterialIcons, "account-circle"),
          }}
        />
      ) : (
        <DrawerNavigatorTemplate.Screen
          name='Auth'
          component={AuthNavigator}
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
