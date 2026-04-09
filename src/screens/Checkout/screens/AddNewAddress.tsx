import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '../../../theme';
import Header from '../../../globalComponents/Header';
import CheckoutSectionTitle from '../../../globalComponents/CheckoutSectionTitle';
import CustomTextInput from '../../../globalComponents/CustomTextInput';
import BottomButton from '../Component/BottomButton';
import ICONS from '../../../constants/svgPath';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../navigator/types';

const AddNewAddress = () => {
  const { t } = useTranslation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutSectionTitle title={t('addNewAddressTitle')} />

        <View style={styles.formContainer}>
          <View style={styles.row}>
            <CustomTextInput
              style={styles.halfInput}
              placeholder={t('firstName')}
              value={firstName}
              onChangeText={setFirstName}
            />
            <CustomTextInput
              style={styles.halfInput}
              placeholder={t('lastName')}
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <CustomTextInput
            placeholder={t('address')}
            value={address}
            onChangeText={setAddress}
          />
          <View style={styles.row}>
            <CustomTextInput
              style={styles.halfInput}
              placeholder={t('city')}
              value={city}
              onChangeText={setCity}
            />
            <CustomTextInput
              style={styles.halfInput}
              placeholder={t('zipCode')}
              keyboardType="numeric"
              value={zipCode}
              onChangeText={setZipCode}
            />
          </View>
          <CustomTextInput
            placeholder={t('state')}
            value={state}
            onChangeText={setState}
          />
          <CustomTextInput
            placeholder={t('phoneNumber')}
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </ScrollView>

      <BottomButton title={t('addNow')} />
    </SafeAreaView>
  );
};

export default AddNewAddress;

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
    gap: Spacing.xl, // using gap for vertical spacing between inputs
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
