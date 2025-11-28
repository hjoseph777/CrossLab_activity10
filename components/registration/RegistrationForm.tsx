import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import {
    Alert,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import ConfirmationModal from './ConfirmationModal';
import SuccessModal from './SuccessModal';

export default function RegistrationForm() {
  // State hooks - keeping track of form data and UI states
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // console.log('Form state:', { name, email }); // debugging this...

  // Basic email validation - good enough for now, might need to improve later
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Quick form validation check - we'll validate both fields at once
  const isFormValid = name.trim().length >= 2 && emailRegex.test(email.trim());

  const handleRegisterPress = () => {
    // Double-check everything's good before proceeding
    if (!isFormValid) {
      Alert.alert('Invalid Input', 'Please fill out all fields correctly.');
      return;
    }
    setShowConfirmation(true);
  };

  const handleConfirmRegistration = () => {
    setShowConfirmation(false);
    setIsLoading(true);
    
    // TODO: Replace with actual API endpoint later
    // For now, just simulate the network call
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
    }, 1000); // feels like a reasonable delay
  };

  const handleCancelRegistration = () => {
    setShowConfirmation(false); // just close the modal
  };

  const handleSuccessClose = () => {
    setShowSuccess(false);
    // Clean up the form so user can register again if needed
    setName('');
    setEmail('');
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ThemedView style={styles.formContainer}>
        {/* Name input section - keeping it simple for now */}
        <View style={styles.inputContainer}>
          <ThemedText style={styles.label}>Full Name *</ThemedText>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Enter your full name"
            autoCapitalize="words"
            autoCorrect={false} // don't want autocorrect messing with names
            returnKeyType="next"
            accessibilityLabel="Full name input field"
            accessibilityHint="Enter your full name to register"
          />
          {name.length > 0 && name.trim().length < 2 && (
            <ThemedText style={styles.errorText}>
              Name must be at least 2 characters
            </ThemedText>
          )}
        </View>

        {/* Email field - standard email validation stuff */}
        <View style={styles.inputContainer}>
          <ThemedText style={styles.label}>Email Address *</ThemedText>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email address"
            keyboardType="email-address" // brings up the @ keyboard
            autoCapitalize="none"
            autoCorrect={false}
            autoComplete="email"
            returnKeyType="done"
            onSubmitEditing={handleRegisterPress} // convenience for users
            accessibilityLabel="Email address input field"
            accessibilityHint="Enter your email address to register"
          />
          {email.length > 0 && !emailRegex.test(email.trim()) && (
            <ThemedText style={styles.errorText}>
              Please enter a valid email address
            </ThemedText>
          )}
        </View>

        {/* Register Button */}
        <TouchableOpacity
          style={[
            styles.registerButton,
            !isFormValid && styles.registerButtonDisabled
          ]}
          onPress={handleRegisterPress}
          disabled={!isFormValid || isLoading}
          accessibilityLabel="Register button"
          accessibilityHint="Tap to register your account"
          accessibilityState={{ disabled: !isFormValid }}
        >
          <ThemedText style={[
            styles.registerButtonText,
            !isFormValid && styles.registerButtonTextDisabled
          ]}>
            {isLoading ? 'Registering...' : 'Register'}
          </ThemedText>
        </TouchableOpacity>

        {/* Form Info */}
        <ThemedText style={styles.infoText}>
          * Required fields
        </ThemedText>
      </ThemedView>

      {/* Confirmation Modal */}
      <ConfirmationModal
        visible={showConfirmation}
        onConfirm={handleConfirmRegistration}
        onCancel={handleCancelRegistration}
        name={name}
        email={email}
      />

      {/* Success Modal */}
      <SuccessModal
        visible={showSuccess}
        onClose={handleSuccessClose}
        name={name}
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    padding: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  errorText: {
    color: '#ff4444',
    fontSize: 14,
    marginTop: 4,
  },
  registerButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    marginTop: 10,
  },
  registerButtonDisabled: {
    backgroundColor: '#ccc',
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  registerButtonTextDisabled: {
    color: '#999',
  },
  infoText: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 16,
    opacity: 0.7,
  },
});