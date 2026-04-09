import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { Colors, Typography } from '../../../theme';
import responsive from '../../../styles/responsive';
import { ICustomTextInputProps } from '../../../types';

const CustomTextInput: React.FC<ICustomTextInputProps> = ({
  style,
  ...rest
}) => {
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={Colors.placeholder}
      {...rest}
    />
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  input: {
    ...Typography.bodyLarge,
    borderBottomWidth: 1,
    borderColor: Colors.placeholder,
    height: responsive.height(50),
    color: Colors.titleActive,
    paddingVertical: 0,
  },
});
