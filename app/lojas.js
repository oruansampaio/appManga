import React from 'react';
import { Text, ScrollView, View, StyleSheet, Link } from 'react-native'
import lojas from './lojas.json';

export default function Lojas() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Lojas Disponíveis</Text>
            {lojas.listLojas.map((loja) => (
                <View key={loja.id} style={styles.itemContainer}>
                    <View style={styles.itemContent}>
                        <View style={styles.textContainer}>
                            <Text style={styles.titleloja}>{loja.name}</Text>
                            <Text style={styles.description}>{loja.description}</Text>
                        </View>
                    </View>
                   
                        <View style={styles.itemLink}>

                            <Text style={styles.linkText}>Visitar Loja</Text>
                        </View>
                   
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#f2f2f2',
        fontSize: 24,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#090909'
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: "#f2f2f2",
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,

    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    itemLink: {
        backgroundColor: '#e8e728',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    linkText: {
        color: '#40363F',
        fontWeight: 'bold',
        fontSize: 16,
    },
    titleloja: {
        // textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#090909',
        fontSize: 18,
    },
    description: {
        color: '#090909',
        fontSize: 16,
    }

});
