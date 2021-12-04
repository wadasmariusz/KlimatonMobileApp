import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import colors from '../../constants/colors'

export const AuthFormSeparator = ({children}) => {
  const darkMode = useSelector(state => state.theme.theme);

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
      <Text style={{color: darkMode ? colors.textWhite : colors.textBlack}}>{children}</Text>
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
    paddingVertical: 15,
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