import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.includes('@') && password.length >= 6) {
      router.replace({ pathname: '/home', params: { userName: email.split('@')[0] } });
    } else {
      Alert.alert("Login Gagal", "Email atau Password tidak valid!");
    }
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
      <Text style={styles.logo}>🛡️ SECURE GUARD</Text>
      <TextInput 
        placeholder="Email" 
        placeholderTextColor="#999"
        style={styles.input} 
        onChangeText={setEmail} 
      />
      <TextInput 
        placeholder="Password" 
        placeholderTextColor="#999"
        style={styles.input} 
        secureTextEntry 
        onChangeText={setPassword} 
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push('/register')}>
        <Text style={styles.linkText}>Belum punya akun? <Text style={{fontWeight: 'bold'}}>Daftar Disini</Text></Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#f9f9f9' },
  logo: { fontSize: 32, fontWeight: 'bold', textAlign: 'center', marginBottom: 30, color: '#333' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#ddd', marginBottom: 15, color: '#000' },
  button: { backgroundColor: '#007AFF', padding: 16, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  linkText: { marginTop: 20, textAlign: 'center', color: '#007AFF' }
});