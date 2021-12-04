import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Entypo, SimpleLineIcons, FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

import myStyles from "../../../constants/myStyles"; 
import colors, { ReportTypeColors } from "../../../constants/colors"; 

const reportTypes = {
  0: 'Brak danych',
  2: 'Powódź',
  4: 'Zalanie',
  6: 'Smog',
  8: 'Nieodpowiedni',
  10: 'Inne',
}

const ReportListItem = ({ item, style }) => {
  const navigation = useNavigation();
  const darkMode = useSelector(state => state.theme.theme);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Report', { report: item })}
      style={[styles.container, style]}
    >
      {/* <Text>{JSON.stringify(item)}</Text> */}
      <Text style={[styles.type, {color: ReportTypeColors[item?.type]}]}>{reportTypes[item?.type]}</Text>
      <View style={styles.row}>
        <View style={[styles.line, {backgroundColor: ReportTypeColors[item?.type]}]}></View>
        <View>
          <View style={styles.row}>
            <Text style={[styles.title, {color: darkMode ? colors.textWhite : colors.textBlack}]}>{item?.title}</Text>
            <SimpleLineIcons name="options-vertical" style={[styles.icon, {marginLeft: 'auto'}]} />
            </View>
          <Text style={[styles.description, {color: darkMode ? colors.lightGray : colors.gray}]}>{item?.description}</Text>
        </View>
      </View>
      <View style={[styles.row, styles.detailsBox]}>
        <View style={styles.detailWrapper}>
          <AntDesign name="like1" style={styles.icon}/>
          <Text style={[styles.details, {color: darkMode ? colors.textWhite : colors.textBlack}]}>{item?.likes}</Text>
        </View>
        <View style={styles.detailWrapper}>
          <FontAwesome name="commenting" style={styles.icon}/>
          <Text style={[styles.details, {color: darkMode ? colors.textWhite : colors.textBlack}]}>{item?.comments}</Text>
        </View>
        {!!item?.imageCount && <View style={styles.detailWrapper}>
          <Entypo name="images" style={styles.icon}/>
          <Text style={[styles.details, {color: darkMode ? colors.textWhite : colors.textBlack}]}>{item?.imageCount}</Text>
        </View>}
        <View style={styles.detailWrapper}>
          <Entypo name="address" style={styles.icon}/>
          <Text style={[styles.details, {color: darkMode ? colors.textWhite : colors.textBlack}]}>{item?.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.lightGray,
  },
  line: {
    width: 4,
    height: '100%',
    borderRadius: 12,
    backgroundColor: 'red',
    marginRight: 10,
  },
  type: {
    textTransform: 'uppercase',
    color: 'red',
    marginLeft: 14,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    width: '100%',
  },
  description: {
    color: colors.gray,
  },
  detailsBox: {
    marginTop: 15,
  },
  detailWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  icon: {
    fontSize: 18,
    color: colors.gray,
    marginRight: 5,
  }
});

export default ReportListItem;