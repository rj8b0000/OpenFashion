import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Typography, Spacing } from '../../../theme';
import ICONS from '../../../constants/svgPath';

const CheckoutSectionTitle = ({ title }: { title: string }) => {
  return (
    <View style={styles.headerTitleContainer}>
      <Text style={Typography.title}>{title}</Text>
      <ICONS.DIVIDER />
    </View>
  );
};

export default CheckoutSectionTitle;

const styles = StyleSheet.create({
  headerTitleContainer: {
    alignItems: 'center',
    marginVertical: Spacing.md,
  },
});
