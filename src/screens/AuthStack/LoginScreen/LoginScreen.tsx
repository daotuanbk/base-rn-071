import React, { useRef } from 'react';
import { KeyboardAvoidingView, Linking, Platform, View } from 'react-native';
import { styles } from './LoginScreen.styles';
import {
  BaseButton,
  BaseText,
  BaseTextInput,
  IBaseButtonRef,
} from '@app/components';
import LinearGradient from 'react-native-linear-gradient';
import { AuthHeader } from '@app/components';
import { useTranslation } from 'react-i18next';
import { Formik, FormikProps } from 'formik';
import * as yup from 'yup';
import { yupCommonSchemaEmail, yupCommonSchemaPassword } from '@app/helpers';
import { connect } from 'react-redux';
import { Dispatch, RootState } from '@app/store';
import { withKeyboardDismiss } from '@app/hocs';
interface Props {}
interface IFormValue {
  username: string;
  password: string;
}

const Login = (props: Props & DispatchProps): JSX.Element => {
  const { t } = useTranslation('login');
  const { login } = props.authReducer;
  const formRef = useRef<FormikProps<IFormValue>>(null);
  const submitButtonRef = useRef<IBaseButtonRef>(null);
  const loginValidationSchema = yup.object().shape({
    ...yupCommonSchemaEmail({
      key: 'username',
    }),
    ...yupCommonSchemaPassword({
      key: 'password',
    }),
  });
  const initialValues: IFormValue = {
    username: '',
    password: '',
  };

  const onTermOfUsePress = () => {
    Linking.openURL('https://www.reset.com/terms-of-use');
  };

  const onPrivacyPolicyPress = () => {
    Linking.openURL('https://www.reset.com/privacy-policy');
  };
  const onLoginButtonPress = async () => {
    formRef?.current?.handleSubmit();
  };
  const onLogin = async (values: IFormValue) => {
    submitButtonRef?.current?.setButtonLoading(true);
    await login(values);
    submitButtonRef?.current?.setButtonLoading(false);
  };
  return (
    <LinearGradient
      locations={[0, 0.41, 0.98]}
      colors={['#E7E8FF', '#FCFEFF', '#FFFFFF']}
      style={styles.backgroundGradient}>
      <AuthHeader title={t('login')} />
      <Formik<IFormValue>
        innerRef={formRef}
        validateOnChange={false}
        validationSchema={loginValidationSchema}
        initialValues={initialValues}
        onSubmit={onLogin}>
        {({ values, errors, setFieldValue, validateField }) => {
          return (
            <KeyboardAvoidingView
              behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
              enabled
              style={styles.container}
              keyboardVerticalOffset={Platform.OS === 'ios' ? -40 : -40}>
              <BaseText style={styles.titleText}>{t('email')}</BaseText>
              <BaseTextInput
                name="username"
                value={values?.username}
                onChangeText={(text: any) => {
                  setFieldValue('username', text);
                }}
                error={errors.username}
                placeholder={t('email')}
                maxLength={50}
                onBlur={() => validateField('username')}
              />
              <BaseText style={styles.titleText}>{t('password')}</BaseText>
              <BaseTextInput
                name="password"
                value={values?.password}
                onChangeText={(text: any) => {
                  setFieldValue('password', text);
                }}
                error={errors.password}
                placeholder={t('password')}
                secureTextEntry={true}
                maxLength={50}
                onBlur={() => validateField('password')}
              />
              <View style={styles.forgotPasswordContainer}>
                <BaseButton
                  pressableStyle={styles.forgotPasswordButton}
                  text={t('forgotPassword')}
                  textStyle={styles.forgotPasswordText}
                />
              </View>
              <View style={styles.agreeFieldContainer}>
                <BaseText style={styles.termAndPrivacyText}>
                  {t('agreeText')}
                </BaseText>
                <View style={styles.termAndPrivacyContainer}>
                  <BaseButton
                    onPress={onTermOfUsePress}
                    text={`${t('termOfUse')} `}
                    textStyle={{
                      ...styles.linkText,
                      ...styles.termAndPrivacyText,
                    }}
                  />
                  <BaseText style={styles.termAndPrivacyText}>{`${t(
                    'and',
                  )} `}</BaseText>
                  <BaseButton
                    onPress={onPrivacyPolicyPress}
                    text={t('privacyPolicy')}
                    textStyle={{
                      ...styles.linkText,
                      ...styles.termAndPrivacyText,
                    }}
                  />
                </View>
              </View>
              <View style={styles.loginButtonContainer}>
                <BaseButton
                  buttonType="primary"
                  ref={submitButtonRef}
                  onPress={onLoginButtonPress}
                  text={t('login')}
                  pressableStyle={styles.loginButton}
                />
              </View>
            </KeyboardAvoidingView>
          );
        }}
      </Formik>
    </LinearGradient>
  );
};

const mapState = (_rootState: RootState) => ({});

const mapDispatch = (rootReducer: Dispatch) => ({
  authReducer: rootReducer.authModel,
});
type DispatchProps = ReturnType<typeof mapDispatch>;

const LoginScreen = withKeyboardDismiss(connect(mapState, mapDispatch)(Login));

export { LoginScreen };
