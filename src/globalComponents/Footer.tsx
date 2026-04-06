import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../theme';
import ICONS from '../constants/svgPath';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <View style={styles.container}>
        <View style={styles.socialIconsContainer}>
          <ICONS.TWITTER width={26} height={26} />
          <ICONS.IG_FOOTER width={26} height={26} />
          <ICONS.YOUTUBE width={26} height={26} />
        </View>
        <ICONS.DIVIDER style={styles.divider} />
        <View style={styles.contactInfoContainer}>
          <Text style={Typography.infoText}>{t('supportEmail')}</Text>
          <Text style={Typography.infoText}>{t('supportPhone')}</Text>
          <Text style={Typography.infoText}>{t('timings')}</Text>
        </View>
        <ICONS.DIVIDER style={styles.divider} />
        <View style={styles.navLinksContainer}>
          <Text style={Typography.infoText}>{t('about')}</Text>
          <Text style={Typography.infoText}>{t('contact')}</Text>
          <Text style={Typography.infoText}>{t('blog')}</Text>
        </View>
      </View>
      <View style={styles.cpyRightContainer}>
        <Text style={Typography.bodySmall}>{t('copyRightText')}</Text>
      </View>
    </>
  );
};

export default Footer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: Spacing.xl,
  },
  socialIconsContainer: {
    flexDirection: 'row',
    width: '55%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: Spacing.xl,
  },
  divider: {
    alignSelf: 'center',
  },
  contactInfoContainer: {
    marginVertical: Spacing.md,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navLinksContainer: {
    flexDirection: 'row',
    width: '84%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginTop: Spacing.xl,
  },
  cpyRightContainer: {
    backgroundColor: Colors.footerCopyRightBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.md,
  },
});
