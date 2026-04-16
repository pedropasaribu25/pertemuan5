import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function HomeScreen() {
  const { userName } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Selamat Datang,</Text>
      <Text style={styles.name}>{userName || 'User'}! 👋</Text>
      <TouchableOpacity style={styles.logout} onPress={() => router.replace('/')}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  welcome: { fontSize: 18, color: '#666' },
  name: { fontSize: 28, fontWeight: 'bold', color: '#007AFF', marginVertical: 10 },
  logout: { marginTop: 30, backgroundColor: '#ff4444', padding: 10, borderRadius: 5 }
});