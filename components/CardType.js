import React from 'react'
import { Text, View } from 'react-native'

export default function CardType({ name }) {
    const colorType = (type) => {
        if (type === 'steel') return '#60A1B8';
        else if (type === 'water') return '#2980EF';
        else if (type === 'bug') return '#91A119';
        else if (type === 'dragon') return '#5061E1';
        else if (type === 'electric') return '#FAC000';
        else if (type === 'ghost') return '#704170';
        else if (type === 'fire') return '#E62829';
        else if (type === 'fairy') return '#F170F1';
        else if (type === 'ice') return '#7CD3FF';
        else if (type === 'fighting') return '#FF8000';
        else if (type === 'normal') return '#9FA19F';
        else if (type === 'grass') return '#3FA129';
        else if (type === 'psychic') return '#F14179';
        else if (type === 'rock') return '#AFA981';
        else if (type === 'dark') return '#50413F';
        else if (type === 'ground') return '#915121';
        else if (type === 'poison') return '#9141CB';
        else if (type === 'flying') return '#81B9EF';
    }
    return (
        <View style={{ backgroundColor: colorType(name), marginLeft: 10, borderRadius: 5 }}>
            <Text style={{ padding: 10, color: '#fff', textTransform: 'uppercase', fontWeight: 'bold' }}>
                {name}
            </Text>
        </View>
    )
}
