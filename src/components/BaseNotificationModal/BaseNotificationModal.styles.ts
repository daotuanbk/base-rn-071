import { StyleSheet } from 'react-native';
import { color } from '@app/constants';
export const styles = StyleSheet.create({
  modal: {
    zIndex: 999,
  },
  modalView: {
    margin: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 20,
    paddingHorizontal: 20,
  },
  modalTitleSuccess: {
    fontSize: 18,
    marginBottom: 20,
    color: color.primaryMain,
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'center',
    lineHeight: 30,
    fontSize: 14,
  },
  customIcon: {
    marginVertical: 25,
  },
  okButton: {
    width: 180,
    height: 40,
    marginBottom: 20,
    marginTop: 20,
    backgroundColor: color.primary01,
    borderRadius: 10,
  },
  okButtonText: {
    color: color.grey0,
  },
  contentStyle: {
    textAlign: 'center',
  },
});
