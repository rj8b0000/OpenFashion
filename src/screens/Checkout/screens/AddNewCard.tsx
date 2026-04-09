import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '../../../theme';
import Header from '../../../globalComponents/Header';
import CheckoutSectionTitle from '../../../globalComponents/CheckoutSectionTitle';
import CustomTextInput from '../Component/CustomTextInput';
import BottomButton from '../Component/BottomButton';
import { useTranslation } from 'react-i18next';
import CardCarousel from '../Component/CardCarousel';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../navigator/types';

const AddNewCard = () => {
  const { t } = useTranslation();
  const [nameOnCard, setNameOnCard] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expDate, setExpDate] = useState('');
  const [expMonth, setExpMonth] = useState('');
  const [cvv, setCvv] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutSectionTitle title={t('paymentMethod')} />

        <CardCarousel
          cards={[
            {
              number: cardNumber || '2365365423653698',
              name: nameOnCard || 'Iris Watson',
              expiry: `${expMonth}${expDate}`,
              cvc: cvv || '123',
            },
          ]}
        />
        <View style={styles.formContainer}>
          <CustomTextInput
            placeholder={t('firstName')}
            value={nameOnCard}
            onChangeText={setNameOnCard}
          />
          <CustomTextInput
            placeholder={t('cardNumber')}
            keyboardType="numeric"
            value={cardNumber}
            onChangeText={setCardNumber}
          />
          <View style={styles.row}>
            <CustomTextInput
              style={styles.halfInput}
              placeholder={t('expMonth')}
              value={expMonth}
              onChangeText={setExpMonth}
            />
            <CustomTextInput
              style={styles.halfInput}
              placeholder={t('expDate')}
              value={expDate}
              onChangeText={setExpDate}
            />
          </View>
          <CustomTextInput
            placeholder={t('cvv')}
            keyboardType="numeric"
            value={cvv}
            onChangeText={setCvv}
          />
        </View>
      </ScrollView>

      <BottomButton
        title={t('addCard').toUpperCase()}
        onPress={() => navigation.navigate('FinalCheckout')}
      />
    </SafeAreaView>
  );
};

export default AddNewCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scrollContent: {
    paddingHorizontal: '5%',
    paddingBottom: Spacing.xl,
  },
  formContainer: {
    marginTop: Spacing.lg,
    gap: Spacing.xl,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: Spacing.md,
  },
  halfInput: {
    flex: 1,
  },
});
