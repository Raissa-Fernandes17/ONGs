import React from 'react';

import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

const COLORS = {
    primary: '#2E7D32',
    secondary: '#0b7c11',
    dark: '#101411',
    muted: '#666',
    bg: '#f4f7f5',
    white: '#fff',
    lightGreen: '#E8F5E9'
};

type Props = {
    titulo: string;
    descricao: string;
    imagem: string;
    meta: number;
    onPress: () => void;
};

export default function ONGCard({
    titulo,
    descricao,
    imagem,
    meta,
    onPress
}: Props) {

    return (

        <TouchableOpacity
            style={styles.card}
            activeOpacity={0.9}
            onPress={onPress}
        >

            {/* IMAGEM */}
            <View>

                <Image
                    source={{ uri: imagem }}
                    style={styles.cardImage}
                />

                {/* BADGE */}
                <View style={styles.badge}>

                    <Ionicons
                        name="heart"
                        size={14}
                        color="#fff"
                    />

                    <Text style={styles.badgeText}>
                        ONG Solidária
                    </Text>

                </View>

            </View>

            {/* CONTEÚDO */}
            <View style={styles.cardContent}>

                <Text style={styles.cardTitle}>
                    {titulo}
                </Text>

                <Text style={styles.cardDesc}>
                    {descricao}
                </Text>

                {/* INFORMAÇÕES */}
                <View style={styles.infoRow}>

                    <View style={styles.infoBox}>

                        <Ionicons
                            name="people"
                            size={18}
                            color={COLORS.primary}
                        />

                        <Text style={styles.infoText}>
                            +200 voluntários
                        </Text>

                    </View>

                    <View style={styles.infoBox}>

                        <Ionicons
                            name="location"
                            size={18}
                            color={COLORS.primary}
                        />

                        <Text style={styles.infoText}>
                            Brasil
                        </Text>

                    </View>

                </View>

                {/* PROGRESSO */}
                <View style={styles.progressLabel}>

                    <Text style={styles.progressText}>
                        Meta alcançada
                    </Text>

                    <Text style={styles.progressValue}>
                        {meta}%
                    </Text>

                </View>

                <View style={styles.progressBarBg}>

                    <View
                        style={[
                            styles.progressBarFill,
                            { width: `${meta}%` }
                        ]}
                    />

                </View>

                {/* BOTÕES */}
                <View style={styles.buttonRow}>

                    <TouchableOpacity style={styles.btnFavorite}>

                        <Ionicons
                            name="heart-outline"
                            size={22}
                            color={COLORS.primary}
                        />

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnCard}>

                        <Ionicons
                            name="hand-left"
                            size={18}
                            color="#fff"
                        />

                        <Text style={styles.btnCardText}>
                            Apoiar Projeto
                        </Text>

                    </TouchableOpacity>

                </View>

            </View>

        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({

    card: {
        backgroundColor: COLORS.white,
        borderRadius: 28,
        overflow: 'hidden',
        marginBottom: 22,

        elevation: 8,

        shadowColor: '#000',

        shadowOffset: {
            width: 0,
            height: 5
        },

        shadowOpacity: 0.12,

        shadowRadius: 12,
    },

    cardImage: {
        width: '100%',
        height: 220,
    },

    badge: {
        position: 'absolute',
        top: 15,
        left: 15,

        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: 'rgba(46,125,50,0.9)',

        paddingVertical: 6,
        paddingHorizontal: 12,

        borderRadius: 20,
    },

    badgeText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        marginLeft: 5,
    },

    cardContent: {
        padding: 22,
    },

    cardTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: COLORS.dark,
        marginBottom: 10,
    },

    cardDesc: {
        fontSize: 15,
        color: COLORS.muted,
        lineHeight: 24,
        marginBottom: 20,
    },

    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },

    infoBox: {
        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: COLORS.lightGreen,

        paddingVertical: 10,
        paddingHorizontal: 14,

        borderRadius: 15,
    },

    infoText: {
        marginLeft: 6,
        color: COLORS.primary,
        fontWeight: '600',
        fontSize: 13,
    },

    progressLabel: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },

    progressText: {
        fontSize: 13,
        color: COLORS.muted,
        fontWeight: '500',
    },

    progressValue: {
        fontSize: 14,
        fontWeight: 'bold',
        color: COLORS.primary,
    },

    progressBarBg: {
        height: 10,
        backgroundColor: '#ECECEC',
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 24,
    },

    progressBarFill: {
        height: 10,
        backgroundColor: COLORS.primary,
        borderRadius: 10,
    },

    buttonRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    btnFavorite: {
        width: 55,
        height: 55,

        borderRadius: 18,

        backgroundColor: COLORS.lightGreen,

        justifyContent: 'center',
        alignItems: 'center',

        marginRight: 12,
    },

    btnCard: {
        flex: 1,

        backgroundColor: COLORS.secondary,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

        paddingVertical: 16,

        borderRadius: 18,

        elevation: 3,
    },

    btnCardText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 8,
    }

});