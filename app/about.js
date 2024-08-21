import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Somos um app para ler mangá em qualquer hora ou lugar!
      </Text>
      
      <Link href="/about" style={styles.button} asChild>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Saiba Mais</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#090909',
    padding: 20,
  },
  mainText: {
    fontWeight: 'bold',
    color: '#F2E205',
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#40363F',
    fontWeight: 'bold',
    backgroundColor: '#F2CB07',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
