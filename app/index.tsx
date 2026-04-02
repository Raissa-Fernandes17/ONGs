import React, { useState } from 'react';
import {
  StyleSheet, Text, View, ImageBackground, TextInput,
  TouchableOpacity, SafeAreaView, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native';
import { useRouter } from 'expo-router';

const COLORS = { primary: '#2E7D32', secondary: '#0b7c11', bg: '#e3ede7', dark: '#101411' };

const WelcomeScreen = () => {
  const [form, setForm] = useState({ email: '', senha: '' });
  const [busca, setBusca] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (form.email.includes('@') && form.senha.length > 6) {
      alert("Sucesso!");
    } else {
      alert("Verifique os dados (Senha min. 7 caracteres)");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>

          {/* NAVBAR */}
          <View style={styles.navbar}>
            <Text style={styles.logoText}>CONNECTA</Text>
            <View style={styles.searchBar}>
              <TextInput 
                placeholder="Buscar projetos..." 
                style={styles.searchInput}
                value={busca}
                onChangeText={setBusca}
              />
            </View>
            <TouchableOpacity style={styles.btnSmall}>
              <Text style={styles.btnTextSmall}>Doe</Text>
            </TouchableOpacity>
          </View>

          {/* HERO SECTION */}
          <ImageBackground
            source={{ uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000' }}
            style={styles.hero}
          >
            <View style={styles.overlay}>
              <View style={styles.textSection}>
                <Text style={styles.heroTitle}>Solidariedade que Conecta</Text>
                <Text style={styles.heroSub}>Conectando propósitos a vidas.</Text>
              </View>

              <View style={styles.loginCard}>
                <Text style={styles.cardTitle}>Bem-vindo</Text>
                <TextInput
                  placeholder="E-mail"
                  style={styles.input}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={t => setForm({ ...form, email: t })}
                />
                <TextInput
                  placeholder="Senha"
                  secureTextEntry
                  style={styles.input}
                  onChangeText={t => setForm({ ...form, senha: t })}
                />

                <TouchableOpacity style={styles.btnMain} onPress={handleLogin}>
                  <Text style={styles.btnText}>Entrar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.btnMain, { backgroundColor: COLORS.primary }]} 
                  onPress={() => router.push('/projeto')}
                >
                  <Text style={styles.btnText}>Conhecer Projetos</Text>
                </TouchableOpacity>
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: COLORS.bg 
  },
  
  // NAVBAR (Barra superior com busca e botão Doe)
  navbar: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    paddingHorizontal: 15, 
    paddingVertical: 15, 
    alignItems: 'center', 
    backgroundColor: '#fff', 
    elevation: 4, 
    // Garante que a barra não fique sob o entalhe da câmera
    paddingTop: Platform.OS === 'android' ? 45 : 15 
  },
  logoText: { 
    fontSize: 18, 
    fontWeight: '900', 
    color: COLORS.primary 
  },
  searchBar: { 
    flex: 1, 
    marginHorizontal: 15 
  },
  searchInput: { 
    backgroundColor: '#f1f3f4', 
    paddingVertical: 6, 
    paddingHorizontal: 15, 
    borderRadius: 20, 
    fontSize: 14, 
    borderWidth: 1, 
    borderColor: '#e0e0e0' 
  },
  btnSmall: { 
    backgroundColor: COLORS.primary, 
    paddingHorizontal: 15, 
    paddingVertical: 6, 
    borderRadius: 20 
  },
  btnTextSmall: { 
    color: '#fff', 
    fontWeight: 'bold' 
  },

  // HERO SECTION (Imagem de fundo e textos centrais)
  hero: { 
    flex: 1, 
    minHeight: 600 
  },
  overlay: { 
    flex: 1, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    padding: 25, 
    justifyContent: 'center' 
  },
  textSection: { 
    marginBottom: 30 
  },
  heroTitle: { 
    fontSize: 32, 
    color: '#fff', 
    fontWeight: 'bold', 
    textAlign: 'center' 
  },
  heroSub: { 
    fontSize: 16, 
    color: '#eee', 
    marginTop: 8, 
    textAlign: 'center' 
  },

  // CARD DE LOGIN (O card branco flutuante)
  loginCard: { 
    backgroundColor: '#fff', 
    padding: 25, 
    borderRadius: 25, // Bordas bem arredondadas conforme a imagem
    elevation: 10,
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
  },
  cardTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    textAlign: 'center', 
    marginBottom: 20, 
    color: '#333' 
  },

  // INPUTS E BOTÕES
  input: { 
    backgroundColor: '#f9f9f9', 
    padding: 14, 
    borderRadius: 12, 
    marginBottom: 12, 
    borderWidth: 1, 
    borderColor: '#eee' 
  },
  btnMain: { 
    backgroundColor: COLORS.secondary, 
    padding: 16, 
    borderRadius: 12, 
    alignItems: 'center', 
    marginBottom: 10,
    // Borda escura suave para destacar o botão como na foto
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)' 
  },
  btnText: { 
    color: '#fff', 
    fontWeight: 'bold', 
    fontSize: 16 
  }
});

export default WelcomeScreen;