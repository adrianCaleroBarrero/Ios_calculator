import {Text, Pressable} from 'react-native';
import React from 'react';
import {globalStyles, colors} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  darkText?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  darkText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...globalStyles.button,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...globalStyles.buttonText,
          color: darkText ? 'black' : 'white',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
