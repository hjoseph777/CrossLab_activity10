import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen() {
  // Navigation handlers - simple router pushes
  const handleRegisterPress = () => {
    router.push('/(tabs)/register');
  };

  const handleExplorePress = () => {
    router.push('/(tabs)/explore'); // might add more tabs later
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Welcome to CrossLab</ThemedText>
          <ThemedText style={styles.subtitle}>
            A simple and clean registration system for educational purposes
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Getting Started</ThemedText>
            <ThemedText style={styles.description}>
              This application demonstrates a complete registration flow with form validation, 
              confirmation dialogs, and success feedback.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Project Features</ThemedText>
            <ThemedView style={styles.featureList}>
              <ThemedText style={styles.feature}>• Registration form with validation</ThemedText>
              <ThemedText style={styles.feature}>• Confirmation step before submission</ThemedText>
              <ThemedText style={styles.feature}>• Success feedback and form reset</ThemedText>
              <ThemedText style={styles.feature}>• Cross-platform compatibility</ThemedText>
            </ThemedView>
          </ThemedView>

          <ThemedView style={styles.actionSection}>
            <TouchableOpacity 
              style={styles.primaryButton} 
              onPress={handleRegisterPress}
            >
              <ThemedText style={styles.buttonText}>Try Registration →</ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={styles.secondaryButton} 
              onPress={handleExplorePress}
            >
              <ThemedText style={styles.secondaryButtonText}>Learn More</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 40,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.8,
  },
  contentContainer: {
    gap: 24,
  },
  section: {
    marginBottom: 24,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginTop: 8,
  },
  featureList: {
    marginTop: 12,
    gap: 8,
  },
  feature: {
    fontSize: 16,
    lineHeight: 22,
  },
  actionSection: {
    alignItems: 'center',
    gap: 12,
    marginTop: 20,
  },
  primaryButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 200,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    minWidth: 200,
  },
  secondaryButtonText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
