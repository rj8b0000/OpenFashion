import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import responsive from '../../../styles/responsive';
import IMAGE from '../../../constants/imagePath';
import { GlobalStyles } from '../../../theme/styles';
import { Colors, Spacing, Typography } from '../../../theme';
import { PLPHome, IProductHomeComponentProps } from '../../../types';

const ProductHomeComponent: React.FC<IProductHomeComponentProps> = ({
  item,
}) => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={GlobalStyles.imageFull} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={[Typography.bodyLarge, styles.name]}>{item.name}</Text>
        <Text style={[Typography.bodyLarge, styles.price]}>${item.price}</Text>
      </View>
    </View>
  );
};

export default ProductHomeComponent;

const styles = StyleSheet.create({
  imageContainer: {
    width: Dimensions.get('window').width > 600 ? 300 : responsive.width(254),
    aspectRatio: 255 / 312,
    marginRight: Spacing.md,
  },
  contentContainer: {
    width: Dimensions.get('window').width > 600 ? 300 : responsive.width(254),
  },
  name: {
    textAlign: 'center',
  },
  price: {
    color: Colors.primary,
    textAlign: 'center',
  },
});
