import React from 'react';
import { View } from 'react-native';
import { styles } from './BaseNotificationModal.styles';
import { BaseButton, BaseModal, BaseText } from '@app/components';
import { connect } from 'react-redux';
import { useTranslation } from 'react-i18next';
interface Props {
  visible?: boolean;
  title?: string;
  type?: string;
  icon?: React.ReactNode;
  okButtonTextStyle?: object;
  notificationModalVisible?: boolean;
  notificationModalTitle?: string;
  onOkButtonModal?: () => void;
  notificationModalContent?: string;
  notificationModalType?: string;
  hideNotificationModal?: () => void;
}

const NotificationModal = (props: Props): JSX.Element => {
  const { t } = useTranslation('common');
  const {
    notificationModalVisible,
    notificationModalTitle,
    onOkButtonModal,
    notificationModalContent,
    okButtonTextStyle,
    notificationModalType,
    hideNotificationModal,
  } = props;
  console.log('props', props);
  const onOkButtonPress = () => {
    if (onOkButtonModal) {
      onOkButtonModal();
    } else {
      hideNotificationModal && hideNotificationModal();
    }
  };
  return (
    <BaseModal isVisible={notificationModalVisible ?? false}>
      <View>
        <View style={styles.modalView}>
          <BaseText
            style={
              notificationModalType === 'error'
                ? styles.modalTitle
                : styles.modalTitleSuccess
            }>
            {notificationModalTitle}
          </BaseText>
          <BaseText style={styles.description}>
            {notificationModalContent ? notificationModalContent : ''}
          </BaseText>
          <BaseButton
            pressableStyle={styles.okButton}
            textStyle={{ ...styles.okButtonText, ...okButtonTextStyle }}
            text={t('accept')}
            onPress={onOkButtonPress}
          />
        </View>
      </View>
    </BaseModal>
  );
};
const mapState = (rootState: any) => ({
  ...rootState.appModel,
});

const mapDispatch = (rootReducer: any) => ({
  ...rootReducer.appModel,
});
const BaseNotificationModal = React.memo(
  connect(mapState, mapDispatch)(NotificationModal),
);

export { BaseNotificationModal };
