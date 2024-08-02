import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
import { Link } from "expo-router";
import list from './titles.json';
import imageMapping from './imageMapping';

export default function Titles() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Títulos disponíveis
            </Text>

            {list.listTitles.map((item) => (
                <View key={item.id} style={styles.itemButton}>
                    <View style={styles.itemContainer}>
                        <View style={styles.itemContainerDetails}>
                            <Image source={imageMapping[item.image]} style={styles.image} />
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>
                        </View>
                        <Link
                            href={{
                                pathname: "/mangaSingle/[id]",
                                params: { id: item.id }
                            }}
                            style={styles.itemLink} // Estilo do link para ser um botão
                        >
                            <Text style={styles.linkText}>Acessar</Text>
                        </Link>
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
        marginBottom: 20,
        marginTop: 20,
        color: '#F2E205',
        fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#40363F',
    },
    itemButton: {
        marginBottom: 20,
        borderRadius: 8,
        overflow: 'hidden', // Garante que o conteúdo não ultrapasse as bordas
    },
    itemContainer: {
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        padding: 10,
        flexDirection: 'column',
        width: '100%',
        //alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemContainerDetails: {
        flexDirection: 'row', // Organiza imagem e texto lado a lado
        alignItems: 'center', // Alinha a imagem e o texto verticalmente
        // position: 'relative', // Permite o posicionamento absoluto do botão
    },
    itemLink: {
        backgroundColor: '#F2CB07', // Cor de fundo do botão
        paddingVertical: 15, // Espaçamento vertical do botão
        paddingHorizontal: 20, // Espaçamento horizontal do botão
        marginTop: 10, // Espaço entre o item e o botão
        alignItems: 'center', // Centraliza o texto dentro do botão
        justifyContent: 'center', // Alinha o texto verticalmente no botão
        borderRadius: 30,
        textAlign: 'center'
    },
    linkText: {
        color: '#40363F',
        fontWeight: 'bold',
        fontSize: 16,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        lineHeight: 18,
        textAlign: 'left',
    },
});
