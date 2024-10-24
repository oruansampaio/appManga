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
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="titles" options={{ title: "Títulos" }} />
      <Stack.Screen name="mangaSingle/[id]" options={{ title: 'Título' }} />
      <Stack.Screen name="about" options={{ title: "Sobre" }} />
      <Stack.Screen name="categorias" options={{ title: "Categorias" }} />
      <Stack.Screen name="lojas" options={{ title: "Lojas" }} />
      <Stack.Screen name="firebase" options={{ title: "firebase" }} />
      <Stack.Screen name="firebaseCrud" options={{ title: "firebaseCrud" }} />
      <Stack.Screen name="notification" options={{ title: "notification" }} />
      <Stack.Screen name="contatoLista" options={{ title: "notification" }} />
    </Stack>
  );
}
