import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();
  const [form, setForm] = useState({ nama: '', email: '', phone: '', pass: '', confirmPass: '' });

  const handleRegister = () => {
    const { nama, email, phone, pass, confirmPass } = form;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nama || !email || !phone || !pass) return Alert.alert("Error", "Semua field wajib diisi!");
    if (!emailRegex.test(email)) return Alert.alert("Error", "Format Email salah!");
    if (phone.length < 10) return Alert.alert("Error", "Nomor HP minimal 10 digit!");
    if (pass !== confirmPass) return Alert.alert("Error", "Password tidak cocok!");

    Alert.alert("Sukses", "Akun Berhasil Dibuat!");
    router.replace({ pathname: '/home', params: { userName: nama } });
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{flex: 1}}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Buat Akun Baru 🛡️</Text>
        <TextInput placeholder="Nama Lengkap" placeholderTextColor="#999" style={styles.input} onChangeText={(v) => setForm({...form, nama: v})} />
        <TextInput placeholder="Email" placeholderTextColor="#999" style={styles.input} keyboardType="email-address" onChangeText={(v) => setForm({...form, email: v})} />
        <TextInput placeholder="Nomor HP" placeholderTextColor="#999" style={styles.input} keyboardType="numeric" onChangeText={(v) => setForm({...form, phone: v})} />
        <TextInput placeholder="Password" placeholderTextColor="#999" style={styles.input} secureTextEntry onChangeText={(v) => setForm({...form, pass: v})} />
        <TextInput placeholder="Konfirmasi Password" placeholderTextColor="#999" style={styles.input} secureTextEntry onChangeText={(v) => setForm({...form, confirmPass: v})} />
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Daftar Sekarang</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 24, flexGrow: 1, justifyContent: 'center', backgroundColor: '#f9f9f9' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', padding: 15, borderRadius: 10, borderWidth: 1, borderColor: '#ddd', marginBottom: 15, color: '#000' },
  button: { backgroundColor: '#28a745', padding: 16, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});