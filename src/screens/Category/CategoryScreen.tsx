import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { GlobalStyles } from '../../theme/styles';
import Header from '../../globalComponents/Header';
import Footer from '../../globalComponents/Footer';
import { categoryData } from '../../constants/categoryData';
import ProductComponent from './Components/ProductComponent';
import FilterBar from './Components/FilterBar';
import { Spacing } from '../../theme';

const CategoryScreen = () => {
  const [isGrid, setIsGrid] = useState(true);

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <View style={{ height: '2%' }} />
        <FilterBar isGrid={isGrid} setIsGrid={setIsGrid} />
        <View
          style={{
            width: '100%',
            paddingHorizontal: '4%',
          }}
        >
          <View style={{ height: '1%' }} />

          <FlatList
            key={isGrid ? 'grid' : 'list'}
            data={categoryData}
            renderItem={({ item }) => (
              <ProductComponent item={item} isGrid={isGrid} />
            )}
            keyExtractor={item => item.id}
            numColumns={isGrid ? 2 : 1}
            columnWrapperStyle={
              isGrid ? { justifyContent: 'space-between' } : undefined
            }
            showsVerticalScrollIndicator={false}
            ListFooterComponent={<View style={{ height: Spacing.sm }} />}
          />
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({});
