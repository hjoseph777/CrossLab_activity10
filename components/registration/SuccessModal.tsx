import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React from 'react';
import {
    Animated,
    Modal,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';

interface SuccessModalProps {
  visible: boolean;
  onClose: () => void;
  name: string;
}

export default function SuccessModal({
  visible,
  onClose,
  name,
}: SuccessModalProps) {
  // Animation for that nice bouncy effect when modal appears
  const scaleAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (visible) {
      // Spring animation feels more natural than linear
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        tension: 50, // these values work well together
        friction: 7,
      }).start();
    } else {
      scaleAnim.setValue(0); // reset for next time
    }
  }, [visible, scaleAnim]);

  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
      accessibilityViewIsModal={true}
    >
      <View style={styles.overlay}>
        <Animated.View 
          style={[
            styles.modalContainer,
            {
              transform: [{ scale: scaleAnim }]
            }
          ]}
        >
          <ThemedView style={styles.contentContainer}>
            {/* Success Icon */}
            <View style={styles.iconContainer}>
              <ThemedText style={styles.successIcon}>✅</ThemedText>
            </View>
            
            <ThemedText style={styles.title}>Registration Successful!</ThemedText>
            
            <ThemedText style={styles.message}>
              Welcome, {name}! Your account has been created successfully.
            </ThemedText>
            
            <ThemedText style={styles.subMessage}>
              You can now start using the app with your new account.
            </ThemedText>
            
            <TouchableOpacity
              style={styles.continueButton}
              onPress={onClose}
              accessibilityLabel="Continue to app"
              accessibilityHint="Tap to close this modal and continue using the app"
            >
              <ThemedText style={styles.continueButtonText}>
                Continue
              </ThemedText>
            </TouchableOpacity>
          </ThemedView>
        </Animated.View>
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
    width: '100%',
    maxWidth: 380,
  },
  contentContainer: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 32,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  iconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#e8f5e8',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  successIcon: {
    fontSize: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#2d3436',
  },
  message: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 8,
    lineHeight: 24,
    color: '#636e72',
  },
  subMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 22,
    color: '#74b9ff',
  },
  continueButton: {
    backgroundColor: '#00b894',
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 25,
    minWidth: 160,
    shadowColor: '#00b894',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 4,
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});