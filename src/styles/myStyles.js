import { Dimensions } from 'react-native'

import colors from './colors'

const screenHeight = Math.round(Dimensions.get('window').height)
const screenWidth = Math.round(Dimensions.get('window').width)
const viewWidth = 0.92

export default {
    viewWidth: (viewWidth * 100) + '%',
    screenWidth: screenWidth,
    screenHeight: screenHeight,
    marginHorizontal: (screenWidth * (1 - viewWidth)) / 2,
    listItemMargin: 10,
    borderRadiusBig: 22,
    borderRadiusSmall: 10,

    defaultNavOptions: {
        headerShown: false,
    },

    title: {
        color: colors.textBlack,
        fontSize: 22,
        fontWeight: 'bold',
    },
    smallTitle: {
        color: colors.textBlack,
        fontSize: 18,
        fontWeight: 'bold',
    },
    logoIconText: {
        height: 60,
        width: 240,
        resizeMode: 'contain',
    },
    text: {
        color: colors.textBlack,
        fontSize: 13,
    },
    background: {
        flex: 1,
        backgroundColor: colors.lightGray,
    },
    section: {
        backgroundColor: colors.white,
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8,
    },
}
