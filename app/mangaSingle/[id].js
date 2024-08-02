import React from "react"
import { Text, View, StyleSheet, Image, ScrollView } from "react-native"
import { useLocalSearchParams } from 'expo-router'
import list from '../titles.json'
import imageMapping from '../imageMapping';

export default function mangaSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listTitles.find(
        (item) => item.id == id)
    // console.log(data)

    return (
        <ScrollView style={styles.container}>
            <Image
                style={styles.image}
                source={imageMapping[data.image]}
            />
            <View style={styles.containerSingle}>
                <Text style={styles.titleProduct}>  {data.title} </Text>
                <Text style={styles.description}> {data.description} </Text>

            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2D8C2',
    },
    containerSingle: {
        padding: 20,
    },
    image: {
        width: 'auto',
        height: 200,
        borderEndEndRadius: 15,
        borderEndStartRadius: 15,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'justify',
        marginBottom: 10

    }
});