import React, { useRef, useState } from 'react';
import {
  View,
  Image,
  FlatList,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { useTranslation } from 'react-i18next';

type CusomSliderProps = {
  sliderData: any[];
};

const { width } = Dimensions.get('window');

const CustomSlider = ({ sliderData = [] }: CusomSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatRef = useRef<FlatList>(null);
  const { t } = useTranslation();
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / width);
    setActiveIndex(slide);
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatRef}
        data={sliderData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        onMomentumScrollEnd={handleScroll}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />

      {/* Explore More Buttom  */}
      <View style={styles.exploreMoreBtn}>
        <Text style={styles.exploreText}>{t('exploreCollection')}</Text>
      </View>

      {/* Pagination */}
      <View style={styles.pagination}>
        {sliderData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default CustomSlider;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%', // takes parent height
  },

  card: {
    width: width,
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  pagination: {
    position: 'absolute',
    bottom: Spacing.xl,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  exploreMoreBtn: {
    position: 'absolute',
    bottom: Spacing.extraLarge,
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 40,
    backgroundColor: 'rgba(10, 10, 10, 0.35)', // glass effect
    justifyContent: 'center',
    alignItems: 'center',
  },

  exploreText: {
    ...Typography.bodyLarge,
    color: Colors.white,
  },

  dot: {
    width: 8,
    height: 8,
    borderWidth: 1,
    borderColor: Colors.white,
    marginHorizontal: 6,
    transform: [{ rotate: '45deg' }], // diamond shape
  },

  activeDot: {
    backgroundColor: Colors.white,
    width: 10,
    height: 10,
  },
});
