import React, { ReactNode } from 'react';
import { Text, Platform, TextStyle, TextProps } from 'react-native';
interface IBaseTextProps extends TextProps {
  children: ReactNode;
  style?: TextStyle;
}

export const BaseText = (props: IBaseTextProps): JSX.Element => {
  (Text as any).defaultProps = (Text as any).defaultProps || {};
  (Text as any).defaultProps.allowFontScaling = false;
  let style = {
    ...props?.style,
    fontWeight: Platform.OS === 'ios' ? props?.style?.fontWeight : undefined,
    fontStyle: Platform.OS === 'ios' ? props?.style?.fontStyle : undefined,
  };
  const defaultTextFont = () => {
    const isItalic = props.style?.fontStyle === 'italic';
    switch (props.style?.fontWeight) {
      case '100' || '200' || '300':
        return {
          fontFamily: `Rubik-Light${isItalic ? 'Italic' : ''}`,
        };
      case '400':
        return {
          fontFamily: `Rubik-Light${isItalic ? 'Italic' : ''}`,
        };
      case '500':
        return {
          fontFamily: `Rubik${isItalic ? '-MediumItalic' : '-Medium'}`,
        };
      case '600':
        return {
          fontFamily: `Rubik-SemiBold${isItalic ? 'Italic' : ''}`,
        };
      case '700':
        return {
          fontFamily: `Rubik-SemiBold${isItalic ? 'Italic' : ''}`,
        };
      case '800':
        return {
          fontFamily: `Rubik-Bold${isItalic ? 'Italic' : ''}`,
        };
      case 'bold':
        return {
          fontFamily: `Rubik-Bold${isItalic ? 'Italic' : ''}`,
        };
      default:
        return {
          fontFamily: `Rubik${isItalic ? '-LightItalic' : '-Light'}`,
        };
    }
  };

  return (
    <Text
      {...props}
      // includeFontPadding={false}
      style={{
        ...defaultTextFont(),
        ...style,
      }}>
      {props.children}
    </Text>
  );
};
