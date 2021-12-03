import React from 'react'
import { Platform } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import * as Linking from 'expo-linking'
import { format } from 'date-fns'
import { pl } from 'date-fns/locale'

export default {
    getCoordinates: point => {
        if (point) {
            return {
                latitude: parseFloat(point?.position?.lat),
                longitude: parseFloat(point?.position?.lng),
            }
        } else {
            return {
                latitude: 50,
                longitude: 22,
            }
        } 
    },

    formatDistance: distanceMeters => {
        if(!distanceMeters || typeof distanceMeters !== 'number') return ''

        if (distanceMeters < 1000) {
            return distanceMeters + " m"
        } else {
            return Math.trunc(distanceMeters / 100).toFixed(1) / 10 + " km"
        }
    },

    openMaps: (latitude, longitude) => {
        try {
            const scheme = Platform.select({ ios: 'comgooglemaps://?q=', android: 'google.navigation:q=' })
            const latLng = `${latitude},${longitude}`
            const url = Platform.select({
                ios: `${scheme}${latLng}`,
                android: `${scheme}${latLng}`,
            })
            Linking.openURL(url)

        } catch (e) { console.log(e.toString()) }
    },

    formatDate: (date, formatter) => {
        if (date) {
            return format(new Date(date), formatter ? formatter : 'd MMMM yyyy', { locale: pl })
        } else return 'Brak daty'
    },

    getMenuIcon: name => {
        return () => <Entypo name={name} size={22} color='#000000' />
    }

}
