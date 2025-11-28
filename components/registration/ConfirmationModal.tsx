import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import {
  Alert,
  Modal,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

interface ConfirmationModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  name: string;
  email: string;
}

export default function ConfirmationModal({
  visible,
  onConfirm,
  onCancel,
  name,
  email,
}: ConfirmationModalProps) {
  
  // Show native alert on mobile - works better than modal for small screens
  const showNativeAlert = React.useCallback(() => {
    Alert.alert(
      'Confirm Registration',
      `Are you sure you want to register with:\n\nName: ${name}\nEmail: ${email}`,
      [
        {
          text: 'No',
          style: 'cancel',
          onPress: onCancel,
        },
        {
          text: 'Yes',
          style: 'default',
          onPress: onConfirm,
        },
      ],
      { cancelable: true }
    );
  }, [name, email, onCancel, onConfirm]);

  // Platform-specific logic - web gets modal, mobile gets alert
  React.useEffect(() => {
    if(visible && Platform.OS !== 'web') {

      // console.log('Showing native alert for mobile');
      showNativeAlert();
    }
  }, [visible, showNativeAlert]);

  // Skip rendering on mobile since we're using Alert instead
      if(Platform.OS !== 'web') {

    return null;
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
      accessibilityViewIsModal={true}
    >
      <View style={styles.overlay}>
        <ThemedView style={styles.modalContainer}>
          <ThemedText style={styles.title}>Confirm Registration</ThemedText>
          
          <ThemedText style={styles.message}>
            Are you sure you want to register with the following information?
          </ThemedText>
          
          <View style={styles.userInfoContainer}>
            <ThemedText style={styles.infoLabel}>Name:</ThemedText>
            <ThemedText style={styles.infoValue}>{name}</ThemedText>
            
            <ThemedText style={styles.infoLabel}>Email:</ThemedText>
            <ThemedText style={styles.infoValue}>{email}</ThemedText>
          </View>
          
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
              accessibilityLabel="Cancel registration"
              accessibilityHint="Tap to cancel registration"
            >
              <ThemedText style={[styles.buttonText, styles.cancelButtonText]}>
                No
              </ThemedText>
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
              accessibilityLabel="Confirm registration"
              accessibilityHint="Tap to confirm and proceed with registration"
            >
              <ThemedText style={[styles.buttonText, styles.confirmButtonText]}>
                Yes
              </ThemedText>
            </TouchableOpacity>
          </View>
        </ThemedView>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  userInfoContainer: {
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  infoLabel: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
  },
  infoValue: {
    fontSize: 16,
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  confirmButton: {
    backgroundColor: '#007AFF',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  cancelButtonText: {
    color: '#666',
  },
  confirmButtonText: {
    color: '#fff',
  },
});