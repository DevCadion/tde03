import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { MaterialIcons } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';
import styles from './styles'; // Importando os estilos

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Função para validar login
  const handleLogin = () => {
    if (email === 'caio@feb.br' && password === '12345678') {
      // Redireciona para a tela de boas-vindas
      router.push('/welcome'); 
    } else {
      // Exibe um alerta de erro
      Alert.alert('Erro', 'Email ou senha incorretos.');
    }
  };


  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
        <MaterialIcons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
      
      <Text style={styles.header}>Hey,</Text>
      <Text style={styles.subHeader}>Welcome Back</Text>

      {/* Input de email */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="gray"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Input de senha */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#999" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          placeholderTextColor="gray"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Esqueceu a senha */}
      <TouchableOpacity style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Botão de Login */}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin} >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orContinueText}>Or Continue with</Text>

      {/* Login com redes sociais */}
      <View style={styles.socialLoginContainer}>
        {/* Ícone do Facebook */}
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="facebook" size={30} color="#32a852" />
        </TouchableOpacity>

        {/* Ícone do Google */}
        <TouchableOpacity style={styles.socialButton}>
        <AntDesign name="google" size={30} color="#32a852" />
        </TouchableOpacity>

        {/* Ícone da Apple */}
        <TouchableOpacity style={styles.socialButton}>
          <MaterialIcons name="apple" size={30} color="#32a852" />
        </TouchableOpacity>
      </View>

      {/* Link para Sign-Up */}
      <View style={styles.signUpContainer}>
        <Text>Don't have an Account? </Text>
        <TouchableOpacity>
          <Text style={styles.signUpText}>Sign-Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
