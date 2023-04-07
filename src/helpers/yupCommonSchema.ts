import i18n from '../../i18n';
import * as yup from 'yup';

interface IYupCommonSchemaEmail {
  key: string;
  message?: {
    pleaseInputEmail?: string;
    invalidEmail?: string;
    longEmail?: string;
  };
}

export const yupCommonSchemaEmail = (object: IYupCommonSchemaEmail) => {
  const { key, message } = object;
  return {
    [key]: yup
      .string()
      .trim()
      .required(message?.pleaseInputEmail || i18n.t('errors:pleaseInputEmail'))
      .matches(
        /^(\S+$)/,
        message?.invalidEmail || i18n.t('errors:invalidEmail'),
      )
      .email(message?.invalidEmail || i18n.t('errors:invalidEmail')),
    // .max(50, message?.longEmail || i18n.t('errors:longEmail')),
  };
};

interface IYupCommonSchemaPassword {
  key: string;
  message?: {
    passwordRequired?: string;
    minPassword?: string;
  };
}

export const yupCommonSchemaPassword = (object: IYupCommonSchemaPassword) => {
  const { key, message } = object;
  return {
    [key]: yup
      .string()
      .required(
        message?.passwordRequired || i18n.t('errors:pleaseInputPassword'),
      ),
    // .min(8, message?.minPassword || i18n.t('errors:minPassword')),
  };
};
