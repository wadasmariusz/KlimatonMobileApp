import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import colors from '../../constants/colors'

export const AuthFormSeparator = ({children}) => {
  return (
    <View style={styles.separator}>
      <View style={styles.separatorLine}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['transparent', colors.gray]}
        style={styles.separatorLineBackground}
      />
      </View>
      <Text style={styles.separatorText}>{children}</Text>
      <View style={styles.separatorLine}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={[colors.gray, 'transparent']}
          style={styles.separatorLineBackground}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  separatorText: {
    color: colors.textWhite,
  },
  separatorLine: {
    flex: 1,height: 3,
    marginHorizontal: 10,
  },
  separatorLineBackground: {
    borderRadius: 2,
    flex: 1,
  },
})