import { color } from '@app/constants';
import { Platform, StatusBar, StyleSheet } from 'react-native';
const currentStatusBarHeight = StatusBar.currentHeight ?? 0;
export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: Platform.OS === 'ios' ? 104 : currentStatusBarHeight + 60,
  },
  safeAreaContainer: {
    width: '100%',
    height: Platform.OS === 'ios' ? 104 : currentStatusBarHeight + 60,
    paddingTop: Platform.OS === 'android' ? currentStatusBarHeight : 0,
  },
  mainContentContainer: {
    paddingHorizontal: 23,
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
  leftContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
