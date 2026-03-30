import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import responsive from '../../../styles/responsive';
import { useTranslation } from 'react-i18next';
import { infoData } from '../../../constants/infoData';

const InfoComponent = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <ICONS.LOGO
          width={responsive.width(88)}
          height={responsive.height(40)}
        />
        <View style={styles.infoTextContainer}>
          <Text style={styles.infoText}>{t('infoText')}</Text>
        </View>
        <View style={styles.spacer} />
        <ICONS.DIVIDER />
        <View style={styles.listContainer}>
          <FlatList
            data={infoData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
                {
                  <item.icon
                    width={responsive.width(50)}
                    height={responsive.height(34)}
                    style={styles.icon}
                  />
                }
                <Text style={Typography.infoListText}>{t(item.text)}</Text>
              </View>
            )}
            numColumns={2}
            contentContainerStyle={styles.flatListContent}
          />
        </View>
        <ICONS.CURVES
          width={responsive.width(66)}
          height={responsive.height(40)}
          style={{ marginTop: Spacing.lg }}
        />
      </View>
    </View>
  );
};

export default InfoComponent;

const styles = StyleSheet.create({
  container: {
    padding: Spacing.lg,
    backgroundColor: Colors.infoBg,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoTextContainer: {
    width: '94%',
    marginTop: Spacing.md,
  },
  infoText: {
    ...Typography.infoText,
    color: Colors.infoColor,
    textAlign: 'center',
  },
  spacer: {
    height: Spacing.md,
  },
  listContainer: {
    width: '96%',
  },
  itemContainer: {
    padding: Spacing.sm,
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginBottom: Spacing.sm,
  },
  flatListContent: {
    marginTop: Spacing.md,
  },
});
