import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../../../theme';
import responsive from '../../../styles/responsive';
import { useTranslation } from 'react-i18next';
import ICONS from '../../../constants/svgPath';
import ProductHomeComponent from './ProductHomeComponent';
import { plpHomeData } from '../../../constants/plpHomeData';

const PLPHome = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text style={Typography.title}>{t('justForYou')}</Text>
        <ICONS.DIVIDER />
      </View>
      <View style={{ paddingLeft: Spacing.md }}>
        <View
          style={{
            height: responsive.height(392),
          }}
        >
          <FlatList
            keyExtractor={item => item.id}
            data={plpHomeData}
            renderItem={({ item }) => <ProductHomeComponent item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </View>
  );
};

export default PLPHome;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Spacing.xxl,
    height: responsive.height(530),
    paddingVertical: Spacing.xl,
    justifyContent: 'space-between',
  },
});
