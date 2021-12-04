import React, { useEffect, useState } from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import {
    View,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native'
import Toggle from 'react-native-toggle-element';
import { Feather, Ionicons } from '@expo/vector-icons';

import myStyles from '../constants/myStyles';
import colors from '../constants/colors';
import * as themeActions from '../store/actions/theme';
import { useDispatch, useSelector } from 'react-redux';
import { getMenuLabel } from '../helpers/menu/getMenuLabel';
import * as authActions from '../store/actions/auth';
import logo from '../../assets/logo.png';
import logoLight from '../../assets/logo-light.png';

const DrawerTemplate = props => {
    const darkMode = useSelector(state => state.theme.theme);
    const token = useSelector(state => state.auth.token);
    const dispatch = useDispatch();

    const logout = async () => {
        await dispatch(authActions.logout())
    }

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            <View style={styles.logoView}>
                <Image
                    style={myStyles.logoIconText}
                    source={darkMode ? logoLight : logo}
                />
            </View>
            <View style={styles.drawerList}>
                <DrawerItemList {...props} />
                {!!token && (
                    <TouchableOpacity
                        onPress={logout}
                        style={styles.logoutItem}
                        >
                        <Ionicons name='md-power' size={18} color={colors.drawerTintColor} />
                        <View style={styles.logoutTextView}>
                            {getMenuLabel('Wyloguj')({
                            color: colors.drawerTintColor
                            })}
                        </View>
                    </TouchableOpacity>
                )}
                
            </View>
            <View style={styles.versionView}>
                <Toggle
                    value={darkMode || false}
                    onPress={(newState) => dispatch(themeActions.ToggleTheme(newState))}
                    thumbActiveComponent={
                        <View style={styles.thumbButton}>
                            <Feather name="moon" size={20} color="black" />
                        </View>
                    }
                    thumbInActiveComponent={
                        <View style={styles.thumbButton}>
                            <Feather name="sun" size={20} color="black" />
                        </View>
                    }
                    trackBar={{
                        activeBackgroundColor: colors.primary,
                        inActiveBackgroundColor: colors.background,
                        borderActiveColor: '#27292e',
                        borderInActiveColor: '#fcc360',
                        borderWidth: 4,
                        width: 100,
                        height: 40,
                    }}
                    thumbButton={{
                        activeBackgroundColor: '#abc0e0',
                        inActiveBackgroundColor: '#e0d8ab',
                        width: 40,
                        height: 40,
                    }}
                />
                {/* <Text style={styles.version}>Wersja {configuration.APP_VERSION}</Text> */}
            </View>
        </DrawerContentScrollView>
    )
}

const styles = StyleSheet.create({
    version: {
        ...myStyles.text,
        fontSize: 10,
    },
    logoView: {
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    drawerList: {
        flex: 16,
        //marginHorizontal: 10,
        // backgroundColor: 'white',

        borderRadius: myStyles.borderRadiusSmall,
    },
    versionView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    },
    thumbButton: {
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoutItem: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
        marginLeft: 20,
    },
    logoutTextView: {
        marginLeft: 35,
    },
})

export default DrawerTemplate
