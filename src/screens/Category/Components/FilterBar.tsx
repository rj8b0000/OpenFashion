import { StyleSheet, Text, View } from 'react-native';
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
  return (
    <View style={styles.container}>
      <Text style={styles.title} numberOfLines={1}>
        {title || t('categoryApparelCount', { count: totalItems })}
      </Text>
      <View style={styles.rightSection}>
        {/* {!hideNewBadge && ( */}
        <View style={styles.newBadge}>
          <Text style={styles.newBadgeText}>{t('categoryNew')}</Text>
          <ICONS.DOWN width={8} height={8} />
        </View>
        {/* )} */}
        <TouchableOpacity
          style={styles.iconWrapper}
          onPress={() => {
            setIsGrid(prev => !prev);
          }}
        >
          {isGrid ? (
            <ICONS.GRID width={22} height={22} />
          ) : (
            <ICONS.LISTVIEW width={22} height={22} />
          )}
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconWrapper} onPress={onFilterPress}>
          <ICONS.FILTER width={24} height={24} />
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
    width: '46%',
    alignSelf: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  newBadge: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: '6%',
    paddingHorizontal: '8%',
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
    padding: '5%',
    borderRadius: 50,
  },
});
