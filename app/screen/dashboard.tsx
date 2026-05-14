import React from 'react';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Platform,
  ScrollView
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { RootStackParamList } from '../index';

type Props = NativeStackScreenProps<
  RootStackParamList,
  'Dashboard'
>;

const COLORS = {
  primary: '#2E7D32',
  secondary: '#0b7c11',
  bg: '#eef5f0',
  danger: '#c62828',
  white: '#ffffff',
  text: '#1c1c1c',
  muted: '#6b7280',
  lightGreen: '#e8f5e9'
};

const DashboardScreen = ({
  route,
  navigation
}: Props) => {

  const { userName, voluntarioId } = route.params;

  const handleSair = () => {

    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });

  };

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}

        <View style={styles.header}>

          <View>

            <Text style={styles.logoText}>
              ONG CONNECT
            </Text>

            <Text style={styles.headerSub}>
              Bem-vinda de volta ✨
            </Text>

          </View>

          <View style={styles.profileMini}>

            <Ionicons
              name="person"
              size={22}
              color="#fff"
            />

          </View>

        </View>

        {/* CARD PRINCIPAL */}

        <View style={styles.mainCard}>

          <View style={styles.iconCircle}>

            <Text style={styles.emoji}>
              🌟
            </Text>

          </View>

          <Text style={styles.title}>

            Olá,{' '}

            <Text style={{ color: COLORS.primary }}>
              {userName}
            </Text>

            !

          </Text>

          <Text style={styles.subtitle}>
            Sua conta de voluntário está ativa.
            Continue ajudando pessoas e
            transformando vidas 💚
          </Text>

          <View style={styles.idBadge}>

            <Text style={styles.idLabel}>
              ID DE IDENTIFICAÇÃO
            </Text>

            <Text style={styles.idValue}>
              #{voluntarioId}
            </Text>

          </View>

        </View>

        {/* CARDS DE STATUS */}

        <View style={styles.statsContainer}>

          <View style={styles.statCard}>

            <Ionicons
              name="heart"
              size={26}
              color={COLORS.primary}
            />

            <Text style={styles.statNumber}>
              12
            </Text>

            <Text style={styles.statLabel}>
              Projetos apoiados
            </Text>

          </View>

          <View style={styles.statCard}>

            <Ionicons
              name="time"
              size={26}
              color={COLORS.primary}
            />

            <Text style={styles.statNumber}>
              120h
            </Text>

            <Text style={styles.statLabel}>
              Horas voluntárias
            </Text>

          </View>

        </View>

        {/* CARD MOTIVAÇÃO */}

        <View style={styles.motivationCard}>

          <Ionicons
            name="leaf"
            size={28}
            color={COLORS.primary}
          />

          <Text style={styles.motivationTitle}>
            Continue fazendo a diferença
          </Text>

          <Text style={styles.motivationText}>
            Pequenas ações podem mudar
            grandes histórias.
          </Text>

        </View>

        {/* BOTÃO */}

        <View style={styles.actionContainer}>

          <TouchableOpacity
            style={styles.btnSair}
            onPress={handleSair}
          >

            <Ionicons
              name="log-out-outline"
              size={20}
              color={COLORS.danger}
            />

            <Text style={styles.btnSairText}>
              Sair do Sistema
            </Text>

          </TouchableOpacity>

        </View>

        <Text style={styles.footerVersion}>
          Versão 1.0 - Desafio ONG Connect
        </Text>

      </ScrollView>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingHorizontal: 24,
    paddingVertical: 18,

    backgroundColor: COLORS.white,

    paddingTop:
      Platform.OS === 'android'
        ? 45
        : 20,

    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4
    },

    shadowOpacity: 0.08,
    shadowRadius: 10
  },

  logoText: {
    fontSize: 22,
    fontWeight: '900',
    color: COLORS.primary
  },

  headerSub: {
    marginTop: 4,
    color: COLORS.muted,
    fontSize: 13
  },

  profileMini: {
    width: 45,
    height: 45,
    borderRadius: 22,

    backgroundColor: COLORS.primary,

    justifyContent: 'center',
    alignItems: 'center'
  },

  mainCard: {
    backgroundColor: COLORS.white,

    marginHorizontal: 20,
    marginTop: 30,

    borderRadius: 30,

    padding: 30,

    alignItems: 'center',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },

    shadowOpacity: 0.08,
    shadowRadius: 12
  },

  iconCircle: {
    width: 90,
    height: 90,

    borderRadius: 45,

    backgroundColor: COLORS.lightGreen,

    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 18
  },

  emoji: {
    fontSize: 45
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: COLORS.text
  },

  subtitle: {
    fontSize: 15,
    color: COLORS.muted,

    textAlign: 'center',

    marginTop: 12,

    lineHeight: 24
  },

  idBadge: {
    marginTop: 25,

    paddingVertical: 14,
    paddingHorizontal: 20,

    backgroundColor: COLORS.lightGreen,

    borderRadius: 18,

    alignItems: 'center',

    width: '100%',

    borderWidth: 1,
    borderColor: '#dcedc8'
  },

  idLabel: {
    fontSize: 11,
    color: COLORS.primary,
    fontWeight: 'bold',
    letterSpacing: 1
  },

  idValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.text,
    marginTop: 5
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    marginHorizontal: 20,
    marginTop: 22
  },

  statCard: {
    backgroundColor: COLORS.white,

    width: '48%',

    borderRadius: 22,

    padding: 20,

    alignItems: 'center',

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8
  },

  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',

    marginTop: 10,

    color: COLORS.text
  },

  statLabel: {
    fontSize: 13,
    color: COLORS.muted,

    textAlign: 'center',

    marginTop: 5
  },

  motivationCard: {
    backgroundColor: COLORS.white,

    marginHorizontal: 20,
    marginTop: 22,

    borderRadius: 25,

    padding: 25,

    alignItems: 'center',

    elevation: 4,

    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8
  },

  motivationTitle: {
    fontSize: 18,
    fontWeight: 'bold',

    marginTop: 12,

    color: COLORS.text
  },

  motivationText: {
    textAlign: 'center',

    color: COLORS.muted,

    marginTop: 8,

    lineHeight: 22
  },

  actionContainer: {
    marginTop: 35,
    marginHorizontal: 20
  },

  btnSair: {
    flexDirection: 'row',

    justifyContent: 'center',
    alignItems: 'center',

    gap: 10,

    padding: 18,

    borderRadius: 18,

    backgroundColor: '#fff',

    borderWidth: 1.5,
    borderColor: '#ffcdd2',

    elevation: 2
  },

  btnSairText: {
    color: COLORS.danger,
    fontWeight: 'bold',
    fontSize: 16
  },

  footerVersion: {
    textAlign: 'center',

    color: '#999',

    fontSize: 12,

    marginTop: 30,
    marginBottom: 30
  }

});

export default DashboardScreen;