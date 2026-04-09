import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontFamily, Radius, Spacing, Typography } from '../../theme';
import responsive from '../../styles/responsive';
import SearchInput from './Components/SearchInput';
import ICONS from '../../constants/svgPath';

const RECENT_SEARCHES_MOCK = ['Dress', 'Collection', 'Nike'];
const POPULAR_TERMS_MOCK = [
  { key: 'trend', label: 'Trend' },
  { key: 'dress_search', label: 'Dress' },
  { key: 'bag_search', label: 'Bag' },
  { key: 'tshirt_search', label: 'Tshirt' },
  { key: 'beauty', label: 'Beauty' },
  { key: 'accessories', label: 'Accessories' },
];

const SearchScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const [searchQuery, setSearchQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES_MOCK);

  const handleSearch = (query: string) => {
    if (query.trim()) {
      navigation.navigate('SearchView', { query });
    }
  };

  const removeRecentSearch = (term: string) => {
    setRecentSearches(recentSearches.filter(t => t !== term));
  };

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <SearchInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        onClear={() => setSearchQuery('')}
        onSubmitEditing={() => handleSearch(searchQuery)}
      />

      <ScrollView style={styles.content}>
        {recentSearches.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{t('recentSearch')}</Text>
            <View style={styles.chipsContainer}>
              {recentSearches.map(term => (
                <View key={term} style={styles.chip}>
                  <TouchableOpacity onPress={() => handleSearch(term)}>
                    <Text style={styles.chipText}>{term}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => removeRecentSearch(term)}>
                    <ICONS.CROSS
                      width={responsive.width(14)}
                      height={responsive.width(14)}
                    />
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          </View>
        )}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('popularSearchTerms')}</Text>
          <View style={styles.popularList}>
            {POPULAR_TERMS_MOCK.map(item => (
              <TouchableOpacity
                key={item.key}
                style={styles.popularItem}
                onPress={() => handleSearch(item.label)}
              >
                <Text style={styles.popularText}>{t(item.key)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: '4%',
    marginTop: Spacing.lg,
  },
  section: {
    marginBottom: Spacing.xl,
  },
  sectionTitle: {
    ...Typography.bodyMedium,
    color: Colors.placeholder,
    marginBottom: Spacing.md,
  },
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.sm,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.infoBg,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    gap: Spacing.xs,
  },
  chipText: {
    fontFamily: FontFamily.regular,
    fontSize: responsive.fontSize(14),
    color: Colors.body,
  },
  popularList: {
    gap: Spacing.md,
  },
  popularItem: {
    paddingVertical: Spacing.xs,
  },
  popularText: {
    ...Typography.bodyLarge,
    color: Colors.body,
  },
});
