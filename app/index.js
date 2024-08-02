import { Text, View, Image, Pressable, StyleSheet } from "react-native"
import { Link } from 'expo-router';

export default function Index() {
  return (
  
    <View 
    style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#40363F'
    }}>

    <Text
    style={{fontWeight: 'bold', marginBottom: 0, marginTop: 20, color: '#F2E205', fontSize: 40}}>
      MANGAPP
    </Text>

    <Image
    style={{ 
      width: 300,
      height: 300,
    }}
    source={require('../assets/images/logo.png')}/>

<Link href="/titles" style={styles.button} asChild>
  <Pressable>
    <Text style={styles.buttonText}>
      Comece a ler agora!
    </Text>
  </Pressable>
</Link>


    </View>

);
}

const styles = StyleSheet.create({

  button: {
position: 'absolute',
bottom: 0,
left: 0,
right: 0,
margin: 20,
backgroundColor: '#F2CB07',
alignItems: 'center',
justifyContent: 'center',
paddingVertical: 15,
  },
  buttonText: {
    fontSize: 18,
    color: '#40363F',
    fontWeight: 'bold',

  },
});

// Paleta de cores: cinza escuro #40363F, cinza claro #6C6573, branco #F2F2F2, amarelo #F2E205, amarelo escuro #F2CB07


