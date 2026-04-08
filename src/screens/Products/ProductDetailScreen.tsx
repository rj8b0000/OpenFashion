import React, { useState } from 'react';
import { Animated, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../globalComponents/Header';
import { GlobalStyles } from '../../theme/styles';
import ProductImageSlider from './Component/ProductImageSlider';
import { Colors, Spacing, Typography } from '../../theme';
import { pdpSlider } from '../../constants/pdpSlider';
import responsive from '../../styles/responsive';
import { useTranslation } from 'react-i18next';
import ICONS from '../../constants/svgPath';
import Sizes from './Component/Sizes';
import ColorPicker from './Component/ColorPicker';
import BottomButton from './Component/BottomButton';
import ProductComponent from './Component/ProductComponent';
import Footer from '../../globalComponents/Footer';
import Materials from './Component/Materials';
import CareText from './Component/CareText';
import CareAccordian from './Component/CareAccordian';
import RecommendedProducts from './Component/RecommendedProducts';

const ProductDetailScreen = () => {
  const [sliderHeight, setSliderHeight] = useState(0);
  const { t } = useTranslation();
  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <Header />
      {/* <ProductImageSlider sliderData={sliderData} /> */}
      <Animated.ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        onLayout={e => {
          const { height } = e.nativeEvent.layout;
          setSliderHeight(height);
        }}
      >
        <ProductComponent />
        <View style={styles.optionsContainer}>
          <ColorPicker />
          <Sizes />
        </View>
        <View style={{ height: Spacing.md }} />
        <BottomButton
          Icon={
            <ICONS.WHITE_PLUS width={24} height={24} color={Colors.white} />
          }
          title={t('addToBasket').toUpperCase()}
        />
        <Materials />
        <CareText />
        <CareAccordian />
        <RecommendedProducts />
        <Footer />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  scrollContent: {
    flexGrow: 1,
  },

  optionsContainer: {
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Spacing.md,
    paddingVertical: Spacing.sm,
    gap: responsive.width(30),
  },
});
