import { color } from '@app/constants';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 47,
  },
  loginButtonContainer: {
    height: 50,
    marginTop: 170,
  },
  signUpButtonContainer: {
    height: 50,
    marginTop: 170,
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  loginDescriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: color.grey700,
    marginTop: 25,
    textAlign: 'center',
  },
  signUpDescriptionText: {
    fontSize: 16,
    fontWeight: '400',
    color: color.grey700,
    marginTop: 25,
    textAlign: 'center',
  },
  logo: {
    alignSelf: 'center',
  },
});
