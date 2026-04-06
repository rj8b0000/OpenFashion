import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import responsive from '../styles/responsive';
import { useTranslation } from 'react-i18next';
import { Spacing, Typography } from '../theme';
import ICONS from '../constants/svgPath';

const PageHeader = ({ title }: { title: string }) => {
  const { t } = useTranslation();
  return (
    <View style={styles.mainContainer}>
      <View style={styles.subContainer}>
        <Text style={Typography.title}>{t(title).toUpperCase()}</Text>
        <ICONS.DIVIDER />
      </View>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  mainContainer: {
    height: responsive.height(50),
    marginTop: Spacing.lg,
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
