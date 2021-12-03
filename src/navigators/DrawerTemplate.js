import React from 'react'
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
// import { Ionicons } from '@expo/vector-icons'

import myStyles from '@styles/myStyles'
// import { configuration } from '../app.config'

const DrawerTemplate = props => {
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
        backgroundColor: 'white',

        borderRadius: myStyles.borderRadiusSmall,
    },
    versionView: {
        flex: 1.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
    }
})

export default DrawerTemplate
