import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ProductImageSlider from './ProductImageSlider';
import { pdpSlider } from '../../../constants/pdpSlider';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import { useTranslation } from 'react-i18next';
import responsive from '../../../styles/responsive';
const ProductComponent = () => {
  const { t } = useTranslation();
  return (
    <>
      <View style={styles.productSliderContainer}>
        <ProductImageSlider sliderData={pdpSlider} />
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.textContainer}>
          <Text style={Typography.productTitle}>
            {t('productName').toUpperCase()}
          </Text>
          <Text style={Typography.productDescription}>
            {t('productDescription')}
          </Text>
          <Text style={[Typography.productPrice, styles.priceText]}>
            ${t('price')}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <ICONS.DOWNLOAD width={20} height={20} />
        </View>
      </View>
    </>
  );
};

export default ProductComponent;

const styles = StyleSheet.create({
  productSliderContainer: {
    alignSelf: 'center',
    marginTop: Spacing.lg,
    height: responsive.height(500),
  },
  detailsContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  textContainer: {
    width: '90%',
    justifyContent: 'center',
  },
  priceText: {
    color: Colors.primary,
  },
  iconContainer: {
    width: '10%',
    alignItems: 'center',
  },
});
