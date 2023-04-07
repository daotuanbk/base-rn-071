import React from 'react';
import { View } from 'react-native';
import { styles } from './BaseModal.styles';
import Modal from 'react-native-modal';
interface Props {
  isVisible: boolean;
  children?: React.ReactNode;
  contentContainerStyle?: object;
  contentStyle?: object;
}
const BaseModalComponent = (props: Props): JSX.Element => {
  const { children, contentContainerStyle, contentStyle } = props;
  return (
    <>
      <Modal
        style={{ ...styles.centeredView, ...contentContainerStyle }}
        {...props}
        animationIn="zoomIn"
        animationOut="zoomOut"
        statusBarTranslucent>
        <View style={{ ...styles.contentView, ...contentStyle }}>
          {children}
        </View>
      </Modal>
    </>
  );
};
const BaseModal = React.memo(BaseModalComponent);
export { BaseModal };
