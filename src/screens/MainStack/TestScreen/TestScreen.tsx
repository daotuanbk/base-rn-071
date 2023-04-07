import React from 'react';
import { SafeAreaView, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { styles } from './TestScreen.styles';
import { BaseText } from '@app/components';
const Test = (props: any): JSX.Element => {
  const onPressTestButton = () => {
    props.increment(1);
  };
  const onPressLanguage = () => {
    if (props.currentLang === 'en') {
      props.setLanguage('vi');
    } else {
      props.setLanguage('en');
    }
  };
  const onLogoutPress = () => {
    props.setIsSignedIn(false);
  };
  return (
    <SafeAreaView>
      <BaseText>Count {props.count}</BaseText>
      <TouchableOpacity style={styles.button} onPress={onPressTestButton}>
        <BaseText>Click me</BaseText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onPressLanguage}>
        <BaseText>Change Language</BaseText>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onLogoutPress}>
        <BaseText>Log Out</BaseText>
      </TouchableOpacity>
      <BaseText>{`Current Lang ${props.currentLang}`}</BaseText>
      {/* <BaseText>{`Lang ${t('language')}`}</BaseText> */}
    </SafeAreaView>
  );
};

const mapState = (rootState: any) => ({
  ...rootState.testModel,
  ...rootState.settingModel,
});

const mapDispatch = (rootReducer: any) => ({
  ...rootReducer.testModel,
  ...rootReducer.settingModel,
  ...rootReducer.authModel,
});

const TestScreen = connect(mapState, mapDispatch)(Test);

export { TestScreen };
