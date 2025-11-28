// Unit tests for RegistrationForm - testing the main registration flow
// Run: npm install --save-dev @testing-library/react-native @testing-library/jest-native
// Note: might need to add more edge cases later

import { fireEvent, render, waitFor } from '@testing-library/react-native';
import { Alert } from 'react-native';
import RegistrationForm from '../components/registration/RegistrationForm';

// Mock Alert for testing - we don't want actual alerts popping up
jest.spyOn(Alert, 'alert');

describe('RegistrationForm', () => {
  beforeEach(() => {
    Alert.alert.mockClear(); // clean slate for each test
  });

  test('renders form fields correctly', () => {
    const { getByPlaceholderText, getByText } = render(<RegistrationForm />);
    
    // Basic smoke test - make sure all the important stuff is there
    expect(getByPlaceholderText('Enter your full name')).toBeTruthy();
    expect(getByPlaceholderText('Enter your email address')).toBeTruthy();
    expect(getByText('Register')).toBeTruthy();
  });

  test('register button is disabled when form is invalid', () => {
    const { getByText, getByPlaceholderText } = render(<RegistrationForm />);
    
    const registerButton = getByText('Register');
    expect(registerButton).toBeDisabled(); // should start disabled
    
    // Just name isn't enough
    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John');
    expect(registerButton).toBeDisabled();
    
    // Now with valid email, button should work
    fireEvent.changeText(getByPlaceholderText('Enter your email address'), 'john@example.com');
    expect(registerButton).not.toBeDisabled();
  });

  test('shows validation errors for invalid inputs', () => {
    const { getByPlaceholderText, getByText } = render(<RegistrationForm />);
    
    // Test name validation - too short
    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'J');
    expect(getByText('Name must be at least 2 characters')).toBeTruthy();
    
    // console.log('Testing email validation'); // debugging this...
    fireEvent.changeText(getByPlaceholderText('Enter your email address'), 'invalid-email');
    expect(getByText('Please enter a valid email address')).toBeTruthy();
  });

  test('shows confirmation dialog when register is pressed', async () => {
    const { getByText, getByPlaceholderText } = render(<RegistrationForm />);
    
    // Fill out valid form data
    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John Doe');
    fireEvent.changeText(getByPlaceholderText('Enter your email address'), 'john@example.com');
    
    // Hit the register button and wait for confirmation
    fireEvent.press(getByText('Register'));
    
    await waitFor(() => {
      // Should see the confirmation alert with user's name
      expect(Alert.alert).toHaveBeenCalledWith(
        'Confirm Registration',
        expect.stringContaining('John Doe'),
        expect.any(Array),
        expect.any(Object)
      );
    });
  });

  test('resets form after successful registration', async () => {
    const { getByText, getByPlaceholderText, getByDisplayValue } = render(<RegistrationForm />);
    
    // Set up the form with valid data
    fireEvent.changeText(getByPlaceholderText('Enter your full name'), 'John Doe');
    fireEvent.changeText(getByPlaceholderText('Enter your email address'), 'john@example.com');
    
    fireEvent.press(getByText('Register'));
    
    // Find and press the "Yes" button in the alert
    const alertCall = Alert.alert.mock.calls[0];
    const yesButton = alertCall[2].find(button => button.text === 'Yes');
    yesButton.onPress(); // simulate user confirming
    
    // TODO: might want to test the loading state here too
    // Wait for success modal and close it
    await waitFor(() => {
      const continueButton = getByText('Continue');
      fireEvent.press(continueButton);
    });
    
    // Form should be cleared after successful registration
    expect(getByPlaceholderText('Enter your full name').props.value).toBe('');
    expect(getByPlaceholderText('Enter your email address').props.value).toBe('');
  });
});