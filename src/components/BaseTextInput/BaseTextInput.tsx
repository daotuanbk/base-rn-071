import React, { useRef, useEffect, useState, useCallback } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { styles } from './BaseTextInput.styles';
import { BaseText } from '@app/components';
import { color } from '@app/constants';

interface Props extends TextInputProps {
  nativeInputStyle?: object;
  error?: any;
  value: string | undefined;
  style?: object;
  errorStyle?: object;
  name?: string;
  onFocus?: () => void;
  onBlur?: () => void;
}
const BaseInput = (props: Props): JSX.Element => {
  const { error, nativeInputStyle, value, style, errorStyle, onFocus, onBlur } =
    props;
  const [isFocus, setIsFocus] = useState(false);
  const textInputRef = useRef(null) as any;
  useEffect(() => {
    textInputRef.current?.setNativeProps({
      style: {
        fontWeight: '400',
        fontFamily: 'Rubik-Medium',
        fontSize: 15,
        color: color.primaryMain,
        ...nativeInputStyle,
      },
    });
  }, [nativeInputStyle]);
  const onInputFocus = useCallback(() => {
    setIsFocus(true);
    onFocus && onFocus();
  }, [onFocus]);
  const onInputBlur = useCallback(() => {
    setIsFocus(false);
    onBlur && onBlur();
  }, [onBlur]);
  return (
    <>
      <TextInput
        autoCapitalize="none"
        placeholderTextColor={color.primary03}
        {...props}
        value={value}
        ref={textInputRef}
        onFocus={onInputFocus}
        onBlur={onInputBlur}
        style={{
          ...styles.input,
          ...style,
          ...(error && styles.errorInput),
          ...(error && errorStyle),
          ...(isFocus && styles.inputFocusStyle),
        }}
      />
      {error && <BaseText style={styles.errorText}>{error}</BaseText>}
    </>
  );
};
const BaseTextInput = React.memo(BaseInput);
export { BaseTextInput };
