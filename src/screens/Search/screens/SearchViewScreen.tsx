import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { useNavigation, useRoute } from '@react-navigation/native';
import Header from '../../../globalComponents/Header';
import Footer from '../../../globalComponents/Footer';
import { categoryData } from '../../../constants/categoryData';
import ProductComponent from '../../../globalComponents/ProductComponent';
import FilterBar from '../../Category/Components/FilterBar';
import SearchHeader from '../Components/SearchHeader';
import Pagination from '../../Category/Components/Pagination';
import { GlobalStyles } from '../../../theme/styles';
import { Spacing } from '../../../theme';

const SearchViewScreen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { query } = route.params || { query: '' };

  const [isGrid, setIsGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  // Use all category data as mock results for any query for now
  const filteredData = categoryData;
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const handleClose = () => {
    navigation.navigate('Search');
  };

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ height: Spacing.md }} />
        
        <SearchHeader searchQuery={query.toUpperCase()} onClose={handleClose} />
        
        <View style={{ height: Spacing.md }} />
        
        <FilterBar
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          totalItems={filteredData.length}
          title={t('searchResultsCount', {
            count: filteredData.length,
            query: query.toUpperCase(),
          })}
          hideNewBadge
          onFilterPress={() => {}} // Placeholder or implement filter modal if needed
        />

        <View style={styles.resultsContainer}>
          <FlatList
            key={isGrid ? 'grid' : 'list'}
            data={paginatedData}
            renderItem={({ item }) => (
              <ProductComponent item={item} isGrid={isGrid} />
            )}
            keyExtractor={item => item.id}
            numColumns={isGrid ? 2 : 1}
            columnWrapperStyle={
              isGrid ? { justifyContent: 'space-between' } : undefined
            }
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: Spacing.xl }} />}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={page => setCurrentPage(page)}
          />
        </View>

        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchViewScreen;

const styles = StyleSheet.create({
  resultsContainer: {
    paddingHorizontal: '4%',
    marginTop: Spacing.sm,
  },
});
