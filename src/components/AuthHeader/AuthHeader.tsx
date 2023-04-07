import React from 'react';
import { View, Keyboard, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './AuthHeader.styles';
import { BaseButton } from '@app/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

interface Props {
  title?: string;
  onBackButtonPress?: () => void;
}

export const AuthHeader = React.memo((props: Props): JSX.Element => {
  const { onBackButtonPress } = props;
  const navigation = useNavigation<StackNavigationProp<any | undefined>>();
  const onBackPress = () => {
    Keyboard.dismiss();
    if (onBackButtonPress) {
      onBackButtonPress();
    } else {
      navigation.goBack();
    }
  };
  return (
    <>
      <StatusBar translucent animated={true} backgroundColor={'transparent'} />
      {/* <View style={styles.container}> */}
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.mainContentContainer}>
          <View style={styles.leftContainer}>
            {/* add back icon */}
            <BaseButton onPress={onBackPress}></BaseButton>
          </View>
          {/* add logo icon */}
          <View></View>
          <View style={styles.rightContainer}></View>
        </View>
      </SafeAreaView>
      {/* </View> */}
    </>
  );
});
