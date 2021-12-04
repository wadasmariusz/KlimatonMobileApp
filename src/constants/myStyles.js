import { Dimensions } from "react-native";

import colors from "./colors";

const screenHeight = Math.round(Dimensions.get("window").height);
const screenWidth = Math.round(Dimensions.get("window").width);
const viewWidth = 0.92;

export default {
  viewWidth: viewWidth * 100 + "%",
  screenWidth: screenWidth,
  screenHeight: screenHeight,
  marginHorizontal: (screenWidth * (1 - viewWidth)) / 2,
  listItemMargin: 20,
  borderRadiusBig: 22,
  borderRadiusSmall: 10,

  defaultNavOptions: {
    headerShown: false,
    drawerInactiveTintColor: colors.drawerTintColor,
    drawerActiveTintColor: colors.drawerTintColor,
    drawerActiveBackgroundColor: 'rgba(245, 158, 11, 0.2)'
  },

  defaultNavOptionsLightMode: {
    headerShown: false,
    drawerInactiveTintColor: colors.darkGray,
    drawerActiveTintColor: colors.darkGray,
    drawerActiveBackgroundColor: 'rgba(245, 158, 11, 0.2)'
  },

  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 0,
  },

  title: {
    color: colors.textBlack,
    fontSize: 22,
    fontWeight: "600",
  },
  smallTitle: {
    color: colors.textBlack,
    fontSize: 18,
    fontWeight: "600",
  },
  logoIconText: {
    height: 60,
    width: 240,
    resizeMode: "contain",
    marginVertical: 5,
  },
  text: {
    color: colors.textBlack,
    fontSize: 13,
  },
  background: {
    flex: 1,
    backgroundColor: colors.background,
  },
  section: {
    backgroundColor: colors.white,
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,
    elevation: 8,
  },

  input: {
    backgroundColor: "#E2E2E2",
    borderRadius: 10,
  },

  emptyListMessage: {
    textAlign: 'center',
    fontSize: 16,
    marginTop: 10,
  },

  get errorText() {
    return {
      ...this.text,
      color: colors.red,
      marginTop: 20,
    };
  },

  get button() {
    return {
      ...this.shadow,
      height: 50,
      borderRadius: this.borderRadiusSmall,
      backgroundColor: colors.secondary,
      justifyContent: "center",
      alignItems: "center",
      elevation: 3,
    };
  },

  get listContent() {
    return {
      paddingHorizontal: this.marginHorizontal,
      paddingVertical: 20,
    }
  }
};