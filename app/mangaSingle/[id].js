import React from "react";
import { Text, View, StyleSheet, Image, ScrollView, SafeAreaView } from "react-native";
import { useLocalSearchParams } from 'expo-router';
import list from '../titles.json';
import imageMapping from '../imageMapping';

export default function MangaSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listTitles.find((item) => item.id == id);

    if (!data) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.errorContainer}>
                    <Text style={styles.errorText}>Mangá não encontrado</Text>
                </View>
            </SafeAreaView>
        );
    }

    return (


        <SafeAreaView style={styles.container}>
	<ScrollView  style={styles.scrollView}>
		<Image
			source = {imageMapping[data.header]} 
			resizeMode = {"stretch"}
			style={styles.image}
		/>
		<Text style={styles.text}>
			{data.title}
		</Text>
		<View style={styles.row}>
			<View style={styles.column}>
				<View style={styles.column2}>
					<Text style={styles.text2}>
						{"SOBRE"}
					</Text>
					<View style={styles.absoluteBox}>
					</View>
				</View>
				<Text style={styles.text3}>
					{data.description}
				</Text>
				<Text style={styles.text4}>
					{"Continue lendo"}
				</Text>
			</View>
			<Image
				source = {imageMapping[data.image]} 
				resizeMode = {"stretch"}
				style={styles.image2}
			/>
		</View>
	</ScrollView>
</SafeAreaView>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	absoluteBox: {
		position: "absolute",
		bottom: -6,
		left: -2,
		width: 52,
		height: 2,
		backgroundColor: "#E8E728",
	},
	column: {
		width: 171,
		alignSelf: "flex-start",
	},
	column2: {
		width: 52,
		height: 16,
		marginBottom: 37,
	},
	image: {
		height: 244,
        width: 434,
		marginBottom: 26,
	},
	image2: {
		width: 141,
		height: 222,
		marginTop: 14,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginHorizontal: 43,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#090909",
		paddingBottom: 382,
	},
	text: {
		color: "#F2F2F2",
		fontSize: 24,
		marginBottom: 20,
		marginLeft: 42,
	},
	text2: {
		color: "#E8E728",
		fontSize: 16,
	},
	text3: {
		color: "#F2F2F2",
		fontSize: 12,
		marginBottom: 38,
		width: 171,
	},
	text4: {
		color: "#E8E728",
		fontSize: 14,
		marginLeft: 32,
	},
});

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#090909",
//     },
//     scrollView: {
//         flex: 1,
//     },
//     errorContainer: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: "#090909",
//     },
//     errorText: {
//         fontSize: 18,
//         color: '#E8E728',
//         fontWeight: 'bold',
//     },
//     headerImage: {
//         width: '100%',
//         height: 250, // Ajuste a altura conforme necessário para o cabeçalho
//         resizeMode: 'cover', // Faz com que a imagem cubra completamente o espaço do cabeçalho
//     },
//     contentContainer: {
//         padding: 20,
//     },
//     title: {
//         fontSize: 24,
//         fontWeight: 'bold',
//         color: '#F2F2F2',
//         marginBottom: 10,
//     },
//     description: {
//         fontSize: 14,
//         color: '#F2F2F2',
//         lineHeight: 22,
//         textAlign: 'justify',
//     },
//     additionalImage: {
//         width: '100%',
//         height: 200, // Ajuste a altura conforme necessário
//         marginTop: 20,
//         resizeMode: 'stretch',
//     },
// });
