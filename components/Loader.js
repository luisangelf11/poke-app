import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import LoaderIMG from '../assets/loader.gif'

export default function Loader() {
    return (
        <View style={{height: 300}}>
            <Image source={LoaderIMG} style={styles.loader} />
            <Text style={styles.title}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        padding:10,
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: 10,
        color: '#222'
    }
});
