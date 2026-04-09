import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Spacing, Colors } from '../../../theme';
import { ITitleProps } from '../../../types';

const CheckoutSubHeading = ({ title }: ITitleProps) => {
  return <Text style={styles.subHeading}>{title}</Text>;
};

export default CheckoutSubHeading;

const styles = StyleSheet.create({
  subHeading: {
    ...Typography.bodyLarge,
    color: Colors.checkoutText,
    marginBottom: Spacing.sm,
  },
});
