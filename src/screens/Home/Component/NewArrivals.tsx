import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import CategoryTabs from './CategoryTabs';
import { productsData } from '../../../constants/productsData';
import NewArrivalProducts from './NewArrivalProducts';
import responsive from '../../../styles/responsive';

const NewArrivals = () => {
  const isGrid = true;
  return (
    <View style={{ backgroundColor: Colors.white, paddingTop: Spacing.xxxl }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={Typography.bodyLarge}>NEW ARRIVALS</Text>
        <ICONS.DIVIDER />
      </View>
      <CategoryTabs />
      <View
        style={{
          width: '100%',
          paddingHorizontal: '4%',
        }}
      >
        <FlatList
          key={isGrid ? 'grid' : 'list'}
          data={productsData}
          renderItem={({ item }) => <NewArrivalProducts item={item} />}
          keyExtractor={item => item.id}
          numColumns={isGrid ? 2 : 1}
          columnWrapperStyle={
            isGrid ? { justifyContent: 'space-between' } : undefined
          }
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ height: responsive.height(38) }} />
          }
        />
      </View>
      <View style={styles.exploreMore}>
        <Text style={Typography.bodyLarge}>Explore More</Text>
        <ICONS.FORWARD_ARROW />
      </View>
    </View>
  );
};

export default NewArrivals;

const styles = StyleSheet.create({
  exploreMore: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
