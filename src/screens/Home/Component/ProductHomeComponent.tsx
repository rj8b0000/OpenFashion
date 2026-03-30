import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import responsive from '../../../styles/responsive';
import IMAGE from '../../../constants/imagePath';
import { GlobalStyles } from '../../../theme/styles';
import { Colors, Spacing, Typography } from '../../../theme';
import { PLPHome } from '../../../types';

interface ProductHomeComponentProps {
  item: PLPHome;
}
const ProductHomeComponent: React.FC<ProductHomeComponentProps> = ({
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
    width: responsive.width(254),
    height: responsive.height(310),
    marginRight: Spacing.md,
  },
  contentContainer: {
    height: responsive.height(72),
    width: responsive.width(254),
  },
  name: {
    textAlign: 'center',
  },
  price: {
    color: Colors.primary,
    textAlign: 'center',
  },
});
