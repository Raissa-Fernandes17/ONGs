import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Modal,
  Platform
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const COLORS = {
  primary: '#2E7D32',
  secondary: '#0b7c11',
  bg: '#f4f7f5',
  dark: '#101411',
  muted: '#666',
  white: '#fff'
};

export default function PerfilScreen({ route }: any) {
  const userName = route?.params?.userName || 'Raissa Fernandes';

  const [modalVisible, setModalVisible] = useState(false);

  const [causaSelecionada, setCausaSelecionada] =
    useState('Educação');

  function salvarCausa(causa: string) {
    setCausaSelecionada(causa);
    setModalVisible(false);
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {/* HEADER */}
        <View style={styles.header}>
          <View style={styles.cover} />

          <View style={styles.profileContainer}>
            <Image
              source={require('../../assets/images/Captura de tela 2026-05-14 094805.png')}
              style={styles.profileImage}
            />

            <View style={styles.onlineBadge} />
          </View>
        </View>

        {/* INFO */}
        <View style={styles.infoContainer}>
          <Text style={styles.name}>
            {userName}
          </Text>

          <Text style={styles.username}>
            @voluntaria.connect
          </Text>

          <Text style={styles.bio}>
            Voluntária apaixonada por causas sociais,
            educação infantil e projetos comunitários.
            Ajudando pessoas através da ONG Connect 💚
          </Text>

          {/* BADGES */}
          <View style={styles.badgesRow}>
            <View style={styles.badge}>
              <Ionicons
                name="heart"
                size={16}
                color={COLORS.primary}
              />

              <Text style={styles.badgeText}>
                {causaSelecionada}
              </Text>
            </View>

            <View style={styles.badge}>
              <Ionicons
                name="checkmark-circle"
                size={16}
                color={COLORS.primary}
              />

              <Text style={styles.badgeText}>
                Verificado
              </Text>
            </View>
          </View>

          {/* BOTÃO */}
          <TouchableOpacity
            style={styles.btnEditar}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons
              name="create-outline"
              size={18}
              color="#fff"
            />

            <Text style={styles.btnEditarTexto}>
              Editar Interesses
            </Text>
          </TouchableOpacity>
        </View>

        {/* ESTATÍSTICAS */}
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>
              Projetos
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>120h</Text>
            <Text style={styles.statLabel}>
              Horas
            </Text>
          </View>

          <View style={styles.statCard}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>
              Certificados
            </Text>
          </View>
        </View>

        {/* CARDS */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Informações
          </Text>

          <View style={styles.infoCard}>
            <Ionicons
              name="mail-outline"
              size={22}
              color={COLORS.primary}
            />

            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>
                Email
              </Text>

              <Text style={styles.infoSubtitle}>
                raissa@email.com
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="location-outline"
              size={22}
              color={COLORS.primary}
            />

            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>
                Localização
              </Text>

              <Text style={styles.infoSubtitle}>
                São Paulo, Brasil
              </Text>
            </View>
          </View>

          <View style={styles.infoCard}>
            <Ionicons
              name="calendar-outline"
              size={22}
              color={COLORS.primary}
            />

            <View style={styles.infoText}>
              <Text style={styles.infoTitle}>
                Membro desde
              </Text>

              <Text style={styles.infoSubtitle}>
                Janeiro 2023
              </Text>
            </View>
          </View>
        </View>

        {/* MENU */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            Configurações
          </Text>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="notifications-outline"
              size={22}
              color="#333"
            />

            <Text style={styles.menuText}>
              Notificações
            </Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#bbb"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="shield-checkmark-outline"
              size={22}
              color="#333"
            />

            <Text style={styles.menuText}>
              Privacidade
            </Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#bbb"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Ionicons
              name="help-circle-outline"
              size={22}
              color="#333"
            />

            <Text style={styles.menuText}>
              Ajuda e suporte
            </Text>

            <Ionicons
              name="chevron-forward"
              size={18}
              color="#bbb"
            />
          </TouchableOpacity>
        </View>

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* MODAL */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() =>
          setModalVisible(false)
        }
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>
              Escolha sua causa 💚
            </Text>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() =>
                salvarCausa('Educação')
              }
            >
              <Text style={styles.optionText}>
                📚 Educação
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() =>
                salvarCausa('Meio Ambiente')
              }
            >
              <Text style={styles.optionText}>
                🌱 Meio Ambiente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.optionButton}
              onPress={() =>
                salvarCausa('Saúde')
              }
            >
              <Text style={styles.optionText}>
                🏥 Saúde
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.closeButton}
              onPress={() =>
                setModalVisible(false)
              }
            >
              <Text style={styles.closeButtonText}>
                Fechar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg
  },

  header: {
    marginBottom: 70
  },

  cover: {
    height: 180,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },

  profileContainer: {
    alignItems: 'center',
    marginTop: -65
  },

  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: '#fff'
  },

  onlineBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: '#4CAF50',
    position: 'absolute',
    bottom: 10,
    right: '35%',
    borderWidth: 3,
    borderColor: '#fff'
  },

  infoContainer: {
    alignItems: 'center',
    paddingHorizontal: 25
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222'
  },

  username: {
    color: COLORS.primary,
    marginTop: 5,
    fontWeight: '600'
  },

  bio: {
    textAlign: 'center',
    color: COLORS.muted,
    marginTop: 15,
    lineHeight: 22,
    fontSize: 15
  },

  badgesRow: {
    flexDirection: 'row',
    marginTop: 18,
    gap: 10
  },

  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E8F5E9',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20
  },

  badgeText: {
    marginLeft: 6,
    color: COLORS.primary,
    fontWeight: 'bold'
  },

  btnEditar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    marginTop: 25,
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    elevation: 3
  },

  btnEditarTexto: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 15
  },

  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 30
  },

  statCard: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3
  },

  statNumber: {
    fontSize: 22,
    fontWeight: 'bold',
    color: COLORS.primary
  },

  statLabel: {
    color: COLORS.muted,
    marginTop: 5
  },

  section: {
    marginTop: 30,
    paddingHorizontal: 20
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222'
  },

  infoCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 2
  },

  infoText: {
    marginLeft: 15
  },

  infoTitle: {
    fontWeight: 'bold',
    color: '#222'
  },

  infoSubtitle: {
    color: COLORS.muted,
    marginTop: 3
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 18,
    marginBottom: 12,
    elevation: 2
  },

  menuText: {
    flex: 1,
    marginLeft: 15,
    fontSize: 16,
    color: '#333'
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },

  modalContainer: {
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 25,
    padding: 25
  },

  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25
  },

  optionButton: {
    backgroundColor: '#f5f5f5',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
    alignItems: 'center'
  },

  optionText: {
    fontSize: 16,
    fontWeight: '600'
  },

  closeButton: {
    marginTop: 10,
    alignItems: 'center'
  },

  closeButtonText: {
    color: '#c62828',
    fontWeight: 'bold',
    fontSize: 16
  }
});