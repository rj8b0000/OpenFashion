import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../theme';
import ICONS from '../constants/svgPath';
import { useTranslation } from 'react-i18next';
import responsive from '../styles/responsive';

const Footer = () => {
  const { t } = useTranslation();
  const { width: windowWidth } = Dimensions.get('window');
  const isTablet = windowWidth > 600;
  const ICON_SIZE = isTablet ? 18 : 24;

  return (
    <>
      <View style={styles.container}>
        <View style={styles.socialIconsContainer}>
          <ICONS.TWITTER
            width={responsive.width(ICON_SIZE)}
            height={responsive.width(ICON_SIZE)}
          />
          <ICONS.IG_FOOTER
            width={responsive.width(ICON_SIZE)}
            height={responsive.width(ICON_SIZE)}
          />
          <ICONS.YOUTUBE
            width={responsive.width(ICON_SIZE)}
            height={responsive.width(ICON_SIZE)}
          />
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
    alignSelf: 'center',
    justifyContent: 'center',
    gap: Spacing.xxxl,
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
    alignSelf: 'center',
    justifyContent: 'center',
    gap: Spacing.xl,
    marginTop: Spacing.xl,
  },
  cpyRightContainer: {
    backgroundColor: Colors.footerCopyRightBg,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.md,
  },
});
