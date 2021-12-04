import React, { useState, useRef } from 'react'
import {
    View,
    StyleSheet,
    Text,
} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'
import BottomSheet from 'reanimated-bottom-sheet';

import Header from '../components/Header'
import MarkerCallout from '../components/MarkerCallout'
import myStyles from '../constants/myStyles'
import helpers from '../helpers/helpers'
import pinImage from '../../assets/pin.png'
import { useWindowDimensions } from 'react-native';
import colors from '../constants/colors'; 
import { darkStyle } from '../data/mapStyles';
import { useSelector } from 'react-redux';

const MapScreen = props => {
  const mapRef = useRef(null)
  const itemsRef = useRef([])
  const [markers, setMarkers] = useState([])
  const sheetRef = React.useRef(null);
  const { height, width } = useWindowDimensions();
  const darkMode = useSelector(state => state.theme.theme);

  const renderContent = () => (
    <View
      style={[styles.bottomView, {
        height: height*0.75,
        backgroundColor: darkMode ? colors.primary : colors.background
      }]}
    >
      <View style={styles.handle}></View>
      <Text>Swipe down to close</Text>
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
        {markers.map((marker, index) => (
          <Marker
            ref={item => itemsRef.current[index] = item}
            key={index}
            coordinate={helpers.getCoordinates(marker)}
            title={marker?.name}
            description={marker?.address}
            image={pinImage}
          >
            <Callout>
              <MarkerCallout marker={marker} />
            </Callout>
          </Marker>
        ))}
      </MapView>
      <View style={styles.header}>
        <SafeAreaView>
          <Header buttonStyle={[styles.menuBtn, {backgroundColor: darkMode ? colors.primary : colors.background}]}/>
        </SafeAreaView>
      </View>
      <BottomSheet
        ref={sheetRef}
        snapPoints={[height*0.75, height*0.15]}
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
    //backgroundColor: 'red',
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
    padding: 16,
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
  }
})

export default MapScreen
