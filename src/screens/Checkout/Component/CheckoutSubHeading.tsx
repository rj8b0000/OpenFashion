import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { Typography, Spacing } from '../../../theme';

const CheckoutSubHeading = ({ title }: { title: string }) => {
  return <Text style={styles.subHeading}>{title}</Text>;
};

export default CheckoutSubHeading;

const styles = StyleSheet.create({
  subHeading: {
    ...Typography.bodyLarge,
    color: '#888888',
    marginBottom: Spacing.sm,
  },
});
