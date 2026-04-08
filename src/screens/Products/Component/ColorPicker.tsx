import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, Typography } from '../../../theme';
import responsive from '../../../styles/responsive';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState(0);

  const colors = [Colors.black, Colors.secondary, '#EBEBEB'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Color</Text>
      <View style={styles.colorsContainer}>
        {colors.map((color, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => setSelectedColor(index)}
            style={[
              styles.colorOutline,
              selectedColor === index && styles.selectedOutline,
            ]}
          >
            <View style={[styles.colorCircle, { backgroundColor: color }]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ColorPicker;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    ...Typography.bodyMedium,
    color: Colors.label,
    marginRight: responsive.width(10),
  },
  colorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive.width(10),
  },
  colorOutline: {
    width: responsive.width(28),
    height: responsive.width(28),
    borderRadius: responsive.width(14),
    borderWidth: 1,
    borderColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedOutline: {
    borderColor: '#DEDEDE',
  },
  colorCircle: {
    width: responsive.width(20),
    height: responsive.width(20),
    borderRadius: responsive.width(11),
  },
});
