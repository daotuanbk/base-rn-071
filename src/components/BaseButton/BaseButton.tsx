import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useMemo,
  useCallback,
} from 'react';
import { Pressable, ActivityIndicator } from 'react-native';
import { styles } from './BaseButton.styles';
import { BaseText } from '@app/components';
type ButtonType = 'primary' | 'secondary' | 'disabled' | null;

interface Props {
  pressableStyle?: object;
  textStyle?: object;
  disabled?: boolean;
  children?: React.ReactNode;
  onPress?: () => void;
  activityIndicatorColor?: string;
  text?: string | null;
  buttonType?: ButtonType;
}

export interface IBaseButtonRef {
  setButtonLoading: (value: boolean) => void;
}

export const BaseButton = React.memo(
  forwardRef<IBaseButtonRef, Props>((props, ref): JSX.Element => {
    const [isLoading, setIsLoading] = useState(false);
    const {
      text,
      disabled,
      onPress,
      activityIndicatorColor,
      children,
      buttonType,
      pressableStyle,
      textStyle,
    } = props;
    useImperativeHandle(ref, () => ({
      setButtonLoading(value: boolean) {
        setIsLoading(value);
      },
    }));
    const onPressButton = useCallback(() => {
      if (disabled || isLoading) {
      } else if (onPress) {
        onPress();
      }
    }, [disabled, isLoading, onPress]);
    const getButtonStyles = useMemo(() => {
      switch (buttonType) {
        case 'primary':
          return { ...styles.button, ...styles.primaryButton };
        case 'secondary':
          return { ...styles.button, ...styles.secondaryButton };
        case 'disabled':
          return { ...styles.button, ...styles.disabledButton };
        default:
          return styles.button;
      }
    }, [buttonType]);
    const getTextStyles = useMemo(() => {
      switch (buttonType) {
        case 'primary':
          return { ...styles.primaryButtonText, ...textStyle };
        case 'secondary':
          return { ...styles.secondaryButtonText, ...textStyle };
        case 'disabled':
          return { ...styles.disabledButtonText, ...textStyle };
        default:
          return { ...textStyle };
      }
    }, [textStyle, buttonType]);
    const renderChildren = () => {
      if (!isLoading) {
        if (children) {
          return children;
        } else {
          return <BaseText style={getTextStyles}>{text}</BaseText>;
        }
      } else {
        return (
          <ActivityIndicator
            size="small"
            color={activityIndicatorColor || '#FFF'}
            animating={isLoading}
          />
        );
      }
    };
    return (
      <Pressable
        style={({ pressed }) => [
          {
            ...getButtonStyles,
            opacity: pressed ? 0.5 : 1.0,
            ...pressableStyle,
          },
        ]}
        onPress={onPressButton}
        disabled={isLoading || disabled}>
        {renderChildren()}
      </Pressable>
    );
  }),
);
