import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>
        Encontre seus mangás favoritos a qualquer hora, em qualquer lugar, com praticidade e conforto!
      </Text>
      <Text style={styles.secondaryText}>
        Com uma vasta game de opções, oferecemos a melhor experiência para os fãs de mangá.
      </Text>

      <Link href="/titles" style={styles.button} asChild>
        <TouchableOpacity>
          <Text style={styles.buttonText}>Comece a ler agora</Text>
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
    fontSize: 26,
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 34,
  },
  secondaryText: {
    color: '#F2F2F2',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 26,
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
});
