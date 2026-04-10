import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../theme/styles';
import Header from '../../globalComponents/Header';
import Footer from '../../globalComponents/Footer';
import { categoryData } from '../../constants/categoryData';
import ProductComponent from '../../globalComponents/ProductComponent';
import FilterBar from './Components/FilterBar';
import Pagination from './Components/Pagination';
import FilterModal from './Components/FilterModal';
import { Spacing } from '../../theme';
import { FontFamily } from '../../theme/typography';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ICONS from '../../constants/svgPath';

const CategoryScreen = () => {
  const [isGrid, setIsGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const { width: windowWidth } = Dimensions.get('window');
  const isTablet = windowWidth > 600;
  const itemsPerPage = isTablet ? 8 : 4;

  const categories = Array.from(
    new Set(categoryData.map(item => item.category)),
  );

  const filteredData =
    selectedCategories.length > 0
      ? categoryData.filter(item => selectedCategories.includes(item.category))
      : categoryData;

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const removeCategory = (category: string) => {
    setSelectedCategories(selectedCategories.filter(c => c !== category));
    setCurrentPage(1);
  };

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ height: '2%' }} />
        <FilterBar
          isGrid={isGrid}
          setIsGrid={setIsGrid}
          onFilterPress={() => setIsFilterModalVisible(true)}
          totalItems={filteredData.length}
        />

        {selectedCategories.length > 0 && (
          <View style={styles.chipsContainer}>
            {selectedCategories.map(category => (
              <View key={category} style={styles.chip}>
                <Text style={styles.chipText}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Text>
                <TouchableOpacity onPress={() => removeCategory(category)}>
                  <ICONS.PLUS
                    width={16}
                    height={16}
                    style={{ transform: [{ rotate: '45deg' }] }}
                  />
                </TouchableOpacity>
              </View>
            ))}
          </View>
        )}

        <View
          style={{
            width: '100%',
            paddingHorizontal: '4%',
          }}
        >
          <View style={{ height: '1%' }} />

          <FlatList
            key={`${isGrid ? 'grid' : 'list'}-${isTablet ? 'tablet' : 'mobile'}`}
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
            ListFooterComponent={<View style={{ height: Spacing.sm }} />}
          />
         <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={page => setCurrentPage(page)}
          />
        </View>
        <Footer />
      </ScrollView>

      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisible(false)}
        categories={categories}
        selectedCategories={selectedCategories}
        onApply={selected => {
          setSelectedCategories(selected);
          setIsFilterModalVisible(false);
          setCurrentPage(1);
        }}
      />
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  chipsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: '4%',
    marginVertical: 10,
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#DEDEDE',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: 6,
    gap: 6,
  },
  chipText: {
    fontFamily: FontFamily.regular,
    color: '#333',
    fontSize: 14,
  },
});
