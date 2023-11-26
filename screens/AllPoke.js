import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, FlatList, Alert, ActivityIndicator } from 'react-native'
import CardPokemonList from '../components/CardPokemonList';

export default function AllPoke() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);  
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${offset}`);
      const json = await res.json();
      if (json.results.length !== 0) {
        setIsLoading(true);
        setTimeout(()=>{
          setIsLoading(false);
          setOffset(offset + 20)
          setData([...data, ...json.results]);
        }, 3000);
        //console.log(json.results);
      } else {
        Alert.alert("There are not more pokemons");
      }
    }
    catch (err) {
      Alert.alert(err);
    }
  }

  useEffect(() => {
    getData();
  }, []);


  const renderFooter = () => {
    return isLoading ? (
      <ActivityIndicator style={{padding: 5}} size="large" />
    ) : null;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Pokédex</Text>
      <FlatList
        style={styles.list}
        data={data}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => <CardPokemonList endpoint={item.url} />}
        onEndReached={getData} // Cargar más cuando se llega al final
        onEndReachedThreshold={0.2}
        ListFooterComponent={renderFooter}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, width: "100%", justifyContent: 'center', alignItems: 'center', height: 'auto'
  },
  list: {
    width: '100%'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#2468B1',
    textTransform: 'uppercase',
    padding: 10
  },
});
