import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../components/Header'

export const MyAccount = () => {
  return (
    <SafeAreaView>
      <Header title="Moje konto"/>
    </SafeAreaView>
  )
}
