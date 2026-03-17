import { ScrollView, StyleSheet, View } from 'react-native';
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

const AnimatedSafeAreaView = Animated.createAnimatedComponent(SafeAreaView);

const HomeScreen = () => {
  const [sliderHeight, setSliderHeight] = useState(0);

  const scrollY = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: event => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const animatedBg = useAnimatedStyle(() => {
    const bgColor = interpolateColor(
      scrollY.value,
      [0, sliderHeight],
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
        onLayout={e => {
          const { height } = e.nativeEvent.layout;
          setSliderHeight(height);
        }}
      >
        <View style={{ height: sliderHeight }}>
          <CustomSlider sliderData={sliderData} />
        </View>

        <NewArrivals />
        <BrandsList />
        <Collections />
        <PLPHome />
      </Animated.ScrollView>
    </AnimatedSafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
