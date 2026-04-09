import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing } from '../../../theme';
import responsive from '../../../styles/responsive';
import { ICreditCardPreviewProps } from '../../../types';

const CreditCardPreview = ({ name, number, expiry }: ICreditCardPreviewProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.logoRow}>
        <View style={styles.red} />
        <View style={styles.yellow} />
      </View>

      <Text style={styles.number}>{number || '2365 3654 2365 3698'}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.name}>{name || 'Iris Watson'}</Text>

        <Text style={styles.expiry}>{expiry || '03/25'}</Text>
      </View>
    </View>
  );
};

export default CreditCardPreview;

const styles = StyleSheet.create({
  card: {
    height: responsive.height(190),
    width: '96%',
    borderRadius: Radius.lg,
    padding: Spacing.lg,
    justifyContent: 'space-between',
    backgroundColor: Colors.checkoutTitle,
  },

  logoRow: {
    flexDirection: 'row',
    alignSelf: 'flex-end',
  },

  red: {
    width: responsive.width(26),
    height: responsive.width(26),
    borderRadius: Radius.lg,
    backgroundColor: Colors.red,
  },

  yellow: {
    width: responsive.width(26),
    height: responsive.width(26),
    borderRadius: Radius.lg,
    backgroundColor: Colors.yellow,
    marginLeft: -Spacing.sm,
  },

  number: {
    color: Colors.white,
    fontSize: responsive.fontSize(18),
    letterSpacing: 2,
  },

  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  name: {
    color: Colors.white,
    fontSize: responsive.fontSize(14),
  },

  expiry: {
    color: Colors.white,
    fontSize: responsive.fontSize(14),
  },
});
