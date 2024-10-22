import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native';
import * as Contacts from 'expo-contacts';

export default function ContactsList() {
  const [contacts, setContacts] = useState([]);
  const [permissionGranted, setPermissionGranted] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        setPermissionGranted(true);
      } else {
        alert('Permission to access contacts was denied');
      }
    })();
  }, []);

  const loadContacts = async () => {
    if (permissionGranted) {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.Name, Contacts.Fields.PhoneNumbers],
      });

      if (data.length > 0) {
        setContacts(data);
      } else {
        alert('No contacts found');
      }
    } else {
      alert('Permission not granted');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Load Contacts" onPress={loadContacts} />
      {contacts.length > 0 ? (
        <FlatList
          data={contacts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.contactItem}>
              <Text style={styles.contactText}>{item.name}</Text>
              {item.phoneNumbers && (
                <Text style={styles.phoneText}>{item.phoneNumbers[0]?.number}</Text>
              )}
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text>No contacts loaded</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
  contactItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  contactText: {
    fontSize: 18,
  },
  phoneText: {
    color: 'gray',
  },
});
