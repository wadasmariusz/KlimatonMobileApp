import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useSelector } from 'react-redux'
import Header from '../../components/Header'
import colors from '../../constants/colors'

export const RankingScreen = () => {
  const darkMode = useSelector(state => state.theme.theme);

  return (
    <View style={{backgroundColor: darkMode ? colors.primary : colors.background, flex: 1}}>
      <SafeAreaView>
        <Header title="Ranking użytkowników"/>
      </SafeAreaView>
    </View>
  )
}
