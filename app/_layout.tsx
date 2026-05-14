import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // 1. Remove o título "index" e as barras cinzas do topo (Desafio de UX)
        headerShown: false,
        // 2. Define uma animação suave entre as telas
        animation: 'fade_from_bottom',
      }}
    >
      {/* 3. Registra as telas explicitamente para evitar erros de "Unmatched Route" */}
      <Stack.Screen name="index" options={{ title: 'Login' }} />
      <Stack.Screen name="screen/dashboard" options={{ title: 'Painel' }} />
      <Stack.Screen name="projeto" options={{ title: 'Projetos' }} />
    </Stack>
  );
}
