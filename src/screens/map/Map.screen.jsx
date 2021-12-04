import React, { useState, useRef, useEffect } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomSheet from 'reanimated-bottom-sheet';
import { useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { MaterialIcons, Octicons, Entypo } from '@expo/vector-icons';

import Header from '../../components/Header'; 
import MarkerCallout from '../../components/MarkerCallout';
import myStyles from '../../constants/myStyles'; 
import helpers from '../../helpers/helpers';
import pinImage from '../../../assets/map/zespol.png';
import colors from '../../constants/colors'; 
import { darkStyle } from '../../data/mapStyles';
import { AddReportButton } from '../../components/map/AddReportButton.component';
import { useNavigation } from '@react-navigation/core';
import reports from '../../data/Reports.json';
import ReportListItem from './reports-list-item/ReportsListItem.component';
import { FlatList } from 'react-native-gesture-handler';
import { MapButton } from '../../components/map/MapButton.component';

const MapScreen = props => {
  const mapRef = useRef(null)
  const itemsRef = useRef([])
  const [markers, setMarkers] = useState([])
  const sheetRef = React.useRef(null);
  const { height, width } = useWindowDimensions();
  const darkMode = useSelector(state => state.theme.theme);
  const token = useSelector(state => state.auth.token);
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(false);
  const [layer, setLayer] = useState(0);

  useEffect(() => {
    console.log(layer);
  }, [layer])

  const renderContent = () => (
    <View
      style={[styles.bottomView, {
        height: height*0.75,
        backgroundColor: darkMode ? colors.primary : colors.background
      }]}
    >
      <View style={styles.handle}></View>
      <FlatList
        nestedScrollEnabled
        data={reports}
        renderItem={({ item }) => <ReportListItem item={item} />}
        ListEmptyComponent={() =>
          !isLoading && <Text style={myStyles.emptyListMessage}>Brak zagrożeń</Text>
        }
        contentContainerStyle={[myStyles.listContent, {paddingTop: 0}]}
        keyExtractor={(i) => i?.id?.toString()}
        // refreshing={isLoading}
        // onRefresh={refetch}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.map}
        initialRegion={{
          latitude: 50.038337886,
          longitude: 22.0042022772,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
        rotateEnabled={false}
        customMapStyle={darkMode ? darkStyle : []}
    >
        {layer === 0 && reports.map((marker, index) => { console.log(helpers.getCoordinates(marker)); return (
          <Marker
            ref={item => itemsRef.current[index] = item}
            key={index}
            coordinate={helpers.getCoordinates(marker)}
            title={marker?.title}
            description={marker?.description}
            image={pinImage}
          >
            <Callout>
              <MarkerCallout marker={marker} />
            </Callout>
          </Marker>
        )})}
      </MapView>
      <View style={styles.header}>
        <SafeAreaView>
          <View style={styles.row}>
            <Header buttonStyle={[styles.menuBtn, {backgroundColor: darkMode ? colors.primary : colors.background}]}/>
            <AddReportButton onPress={() => navigation.navigate(token ? 'AddReport' : 'Login')}/>
          </View>
        </SafeAreaView>
      </View>
      <View style={styles.mapButtons}>
        <MapButton onPress={() => setLayer(1)}>
          <Entypo name="air" size={24} color={colors.secondary} />
        </MapButton>
        <MapButton onPress={() => setLayer(2)}>
          <Entypo name="water" size={24} color={colors.secondary} />
        </MapButton>
        <MapButton onPress={() => setLayer(0)}>
          <Octicons name="report" size={24} color={colors.secondary} />
        </MapButton>
        <MapButton>
          <MaterialIcons name="my-location" size={24} color='#0096FF' />
        </MapButton>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[height*0.75, 140]}
        initialSnap={1}
        borderRadius={20}
        renderContent={renderContent}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    // backgroundColor: 'red',
  },
  map: {
    flex: 1,
    height: myStyles.screenHeight,
    width: myStyles.screenWidth,
  },
  container: {
    flex: 1,
  },
  menuBtn: {
    borderRadius: 10,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  bottomView: {
    paddingVertical: myStyles.marginHorizontal,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  handle: {
    backgroundColor: colors.gray,
    width: 50,
    height: 4,
    borderRadius: 2,
    alignSelf: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  mapButtons: {
    alignItems: 'flex-end',
    padding: myStyles.marginHorizontal,
    position: 'absolute',
    top: 100,
    right: 0,
  }
})

export default MapScreen
