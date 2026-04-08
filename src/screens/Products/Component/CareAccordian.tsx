import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';

const CareAccordian = () => {
  const { t } = useTranslation();
  const [expandedSection, setExpandedSection] = useState<string | null>(
    'shipping',
  );

  const toggleSection = (section: string) => {
    setExpandedSection(prev => (prev === section ? null : section));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('care')}</Text>
      {/* Shipping Section */}
      <View style={styles.accordionContainer}>
        <TouchableOpacity
          style={styles.headerRow}
          onPress={() => toggleSection('shipping')}
          activeOpacity={0.7}
        >
          <ICONS.TRUCK width={24} height={24} color={Colors.titleActive} />
          <Text style={styles.titleText}>{t('shipping')}</Text>
          <View style={styles.iconRight}>
            {expandedSection === 'shipping' ? (
              <ICONS.UP width={24} height={24} color={Colors.label} />
            ) : (
              <ICONS.ARROW_DOWN width={24} height={24} color={Colors.label} />
            )}
          </View>
        </TouchableOpacity>

        {expandedSection === 'shipping' && (
          <View style={styles.contentContainer}>
            <Text style={styles.descriptionText}>{t('shippingEstimate')}</Text>
            <Text style={styles.descriptionText}>{t('shippingDate')}</Text>
          </View>
        )}
      </View>

      <View style={styles.divider} />

      {/* COD Policy */}
      <View style={styles.accordionContainer}>
        <TouchableOpacity
          style={styles.headerRow}
          onPress={() => toggleSection('cod')}
          activeOpacity={0.7}
        >
          <ICONS.TAG width={24} height={24} color={Colors.titleActive} />
          <Text style={styles.titleText}>{t('codPolicy')}</Text>
          <View style={styles.iconRight}>
            {expandedSection === 'cod' ? (
              <ICONS.UP width={24} height={24} color={Colors.label} />
            ) : (
              <ICONS.ARROW_DOWN width={24} height={24} color={Colors.label} />
            )}
          </View>
        </TouchableOpacity>

        {expandedSection === 'cod' && (
          <View style={styles.contentContainer}>
            <Text style={styles.descriptionText}>
              COD policy applies. Check terms.
            </Text>
          </View>
        )}
      </View>

      <View style={styles.divider} />

      {/* Return Policy */}
      <View style={styles.accordionContainer}>
        <TouchableOpacity
          style={styles.headerRow}
          onPress={() => toggleSection('return')}
          activeOpacity={0.7}
        >
          <ICONS.REFRESH width={24} height={24} color={Colors.titleActive} />
          <Text style={styles.titleText}>{t('returnPolicy')}</Text>
          <View style={styles.iconRight}>
            {expandedSection === 'return' ? (
              <ICONS.UP width={24} height={24} color={Colors.label} />
            ) : (
              <ICONS.ARROW_DOWN width={24} height={24} color={Colors.label} />
            )}
          </View>
        </TouchableOpacity>

        {expandedSection === 'return' && (
          <View style={styles.contentContainer}>
            <Text style={styles.descriptionText}>
              You can return within 30 days.
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CareAccordian;

const styles = StyleSheet.create({
  title: {
    ...Typography.subTitle,
    color: Colors.titleActive,
    marginBottom: Spacing.sm,
  },
  container: {
    width: '90%',
    alignSelf: 'center',
    paddingBottom: Spacing.xl,
    paddingTop: Spacing.xs,
  },
  accordionContainer: {
    paddingVertical: Spacing.md,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    ...Typography.bodyLarge,
    color: Colors.titleActive,
    marginLeft: Spacing.md,
    flex: 1,
  },
  iconRight: {
    paddingLeft: Spacing.sm,
  },
  contentContainer: {
    paddingLeft: 24 + Spacing.md,
    paddingTop: Spacing.sm,
  },
  descriptionText: {
    ...Typography.bodyLarge,
    color: Colors.label,
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
});
