import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spacing, Typography } from '../../../theme';

interface AddressCardProps {
  item: {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    phoneNumber: string;
  };
}

const AddressCard: React.FC<AddressCardProps> = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>{item.firstName} {item.lastName}</Text>
      <Text style={styles.descriptionText}>{item.address}</Text>
      <Text style={styles.descriptionText}>{item.city}, {item.state} {item.zipCode}</Text>
      <Text style={styles.descriptionText}>{item.phoneNumber}</Text>
    </View>
  );
};

export default AddressCard;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.md,
    backgroundColor: '#F9F9F9',
    borderRadius: 8,
    marginBottom: Spacing.sm,
  },
  titleText: {
    ...Typography.bodyLarge,
    color: '#333333',
    marginBottom: 4,
  },
  descriptionText: {
    ...Typography.bodyMedium,
    color: '#555555',
  },
});
