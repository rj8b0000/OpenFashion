import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import ICONS from '../constants/svgPath';
import { FontFamily } from '../theme/typography';
import responsive from '../styles/responsive';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../navigator/types';
import { IProductComponentProps } from '../types';
import { Spacing } from '../theme';

const ProductComponent = ({
  item,
  isGrid,
  isCheckout,
}: IProductComponentProps) => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootStackNavigationProp>();
  const { width: windowWidth } = Dimensions.get('window');
  const isTablet = windowWidth > 600;

  const TABLET_TITLE_SIZE = responsive.fontSize(14);
  const TABLET_DESC_SIZE = responsive.fontSize(12);
  const TABLET_PRICE_SIZE = responsive.fontSize(16);
  const TABLET_LABEL_SIZE = responsive.fontSize(14);

  const itemWidth = isGrid ? '48%' : '100%';

  return (
    <Pressable
      style={[
        styles.container,
        {
          width: itemWidth,
        },
      ]}
      onPress={() => navigation.navigate('PDP')}
    >
      <View
        style={[
          styles.innerContainer,
          {
            flexDirection: isGrid ? 'column' : 'row',
          },
        ]}
      >
        <View
          style={[
            isGrid ? styles.imageWrapperGrid : styles.imageWrapperList,
            isGrid && isTablet && { aspectRatio: 165 / 260 },
            !isGrid && {
              aspectRatio: isTablet ? 1 / 0.8 : undefined,
              height: isTablet ? undefined : responsive.height(170),
              width: isTablet ? '45%' : '40%',
            },
          ]}
        >
          <Image source={item.image} resizeMode="cover" style={styles.image} />
          {isGrid && (
            <ICONS.HEART
              width={isTablet ? responsive.width(14) : responsive.width(18)}
              height={isTablet ? responsive.width(14) : responsive.width(18)}
              style={styles.heartIcon}
            />
          )}
        </View>
        <View
          style={[
            styles.detailsContainer,
            {
              marginTop: isGrid ? '4%' : '0%',
              width: isGrid ? '100%' : isTablet ? '52%' : '60%',
              padding: isGrid ? '0%' : '2%',
              paddingLeft: !isGrid && isTablet ? '2%' : '4%',
              justifyContent: 'flex-start',
            },
          ]}
        >
          <View
            style={
              isCheckout ? { justifyContent: 'space-between', gap: '4%' } : null
            }
          >
            <Text
              style={[
                styles.nameText,
                {
                  fontSize: isTablet ? TABLET_TITLE_SIZE : isGrid ? 17 : 18,
                },
              ]}
            >
              {t(item.name)}
            </Text>
            {isCheckout ? null : (
              <Text
                style={[
                  styles.descriptionText,
                  {
                    fontSize: isTablet ? TABLET_DESC_SIZE : isGrid ? 14 : 15,
                  },
                ]}
              >
                {item.description}
              </Text>
            )}

            {isCheckout && (
              <View style={styles.checkoutCounterContainer}>
                <Pressable style={styles.counterBtn}>
                  <ICONS.MINUS width={12} height={12} />
                </Pressable>
                <Text style={styles.counterValue}>1</Text>
                <Pressable style={styles.counterBtn}>
                  <ICONS.PLUS_CHECKOUT width={12} height={12} />
                </Pressable>
              </View>
            )}

            <Text
              style={[
                styles.priceText,
                {
                  fontSize: isTablet
                    ? TABLET_PRICE_SIZE
                    : isGrid
                    ? responsive.fontSize(18)
                    : responsive.fontSize(20),
                  marginTop: isCheckout ? '4%' : '2%',
                },
              ]}
            >
              ${item.price}
            </Text>
          </View>

          {!isGrid && !isCheckout && (
            <View style={styles.listViewDetails}>
              <View style={styles.ratingContainer}>
                <ICONS.STAR width={18} height={18} />
                <Text
                  style={[
                    styles.ratingText,
                    {
                      fontSize: isTablet
                        ? responsive.fontSize(14)
                        : responsive.fontSize(14),
                    },
                  ]}
                >
                  {t('categoryRatings')}
                </Text>
              </View>
              <View style={styles.bottomRow}>
                <View style={styles.sizeContainer}>
                  <Text
                    style={[
                      styles.sizeLabel,
                      {
                        fontSize: isTablet ? TABLET_LABEL_SIZE : 16,
                      },
                    ]}
                  >
                    {t('categorySize')}
                  </Text>
                  <View style={styles.sizeOptions}>
                    <View style={styles.sizeCircle}>
                      <Text style={styles.sizeText}>{t('sizeSmall')}</Text>
                    </View>
                    <View style={styles.sizeCircle}>
                      <Text style={styles.sizeText}>{t('sizeMedium')}</Text>
                    </View>
                    <View style={styles.sizeCircle}>
                      <Text style={styles.sizeText}>{t('sizeLarge')}</Text>
                    </View>
                  </View>
                </View>
                <ICONS.HEART width={20} height={20} />
              </View>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.xs,
  },
  innerContainer: {
    width: '100%',
    justifyContent: 'space-between',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  detailsContainer: {
    flex: 1,
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
    fontFamily: FontFamily.regular,
    color: '#DD8560',
    marginTop: '2%',
  },
  listViewDetails: {
    marginTop: '4%',
    gap: 12,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: '2%',
  },
  ratingText: {
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
    fontFamily: FontFamily.regular,
  },
  sizeOptions: {
    flexDirection: 'row',
    gap: 6,
  },
  sizeCircle: {
    width: responsive.width(25),
    height: responsive.width(25),
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#DEDEDE',
  },
  sizeText: {
    fontSize: responsive.fontSize(10),
    fontFamily: FontFamily.regular,
    padding: '5%',
  },
  imageWrapperGrid: {
    aspectRatio: 165 / 220,
    width: '100%',
  },
  imageWrapperList: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartIcon: {
    position: 'absolute',
    bottom: '2%',
    right: '4%',
  },
  checkoutCounterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: '4%',
  },
  counterBtn: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#F9F9F9',
  },
  counterValue: {
    fontFamily: FontFamily.regular,
    fontSize: 16,
    color: '#333',
  },
});
export default ProductComponent;
