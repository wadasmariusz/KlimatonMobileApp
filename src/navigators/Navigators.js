import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MapScreen from '../screens/MapScreen'

import myStyles from '../constants/myStyles'

const MapStackNavigator = createStackNavigator()
export const MapNavigator = () => {
    return (
        <MapStackNavigator.Navigator screenOptions={myStyles.defaultNavOptions}>
            <MapStackNavigator.Screen name='Map' component={MapScreen} />
        </MapStackNavigator.Navigator>
    )
}