import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [permission, setPermission] = useState(null);

  useEffect(() => {
    // Função para solicitar permissão de acesso aos contatos
    const getPermissions = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      setPermission(status === 'granted');
    };

    getPermissions();
  }, []);

  // Função para carregar os contatos do dispositivo
  const loadContacts = async () => {
    if (permission) {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
      });

      if (data.length > 0) {
        setContacts(data);
      }
    } else {
      alert('Permissão para acessar contatos não foi concedida');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Contatos</Text>
      <Button title="Carregar Contatos" onPress={loadContacts} />

      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text style={styles.contactName}>{item.name}</Text>
            {item.phoneNumbers && (
              <Text style={styles.contactInfo}>
                Telefone: {item.phoneNumbers[0].number}
              </Text>
            )}
            {item.emails && (
              <Text style={styles.contactInfo}>Email: {item.emails[0].email}</Text>
            )}
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    fontSize: 16,
    color: '#555',
  },
});