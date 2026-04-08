import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, FontFamily, Typography } from '../../../theme';
import { Product } from '../../../types';
import { useTranslation } from 'react-i18next';

interface NewArrivalProductsProps {
  item: Product;
}
const RecommendedProductList: React.FC<NewArrivalProductsProps> = ({
  item,
}) => {
  const { t } = useTranslation();
  return (
    <View style={[styles.container]}>
      <View style={[styles.innerContainer]}>
        <View style={styles.imageWrapperGrid}>
          <Image source={item.image} resizeMode="cover" style={styles.image} />
        </View>
        <View style={[styles.detailsContainer]}>
          <View>
            <Text
              style={[
                Typography.newArrivalProductTitle,
                { textAlign: 'center' },
              ]}
            >
              {t(item.name)}
            </Text>
            <Text style={[Typography.bodyLarge, styles.priceText]}>
              ${item.price}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RecommendedProductList;

const styles = StyleSheet.create({
  container: {
    marginTop: '2%',
    width: '48%',
    height: 294,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    justifyContent: 'space-between',
    marginTop: '4%',
    width: '100%',
  },
  nameText: {
    fontFamily: FontFamily.regular,
    color: 'black',
  },
  descriptionText: {
    fontFamily: FontFamily.regular,
    color: '#555',
  },
  priceText: {
    color: Colors.primary,
    textAlign: 'center',
  },
  listViewDetails: {
    marginTop: '2%',
    height: '45%',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: '2%',
  },
  ratingText: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: '#000',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sizeContainer: {
    flexDirection: 'row',
    gap: 6,
    alignItems: 'center',
  },
  sizeLabel: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
  },
  sizeOptions: {
    flexDirection: 'row',
    gap: 6,
  },
  sizeCircle: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DEDEDE',
  },
  sizeText: {
    fontSize: 12,
    fontFamily: FontFamily.regular,
    padding: '5%',
  },
  imageWrapperGrid: {
    height: 220,
    borderColor: 'green',
    width: '100%',
  },
  imageWrapperList: {
    height: 190,
    borderColor: 'red',
    width: '40%',
  },
  heartIcon: {
    position: 'absolute',
    bottom: 8,
    right: 8,
  },
});
