import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Stats({stat, name}) {

    const ColorProgress = (stat)=>{
        if(stat < 50) return '#A40000';
        else if (stat >= 50 && stat <= 80) return '#FFDD57';
        else if (stat > 80) return '#A0E515';
    }

  return (
    <View style={styles.containerbar}>
        <Text style={styles.name}>{name} - {stat}</Text>
        <View style={styles.progress}>
            <View style={{backgroundColor: ColorProgress(stat), width: stat, height: 10, borderRadius: 5}}></View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    containerbar:{
        marginLeft: 30
    },
    name:{
        padding: 5,
        fontWeight: 'bold',
        fontSize: 14,
        textTransform: 'uppercase',
        color: '#222'
    },
    progress: {
        height: 10,
        borderRadius: 5,
        marginTop: 5
    }
});
