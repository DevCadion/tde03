import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useRouter } from 'expo-router';
import people from "@/src/assets/people.png"

export default function AccessScreen() {
  const router = useRouter();


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.skipText}>Skip</Text>
      </View>
      
      <View style={styles.imageContainer}>
        {/* Exibindo uma imagem local em vez de um ícone */}
        <Image source={people} style={styles.peopleImage} />
      </View>

      <Text style={styles.title}>Welcome to AppBilli</Text>
      <Text style={styles.subtitle}>Onde você não encontra nada de importante</Text>

      {/* Indicador de progresso */}
      <View style={styles.progressContainer}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
      </View>

      {/* Botão de acesso */}
      <TouchableOpacity style={styles.button} onPress={() => router.push('/login')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

