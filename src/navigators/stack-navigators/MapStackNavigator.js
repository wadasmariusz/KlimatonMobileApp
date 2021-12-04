import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import myStyles from '../../constants/myStyles' 
import MapScreen from '../../screens/map/Map.screen'
import { AddReportScreen } from '../../screens/reports/AddReport.screen'

const MapStackNavigator = createStackNavigator()
const MapNavigator = () => {
  return (
    <MapStackNavigator.Navigator screenOptions={myStyles.defaultNavOptions}>
      <MapStackNavigator.Screen name='Map' component={MapScreen} />
      <MapStackNavigator.Screen name='AddReport' component={AddReportScreen} />
    </MapStackNavigator.Navigator>
  )
}

export default MapNavigator