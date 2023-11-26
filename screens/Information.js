import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native'
import Unown from '../assets/unown.gif'
import { FontAwesome } from '@expo/vector-icons'
import CardPokemon from '../components/CardPokemon';
import Loader from '../components/Loader';

export default function Information() {
  const [data, setData] = useState(null);
  const [id, setId] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      if (id >= 1 && id <= 1010) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const json = await res.json();
        setData(json);
      } else {
        Alert.alert('Insert an Id between 1 and 1010');
        setData(null);
      }
      setTimeout(()=>{
        setLoading(false);
      }, 4000);
    }
    catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if (id !== null) getData();
  }, [id]);

  const handlePress = () => {
    Alert.prompt('Insert a Pokemon ID', null, (text) => {
      setId(text);
      setLoading(true);
    }, 'plain-text');
  }

  const validateImage = (sprite) => {
    if (sprite.home.front_default === null)
      return data.sprites.front_default;
    else return sprite.home.front_default;
  }

  return (
    <View style={styles.contain}>
      <Text style={styles.title}>Search a pokemon for ID</Text>
      {data === null ?
        <Image style={styles.image} source={Unown} />
        : (
          loading ? <Loader />
            : <CardPokemon uriImage={validateImage(data.sprites.other)} name={data.forms[0].name}
              types={data.types} id={data.id} abilities={data.abilities} stats={data.stats}/>
        )
      }
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <FontAwesome name="search" size={26} color="white" />
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
  contain: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2468B1',
    textTransform: 'uppercase',
    padding: 10
  },
  button: {
    backgroundColor: '#2468B1',
    width: 70,
    height: 70,
    borderRadius: 100,
    padding: 22,
    marginLeft: 300,
    marginTop: 80
  }
});