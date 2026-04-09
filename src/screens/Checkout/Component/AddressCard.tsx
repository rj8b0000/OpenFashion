import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../../theme';
import { IAddressCardProps } from '../../../types';

const AddressCard: React.FC<IAddressCardProps> = ({ item, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={styles.titleText}>
        {item.firstName} {item.lastName}
      </Text>
      <Text style={styles.descriptionText}>{item.address}</Text>
      <Text style={styles.descriptionText}>
        {item.city}, {item.state} {item.zipCode}
      </Text>
      <Text style={styles.descriptionText}>{item.phoneNumber}</Text>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    backgroundColor: Colors.checkoutBg,
    borderRadius: Radius.sm,
    marginBottom: Spacing.sm,
  },
  titleText: {
    ...Typography.bodyLarge,
    color: Colors.checkoutTitle,
    marginBottom: 4,
  },
  descriptionText: {
    ...Typography.bodyMedium,
    color: Colors.checkoutDescription,
  },
});
