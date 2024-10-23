import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import styles from './styles'; // Importando os estilos

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeHeader}>Welcome, Caio!</Text>
      <Text style={styles.welcomeSubHeader}>You have successfully logged in.</Text>

      {/* Aqui você pode adicionar mais conteúdo ou botões para navegação */}

      {/* Botão para sair ou voltar para a tela inicial */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => router.push('/header')}>
        <Text style={styles.logoutButtonText}>Log Out</Text>
      </TouchableOpacity>
    </View>
  );
}
