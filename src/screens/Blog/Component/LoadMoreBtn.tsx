import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';

const LoadMoreBtn = () => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={Typography.subTitle}>{t('loadMore').toUpperCase()}</Text>
      <ICONS.PLUS />
    </TouchableOpacity>
  );
};

export default LoadMoreBtn;

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.loadMoreBtnBorder,
    padding: Spacing.xs,
    flexWrap: 'nowrap',
    paddingHorizontal: Spacing.md,
    width: '50%',
    borderWidth: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
});
