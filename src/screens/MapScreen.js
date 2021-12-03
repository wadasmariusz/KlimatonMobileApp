import React, { useEffect, useState, useRef } from 'react'
import {
    View,
    StyleSheet,
    Image,
} from 'react-native'
import MapView, { Marker, Callout } from 'react-native-maps'
import { SafeAreaView } from 'react-native-safe-area-context'

import Header from '@components/Header'
import MarkerCallout from '@components/MarkerCallout'
import myStyles from '@styles/myStyles'
import helpers from '@helpers/helpers'
import axios from 'axios'
import pinImage from '../../assets/pin.png'

const MapScreen = props => {
    const mapRef = useRef(null)
    const itemsRef = useRef([])
    const [markers, setMarkers] = useState([])

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
            {/* <View style={styles.header}>
                <SafeAreaView>
                    <Header title='Mapa' />
                </SafeAreaView>
            </View> */}
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
})

export default MapScreen
