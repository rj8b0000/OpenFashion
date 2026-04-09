import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import { Colors, Radius, Spacing, Typography } from '../../../theme';

interface ActionRowProps {
  title: string;
  Icon?: React.ReactNode;
  onPress?: () => void;
}

const ActionRow: React.FC<ActionRowProps> = ({ title, Icon, onPress }) => {
  return (
    <Pressable style={styles.container} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      {Icon && <View>{Icon}</View>}
    </Pressable>
  );
};

export default ActionRow;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.checkoutBg,
    padding: Spacing.md,
    borderRadius: Radius.sm,
    marginTop: Spacing.sm,
  },
  title: {
    ...Typography.bodyLarge,
    color: Colors.checkoutText,
  },
});
