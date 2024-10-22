import { Text, ScrollView, View, Image, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import list from './titles.json';
import imageMapping from './imageMapping';

export default function Titles() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Recomendações</Text>

            {list.listTitles.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <View style={styles.itemContent}>
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
                        asChild
                    ><Pressable>
                        <View style={styles.itemLink}>
                            <Text style={styles.linkText}>Acessar</Text>
                        </View>
                        </Pressable>
                    </Link>
                </View>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20,
        color: '#f2f2f2',
        fontSize: 24,
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#090909',
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: '#F2F2F2',
        borderRadius: 8,
        overflow: 'hidden',
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 5 }, // Deslocamento da sombra
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 10, // Raio da sombra
        // Sombra para Android
        elevation: 5, // Elevação para sombra
    },
    itemContent: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
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
    itemLink: {
        backgroundColor: '#E8E728',
        paddingVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin: 10,
        shadowColor: '#000', // Cor da sombra
        shadowOffset: { width: 0, height: 5 }, // Deslocamento da sombra
        shadowOpacity: 0.3, // Opacidade da sombra
        shadowRadius: 10, // Raio da sombra
        // Sombra para Android
        elevation: 5, // Elevação para sombra
    },
    linkText: {
        color: '#40363F',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
