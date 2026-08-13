import { View } from "@/components/Themed";
import { apiService } from "@/services/api";
import { testService } from "@/services/test";
import { Link } from "expo-router";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const [statusApi, setStatusApi] = useState('');
  const [name, inputName] = useState('');
  const [password, inputPassword] = useState('');

  const testInput = async (username: string, password: string) => {
    try {
      const data = await testService.nameService(username, password);
    } catch (error) {
      console.error(error);
    }
  }

  const testarConexao = async () => {
    try {
      const data = await apiService.getStatus();
      setStatusApi(data.mensagem);
    } catch (error) {
      setStatusApi('Erro ao conectar na API');
    }
  };

  const cadastro = async () => {
    try {
      const data = await apiService.registerUser();
    } catch (error) {
      console.error(error);
    }
  }

  const login = async (username: string, password: string) => {
    try {
      const data = await apiService.loginUser(username, password);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Expo Router + Cloudflare Workers</Text>

      <Button title="Testar API" onPress={testarConexao} />
      {statusApi ? <Text style={styles.status}>{statusApi}</Text> : null}

      <TextInput style={styles.inputText} onChangeText={inputName} value={name} placeholder="Usuário" />
      <TextInput style={styles.inputText} onChangeText={inputPassword} value={password} placeholder="Senha" />

      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={cadastro}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.botao} activeOpacity={0.7} onPress={() => login(name, password)}>
        <Text style={styles.botaoTexto}>Login</Text>
      </TouchableOpacity>

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

  botao: {
    backgroundColor: "#fff",
    marginVertical: 10,
  },

  botaoTexto: {
    textAlign: "center",
    fontSize: 24
  },

  inputText: {
    color: "#fff"
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