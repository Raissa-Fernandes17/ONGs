import React, { useState, useEffect } from 'react';

import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    FlatList,
    Platform,
    ActivityIndicator,
    Alert,
    ImageBackground
} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Ionicons } from '@expo/vector-icons';

import DashboardScreen from './screen/dashboard';

import PerfilScreen from './screen/PerfilScreen';


import ONGCard from './components/ONGCard';

const COLORS = {
    primary: '#2E7D32',
    secondary: '#0b7c11',
    bg: '#f4f7f5',
    dark: '#101411',
    muted: '#666',
    white: '#fff'
};

const Tab = createBottomTabNavigator();

const PROJETOS = [

    {
        id: '1',
        titulo: 'Educação Solidária',
        descricao: 'Apoio escolar e material para crianças da zona rural.',
        imagem:
            'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400',
        meta: 80,
    },

    {
        id: '2',
        titulo: 'Alimentação Já',
        descricao: 'Distribuição de marmitas e cestas básicas para famílias carentes.',
        imagem:
            'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400',
        meta: 45,
    },

    {
        id: '3',
        titulo: 'Tecnologia Comunitária',
        descricao: 'Inclusão digital e cursos de programação em periferias.',
        imagem:
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400',
        meta: 20,
    },

    {
        id: '4',
        titulo: 'Saúde Para Todos',
        descricao: 'Atendimento médico gratuito e campanhas de vacinação.',
        imagem:
            'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=400',
        meta: 65,
    },

    {
        id: '5',
        titulo: 'Amor Animal',
        descricao: 'Resgate e adoção de animais abandonados.',
        imagem:
            'https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=400',
        meta: 90,
    },

    {
        id: '6',
        titulo: 'Plantando o Futuro',
        descricao: 'Projetos de reflorestamento e preservação ambiental.',
        imagem:
            'https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=400',
        meta: 55,
    },

    {
        id: '7',
        titulo: 'Esporte e Vida',
        descricao: 'Aulas esportivas gratuitas para jovens em comunidades.',
        imagem:
            'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=400',
        meta: 72,
    },

    {
        id: '8',
        titulo: 'Mulheres Fortes',
        descricao: 'Capacitação profissional e apoio psicológico para mulheres.',
        imagem:
            'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400',
        meta: 38,
    }

];

function ExplorarScreen() {

    const [busca, setBusca] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        setTimeout(() => {

            setLoading(false);

        }, 2000);

    }, []);

    const projetosFiltrados = PROJETOS.filter((item) =>
        item.titulo.toLowerCase().includes(busca.toLowerCase())
    );

    const renderItem = ({ item }: any) => (

        <ONGCard
            titulo={item.titulo}
            descricao={item.descricao}
            imagem={item.imagem}
            meta={item.meta}
            onPress={() =>
                Alert.alert(
                    item.titulo,
                    item.descricao
                )
            }
        />

    );

    if (loading) {

        return (

            <View style={styles.loadingContainer}>

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
                    uri: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200'
                }}
                style={styles.header}
                imageStyle={styles.headerImage}
            >

                <View style={styles.overlay}>

                    <Text style={styles.heroTitle}>
                        Explore Projetos 🌍
                    </Text>

                    <Text style={styles.heroSub}>
                        Faça parte de causas incríveis
                    </Text>

                    {/* PESQUISA */}
                    <View style={styles.searchWrapper}>

                        <Ionicons
                            name="search"
                            size={20}
                            color="#777"
                        />

                        <TextInput
                            placeholder="Buscar causas..."
                            style={styles.searchInput}
                            value={busca}
                            onChangeText={setBusca}
                            placeholderTextColor="#999"
                        />

                    </View>

                </View>

            </ImageBackground>

            {/* CATEGORIAS */}
            <View style={styles.categoriesRow}>

                <TouchableOpacity style={styles.categoryBtn}>
                    <Text style={styles.categoryText}>
                        🌱 Ambiente
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn}>
                    <Text style={styles.categoryText}>
                        📚 Educação
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.categoryBtn}>
                    <Text style={styles.categoryText}>
                        ❤️ Saúde
                    </Text>
                </TouchableOpacity>

            </View>

            {/* LISTA */}
            <FlatList
                data={projetosFiltrados}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />

        </SafeAreaView>

    );
}

export default function Projeto() {

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerShown: false,

                tabBarActiveTintColor: COLORS.primary,

                tabBarInactiveTintColor: '#777',

                tabBarStyle: {
                    height: 70,
                    paddingBottom: 10,
                    paddingTop: 8,
                    backgroundColor: '#fff',
                    borderTopWidth: 0,
                    elevation: 10,
                },

                tabBarLabelStyle: {
                    fontSize: 12,
                    fontWeight: '600'
                },

                tabBarIcon: ({ color, size }) => {

                    let iconName: any;

                    if (route.name === 'Dashboard') {

                        iconName = 'home';

                    }

                    else if (route.name === 'Explorar') {

                        iconName = 'search';

                    }

                    else if (route.name === 'Perfil') {

                        iconName = 'person';

                    }

                    return (

                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />

                    );
                },
            })}
        >

            <Tab.Screen
                name="Dashboard"
                component={DashboardScreen}
                initialParams={{
                    userName: 'Raissa',
                    voluntarioId: '12345'
                }}
            />

            <Tab.Screen
                name="Explorar"
                component={ExplorarScreen}
            />

            <Tab.Screen
                name="Perfil"
                component={PerfilScreen}
                initialParams={{
                    userName: 'Raissa Fernandes'
                }}
            />

        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: COLORS.bg
    },

    header: {
        height: 250,
        justifyContent: 'center'
    },

    headerImage: {
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30
    },

    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.45)',
        justifyContent: 'center',
        paddingHorizontal: 20
    },

    heroTitle: {
        color: '#fff',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10
    },

    heroSub: {
        color: '#eee',
        fontSize: 16,
        marginBottom: 25
    },

    searchWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 18,
        paddingHorizontal: 15,
        height: 55
    },

    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 15,
        color: '#333'
    },

    categoriesRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 10,
        paddingHorizontal: 10
    },

    categoryBtn: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 18,

        elevation: 3,

        shadowColor: '#000',

        shadowOpacity: 0.08,

        shadowRadius: 5
    },

    categoryText: {
        fontWeight: '600',
        color: '#333',
        fontSize: 13
    },

    listContent: {
        padding: 20,
        paddingBottom: 40
    },

    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.bg
    },

    loadingText: {
        marginTop: 15,
        fontSize: 16,
        color: COLORS.primary,
        fontWeight: '600'
    }

});