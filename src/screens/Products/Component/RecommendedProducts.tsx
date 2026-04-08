import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import { productsData } from '../../../constants/productsData';
import responsive from '../../../styles/responsive';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '../../../navigator/types';
import RecommendedProductList from './RecommendedProductList';

const RecommendedProducts = () => {
  const navigation = useNavigation<RootStackNavigationProp>();
  const isGrid = true;
  const { t } = useTranslation();
  return (
    <View style={{ backgroundColor: Colors.white, paddingTop: Spacing.xl }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={Typography.title}>
          {t('youMayAlsoLike').toUpperCase()}
        </Text>
        <ICONS.DIVIDER />
      </View>
      <View
        style={{
          width: '100%',
          paddingHorizontal: '4%',
          marginTop: Spacing.md,
        }}
      >
        <FlatList
          key={isGrid ? 'grid' : 'list'}
          data={productsData}
          renderItem={({ item }) => <RecommendedProductList item={item} />}
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
    </View>
  );
};

export default RecommendedProducts;

const styles = StyleSheet.create({
  exploreMore: {
    flexDirection: 'row',
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
