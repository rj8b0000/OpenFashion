import React from 'react';
import { StyleSheet, Text, TouchableOpacity, ViewStyle, TextStyle, View } from 'react-native';
import { Colors, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';

interface PrimaryButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  icon?: React.ReactNode;
  disabled?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  textStyle,
  icon,
  disabled,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style, disabled && styles.disabledButton]}
      onPress={onPress}
      activeOpacity={0.8}
      disabled={disabled}
    >
      <View style={styles.content}>
        <Text style={[styles.text, textStyle]}>{title.toUpperCase()}</Text>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
      </View>
    </TouchableOpacity>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.black,
    height: responsive.height(56),
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  disabledButton: {
    opacity: 0.5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    ...Typography.bodyLarge,
    color: Colors.white,
    letterSpacing: 2,
  },
  iconContainer: {
    marginLeft: Spacing.sm,
  },
});
