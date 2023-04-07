import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles } from './AuthHomeScreen.styles';
import { useTranslation } from 'react-i18next';
import { BaseButton, BaseText } from '@app/components';
import { RoundedLogo } from '@app/assets';
import { useNavigation } from '@react-navigation/native';
import { screen } from '@app/constants';
import { StackNavigationProp } from '@react-navigation/stack';
interface Props {}
const AuthHome = (_props: Props): JSX.Element => {
  const navigation = useNavigation<StackNavigationProp<any | undefined>>();
  const { t } = useTranslation('authHome');
  const onLoginButtonPress = () => {
    navigation.navigate(screen.LOGIN);
  };
  const onSignUpButtonPress = () => {};
  return (
    <SafeAreaView style={styles.safeArea}>
      <RoundedLogo style={styles.logo} />
      <View style={styles.container}>
        <BaseButton
          buttonType="primary"
          onPress={onLoginButtonPress}
          text={t('login')}
          pressableStyle={styles.loginButtonContainer}
        />
        <BaseText style={styles.loginDescriptionText}>
          {t('loginDescription')}
        </BaseText>
        <BaseButton
          buttonType="primary"
          onPress={onSignUpButtonPress}
          text={t('signUp')}
          pressableStyle={styles.signUpButtonContainer}
        />
        <BaseText style={styles.signUpDescriptionText}>
          {t('signUpDescription')}
        </BaseText>
      </View>
    </SafeAreaView>
  );
};
const AuthHomeScreen = React.memo(AuthHome);
export { AuthHomeScreen };
