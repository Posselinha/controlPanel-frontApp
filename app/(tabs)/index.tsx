import { View } from "@/components/Themed";
import { apiService } from "@/services/api";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  const [statusApi, setStatusApi] = useState('');

  const testarConexao = async () => {
    try {
      const data = await apiService.getStatus();
      setStatusApi(data.mensagem);
    } catch (error) {
      setStatusApi('Erro ao conectar na API');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Expo Router + Cloudflare Workers</Text>

      <Button title="Testar API" onPress={testarConexao} />
      {statusApi ? <Text style={styles.status}>{statusApi}</Text> : null}

      <View style={styles.linkArea}>
        <Link href="/produtos" asChild>
          <Button title="Ir para lista de Produtos =>" color="#0066cc" />
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },

  status: {
    marginTop: 15,
    color: "#2e7d32",
    fontWeight: "bold",
    textAlign: "center"
  },

  linkArea: {
    marginTop: 40
  }
})