import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerTintColor: '#007AFF' }}>
      <Stack.Screen name="index" options={{ title: "Login" }} />
      <Stack.Screen name="register" options={{ title: "Daftar Akun" }} />
      <Stack.Screen name="home" options={{ title: "Beranda", headerLeft: () => null }} />
    </Stack>
  );
}