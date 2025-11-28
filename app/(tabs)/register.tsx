import RegistrationForm from '@/components/registration/RegistrationForm';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

export default function RegisterScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header section with title and description */}
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title">Create Account</ThemedText>
          <ThemedText style={styles.subtitle}>
            Fill out the form below to register your account
          </ThemedText>
        </ThemedView>
        
        {/* Main registration form component */}
        <RegistrationForm />
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
});