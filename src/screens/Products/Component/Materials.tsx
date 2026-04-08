import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Colors, Spacing, Typography } from '../../../theme';

const Materials = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('materials')}</Text>
      <Text style={styles.description}>{t('materialsDescription')}</Text>
    </View>
  );
};

export default Materials;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: Spacing.lg,
    marginTop: Spacing.md,
  },
  title: {
    ...Typography.subTitle,
    color: Colors.titleActive,
    marginBottom: Spacing.sm,
  },
  description: {
    ...Typography.bodyLarge,
    color: Colors.label,
  },
});
