import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'

import helpers from '@helpers/helpers'
import DrawerTemplate from './DrawerTemplate'
import DrawerLabel from './DrawerLabel'
import { MapNavigator} from '@navigators/Navigators'

const DrawerNavigatorTemplate = createDrawerNavigator()
const DrawerNavigator = () => {
    return (
        <DrawerNavigatorTemplate.Navigator
            drawerContent={props => <DrawerTemplate {...props}/>}
        >
            <DrawerNavigatorTemplate.Screen
                name='Map'
                component={MapNavigator}
                options={{
                    drawerLabel: () => <DrawerLabel>Mapa</DrawerLabel>,
                    drawerIcon: helpers.getMenuIcon('map'),
                }}
            />
        </DrawerNavigatorTemplate.Navigator>
    )
}

export default DrawerNavigator
