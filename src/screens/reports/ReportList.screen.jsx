import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'

export const ReportList = () => {
  const darkMode = useSelector(state => state.theme.theme)

  return (
    <SafeAreaView>
      <Text>Hello{darkMode?.toString()}</Text>
    </SafeAreaView>
  )
}
