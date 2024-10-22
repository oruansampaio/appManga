import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importa o Firestore configurado

export default function App() {
    const [mangas, setMangas] = useState([]);

    // Função para buscar dados da coleção "Mangas" no Firestore
    const fetchMangas = async () => {
        try {
            const mangasCollection = collection(db, 'Mangas');
            const mangasSnapshot = await getDocs(mangasCollection);
            const mangasList = mangasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setMangas(mangasList);
        } catch (error) {
            console.error("Erro ao buscar mangas: ", error);
        }
    };

    // Executa a função ao carregar o componente
    useEffect(() => {
        fetchMangas();
    }, []);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Mangás que você já leu</Text>
            {mangas.map(manga => (
                <View key={manga.id} style={styles.itemContainer}>
                    {manga.capitulo && (
                        <Text style={styles.itemText}>Capítulo: {manga.capitulo}</Text>
                    )}
                    {manga.nome && (
                        <Text style={styles.itemText}>Nome: {manga.nome}</Text>
                    )}
                    {manga.serie && (
                        <Text style={styles.itemText}>Série: {manga.serie}</Text>
                    )}
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#090909',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#f2f2f2',
        fontSize: 24,
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        padding: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5,
    },
    itemText: {
        fontSize: 18,
        marginVertical: 5,
        color: '#40363F',
    },
});
