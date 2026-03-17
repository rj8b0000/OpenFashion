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
      <View
        style={{
          width: responsive.width(254),
          height: responsive.height(310),
          marginRight: Spacing.md,
        }}
      >
        <Image source={item.image} style={GlobalStyles.imageFull} />
      </View>
      <View
        style={{
          height: responsive.height(72),
          width: responsive.width(254),
        }}
      >
        <Text style={[Typography.bodyLarge, { textAlign: 'center' }]}>
          {item.name}
        </Text>
        <Text
          style={[
            Typography.bodyLarge,
            { color: Colors.primary, textAlign: 'center' },
          ]}
        >
          ${item.price}
        </Text>
      </View>
    </View>
  );
};

export default ProductHomeComponent;

const styles = StyleSheet.create({});
