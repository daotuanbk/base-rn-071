import React, { ComponentType, ReactNode } from 'react';
import {
  Keyboard,
  Pressable,
  TouchableWithoutFeedbackProps,
  StyleSheet,
} from 'react-native';

type WithKeyboardDismissProps = TouchableWithoutFeedbackProps & {
  children: ReactNode;
};

export const withKeyboardDismiss = <P extends WithKeyboardDismissProps>(
  WrappedComponent: ComponentType<P>,
) => {
  const onDismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (props: any) => (
    <Pressable onPress={onDismissKeyboard} style={styles.container}>
      <WrappedComponent {...props} />
    </Pressable>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
