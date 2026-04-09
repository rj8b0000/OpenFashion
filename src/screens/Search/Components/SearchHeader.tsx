import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import ICONS from '../../../constants/svgPath';
import { Colors, FontFamily, Spacing } from '../../../theme';
import responsive from '../../../styles/responsive';
import { ISearchHeaderProps } from '../../../types';

const SearchHeader: React.FC<ISearchHeaderProps> = ({ onClose, searchQuery }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.searchText}>{searchQuery}</Text>
      <View style={styles.rightIcons}>
        <TouchableOpacity onPress={onClose} style={styles.iconButton}>
          <ICONS.CROSS
            width={responsive.width(18)}
            height={responsive.width(18)}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <ICONS.SEARCH
            width={responsive.width(22)}
            height={responsive.width(22)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    marginHorizontal: '4%',
    marginTop: Spacing.sm,
  },
  searchText: {
    fontFamily: FontFamily.regular,
    fontSize: responsive.fontSize(16),
    color: Colors.label,
    flex: 1,
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.sm,
  },
  iconButton: {
    padding: Spacing.xs,
  },
});
