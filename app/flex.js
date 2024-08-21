import { View, Text, ScrollView } from 'react-native';

export default function Flex() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ flex: 1, backgroundColor: 'red', flexDirection: "column" }}>
                <View style={{ flex: 1, backgroundColor: 'red', flexDirection: "column" }}>
                    <Text>Titulo</Text>
                </View>

                <View style={{ flex: 1, backgroundColor: 'yellow', flexDirection: "row", padding: 20 }}>
                    <View style={{flex: 1, backgroundColor: "blue"}}>Imagem</View>
                    <View style={{flex: 1, backgroundColor: "pink"}}>Texto</View>
                </View>
            </View>

        </ScrollView>
    )
}