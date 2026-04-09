import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slice/authSlice';
import ICONS from '../../constants/svgPath';
import { Colors, Spacing, Typography } from '../../theme';
import responsive from '../../styles/responsive';
import CustomTextInput from '../../globalComponents/CustomTextInput';
import PrimaryButton from '../../globalComponents/PrimaryButton';
import { GlobalStyles } from '../../theme/styles';

const RegisterScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const registerSchema = Yup.object().shape({
    firstName: Yup.string().required(t('firstNameRequired')),
    lastName: Yup.string().required(t('lastNameRequired')),
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    phone: Yup.string()
      .matches(/^[0-9]+$/, t('phoneNumeric'))
      .required(t('phoneRequired')),
    password: Yup.string().required(t('passwordRequired')),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], t('passwordsMustMatch'))
      .required(t('passwordRequired')),
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
          <View style={styles.logoContainer}>
            <ICONS.LOGO
              width={responsive.width(100)}
              height={responsive.height(44)}
            />
          </View>

          <View style={styles.formContainer}>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                password: '',
                confirmPassword: '',
              }}
              validationSchema={registerSchema}
              onSubmit={values => {
                console.log('Register attempt:', values);
                dispatch(login({ email: values.email }));
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
                  <View style={styles.nameRow}>
                    <View style={{ flex: 1 }}>
                      <CustomTextInput
                        placeholder={t('firstNameLabel')}
                        onChangeText={handleChange('firstName')}
                        onBlur={handleBlur('firstName')}
                        value={values.firstName}
                        error={errors.firstName}
                        touched={touched.firstName}
                      />
                    </View>
                    <View style={{ width: Spacing.md }} />
                    <View style={{ flex: 1 }}>
                      <CustomTextInput
                        placeholder={t('lastNameLabel')}
                        onChangeText={handleChange('lastName')}
                        onBlur={handleBlur('lastName')}
                        value={values.lastName}
                        error={errors.lastName}
                        touched={touched.lastName}
                      />
                    </View>
                  </View>

                  <View style={{ height: Spacing.md }} />

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
                    placeholder={t('phoneNumberLabel')}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    error={errors.phone}
                    touched={touched.phone}
                    keyboardType="numeric"
                  />

                  <View style={{ height: Spacing.md }} />

                  <CustomTextInput
                    placeholder={t('password')}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                    secureTextEntry
                  />

                  <View style={{ height: Spacing.md }} />

                  <CustomTextInput
                    placeholder={t('confirmPassword')}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                    value={values.confirmPassword}
                    error={errors.confirmPassword}
                    touched={touched.confirmPassword}
                    secureTextEntry
                  />

                  <View style={styles.buttonWrapper}>
                    <PrimaryButton
                      title={t('register')}
                      onPress={handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>

            <View style={styles.footer}>
              <Text style={styles.alreadyHaveAccountText}>
                {t('alreadyHaveAccount')}{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={styles.signInText}>{t('signIn')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: responsive.height(40),
    marginBottom: responsive.height(30),
  },
  formContainer: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
  },
  buttonWrapper: {
    marginTop: Spacing.extraLarge,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.extraLarge,
    marginBottom: Spacing.xl,
  },
  alreadyHaveAccountText: {
    ...Typography.bodyLarge,
    color: Colors.label,
  },
  signInText: {
    ...Typography.bodyLarge,
    color: Colors.titleActive,
    fontWeight: 'bold',
  },
});
