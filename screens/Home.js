import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import PokeLogo from '../assets/logoPokemon.png'
import Gif from '../assets/PokeballGif.gif'

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={PokeLogo} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>Welcome to the Pokemon App</Text>
        <Text style={styles.text}>Get to know all the existing pokemon and generate your teams randomly.
        </Text>
        <Text style={styles.textBold}>Catch them now!</Text>
      </View>
      <Image source={Gif} style={styles.pokeball}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Pokemons')}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center', justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'contain'
  },
  pokeball: {
    width: 100,
    height:100,
    resizeMode: 'contain',
    marginTop: 50
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 20,
    color: '#2468B1',
    textTransform: 'uppercase',
    textAlign: 'center'
  },
  text: {
    fontSize: 18,
    padding: 20,
    textAlign: 'center',
    lineHeight: 30
  },
  textBold: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#2468B1'
  },
  button: {
    marginTop: 90,
    backgroundColor: '#2462B1',
    borderRadius: 5,
    width: 200,
    height: 30,
    padding: 6
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});
