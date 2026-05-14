import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';

import {
  createNativeStackNavigator,
  NativeStackScreenProps
} from '@react-navigation/native-stack';

import DashboardScreen from './screen/dashboard';
import Projeto from './projeto';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: {
    userName: string;
    voluntarioId: string;
  };
  Projeto: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

const COLORS = {
  primary: '#2E7D32',
  secondary: '#0b7c11',
  bg: '#e3ede7',
  dark: '#101411'
};

const LoginScreen = ({ navigation }: Props) => {
  const [nome, setNome] = useState('');
  const [busca, setBusca] = useState('');

  const handleEntrar = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Por favor, digite seu nome.');
      return;
    }

    // Navegando DIRETO para 'Projeto' (a tela que tem o menu inferior)
    // Isso evita ter que clicar duas vezes ou passar pela tela de ID
    navigation.navigate('Projeto');
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View style={styles.navbar}>
            <Text style={styles.logoText}>ONG CONNECT</Text>
            <View style={styles.searchBar}>
              <TextInput
                placeholder="Buscar causas..."
                style={styles.searchInput}
                value={busca}
                onChangeText={setBusca}
              />
            </View>
          </View>

          <ImageBackground
            source={{
              uri: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000'
            }}
            style={styles.hero}
          >
            <View style={styles.overlay}>
              <View style={styles.textSection}>
                <Text style={styles.heroTitle}>Solidariedade que Conecta</Text>
                <Text style={styles.heroSub}>
                  Sua jornada como voluntário começa aqui.
                </Text>
              </View>

              <View style={styles.loginCard}>
                <Text style={styles.cardTitle}>Identificação</Text>

                <TextInput
                  placeholder="Seu nome completo"
                  style={styles.input}
                  value={nome}
                  onChangeText={setNome}
                />

                <TouchableOpacity
                  style={styles.btnMain}
                  onPress={handleEntrar}
                >
                  <Text style={styles.btnText}>Entrar no Painel</Text>
                </TouchableOpacity>

                {/* Botão "Ver Projetos" removido conforme solicitado */}
              </View>
            </View>
          </ImageBackground>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
      <Stack.Screen name="Projeto" component={Projeto} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg },
  navbar: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    paddingVertical: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
    paddingTop: Platform.OS === 'android' ? 45 : 20
  },
  logoText: { fontSize: 18, fontWeight: '900', color: COLORS.primary },
  searchBar: { flex: 1, marginLeft: 15 },
  searchInput: {
    backgroundColor: '#f1f3f4',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#e0e0e0'
  },
  hero: { flex: 1, minHeight: 600 },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 25,
    justifyContent: 'center'
  },
  textSection: { marginBottom: 30 },
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
  loginCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 25,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333'
  },
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
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)'
  },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});