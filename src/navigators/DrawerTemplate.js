import React, { useEffect, useState } from 'react'
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import Toggle from 'react-native-toggle-element';
import { Feather } from '@expo/vector-icons';

import myStyles from '../constants/myStyles';
import colors from '../constants/colors';
import * as themeActions from '../store/actions/theme';
import { useDispatch, useSelector } from 'react-redux';
// import { configuration } from '../app.config'

const DrawerTemplate = props => {
    // const [toggleValue, setToggleValue] = useState(false);
    const darkMode = useSelector(state => state.theme.theme);
    const dispatch = useDispatch();

    return (
        <DrawerContentScrollView {...props} contentContainerStyle={styles.container}>
            {/* <View style={styles.logoView}>
                <Image
                    style={myStyles.logoIconText}
                    source={require('../../assets/menu-logo.png')}
                />
            </View> */}
            <View style={styles.drawerList}>
                <DrawerItemList {...props} />
            </View>
            <View style={styles.versionView}>
                <Toggle
                    value={darkMode || false}
                    onPress={(newState) => dispatch(themeActions.ToggleTheme(newState))}
                    thumbActiveComponent={
                        <View style={styles.thumbButton}>
                            <Feather name="moon" size={20} color="black" />
                        </View>
                        // <Icon name="sun" width="40" height="40" fill={'#3BD2B5'} />
                    }
                    thumbInActiveComponent={
                        <View style={styles.thumbButton}>
                            <Feather name="sun" size={20} color="black" />
                        </View>
                        
                        // <Icon name="night" width="40" height="40" fill={'#03452C'} />
                    }
                    trackBar={{
                        activeBackgroundColor: colors.primary,
                        inActiveBackgroundColor: colors.background,
                        borderActiveColor: '#27292e',
                        borderInActiveColor: colors.secondary,
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
        flex: 4,
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
    }
})

export default DrawerTemplate
