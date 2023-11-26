import React, { useEffect, useState } from 'react'
import { Image, View, StyleSheet, Text, Alert } from 'react-native'
import CardType from './CardType';

export default function CardPokemonList({ endpoint }) {
    const [data, setData] = useState(null);
    const getData = async () => {
        try {
            const res = await fetch(endpoint);
            const json = await res.json();
            setData(json);
        }
        catch (err) {
            Alert.alert(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);

    const validateImage = (sprite) => {
        if (sprite.home.front_default === null)
            return data.sprites.front_default;
        else return sprite.home.front_default;
    }

    return (
        data !== null ? <View style={styles.content}>
            <Image style={styles.image} source={{
                uri: validateImage(data.sprites.other)
            }} />
            <View style={styles.contentChild}>
                <Text style={styles.title}>#{data.id} - {data.forms[0].name}</Text>
                <View

                    style={styles.textContainer}>
                    {data.types.map((el, index) => (<CardType name={el.type.name} key={index} />))}
                </View>
            </View>
        </View> : <></>
    )
}

const styles = StyleSheet.create({
    content: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        padding: 10,
        width: 80,
        height: 80
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentChild: {
        flexDirection: 'column',
        width: '40%'
    },
    title: {
        padding: 10,
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        textAlign: 'center'
    }
});
