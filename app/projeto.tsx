import React, { useState } from 'react';
import {
    StyleSheet, Text, View, Image, TextInput,
    TouchableOpacity, SafeAreaView, ScrollView, FlatList
} from 'react-native';
import { useRouter } from 'expo-router';

const COLORS = { primary: '#2E7D32', secondary: '#0b7c11', bg: '#f4f7f5', dark: '#101411', muted: '#666' };


const PROJETOS = [
    {
        id: '1',
        titulo: 'Educação Solidária',
        descricao: 'Apoio escolar e material para crianças da zona rural.',
        imagem: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=400',
        meta: 80,
    },
    {
        id: '2',
        titulo: 'Alimentação Já',
        descricao: 'Distribuição de marmitas e cestas básicas para famílias carentes.',
        imagem: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400',
        meta: 45,
    },
    {
        id: '3',
        titulo: 'Tecnologia Comunitária',
        descricao: 'Inclusão digital e cursos de programação em periferias.',
        imagem: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=400',
        meta: 20,
    }
];

const ProjetosScreen = () => {
    const router = useRouter();
    const [busca, setBusca] = useState('');

const renderItem = ({ item }: any) => (
        <View style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.cardImage} />

            <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.titulo}</Text>
                <Text style={styles.cardDesc}>{item.descricao}</Text>


                <View style={styles.progressLabel}>
                    <Text style={styles.progressText}>Meta alcançada</Text>
                    <Text style={styles.progressValue}>{item.meta}%</Text>
                </View>
                <View style={styles.progressBarBg}>
                    <View style={[styles.progressBarFill, { width: `${item.meta}%` }]} />
                </View>

                <TouchableOpacity
                    style={styles.btnCard}
                    onPress={() => console.log("Apoiar:", item.titulo)}
                >
                    <Text style={styles.btnCardText}>Apoiar Projeto</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.navbar}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Text style={styles.backArrow}>←</Text>
                </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <TextInput
                        placeholder="Buscar causas..."
                        style={styles.searchInput}
                        value={busca}
                        onChangeText={setBusca}
                    />
                </View>
                <View style={styles.logoBadge}><Text style={styles.logoBadgeText}>C</Text></View>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text style={styles.pageTitle}>Causas que precisam do seu <Text style={{ color: COLORS.primary }}>apoio</Text></Text>


                <FlatList
                    data={PROJETOS}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    scrollEnabled={false} // Scroll é controlado pelo ScrollView pai
                    contentContainerStyle={{ gap: 20 }}
                />
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bg
    },
    navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    backArrow: {
        fontSize: 24,
        color: COLORS.primary,
        marginRight: 10
    },
    searchContainer: {
        flex: 1,
        marginRight: 10
    },
    searchInput: {
        backgroundColor: '#f1f1f1',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        fontSize: 14
    },
    logoBadge: {
        width: 35,
        height: 35,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoBadgeText: {
        color: '#fff',
        fontWeight: 'bold'
    },

    scrollContent: {
        padding: 20
    },
    pageTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#333'
        , marginBottom: 25

        , textAlign: 'center'
    },

    // --- ESTILO DOS CARDS (Inspirado na Foto 2) ---
    card: {
        backgroundColor: '#fff',
        borderRadius: 20,
        overflow: 'hidden',
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        marginBottom: 10
    },
    cardImage: {
        width: '100%',
        height: 180
    },
    cardContent: {
        padding: 20
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8
    },
    cardDesc: {
        fontSize: 14,
        color: COLORS.muted,
        marginBottom: 15,
        lineHeight: 20
    },

    // Barra de progresso
    progressLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5
    },
    progressText: {
        fontSize: 12,
        color: COLORS.muted
    },
    progressValue: {
        fontSize: 12,
        fontWeight: 'bold'
        , color: COLORS.primary
    },
    progressBarBg: {
        height: 8,
        backgroundColor: '#eee',
        borderRadius: 4,
        marginBottom: 20
    },
    progressBarFill: {
        height: 8,
        backgroundColor: COLORS.primary,
        borderRadius: 4
    },

    btnCard: {
        backgroundColor: COLORS.secondary,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: COLORS.dark
    },
    btnCardText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default ProjetosScreen;