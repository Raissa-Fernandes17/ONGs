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

import { Ionicons } from '@expo/vector-icons';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../index';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Login'
>;

const COLORS = {
  primary: '#2E7D32',
  secondary: '#0b7c11',
  bg: '#e3ede7'
};

const LoginScreen = ({
  navigation
}: Props) => {

  const [nome, setNome] = useState('');

  const [senha, setSenha] = useState('');

  const [mostrarSenha, setMostrarSenha] =
    useState(false);

  const handleEntrar = () => {

    if (
      nome.trim() === '' ||
      senha.trim() === ''
    ) {

      Alert.alert(
        'Atenção',
        'Preencha nome e senha para continuar.'
      );

      return;
    }

    const idGerado = Math.random()
      .toString(36)
      .substring(7)
      .toUpperCase();

    navigation.navigate('Dashboard', {
      userName: nome,
      voluntarioId: idGerado
    });
  };

  return (

    <SafeAreaView style={styles.container}>

      <KeyboardAvoidingView
        behavior={
          Platform.OS === 'ios'
            ? 'padding'
            : 'height'
        }
        style={{ flex: 1 }}
      >

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1
          }}
        >

          <View style={styles.navbar}>

            <Text style={styles.logoText}>
              ONG CONNECT
            </Text>

          </View>

          <ImageBackground
            source={{
              uri:
                'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1000'
            }}
            style={styles.hero}
          >

            <View style={styles.overlay}>

              <View style={styles.textSection}>

                <Text style={styles.heroTitle}>
                  Solidariedade que Conecta
                </Text>

                <Text style={styles.heroSub}>
                  Sua jornada como voluntário começa aqui.
                </Text>

              </View>

              <View style={styles.loginCard}>

                <Text style={styles.cardTitle}>
                  Identificação
                </Text>

                <TextInput
                  placeholder="Seu nome completo"
                  placeholderTextColor="#999"
                  style={styles.input}
                  value={nome}
                  onChangeText={setNome}
                />

                <View style={styles.passwordContainer}>

                  <TextInput
                    placeholder="Digite sua senha"
                    placeholderTextColor="#999"
                    style={styles.passwordInput}
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry={!mostrarSenha}
                  />

                  <TouchableOpacity
                    onPress={() =>
                      setMostrarSenha(
                        !mostrarSenha
                      )
                    }
                  >

                    <Ionicons
                      name={
                        mostrarSenha
                          ? 'eye-off-outline'
                          : 'eye-outline'
                      }
                      size={22}
                      color="#666"
                    />

                  </TouchableOpacity>

                </View>

                <TouchableOpacity
                  style={styles.btnMain}
                  onPress={handleEntrar}
                >

                  <Text style={styles.btnText}>
                    Entrar no Painel
                  </Text>

                </TouchableOpacity>

                <Text style={styles.footerNote}>
                  Identificação segura via
                  TypeScript 🛡️
                </Text>

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

  navbar: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#fff',
    elevation: 4,
    paddingTop:
      Platform.OS === 'android'
        ? 45
        : 20
  },

  logoText: {
    fontSize: 18,
    fontWeight: '900',
    color: COLORS.primary
  },

  hero: {
    flex: 1,
    minHeight: 650
  },

  overlay: {
    flex: 1,
    backgroundColor:
      'rgba(0,0,0,0.5)',
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

  loginCard: {
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 25,
    elevation: 10,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 5
    },

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
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#eee',
    fontSize: 15
  },

  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee',
    paddingHorizontal: 14,
    marginBottom: 18
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 14,
    fontSize: 15,
    color: '#333'
  },

  btnMain: {
    backgroundColor: COLORS.secondary,
    padding: 16,
    borderRadius: 14,
    alignItems: 'center',
    elevation: 4
  },

  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  },

  footerNote: {
    textAlign: 'center',
    color: '#666',
    fontSize: 12,
    marginTop: 15
  }

});

export default LoginScreen;