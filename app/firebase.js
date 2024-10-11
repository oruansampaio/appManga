import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
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
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Mangas no Firestore</Text>
            {mangas.map(manga => (
                <View key={manga.id} style={{ marginVertical: 10 }}>
                    {/* Verifica se o campo "capitulo" existe */}
                    {manga.capitulo && (
                        <Text style={{ fontSize: 18 }}>Capítulo: {manga.capitulo}</Text>
                    )}
                    {/* Verifica se o campo "nome" existe */}
                    {manga.nome && (
                        <Text style={{ fontSize: 18 }}>Nome: {manga.nome}</Text>
                    )}
                    {/* Verifica se o campo "serie" existe */}
                    {manga.serie && (
                        <Text style={{ fontSize: 18 }}>Série: {manga.serie}</Text>
                    )}
                </View>
            ))}
        </View>
    );
}
