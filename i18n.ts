import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { configs } from '@app/configs';
import { authHomeEn, errorsEn, loginEn, testEn, commonEn } from '@app/assets';

const resources = {
  en: {
    test: testEn,
    authHome: authHomeEn,
    login: loginEn,
    errors: errorsEn,
    common: commonEn,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: configs.defaultLang,
  compatibilityJSON: 'v3',
  keySeparator: false, // we do not use keys in form messages.welcome

  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
