const imageMapping = {
    "manga-1": require('../assets/images/manga/naruto.jpg'),
    "manga-2": require('../assets/images/manga/bleach.jpg'),
    "header-1": require('../assets/images/manga/narutoheader.jpg'),
    "header-2": require('../assets/images/manga/narutoheader.jpg')
};

export default imageMapping;

// <SafeAreaView style={styles.container}>
// 	<ScrollView  style={styles.scrollView}>
// 		<Image
// 			source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
// 			resizeMode = {"stretch"}
// 			style={styles.image}
// 		/>
// 		<Text style={styles.text}>
// 			{"Naruto"}
// 		</Text>
// 		<View style={styles.row}>
// 			<View style={styles.column}>
// 				<View style={styles.column2}>
// 					<Text style={styles.text2}>
// 						{"SOBRE"}
// 					</Text>
// 					<View style={styles.absoluteBox}>
// 					</View>
// 				</View>
// 				<Text style={styles.text3}>
// 					{"Naruto é uma série de mangá\nescrita e ilustrada por Masashi \nKishimoto, que conta a \nhistória de Naruto Uzumaki,\num jovem ninja que\nconstantemente procura por\nreconhecimento..."}
// 				</Text>
// 				<Text style={styles.text4}>
// 					{"Continue lendo"}
// 				</Text>
// 			</View>
// 			<Image
// 				source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
// 				resizeMode = {"stretch"}
// 				style={styles.image2}
// 			/>
// 		</View>
// 	</ScrollView>
// </SafeAreaView>