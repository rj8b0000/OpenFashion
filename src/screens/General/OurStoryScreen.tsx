import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import Header from '../../globalComponents/Header';
import Footer from '../../globalComponents/Footer';
import PageHeader from '../../globalComponents/PageHeader';
import { Colors, Spacing, Typography } from '../../theme';
import IMAGES from '../../constants/imagePath';
import responsive from '../../styles/responsive';
import CustomTextInput from '../Checkout/Component/CustomTextInput';
import ICONS from '../../constants/svgPath';
import { GlobalStyles } from '../../theme/styles';

const OurStoryScreen = () => {
  const { t } = useTranslation();

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <PageHeader title="ourStoryTitle" />

          <View style={styles.textContainer}>
            <Text style={styles.descriptionText}>
              {t('ourStoryDescription1')}
            </Text>
            <View style={{ height: Spacing.lg }} />
            <Text style={styles.descriptionText}>
              {t('ourStoryDescription2')}
            </Text>
          </View>

          <Image
            source={IMAGES.OUR_STORY_1}
            style={styles.storyImage}
            resizeMode="cover"
          />

          <View style={styles.signUpContainer}>
            <PageHeader title="signUpTitle" />
            <Text style={styles.signUpDescription}>
              {t('signUpDescription')}
            </Text>

            <View style={styles.inputWrapper}>
              <CustomTextInput
                placeholder={t('emailAddress')}
                style={styles.input}
              />
            </View>

            <View style={styles.buttonContainer}>
              <View style={styles.submitButton}>
                <Text style={styles.submitText}>
                  {t('submit').toUpperCase()}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OurStoryScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: Spacing.lg,
    paddingBottom: Spacing.xl,
    marginTop: Spacing.xl,
  },
  descriptionText: {
    ...Typography.bodyLarge,
    color: Colors.body,
    lineHeight: 24,
  },
  storyImage: {
    width: '100%',
    height: responsive.height(240),
  },
  signUpContainer: {
    paddingTop: Spacing.xl,
    // paddingBottom: Spacing.extraLarge,
  },
  signUpDescription: {
    ...Typography.bodyMedium,
    color: Colors.placeholder,
    textAlign: 'center',
    paddingHorizontal: Spacing.lg,
    marginTop: Spacing.md,
  },
  inputWrapper: {
    paddingHorizontal: Spacing.xl,
    marginTop: Spacing.xl,
  },
  input: {
    borderColor: Colors.divider,
  },
  buttonContainer: {
    backgroundColor: Colors.black,
    height: responsive.height(56),
    marginTop: Spacing.xl,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  submitText: {
    ...Typography.bodyLarge,
    color: Colors.white,
    letterSpacing: 2,
  },
});
