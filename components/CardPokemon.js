import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'
import CardType from './CardType';
import Stats from './Stats';

export default function CardPokemon({ uriImage, name, types, id, abilities, stats }) {

  return (
    <View style={{ height: 300 }}>
      <View style={{flexDirection: 'row', marginTop: 30}}>
        <Image source={{ uri: uriImage }} style={styles.pokeImage} />
        <View>
          <Text style={styles.title}>#{id} - {name}</Text>
          <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Types</Text>
          <View style={styles.textContainer}>
            {types.map((el, index) => (<CardType name={el.type.name} key={index} />))}
          </View>
          <Text style={{ padding: 10, fontWeight: 'bold', fontSize: 16, textAlign: 'center' }}>Abilities</Text>
          <View style={styles.textContainerAbilities}>
            {abilities.map((el, index) => (<Text style={{
              color: el.is_hidden ? 'royalblue' : '#222',
              padding: 3,
              textTransform: 'capitalize',
            }} key={index}>{el.ability.name}</Text>))}
          </View>
        </View>
      </View>
      <View>
        {stats.map((el, index)=> (<Stats key={index} stat={el.base_stat} name={el.stat.name}/>))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  pokeImage: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainerAbilities: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    padding: 10,
    fontSize: 17,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});
