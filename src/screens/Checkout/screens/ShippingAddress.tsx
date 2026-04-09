import React from 'react';
import { FlatList, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing, Typography } from '../../../theme';
import Header from '../../../globalComponents/Header';
import BottomButton from '../Component/BottomButton';
import ICONS from '../../../constants/svgPath';

import CheckoutSectionTitle from '../../../globalComponents/CheckoutSectionTitle';
import CheckoutSubHeading from '../Component/CheckoutSubHeading';
import ActionRow from '../Component/ActionRow';
import AddressCard from '../Component/AddressCard';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../navigator/types';

const ShippingAddress = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<RootStackNavigationProp>();
  const address = [
    {
      id: '1',
      firstName: 'Iris',
      lastName: 'Watson',
      address: '606-3727 Ullamcorper. Street',
      city: 'Roseville',
      state: 'NH',
      zipCode: '11523',
      phoneNumber: '(786) 713-8616',
    },
  ];

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutSectionTitle title={t('checkoutTitle')} />

        <View style={styles.section}>
          <CheckoutSubHeading title={t('shippingAddress')} />
          <FlatList
            data={address}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <AddressCard item={item} />}
            scrollEnabled={false}
          />
          <ActionRow
            title={t('addShippingAddress')}
            Icon={
              <ICONS.PLUS width={20} height={20} color={Colors.titleActive} />
            }
            onPress={() => navigation.navigate('AddNewAddress')}
          />
        </View>

        <View style={styles.section}>
          <CheckoutSubHeading title={t('shippingMethod')} />
          <ActionRow
            title={t('pickupAtStore')}
            Icon={
              <ICONS.DOWN width={24} height={24} color={Colors.titleActive} />
            }
          />
        </View>

        <View style={styles.section}>
          <CheckoutSubHeading title={t('paymentMethod')} />
          <ActionRow
            title={t('selectPaymentMethod')}
            Icon={
              <ICONS.DOWN width={24} height={24} color={Colors.titleActive} />
            }
          />
        </View>

        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>{t('total')}</Text>
          <Text style={styles.totalValue}>$240</Text>
        </View>
      </ScrollView>

      <BottomButton
        Icon={<ICONS.WHITE_BAG width={24} height={24} color={Colors.white} />}
        title={t('placeOrder')}
        onPress={() => navigation.navigate('AddNewCard')}
      />
    </SafeAreaView>
  );
};

export default ShippingAddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingHorizontal: '5%',
    paddingBottom: Spacing.xl,
  },
  section: {
    marginTop: Spacing.lg,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Spacing.xl * 1.5,
  },
  totalLabel: {
    ...Typography.bodyLarge,
    color: Colors.body,
    letterSpacing: 2,
  },
  totalValue: {
    ...Typography.bodyLarge,
    color: Colors.primary,
    letterSpacing: 2,
  },
});
