import React from 'react';
import { Image, Linking, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const handleOpenLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Erro ao abrir link", err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/perfil.jpg')}
            style={styles.photo} 
            resizeMode="cover"
          />
          <Text style={styles.name}>Thiago Vinícius</Text>
          <Text style={styles.role}>Desenvolvedor Web & Designer Gráfico</Text>
          
          <View style={styles.contactContainer}>
            <Text style={styles.contactText}>(81) 98304-8673</Text>
            <Text style={styles.contactText}>thiagoo.vinicius@outlook.com</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Objetivo</Text>
          <Text style={styles.text}>
            Busco um estágio em desenvolvimento web dentro do setor de tecnologia. 
            Tenho o objetivo de integrar um ambiente inovador, aplicando minhas habilidades 
            em Python, TypeScript, JavaScript, React e Java para contribuir em projetos reais.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Projetos Acadêmicos</Text>
          
          <View style={styles.cardItem}>
            <Text style={styles.itemTitle}>L.O.B.O (Ago/2025)</Text>
            <Text style={styles.itemSubtitle}>Sistema de Monitoramento de Ocorrências</Text>
            <Text style={styles.text}>
              Desenvolvimento de site para monitoramento e operações em tempo real, 
              auxiliando no gerenciamento e geração de relatórios.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.itemTitle}>LUMA (Mar/2025)</Text>
            <Text style={styles.itemSubtitle}>Sistema Web de Gerenciamento de Pontos</Text>
            <Text style={styles.text}>
              Desenvolvido com React + TypeScript. Funcionalidades de registro, 
              abono e espelho de ponto.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experiência Profissional</Text>
          
          <View style={styles.cardItem}>
            <Text style={styles.itemTitle}>Freelancer – Desenvolvimento Web</Text>
            <Text style={styles.date}>2024 – Atual</Text>
            <Text style={styles.text}>
              • Criação de landing pages e sites responsivos.{'\n'}
              • Utilização de HTML, CSS, JavaScript e React.
            </Text>
          </View>

          <View style={styles.cardItem}>
            <Text style={styles.itemTitle}>Freelancer – Design Gráfico</Text>
            <Text style={styles.date}>2022 – Atual</Text>
            <Text style={styles.text}>
              • Desenvolvimento de identidades visuais e materiais digitais.{'\n'}
              • Criação de layouts para mídias sociais.
            </Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Formação</Text>
          <View style={styles.cardItem}>
            <Text style={styles.itemTitle}>Faculdade SENAC</Text>
            <Text style={styles.text}>Análise e Desenvolvimento de Sistemas (2024 - 2026)</Text>
          </View>
          <View style={styles.cardItem}>
            <Text style={styles.itemTitle}>UNIFG</Text>
            <Text style={styles.text}>Design Gráfico (2022 - 2024)</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Habilidades</Text>
          <View style={styles.skillsContainer}>
            <Text style={styles.skillBadge}>React</Text>
            <Text style={styles.skillBadge}>TypeScript</Text>
            <Text style={styles.skillBadge}>JavaScript</Text>
            <Text style={styles.skillBadge}>Python</Text>
            <Text style={styles.skillBadge}>Java</Text>
            <Text style={styles.skillBadge}>Figma</Text>
            <Text style={styles.skillBadge}>Git/GitHub</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E5EC',
  },
  scrollContent: {
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 25,
  },
  photo: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: '#ccc',
    marginBottom: 15,
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2C3E50',
    textAlign: 'center',
  },
  role: {
    fontSize: 16,
    color: '#7F8C8D',
    marginTop: 5,
    textAlign: 'center',
    marginBottom: 10,
  },
  contactContainer: {
    alignItems: 'center',
  },
  contactText: {
    fontSize: 14,
    color: '#2980B9',
    marginBottom: 2,
  },
  section: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2, 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: '#F0F2F5',
    paddingBottom: 5,
  },
  cardItem: {
    marginBottom: 15,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#34495E',
  },
  itemSubtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#16A085',
    marginBottom: 2,
  },
  date: {
    fontSize: 12,
    color: '#95A5A6',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#555',
    lineHeight: 20,
    marginTop: 2,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#ECF0F1',
    color: '#2C3E50',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    fontSize: 12,
    fontWeight: '600',
    overflow: 'hidden',
  },
});