import { color } from '@app/constants';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  primaryButton: {
    backgroundColor: color.primaryMain,
  },
  primaryButtonText: {
    color: color.grey0,
    fontSize: 16,
    fontWeight: '500',
  },
  secondaryButton: {
    backgroundColor: color.primary01,
  },
  secondaryButtonText: {
    color: color.primary03,
    fontSize: 16,
    fontWeight: '500',
  },
  disabledButton: {
    backgroundColor: color.grey300,
  },
  disabledButtonText: {
    color: color.grey500,
    fontSize: 16,
    fontWeight: '500',
  },
});
