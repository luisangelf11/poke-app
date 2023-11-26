import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AllPoke from './AllPoke.js';
import Information from './Information.js';
import TeamPokemon from './TeamPokemon.js';
import { Entypo, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export default function Pokemons() {
    return (
        <Tab.Navigator initialRouteName='Information' screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Information" options={{
                tabBarIcon: (({focused}) => <Entypo name="info" size={24} color={focused ? "royalblue" : "#222"} />),
                title: 'Information'
            }} component={Information} />
            <Tab.Screen name="SearchPoke" options={{
                tabBarIcon: (({focused})=>
                    <MaterialCommunityIcons name="pokeball" size={24} color={focused ? "royalblue" : "#222"} />
                ),
                title: 'Pokemons'
            }} component={AllPoke} />
            <Tab.Screen name="TeamPokemon" options={{
                tabBarIcon: (({focused})=>
                    <AntDesign name="team" size={24} color={focused ? "royalblue" : "#222"} />
                ),
                title: 'My Team'
            }} component={TeamPokemon} />
        </Tab.Navigator>
    )
}