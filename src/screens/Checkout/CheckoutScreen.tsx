import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../globalComponents/Header';
import { Colors, Spacing, Typography } from '../../theme';
import ICONS from '../../constants/svgPath';
import ProductComponent from '../../globalComponents/ProductComponent';
import BottomButton from './Component/BottomButton';
import { productsData } from '../../constants/productsData';
import CheckoutSectionTitle from './Component/CheckoutSectionTitle';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../navigator/types';
import { useTranslation } from 'react-i18next';

const CheckoutScreen = () => {
  const product = productsData[0];
  const navigation = useNavigation<RootStackNavigationProp>();
  const { t } = useTranslation();
  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutSectionTitle title={t('checkoutTitle')} />

        <View style={styles.productContainer}>
          <ProductComponent item={product} isGrid={false} isCheckout={true} />
        </View>

        <View style={styles.promoDeliveryContainer}>
          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <ICONS.PROMO width={24} height={24} color={Colors.label} />
              <Text style={styles.rowText}>{t('addPromoCode')}</Text>
            </View>
          </Pressable>
          <View style={styles.divider} />

          <Pressable style={styles.row}>
            <View style={styles.rowLeft}>
              <ICONS.DELIVERY width={24} height={24} color={Colors.label} />
              <Text style={styles.rowText}>{t('delivery')}</Text>
            </View>
            <Text style={styles.rowRightText}>{t('free')}</Text>
          </Pressable>
          <View style={styles.divider} />
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.estTotalText}>{t('estTotal')}</Text>
          <Text style={styles.totalPriceText}>$240</Text>
        </View>
      </ScrollView>

      <BottomButton
        Icon={<ICONS.WHITE_BAG width={24} height={24} color={Colors.white} />}
        title={t('checkoutTitle')}
        onPress={() => navigation.navigate('ShippingAddress')}
      />
    </SafeAreaView>
  );
};

export default CheckoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  productContainer: {
    paddingHorizontal: '5%',
    marginBottom: Spacing.xl,
  },
  promoDeliveryContainer: {
    paddingHorizontal: '5%',
    marginBottom: Spacing.xl,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Spacing.md,
  },
  rowLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowText: {
    ...Typography.bodyLarge,
    color: '#333333',
    marginLeft: Spacing.md,
  },
  rowRightText: {
    ...Typography.bodyLarge,
    color: '#333333',
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: Spacing.xl,
    paddingTop: Spacing.md,
  },
  estTotalText: {
    ...Typography.bodyLarge,
    color: '#333333',
    letterSpacing: 2,
  },
  totalPriceText: {
    ...Typography.bodyLarge,
    color: Colors.primary,
    letterSpacing: 2,
  },
});
