import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { COLORS, FONT_SIZES, FONT_WEIGHTS } from '../../src/(constants)/theme';

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Registration Successful', 'You can now log in.');
        router.back();
      } else {
        Alert.alert('Registration Failed', data.error);
      }
    } catch (error) {
      Alert.alert('An error occurred', 'Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: COLORS.background,
  },
  title: {
    fontSize: FONT_SIZES.display1,
    fontWeight: FONT_WEIGHTS.bold,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    height: 48,
    borderColor: COLORS.grey,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  button: {
    backgroundColor: COLORS.nearlyDarkBlue,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZES.title,
    fontWeight: FONT_WEIGHTS.bold,
  },
  linkText: {
    color: COLORS.nearlyDarkBlue,
    textAlign: 'center',
    marginTop: 16,
  },
});

export default RegisterScreen;
