import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "../../components/Header"; 
import myStyles from "../../constants/myStyles";
import { useSelector } from "react-redux";
import colors from "../../constants/colors";
import { AntDesign, FontAwesome, MaterialIcons, Entypo, MaterialCommunityIcons } from '@expo/vector-icons';
import TextField from "../../components/form/TextField.component";
import { TouchableOpacity } from "react-native-gesture-handler";
import helpers from "../../helpers/helpers";

const SingleReportScreen = (props) => {
  const report = props.route?.params?.report;
  const darkMode = useSelector(state => state.theme.theme);

  return (
    <View style={{backgroundColor: darkMode ? colors.primary : colors.background, flex: 1}}>
      <SafeAreaView style={styles.flex}>
        <Header back />
        <View style={styles.reportInfo}>
          <Text style={styles.title}>{report?.title}</Text>
          <Text style={styles.description}>{report?.description}</Text>
          <View style={styles.reportDetails}>
            <View style={[styles.address, styles.detail]}>
              <MaterialCommunityIcons name="account" style={styles.icon} />
              <Text style={styles.reportDetailText}>Anonim</Text>
            </View>
            <View style={[styles.date, styles.detail]}>
              <AntDesign name="clockcircleo" style={styles.icon}/>
              <Text style={styles.reportDetailText}>{helpers.formatDate(report?.reportDate, 'dd.MM.yyyy HH:mm')}</Text>
            </View>
            <View style={[styles.address, styles.detail]}>
              <Entypo name="address" style={styles.icon} />
              <Text style={styles.reportDetailText}>{report?.address}</Text>
            </View>
          </View>
          <View style={styles.reportImages}>
            {report?.images?.map((image, index) => (
              <TouchableOpacity key={index}>
                <Image source={{uri: image}} style={styles.reportImage}/>
              </TouchableOpacity>
            ))}
          </View>
        </View>
        <View style={styles.commentsSection}>
          <View style={styles.commentSectionHeader}>
            <TouchableOpacity style={styles.commentSectionButton}>
              <AntDesign name="like1" style={styles.commentSectionButtonIcon}/>
            </TouchableOpacity>
            <View style={styles.commentButtonBox}>
              <FontAwesome name="commenting" style={styles.icon}/>
              <Text>{report?.commentCount}</Text>
            </View>
            <View style={styles.commentButtonBox}>
              <AntDesign name="like1" style={styles.icon}/>
              <Text>{report?.likes}</Text>
            </View>
            <View style={[styles.commentButtonBox, styles.commentSorting]}>
              <Text>Sortowanie</Text>
              <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
            </View>
          </View>
          <View style={styles.comments}>
            {report?.comments?.map(comment => (
              <View style={styles.comment} key={comment?.id}>
                <View style={styles.avatar}>
                  <Image source={{uri: comment?.avatar}} style={styles.avatar}/>
                </View>
                <View style={styles.commentContent}>
                  <Text style={[styles.commentUser, {color: comment?.admin ? '#BD1616' : colors.textBlack}]}>{comment?.name}</Text>
                  <Text style={styles.commentText}>{comment?.content}</Text>
                </View>
              </View>
            ))}
          </View>
          <View style={styles.newComment}>
            <TextField
            inputProps={{
              placeholder: 'Napisz komentarz',
              autoCompleteType: 'off',
              }}></TextField>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  commentsSection: {
    paddingHorizontal: myStyles.marginHorizontal,
    flexGrow: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  row: {
    flexDirection: 'row',
  },
  comment: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  commentContent: {
    marginLeft: 15,
    backgroundColor: colors.lightGray,
    flexGrow: 1,
    flexShrink: 1,
    borderRadius: 10,
    padding: 10,
  },
  commentUser: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  commentText: {
    fontSize: 16,
  },
  commentSectionHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  commentSectionButton: {
    height: 46,
    width: 46,
    borderRadius: 23,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  commentSectionButtonIcon: {
    fontSize: 20,
    color: colors.white,
  },
  commentButtonBox: {
    backgroundColor: colors.lightGray,
    height: 46,
    borderRadius: 23,
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  icon: {
    marginRight: 5,
    fontSize: 15,
    color: colors.darkGray,
  },
  commentSorting: {
    marginRight: 0,
    marginLeft: 'auto',
  },
  reportImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  reportImages: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  reportInfo: {
    marginHorizontal: myStyles.marginHorizontal,
    paddingBottom: 20,
    marginBottom: 20,
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  newComment: {
    marginTop: 'auto',
    marginBottom: myStyles.marginHorizontal,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  detail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  reportDetails: {
    marginTop: 20,
  },
  reportDetailText: {
    fontSize: 15,
    color: colors.gray,
  }
});

export default SingleReportScreen;