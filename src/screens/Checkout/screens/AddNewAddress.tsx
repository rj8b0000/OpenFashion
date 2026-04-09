import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, Spacing } from '../../../theme';
import Header from '../../../globalComponents/Header';
import CheckoutSectionTitle from '../Component/CheckoutSectionTitle';
import CustomTextInput from '../Component/CustomTextInput';
import BottomButton from '../Component/BottomButton';
import ICONS from '../../../constants/svgPath';

const AddNewAddress = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  return (
    <SafeAreaView edges={['top']} style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutSectionTitle title="ADD NEW ADDRESS" />

        <View style={styles.formContainer}>
          <View style={styles.row}>
            <CustomTextInput
              style={styles.halfInput}
              placeholder="First name"
              value={firstName}
              onChangeText={setFirstName}
            />
            <CustomTextInput
              style={styles.halfInput}
              placeholder="Last name"
              value={lastName}
              onChangeText={setLastName}
            />
          </View>
          <CustomTextInput
            placeholder="Address"
            value={address}
            onChangeText={setAddress}
          />
          <View style={styles.row}>
            <CustomTextInput
              style={styles.halfInput}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />
            <CustomTextInput
              style={styles.halfInput}
              placeholder="Zip code"
              keyboardType="numeric"
              value={zipCode}
              onChangeText={setZipCode}
            />
          </View>
          <CustomTextInput
            placeholder="State"
            value={state}
            onChangeText={setState}
          />
          <CustomTextInput
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
      </ScrollView>

      <BottomButton
        Icon={<ICONS.WHITE_BAG width={24} height={24} color={Colors.white} />}
        title="ADD NOW"
      />
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
