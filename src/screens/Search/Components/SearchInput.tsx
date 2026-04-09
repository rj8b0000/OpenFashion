import React from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import ICONS from '../../../constants/svgPath';
import { Colors, FontFamily, Spacing } from '../../../theme';
import responsive from '../../../styles/responsive';
import { ISearchInputProps } from '../../../types';

const SearchInput: React.FC<ISearchInputProps> = ({
  value,
  onChangeText,
  onClear,
  onSubmitEditing,
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ICONS.SEARCH
        width={responsive.width(20)}
        height={responsive.width(20)}
        style={styles.searchIcon}
      />
      <TextInput
        style={styles.input}
        placeholder={t('searchItems')}
        placeholderTextColor={Colors.placeholder}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        autoFocus
      />
      {value.length > 0 && (
        <TouchableOpacity onPress={onClear}>
          <ICONS.CROSS
            width={responsive.width(20)}
            height={responsive.width(20)}
            style={styles.crossIcon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: Spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    marginHorizontal: '4%',
    marginTop: Spacing.md,
  },
  searchIcon: {
    marginRight: Spacing.sm,
  },
  input: {
    flex: 1,
    fontFamily: FontFamily.regular,
    fontSize: responsive.fontSize(16),
    color: Colors.titleActive,
    paddingVertical: 0,
  },
  crossIcon: {
    marginLeft: Spacing.sm,
  },
});
