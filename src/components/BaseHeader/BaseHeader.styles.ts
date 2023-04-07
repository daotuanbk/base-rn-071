import { color } from '@app/constants';
import { Platform, StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Platform.OS === 'ios' ? 104 : 60,
  },
  safeAreaContainer: {
    backgroundColor: color.primaryMain,
    width: '100%',
    height: Platform.OS === 'ios' ? 104 : 60,
  },
  mainContentContainer: {
    paddingHorizontal: 32,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  title: {
    fontWeight: '500',
    fontSize: 20,
    color: color.grey0,
  },
});
