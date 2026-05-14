import {
  View,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
} from "react-native";

import { useEffect, useState } from "react";

import { Ionicons } from "@expo/vector-icons";

import ONGCard from "../components/ONGCard";

const COLORS = {
  primary: "#2E7D32",
  secondary: "#0b7c11",
  bg: "#f4f7f5",
  white: "#ffffff",
  text: "#222",
  muted: "#777",
};

export default function ExplorarScreen() {
  const [loading, setLoading] = useState(true);

  const [busca, setBusca] = useState("");

  const [ongs, setOngs] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setOngs([
        {
          id: "1",
          nome: "GreenPeace",
          causa: "Meio Ambiente",
          imagem:
            "https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=800",
        },

        {
          id: "2",
          nome: "Criança Feliz",
          causa: "Educação",
          imagem:
            "https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800",
        },

        {
          id: "3",
          nome: "Vida Saudável",
          causa: "Saúde",
          imagem:
            "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800",
        },

        {
          id: "4",
          nome: "Amor Animal",
          causa: "Proteção Animal",
          imagem:
            "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=800",
        },
      ]);

      setLoading(false);
    }, 2000);
  }, []);

  const ongsFiltradas = ongs.filter(
    (item) =>
      item.nome.toLowerCase().includes(busca.toLowerCase()) ||
      item.causa.toLowerCase().includes(busca.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator
          size="large"
          color={COLORS.primary}
        />

        <Text style={styles.loadingText}>
          Carregando ONGs...
        </Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <ImageBackground
        source={{
          uri: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200",
        }}
        style={styles.header}
        imageStyle={styles.headerImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>
            Explore causas incríveis 🌍
          </Text>

          <Text style={styles.subtitle}>
            Encontre ONGs e projetos para apoiar
          </Text>

          {/* PESQUISA */}
          <View style={styles.searchContainer}>
            <Ionicons
              name="search"
              size={20}
              color={COLORS.muted}
            />

            <TextInput
              placeholder="Buscar ONG ou causa..."
              placeholderTextColor="#999"
              style={styles.input}
              value={busca}
              onChangeText={setBusca}
            />
          </View>
        </View>
      </ImageBackground>

      {/* CATEGORIAS */}
      <View style={styles.categoryRow}>
        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>🌱 Ambiente</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>📚 Educação</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.category}>
          <Text style={styles.categoryText}>🏥 Saúde</Text>
        </TouchableOpacity>
      </View>

      {/* LISTA */}
      <FlatList
        data={ongsFiltradas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 30,
        }}
        renderItem={({ item }) => (
          <ONGCard ong={item} />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
  },

  header: {
    height: 240,
    justifyContent: "center",
  },

  headerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    paddingHorizontal: 20,
    justifyContent: "center",
  },

  title: {
    color: COLORS.white,
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
  },

  subtitle: {
    color: "#eee",
    fontSize: 15,
    marginBottom: 25,
  },

  searchContainer: {
    backgroundColor: COLORS.white,
    borderRadius: 18,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    height: 55,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15,
    color: COLORS.text,
  },

  categoryRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },

  category: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 18,
    elevation: 3,

    shadowColor: "#000",

    shadowOpacity: 0.08,

    shadowRadius: 5,
  },

  categoryText: {
    fontWeight: "600",
    color: COLORS.text,
    fontSize: 13,
  },

  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.bg,
  },

  loadingText: {
    marginTop: 15,
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "600",
  },
});