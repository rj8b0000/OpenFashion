import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../../../theme';

const FilterBar = () => {
  const blogCategory = ['Fashion', 'Promo', 'Policy', 'Lookbook'];
  return (
    <View style={styles.container}>
      <FlatList
        data={blogCategory}
        renderItem={({ item }) => (
          <Text style={[Typography.filterBarText, styles.textStyle]}>
            {item}
          </Text>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: Spacing.sm }}
      />
    </View>
  );
};

export default FilterBar;

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.md,
    padding: Spacing.sm,
    flexDirection: 'row',
    gap: '4%',
  },
  textStyle: {
    backgroundColor: Colors.tagBg,
    padding: Spacing.xs,
    flexWrap: 'nowrap',
    borderRadius: Spacing.lg,
    paddingHorizontal: Spacing.sm,
  },
});
