import { color } from '@app/constants';
import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
  input: {
    borderColor: color.primary03,
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: 'transparent',
    fontSize: 14,
    color: 'rgb(0,0,0)',
  },
  errorInput: {
    borderColor: color.notificationError,
  },
  inputFocusStyle: {
    borderColor: color.primary01,
  },
  errorText: {
    marginTop: 8,
    color: color.notificationError,
    fontWeight: '400',
    fontSize: 13,
  },
});
