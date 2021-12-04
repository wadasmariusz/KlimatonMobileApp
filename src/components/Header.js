import React from 'react'
import {
    StyleSheet, 
    View,
    Text,
    Platform,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons';

import myStyles from '../constants/myStyles'
import colors from '../constants/colors'
import { useSelector } from 'react-redux';

const Header = ({ title, isLoading, back, style, buttonStyle }) => {
  const navigation = useNavigation()
  const light = useSelector(state => state.theme.theme);

  return (
    <View style={{...styles.container, ...{
      paddingTop: Platform.OS === 'android' ? 10 : 0,
    }, ...style}}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.touchableMenu, buttonStyle]}
          onPress={() => {
            back ? navigation.goBack() : navigation.toggleDrawer()
          }}
        >
          <Entypo name={back ? 'chevron-left' : 'menu'} size={26} color={light ? colors.lightGray : colors.textBlack} />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.left}>
          <Text style={[styles.title, light ? styles.titleLight : null]}>{isLoading ? 'Loading...' : title}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    ...myStyles.title,
  },
  titleLight: {
    color: colors.lightGray,
  },
  left: {
    flex: 1,
  },
  menu: {
    //marginRight: 10,
    // width: myStyles.screenWidth * 0.12,
  },
  touchableMenu: {
    padding: 5,
    //backgroundColor: 'red'
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    paddingHorizontal: myStyles.marginHorizontal,
    //paddingBottom: 10,
    //backgroundColor: 'red'
  },
})

export default Header
