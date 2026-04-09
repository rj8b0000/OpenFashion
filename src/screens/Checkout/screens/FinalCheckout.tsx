import React from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

import Header from '../../../globalComponents/Header';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import { productsData } from '../../../constants/productsData';
import ProductComponent from '../../../globalComponents/ProductComponent';
import BottomButton from '../Component/BottomButton';
import CheckoutSectionTitle from '../../../globalComponents/CheckoutSectionTitle';
import AddressCard from '../Component/AddressCard';
import PaymentSuccessModal from '../Component/PaymentSuccessModal';
import { RootStackNavigationProp } from '../../../navigator/types';

const FinalCheckout = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootStackNavigationProp>();
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const address = {
    firstName: 'Iris',
    lastName: 'Watson',
    address: '606-3727 Ullamcorper. Street',
    city: 'Roseville',
    state: 'NH',
    zipCode: '11523',
    phoneNumber: '(786) 713-8616',
  };

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutSectionTitle title={t('checkoutTitle')} />

        <View style={styles.addressSection}>
          <View style={styles.sectionHeader}>
            <AddressCard
              item={address}
              containerStyle={{
                backgroundColor: 'transparent',
                padding: 0,
                flex: 1,
              }}
            />
          </View>
        </View>

        <View style={styles.divider} />

        <Pressable
          style={styles.paymentSection}
          onPress={() => navigation.navigate('AddNewCard')}
        >
          <View style={styles.paymentContent}>
            <ICONS.MASTER_CARD width={40} height={26} />
            <Text style={styles.paymentText}>{t('masterCardEnding')}</Text>
          </View>
          <ICONS.FORWARD width={20} height={20} color={Colors.label} />
        </Pressable>

        <View style={styles.divider} />

        <View style={styles.productContainer}>
          <ProductComponent
            item={productsData[0]}
            isGrid={false}
            isCheckout={true}
          />
        </View>

        <View style={styles.totalSection}>
          <Text style={styles.totalLabel}>{t('total')}</Text>
          <Text style={styles.totalPriceText}>$240</Text>
        </View>
      </ScrollView>

      <BottomButton
        Icon={<ICONS.WHITE_BAG width={24} height={24} color={Colors.white} />}
        title={t('checkoutTitle')}
        onPress={() => setIsModalVisible(true)}
      />

      <PaymentSuccessModal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onBackToHome={() => {
          setIsModalVisible(false);
          navigation.navigate('Home');
        }}
      />
    </SafeAreaView>
  );
};

export default FinalCheckout;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingBottom: Spacing.xl,
  },
  addressSection: {
    paddingHorizontal: '5%',
    marginTop: Spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    paddingVertical: Spacing.lg,
  },
  paymentContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentText: {
    ...Typography.bodyLarge,
    color: Colors.body,
    marginLeft: Spacing.md,
  },
  productContainer: {
    paddingHorizontal: '5%',
    marginTop: Spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginHorizontal: '5%',
    opacity: 0.5,
  },
  totalSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '5%',
    marginTop: Spacing.xxl,
    paddingTop: Spacing.md,
  },
  totalLabel: {
    ...Typography.bodyLarge,
    color: Colors.body,
    letterSpacing: 3,
  },
  totalPriceText: {
    ...Typography.bodyLarge,
    color: Colors.primary,
    letterSpacing: 3,
  },
});
