import { Text, View, Image, Pressable, StyleSheet } from "react-native";
import { Link } from 'expo-router';

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MANGAPP</Text>
      <Image style={styles.logo} source={require('../assets/images/logo.png')} />

      <Link href="/firebase" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Firebase</Text>
        </Pressable>
      </Link>

      <Link href="/notification" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Notificação</Text>
        </Pressable>
      </Link>

      <Link href="/firebaseCrud" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Firebase Crud</Text>
        </Pressable>
      </Link>

      <Link href="/titles" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Comece a ler agora!</Text>
        </Pressable>
      </Link>

      <Link href="/categorias" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Categorias</Text>
        </Pressable>
      </Link>


      <Link href="/lojas" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Lojas</Text>
        </Pressable>
      </Link>

      <Link href="/about" style={styles.button} asChild>
        <Pressable>
          <Text style={styles.buttonText}>Sobre nós!</Text>
        </Pressable>
      </Link>






    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F2E205',
  },
  title: {
    fontWeight: 'bold',
    color: '#090909',
    fontSize: 40,
    marginBottom: 20,
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 40,
  },
  button: {
    width: '80%',
    margin: 10,
    backgroundColor: '#090909',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    shadowColor: '#000', // Cor da sombra
    shadowOffset: { width: 0, height: 5 }, // Deslocamento da sombra
    shadowOpacity: 0.3, // Opacidade da sombra
    shadowRadius: 10, // Raio da sombra
    // Sombra para Android
    elevation: 5, // Elevação para sombra
  },
  buttonText: {
    fontSize: 18,
    color: '#f2f2f2',
    fontWeight: 'bold',
  },
});
