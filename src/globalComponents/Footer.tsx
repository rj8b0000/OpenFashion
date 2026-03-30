import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../theme';
import ICONS from '../constants/svgPath';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <View
      style={{
        backgroundColor: Colors.white,
        padding: Spacing.xl,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          width: '55%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginBottom: Spacing.xl,
        }}
      >
        <ICONS.TWITTER width={26} height={26} />
        <ICONS.IG_FOOTER width={26} height={26} />
        <ICONS.YOUTUBE width={26} height={26} />
      </View>
      <ICONS.DIVIDER style={{ alignSelf: 'center' }} />
      <View
        style={{
          marginVertical: Spacing.md,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={Typography.infoText}>{t('supportEmail')}</Text>
        <Text style={Typography.infoText}>{t('supportPhone')}</Text>
        <Text style={Typography.infoText}>{t('timings')}</Text>
      </View>
      <ICONS.DIVIDER style={{ alignSelf: 'center' }} />
      <View
        style={{
          flexDirection: 'row',
          width: '84%',
          alignSelf: 'center',
          justifyContent: 'space-between',
          marginBottom: Spacing.xl,
          marginVertical: Spacing.xl,
        }}
      >
        <Text style={Typography.infoText}>{t('about')}</Text>
        <Text style={Typography.infoText}>{t('contact')}</Text>
        <Text style={Typography.infoText}>{t('blog')}</Text>
      </View>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({});
