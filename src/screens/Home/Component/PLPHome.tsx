import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useRef, useState } from 'react';
import { Colors, Spacing, Typography } from '../../../theme';
import responsive from '../../../styles/responsive';
import { useTranslation } from 'react-i18next';
import ICONS from '../../../constants/svgPath';
import ProductHomeComponent from './ProductHomeComponent';
import { plpHomeData } from '../../../constants/plpHomeData';

const { width: windowWidth } = Dimensions.get('window');
const isTablet = windowWidth > 600;
const CARD_WIDTH = isTablet ? 300 : responsive.width(254);
const SNAP_WIDTH = CARD_WIDTH + Spacing.md;

const PLPHome = () => {
  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(0);
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / SNAP_WIDTH);
    setActiveIndex(slide);
  };

  const flatRef = useRef<FlatList>(null);

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
      <View style={{ paddingLeft: Spacing.md, marginTop: Spacing.md }}>
        <View>
          <FlatList
            ref={flatRef}
            keyExtractor={item => item.id}
            data={plpHomeData}
            renderItem={({ item }) => <ProductHomeComponent item={item} />}
            horizontal
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={handleScroll}
          />
        </View>
        {/* Pagination */}
        <View style={styles.pagination}>
          {plpHomeData.map((_, index) => (
            <View
              key={index}
              style={[styles.dot, index === activeIndex && styles.activeDot]}
            />
          ))}
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
    paddingVertical: Spacing.xl,
    justifyContent: 'space-between',
  },
  pagination: {
    width: '95%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
  },
  dot: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: Colors.placeholder,
    marginHorizontal: 6,
    transform: [{ rotate: '45deg' }], // diamond shape
  },

  activeDot: {
    backgroundColor: Colors.placeholder,
    width: 8,
    height: 8,
  },
});
