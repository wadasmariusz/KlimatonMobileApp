import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import myStyles from '../../constants/myStyles' 
import MapScreen from '../../screens/map/Map.screen'
import { AddReportScreen } from '../../screens/reports/AddReport.screen'
import { ReportList } from '../../screens/reports/ReportList.screen'
import SingleReportScreen from '../../screens/reports/SingleReport.screen'

const ReportStackNavigator = createStackNavigator()
const ReportNavigator = () => {
  return (
    <ReportStackNavigator.Navigator screenOptions={myStyles.defaultNavOptions} initialRouteName='Reports'>
      <ReportStackNavigator.Screen name='Reports' component={ReportList} />
      <ReportStackNavigator.Screen name='Report' component={SingleReportScreen} />
    </ReportStackNavigator.Navigator>
  )
}

export default ReportNavigator