import { View, Text, ScrollView, Image } from 'react-native';

export default function Flex() {
    return (
        <ScrollView contentContainerStyle={{ flex: 1 }}>
            <View style={{ display: 'flex', flexDirection: "column" }}>
                <View style={{ flex: 2, flexDirection: "column", alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Titulo</Text>
                </View>

                <View style={{ flexDirection: "row", padding: 20 }}>
                    <View style={{ flex: 1, alignItems: 'center', overflow: 'hidden' }}>
                        <Image style={{ width: 150, height: 150 }} source={require('../assets/images/logo2.png')} />
                    </View>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Lorem Ipsum lorem ipsum Ipsum lorem ipsum Lorem Ipsum lorem ipsum Ipsum lorem ipsum</View>
                </View>
            </View>

        </ScrollView>
    )
}