import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import colors from '../../constants/colors';
import myStyles from '../../constants/myStyles';
import reports from '../../data/Reports.json';
import ReportListItem from '../map/reports-list-item/ReportsListItem.component';

export const MyReports = () => {
  const darkMode = useSelector(state => state.theme.theme);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={{backgroundColor: darkMode ? colors.primary : colors.background, flex: 1,}}>
      <SafeAreaView>
        <Header title="Moje zgłoszenia" />
        <FlatList
          data={[reports[0]]}
          renderItem={({ item }) => <ReportListItem
            item={item}
            style={[styles.listItem, {backgroundColor: darkMode ? colors.gray : colors.white}]}
            onPress={() => navigation.navigate('Reports.category', { params: {report: item}, screen: 'Report' })}
          />}
          ItemSeparatorComponent={() => (
            <View style={{ height: myStyles.listItemMargin }} />
          )}
          ListEmptyComponent={() =>
            !isLoading && <Text style={myStyles.emptyListMessage}>Brak zgłoszeń</Text>
          }
          contentContainerStyle={myStyles.listContent}
          keyExtractor={(i) => i?.id?.toString()}
          // refreshing={isLoading}
          // onRefresh={refetch}
        />
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: {
    backgroundColor: 'red'
  },
  listItem: {
    ...myStyles.section,
    paddingVertical: 10,
    paddingHorizontal: 15,
  }
})