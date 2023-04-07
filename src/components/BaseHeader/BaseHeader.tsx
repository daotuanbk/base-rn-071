import React from 'react';
import { View, Keyboard, StatusBar, SafeAreaView } from 'react-native';
import { styles } from './BaseHeader.styles';
import { BaseButton, BaseText } from '@app/components';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { color } from '@app/constants';
import { BackIcon } from '@app/assets';

interface Props {
  title?: string;
  rightComponent?: () => JSX.Element;
  leftComponent?: () => JSX.Element;
  centerComponent?: () => JSX.Element;
  onBackButtonPress?: () => void;
}

export const BaseHeader = React.memo((props: Props): JSX.Element => {
  const {
    title,
    rightComponent,
    leftComponent,
    centerComponent,
    onBackButtonPress,
  } = props;
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
      <StatusBar animated={true} backgroundColor={color.primaryMain} />
      {/* <View style={styles.container}> */}
      <SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.mainContentContainer}>
          <View>
            {leftComponent ? (
              leftComponent()
            ) : (
              <BaseButton onPress={onBackPress}>
                <BackIcon />
              </BaseButton>
            )}
          </View>
          <View>
            {centerComponent ? (
              centerComponent()
            ) : (
              <BaseText numberOfLines={1} style={styles.title}>
                {title}
              </BaseText>
            )}
          </View>
          <View>{rightComponent ? rightComponent() : <></>}</View>
        </View>
      </SafeAreaView>
      {/* </View> */}
    </>
  );
});
