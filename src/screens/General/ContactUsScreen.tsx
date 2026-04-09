import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import Header from '../../globalComponents/Header';
import Footer from '../../globalComponents/Footer';
import PageHeader from '../../globalComponents/PageHeader';
import { Colors, Spacing, Typography } from '../../theme';
import ICONS from '../../constants/svgPath';
import responsive from '../../styles/responsive';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../theme/styles';

const ContactUsScreen = () => {
  const { t } = useTranslation();

  const ContactSection = ({ icon: Icon, description, buttonText }: any) => (
    <View style={styles.section}>
      <Icon width={responsive.width(40)} height={responsive.width(40)} />
      <Text style={styles.sectionDescription}>{t(description)}</Text>
      {buttonText && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>{t(buttonText).toUpperCase()}</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <PageHeader title="contactUsTitle" />

          <ContactSection
            icon={ICONS.CHAT}
            description="chatDescription"
            buttonText="chatWithUs"
          />

          <ContactSection
            icon={ICONS.MAIL}
            description="textDescription"
            buttonText="textUs"
          />

          <ContactSection
            icon={ICONS.TWITTER_CONTACTUS}
            description="socialDescription"
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    alignItems: 'center',
    paddingBottom: Spacing.xl,
  },
  section: {
    alignItems: 'center',
    marginVertical: Spacing.xl,
  },
  sectionDescription: {
    ...Typography.bodyLarge,
    color: Colors.body,
    textAlign: 'center',
    marginTop: Spacing.md,
    lineHeight: 24,
  },
  button: {
    backgroundColor: Colors.black,
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    marginTop: Spacing.lg,
  },
  buttonText: {
    ...Typography.bodyLarge,
    color: Colors.white,
    letterSpacing: 2,
  },
});
