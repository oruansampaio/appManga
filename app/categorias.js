import { Text, ScrollView, View, Image, StyleSheet } from "react-native";
import list from './categorias.json';
import imageMapping from './imageMapping';

export default function Categorias() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Categorias</Text>

            {list.listCategorias.map((item) => (
                <View key={item.id} style={styles.itemContainer}>
                    <View style={styles.itemContent}>
                        {/* <Image source={imageMapping[item.image]} style={styles.image} /> */}
                        <View style={styles.textContainer}>
                            <Text style={styles.titleProduct}>{item.id}. {item.title}</Text>
                            <Text style={styles.description}>{item.description}</Text>
                        </View>
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
        marginVertical: 20,
        color: '#F2F2F2',
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
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        elevation: 5, // Sombra para Android
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
    }
});
