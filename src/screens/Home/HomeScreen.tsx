import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../globalComponents/Header';
import { GlobalStyles } from '../../theme/styles';
import { Colors } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSlider from './Component/ImageSlider';
import { sliderData } from '../../constants/sliderData';
import NewArrivals from './Component/NewArrivals';
import BrandsList from './Component/BrandsList';

import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import Collections from './Component/Collections';
import PLPHome from './Component/PLPHome';
import TrendingComponent from './Component/TrendingComponent';
import InfoComponent from './Component/InfoComponent';
import FollowUsComponent from './Component/FollowUsComponent';
import Footer from '../../globalComponents/Footer';

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const { width } = Dimensions.get('window');
const BANNER_ASPECT_RATIO = 375 / 600;
const SLIDER_HEIGHT = width / BANNER_ASPECT_RATIO;

const HomeScreen = () => {
  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedBg = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      scrollY.value,
      [0, SLIDER_HEIGHT],
      [Colors.bannerGray, '#ffffff'],
    );

    return {
      backgroundColor: bgColor,
    };
  });

  return (
    <AnimatedSafeAreaView
      edges={['top']}
      style={[GlobalStyles.container, animatedBg]}
    >
      <Header animatedStyle={animatedBg} />

      <Animated.ScrollView
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <View style={{ height: SLIDER_HEIGHT }}>
          <CustomSlider sliderData={sliderData} />
        </View>

        <NewArrivals />
        <BrandsList />
        <Collections />
        <PLPHome />
        <TrendingComponent />
        <InfoComponent />
        <FollowUsComponent />
        <Footer />
      </Animated.ScrollView>
    </AnimatedSafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
