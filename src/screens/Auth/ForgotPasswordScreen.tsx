import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Colors, Spacing, Typography } from '../../theme';
import responsive from '../../styles/responsive';
import CustomTextInput from '../../globalComponents/CustomTextInput';
import PrimaryButton from '../../globalComponents/PrimaryButton';
import PageHeader from '../../globalComponents/PageHeader';
import { GlobalStyles } from '../../theme/styles';

const ForgotPasswordScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();

  const forgotPasswordSchema = Yup.object().shape({
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    otp: Yup.string().required(t('otpRequired') || 'OTP is required'),
  });

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          <PageHeader title="forgotPassword" />

          <View style={styles.contentContainer}>
            <Formik
              initialValues={{ email: '', otp: '' }}
              validationSchema={forgotPasswordSchema}
              onSubmit={values => {
                console.log('OTP Verification:', values);
                navigation.navigate('Login');
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View>
                  <CustomTextInput
                    placeholder={t('email')}
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}
                    error={errors.email}
                    touched={touched.email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />

                  <View style={{ height: Spacing.md }} />

                  <CustomTextInput
                    placeholder={t('otp')}
                    onChangeText={handleChange('otp')}
                    onBlur={handleBlur('otp')}
                    value={values.otp}
                    error={errors.otp}
                    touched={touched.otp}
                    keyboardType="numeric"
                  />

                  <View style={styles.buttonWrapper}>
                    <PrimaryButton
                      title={t('continue')}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingBottom: responsive.height(100),
  },
  buttonWrapper: {
    marginTop: Spacing.extraLarge,
  },
});
