import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { Colors, Typography, FontFamily } from '../../../theme';
import responsive from '../../../styles/responsive';

const Sizes = () => {
  const [selectedSize, setSelectedSize] = useState('S');
  const sizes = ['S', 'M', 'L'];

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Size</Text>
      <View style={styles.sizesContainer}>
        {sizes.map((size, index) => {
          const isSelected = selectedSize === size;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedSize(size)}
              style={[
                styles.sizeCircle,
                isSelected ? styles.selectedSize : styles.unselectedSize,
              ]}
            >
              <Text
                style={[
                  styles.sizeText,
                  isSelected ? styles.selectedText : styles.unselectedText,
                ]}
              >
                {size}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Sizes;

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
  sizesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsive.width(8),
  },
  sizeCircle: {
    width: responsive.width(28),
    height: responsive.width(28),
    borderRadius: responsive.width(14),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  selectedSize: {
    backgroundColor: '#333333',
    borderColor: '#333333',
  },
  unselectedSize: {
    backgroundColor: Colors.white,
    borderColor: '#DEDEDE',
  },
  sizeText: {
    fontSize: responsive.fontSize(12),
    fontFamily: FontFamily.regular,
  },
  selectedText: {
    color: Colors.white,
  },
  unselectedText: {
    color: Colors.label,
  },
});
