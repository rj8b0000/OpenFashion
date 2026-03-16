import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../globalComponents/Header';
import { GlobalStyles } from '../../theme/styles';
import { Colors, Spacing } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomSlider from './Component/ImageSlider';
import { sliderData } from '../../constants/sliderData';
import NewArrivals from './Component/NewArrivals';

const HomeScreen = () => {
  const [sliderHeight, setSliderHeight] = useState(0);
  return (
    <SafeAreaView
      edges={['top']}
      style={[GlobalStyles.container, { backgroundColor: Colors.bannerGray }]}
    >
      <Header />

      <ScrollView
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
