import React from 'react'
import {
    StyleSheet, 
    View,
    Text,
    Platform,
    TouchableOpacity,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from 'react-native-vector-icons'

import myStyles from '../styles/myStyles'

const Header = ({ title, isLoading, back }) => {
    const navigation = useNavigation()

    return (
        <View style={{...styles.container, ...{
            paddingTop: Platform.OS === 'android' ? 10 : 0,
        }}}>
            <View style={styles.menu}>
                <TouchableOpacity
                    style={styles.touchableMenu}
                    onPress={() => {
                        back ? navigation.goBack() : navigation.toggleDrawer()
                    }}
                >
                    <AntDesign name={back ? 'arrowleft' : 'bars'} size={26} color='#000000' />
                </TouchableOpacity>
            </View>
            <View style={styles.content}>
                <View style={styles.left}>
                    <Text style={styles.title}>{isLoading ? 'Loading...' : title}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        ...myStyles.title,
    },
    left: {
        flex: 1,
    },
    menu: {
        //marginRight: 10,
        width: myStyles.screenWidth * 0.12,
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
