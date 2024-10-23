// import React, { useEffect } from 'react';
// import * as Notifications from 'expo-notifications';
// import { Button, View } from 'react-native';

// Notifications.setNotificationHandler({ // setNotificationHandler: Define como as notificações serão tratadas no app.
//   handleNotification: async () => ({ 
//     shouldShowAlert: true, // shouldShowAlert: Define se a notificação deve ser exibida como um alerta visual.
//     shouldPlaySound: true, //shouldPlaySound: Define se a notificação deve reproduzir som.
//     shouldSetBadge: false, //houldSetBadge: Define se a notificação deve alterar o número de ícones de notificação (badge) no ícone do app (geralmente em iOS).
//   }),
// });

// export default function App() {
//     useEffect(() => {
//         const checkNotificationPermissions = async () => {
//             const { status } = await Notifications.getPermissionsAsync();
//             if (status !== 'granted') {
//                 const { status: newStatus } = await Notifications.requestPermissionsAsync();
//                 if (newStatus !== 'granted') {
//                     alert('Permissão de notificação negada!');
//                     return;
//                 }
//             }
//         };

//         checkNotificationPermissions();
//     }, []);

//     const sendNotification = async () => {
//         await Notifications.scheduleNotificationAsync({
//             content: {
//                 title: "Notificação React",
//                 body: 'Notificação Recebida com Sucesso!!!',
//             },
//             trigger: null,
//         });
//     };

//     return (
//         <View>
//             <Button title="Enviar Notificação" onPress={sendNotification} />
//         </View>
//     );
// }

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, Alert, StyleSheet } from 'react-native';
import { collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from './firebaseConfig'; // Importa o Firestore configurado
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

export default function App() {
  const [mangas, setMangas] = useState([]);
  const [serie, setSerie] = useState('');
  const [nome, setNome] = useState('');
  const [capitulo, setCapitulo] = useState('');

  // Função para buscar dados da coleção "Mangas" no Firestore
  const fetchMangas = async () => {
    try {
      const mangasCollection = collection(db, 'Mangas');
      const mangasSnapshot = await getDocs(mangasCollection);
      const mangasList = mangasSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setMangas(mangasList);
    } catch (error) {
      console.error("Erro ao buscar mangás: ", error);
    }
  };

  // Função para solicitar permissões de notificação
  const requestNotificationPermission = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    if (status !== 'granted') {
      const { status: newStatus } = await Notifications.requestPermissionsAsync();
      if (newStatus !== 'granted') {
        alert('Permissão de notificação não foi concedida.');
        return false;
      }
    }
    return true;
  };

  // Função para adicionar um novo mangá no Firestore e disparar notificação
  const addManga = async () => {
    if (!nome) {
      Alert.alert('Erro', 'O nome não pode ser nulo');
      return;
    }

    try {
      const newManga = {
        serie,
        nome,
        capitulo
      };
      await addDoc(collection(db, 'Mangas'), newManga);
      setSerie('');
      setNome('');
      setCapitulo('');
      fetchMangas();

      const hasPermission = await requestNotificationPermission();

      if (hasPermission) {
        // Disparar notificação ao adicionar um mangá
        await Notifications.scheduleNotificationAsync({
          content: {
            title: "Mangá Adicionado",
            body: `O mangá ${nome} foi adicionado com sucesso a sua lista!`,
          },
          trigger: null,
        });
      }
    } catch (error) {
      console.error("Erro ao adicionar mangá: ", error);
    }
  };

  // Função para deletar um mangá do Firestore e disparar notificação
  const deleteManga = async (mangaId) => {
    Alert.alert(
      'Confirmar',
      'Você tem certeza que deseja deletar este mangá?',
      [
        {
          text: 'Cancelar',
          style: 'cancel'
        },
        {
          text: 'Deletar',
          onPress: async () => {
            try {
              await deleteDoc(doc(db, 'Mangas', mangaId));
              fetchMangas();

              const hasPermission = await requestNotificationPermission();

              if (hasPermission) {
                // Disparar notificação ao deletar um mangá
                await Notifications.scheduleNotificationAsync({
                  content: {
                    title: "Mangá Deletado",
                    body: `Um mangá foi deletado!`,
                  },
                  trigger: null,
                });
              }
            } catch (error) {
              console.error("Erro ao deletar mangá: ", error);
            }
          }
        }
      ]
    );
  };

  // Executa a função ao carregar o componente
  useEffect(() => {
    fetchMangas();
    requestNotificationPermission();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Lista de mangás lidos</Text>
      
      {/* Formulário para adicionar um novo mangá */}
      <View style={styles.form}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          style={styles.input}
        />
        <TextInput
          placeholder="Capítulo"
          value={capitulo}
          onChangeText={setCapitulo}
          style={styles.input}
        />
        <TextInput
          placeholder="Série"
          value={serie}
          onChangeText={setSerie}
          style={styles.input}
        />
        <Button title="Adicionar Mangá" onPress={addManga} />
      </View>

      {/* Renderiza os mangás do Firestore */}
      {mangas.map(manga => (
        <View key={manga.id} style={styles.mangaCard}>
          {manga.nome && (
            <Text style={styles.mangaNome}>Nome: {manga.nome}</Text>
          )}
          {manga.capitulo && (
            <Text>Capítulo: {manga.capitulo}</Text>
          )}
          {manga.serie && (
            <Text>Série: {manga.serie}</Text>
          )}
          {/* Botão para deletar o mangá */}
          <Button title="Deletar" onPress={() => deleteManga(manga.id)} color="red" />
        </View>
      ))}
    </ScrollView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F2F2F2',
    flex: 1
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  form: {
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  input: {
    borderWidth: 1,
    borderColor: '#BFBFBF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#F9F9F9',
  },
  mangaCard: {
    marginVertical: 10,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  mangaNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
