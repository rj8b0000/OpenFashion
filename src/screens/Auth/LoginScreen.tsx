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
import Checkbox from '../../globalComponents/Checkbox';
import { GlobalStyles } from '../../theme/styles';

const LoginScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch();

  const loginSchema = Yup.object().shape({
    email: Yup.string().email(t('emailInvalid')).required(t('emailRequired')),
    password: Yup.string().required(t('passwordRequired')),
    rememberMe: Yup.boolean(),
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
              initialValues={{ email: '', password: '', rememberMe: false }}
              validationSchema={loginSchema}
              onSubmit={values => {
                console.log('Login attempt:', values);
                dispatch(login({ email: values.email }));
              }}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                setFieldValue,
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
                    placeholder={t('password')}
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    error={errors.password}
                    touched={touched.password}
                    secureTextEntry
                  />

                  <View style={styles.row}>
                    <Checkbox
                      label={t('rememberMe')}
                      checked={values.rememberMe}
                      onChange={val => setFieldValue('rememberMe', val)}
                    />
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ForgotPassword')}
                    >
                      <Text style={styles.forgotPasswordText}>
                        {t('forgotPassword')}
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.buttonWrapper}>
                    <PrimaryButton title={t('login')} onPress={handleSubmit} />
                  </View>
                </View>
              )}
            </Formik>

            <View style={styles.footer}>
              <Text style={styles.dontHaveAccountText}>
                {t('dontHaveAccount')}{' '}
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.signUpText}>{t('signUp')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: responsive.height(60),
    marginBottom: responsive.height(40),
  },
  formContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.lg,
    marginBottom: Spacing.xl,
  },
  forgotPasswordText: {
    ...Typography.bodyMedium,
    color: Colors.body,
  },
  buttonWrapper: {
    marginTop: Spacing.md,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.extraLarge,
  },
  dontHaveAccountText: {
    ...Typography.bodyLarge,
    color: Colors.label,
  },
  signUpText: {
    ...Typography.bodyLarge,
    color: Colors.titleActive,
    fontWeight: 'bold',
  },
});
