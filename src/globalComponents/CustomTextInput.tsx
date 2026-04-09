import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';
import { ICustomTextInputProps } from '../types';

interface CustomInputProps extends ICustomTextInputProps {
  error?: string;
  touched?: boolean;
}

const CustomTextInput: React.FC<CustomInputProps> = ({
  style,
  error,
  touched,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          style,
          touched && error ? styles.inputError : null,
        ]}
        placeholderTextColor={Colors.placeholder}
        {...rest}
      />
      {touched && error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: Spacing.sm,
  },
  input: {
    ...Typography.bodyLarge,
    borderBottomWidth: 1,
    borderColor: Colors.divider,
    height: responsive.height(50),
    color: Colors.titleActive,
    paddingVertical: 0,
  },
  inputError: {
    borderColor: Colors.red,
  },
  errorText: {
    ...Typography.bodySmall,
    color: Colors.red,
    marginTop: Spacing.xs,
  },
});
