import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ICONS from '../constants/svgPath';
import { Colors, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';

interface CheckboxProps {
  label?: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onChange(!checked)}
      activeOpacity={0.7}
    >
      <View style={[styles.box, checked && styles.checkedBox]}>
        {checked && (
          <ICONS.DOWN
            width={responsive.width(12)}
            height={responsive.width(12)}
            fill={Colors.white}
          />
        )}
      </View>
      {label && <Text style={styles.label}>{label}</Text>}
    </TouchableOpacity>
  );
};

export default Checkbox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  box: {
    width: responsive.width(20),
    height: responsive.width(20),
    borderWidth: 1,
    borderColor: Colors.divider,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  checkedBox: {
    backgroundColor: Colors.black,
    borderColor: Colors.black,
  },
  label: {
    ...Typography.bodyMedium,
    color: Colors.body,
    marginLeft: Spacing.sm,
  },
});
