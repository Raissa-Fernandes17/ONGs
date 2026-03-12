import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image
        source={require('../assets/images/ongs.jpg')}
        style={styles.img}
      />

      <View style={styles.header}>
        <Text style={styles.logoText}>Solidariedade que Conecta</Text>
        
      </View>

     
      <View style={styles.content}>
        <Text style={styles.title}>Bem-vindo à solidariedade</Text>
        <Text style={styles.subtitle}>
          Conectando você a projetos sociais incríveis no seu bairro.
        </Text>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonText}>Conhecer Projetos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.buttonlogo}>Login</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3ede7', 
  },
  header: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 29,
    fontFamily: 'Hack',
    color: '#2E7D32', 
    fontWeight: 'bold',
  },
  img: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  content: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
    fontFamily: 'Calibri',
  },
  footer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 20,
  },
  buttonPrimary: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonSecondary: {
    backgroundColor: '#0b7c11',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#101411',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
     fontFamily: 'Calibri',
  },
  buttonlogo: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: 'bold',
     fontFamily: 'Calibri', 
  },
});

export default WelcomeScreen;
