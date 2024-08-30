import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#010101",
          borderBottomWidth: 0, // Remove a borda
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "center", // Centraliza o título na barra de navegação
      }}
    >
      {/* <Stack.Screen name="index" options={{ headerShown: false }} /> */}
      <Stack.Screen name="index" options={{ title: "MangApp" }} />
      <Stack.Screen name="titles" options={{ title: "Titles" }} />
      <Stack.Screen name="mangaSingle/[id]" options={{ title: 'Manga Single' }} />
      <Stack.Screen name="about" options={{ title: "about" }} />
      <Stack.Screen name="categorias" options={{ title: "categorias" }} />
      <Stack.Screen name="flex" options={{ title: "flex" }} />
      <Stack.Screen name="lojas" options={{ title: "lojas" }} />
    </Stack>
  );
}
