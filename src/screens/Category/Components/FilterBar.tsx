import { Dimensions, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FontFamily } from '../../../theme/typography';
import ICONS from '../../../constants/svgPath';
import { TouchableOpacity } from 'react-native';
import { IFilterBarProps } from '../../../types';
import { Spacing } from '../../../theme';

const FilterBar = ({
  isGrid,
  setIsGrid,
  onFilterPress,
  totalItems,
  title,
  hideNewBadge,
}: IFilterBarProps) => {
  const { t } = useTranslation();
  const { width } = Dimensions.get('window');
  const isTablet = width > 600;

  return (
    <View style={styles.container}>
      <Text
        style={[styles.title, isTablet && { fontSize: 24 }]}
        numberOfLines={1}
      >
        {title || t('categoryApparelCount', { count: totalItems })}
      </Text>
      <View style={[styles.rightSection, isTablet && { gap: Spacing.md }]}>
        <View
          style={[
            styles.newBadge,
            isTablet && { paddingVertical: 12, paddingHorizontal: 20 },
          ]}
        >
          <Text
            style={[styles.newBadgeText, isTablet && { fontSize: 18 }]}
          >
            {t('categoryNew')}
          </Text>
          <ICONS.DOWN width={isTablet ? 12 : 8} height={isTablet ? 12 : 8} />
        </View>
        <TouchableOpacity
          style={[styles.iconWrapper, isTablet && { padding: 14 }]}
          onPress={() => {
            setIsGrid(prev => !prev);
          }}
        >
          {isGrid ? (
            <ICONS.GRID
              width={isTablet ? 30 : 22}
              height={isTablet ? 30 : 22}
            />
          ) : (
            <ICONS.LISTVIEW
              width={isTablet ? 30 : 22}
              height={isTablet ? 30 : 22}
            />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.iconWrapper, isTablet && { padding: 14 }]}
          onPress={onFilterPress}
        >
          <ICONS.FILTER
            width={isTablet ? 34 : 24}
            height={isTablet ? 34 : 24}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontFamily: FontFamily.regular,
    flex: 1,
    marginRight: Spacing.sm,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  newBadge: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
    backgroundColor: '#f2f2f2ff',
  },
  newBadgeText: {
    fontFamily: FontFamily.regular,
    color: '#555555',
    fontSize: 14,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f2f2f2ff',
    padding: 8,
    borderRadius: 50,
  },
});
