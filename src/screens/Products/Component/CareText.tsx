import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';

const CareText = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('care')}</Text>
      <Text style={styles.description}>{t('careDescription')}</Text>

      <View style={styles.itemContainer}>
        <ICONS.DO_NOT_BLEACH width={24} height={24} color={Colors.label} />
        <Text style={styles.itemText}>{t('careDoNotBleach')}</Text>
      </View>

      <View style={styles.itemContainer}>
        <ICONS.DO_NOT_TUMBLE_DRY width={24} height={24} color={Colors.label} />
        <Text style={styles.itemText}>{t('careDoNotTumbleDry')}</Text>
      </View>

      <View style={styles.itemContainer}>
        <ICONS.DO_NOT_WASH width={24} height={24} color={Colors.label} />
        <Text style={styles.itemText}>{t('careDoNotWash')}</Text>
      </View>

      <View style={styles.itemContainer}>
        <ICONS.IRON_LOW_TEMP width={24} height={24} color={Colors.label} />
        <Text style={styles.itemText}>{t('careIronLowTemp')}</Text>
      </View>
    </View>
  );
};

export default CareText;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingVertical: Spacing.lg,
  },
  title: {
    ...Typography.subTitle,
    color: Colors.titleActive,
    marginBottom: Spacing.sm,
  },
  description: {
    ...Typography.bodyLarge,
    color: Colors.label,
    marginBottom: Spacing.lg,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.md,
  },
  itemText: {
    ...Typography.bodyLarge,
    color: Colors.label,
    marginLeft: Spacing.md,
  },
});
