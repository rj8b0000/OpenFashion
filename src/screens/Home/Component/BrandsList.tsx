import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import { brandLogos } from '../../../constants/brandLogos';
import responsive from '../../../styles/responsive';

const BrandsList = () => {
  const { width } = Dimensions.get('window');
  const isTablet = width > 600;

  return (
    <View style={{ backgroundColor: Colors.white, paddingTop: Spacing.xxl }}>
      <View style={styles.dividerContainer}>
        <ICONS.DIVIDER />
      </View>
      <View style={[styles.listContainer, isTablet && { width: 600, alignSelf: 'center' }]}>
        <View style={{ paddingVertical: Spacing.md }}>
        <FlatList
          data={brandLogos}
          renderItem={({ item }) => (
            <View
              style={{
                width: '33%',
                height: responsive.height(66),
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <item.icon width={item.width} height={item.height} />
            </View>
          )}
          keyExtractor={item => item.id}
          numColumns={3}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          showsVerticalScrollIndicator={false}
        />
        </View>
      </View>

      <View style={styles.dividerContainer}>
        <ICONS.DIVIDER />
      </View>
    </View>
  );
};

export default BrandsList;

const styles = StyleSheet.create({
  dividerContainer: {
    alignSelf: 'center',
  },
  listContainer: {
    width: '100%',
  },
});
