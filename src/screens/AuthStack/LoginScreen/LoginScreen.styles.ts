import { color } from '@app/constants';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  backgroundGradient: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 45,
    paddingTop: 85,
    flex: 1,
  },
  titleText: {
    marginVertical: 10,
    fontSize: 16,
    fontWeight: '400',
    color: color.grey900,
  },
  forgotPasswordButton: {
    alignSelf: 'center',
  },
  forgotPasswordText: {
    color: '#000',
    fontSize: 16,
    fontWeight: '500',
  },
  forgotPasswordContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButton: {
    height: 50,
    position: 'absolute',
    bottom: 45,
    width: '100%',
  },
  loginButtonContainer: {
    flex: 1,
    marginHorizontal: -35,
  },
  linkText: {
    color: color.secondaryMain,
  },
  termAndPrivacyContainer: {
    flexDirection: 'row',
  },
  agreeFieldContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 45,
  },
  termAndPrivacyText: {
    fontSize: 16,
  },
});
