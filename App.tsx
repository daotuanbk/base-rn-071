/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { store, persistor, RootState } from '@app/store';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import i18n from './i18n';
import { Navigation } from '@app/navigation';
import i18n from './i18n';
// declare const global: {HermesInternal: null | {}};

const BaseApp = (): JSX.Element => {
  const lang = useSelector(
    (state: RootState) => state.settingModel.currentLang,
  );
  useEffect(() => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang]);
  return <Navigation />;
};
const LoadingScreen = (): JSX.Element => {
  return <Text>Loading</Text>;
};
export const App = (): JSX.Element => {
  const [isBootstrapping, setIsBootstrapping] = useState(true);

  useEffect(() => {
    (async () => {
      setIsBootstrapping(false);
    })();
  }, []);
  if (isBootstrapping) {
    return <LoadingScreen />;
  }
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<LoadingScreen />}>
        <BaseApp />
      </PersistGate>
    </Provider>
  );
};

export default App;
