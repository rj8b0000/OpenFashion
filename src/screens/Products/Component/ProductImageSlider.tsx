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
  TouchableOpacity,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { useTranslation } from 'react-i18next';
import responsive from '../../../styles/responsive';
import ICONS from '../../../constants/svgPath';
import ViewFullImage from './ViewFullImage';
import { ICustomSliderProps } from '../../../types';

const { width } = Dimensions.get('window');

const ProductImageSlider = ({ sliderData = [] }: ICustomSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const flatRef = useRef<FlatList>(null);
  const { t } = useTranslation();
  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slide = Math.round(event.nativeEvent.contentOffset.x / (width * 0.9));
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
            <TouchableOpacity 
              style={styles.enlargeBtn}
              onPress={() => {
                setSelectedImage(item);
                setIsModalVisible(true);
              }}
            >
              <ICONS.ENLARGE_IMAGE width={40} height={40} />
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Pagination */}
      <View style={styles.pagination}>
        {sliderData.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === activeIndex && styles.activeDot]}
          />
        ))}
      </View>

      {/* Full Screen Modal */}
      <ViewFullImage
        visible={isModalVisible}
        image={selectedImage}
        onClose={() => setIsModalVisible(false)}
      />
    </View>
  );
};

export default ProductImageSlider;

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: responsive.height(480), // takes parent height
  },

  card: {
    width: width * 0.9,
    height: '100%',
  },

  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  pagination: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.lg,
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
    width: 6,
    height: 6,
    borderWidth: 1,
    borderColor: Colors.plpPaginationGrey,
    marginHorizontal: 6,
    transform: [{ rotate: '45deg' }], // diamond shape
  },

  activeDot: {
    backgroundColor: Colors.plpPaginationGrey,
    width: 8,
    height: 8,
  },
  enlargeBtn: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
});
