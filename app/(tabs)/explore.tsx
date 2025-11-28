import { ExternalLink } from '@/components/external-link';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Collapsible } from '@/components/ui/collapsible';
import { router } from 'expo-router';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function ExploreScreen() {
  // Quick navigation to the registration form
  const handleRegisterNow = () => {
    router.push('/(tabs)/register'); // TODO: maybe add some animation here
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Explore Features</ThemedText>
          <ThemedText style={styles.subtitle}>
            Learn about the registration system functionality and implementation
          </ThemedText>
        </ThemedView>

        <ThemedView style={styles.contentContainer}>
          <ThemedView style={styles.section}>
            <ThemedText type="subtitle">Project Overview</ThemedText>
            <ThemedText style={styles.description}>
              This educational project demonstrates a complete registration flow using React Native 
              and Expo. The implementation includes form validation, user confirmation, and success feedback.
            </ThemedText>
          </ThemedView>

          <ThemedView style={styles.actionSection}>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={handleRegisterNow}
            >
              <ThemedText style={styles.buttonText}>Try Registration Flow</ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </ThemedView>

        <Collapsible title="Platform Compatibility">
          <ThemedText style={styles.collapsibleText}>
            This application works across multiple platforms:
          </ThemedText>
          <ThemedView style={styles.platformList}>
            <ThemedText style={styles.platformItem}>• Web browsers (Chrome, Firefox, Safari)</ThemedText>
            <ThemedText style={styles.platformItem}>• iOS devices and simulators</ThemedText>
            <ThemedText style={styles.platformItem}>• Android devices and emulators</ThemedText>
          </ThemedView>
          <ExternalLink href="https://docs.expo.dev/router/introduction">
            <ThemedText type="link">Learn more about Expo Router</ThemedText>
          </ExternalLink>
        </Collapsible>
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
  stepsList: {
    marginTop: 12,
    gap: 12,
  },
  step: {
    fontSize: 16,
    lineHeight: 22,
  },
  actionSection: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
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
  collapsibleText: {
    marginBottom: 12,
    lineHeight: 22,
  },
  techList: {
    gap: 8,
  },
  techItem: {
    fontSize: 16,
    lineHeight: 22,
  },
  objectivesList: {
    gap: 12,
  },
  objective: {
    fontSize: 16,
    lineHeight: 22,
  },
  platformList: {
    marginBottom: 16,
    gap: 8,
  },
  platformItem: {
    fontSize: 16,
    lineHeight: 22,
  },
});
