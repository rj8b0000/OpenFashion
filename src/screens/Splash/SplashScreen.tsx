import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../theme/styles';
import IMAGES from '../../constants/imagePath';
import responsive from '../../styles/responsive';

const SplashScreen = () => {
  return (
    <SafeAreaView style={[GlobalStyles.container, styles.container]}>
      <Image
        source={IMAGES.LOGO_PNG}
        resizeMode="contain"
        style={styles.logo}
      />
    </SafeAreaView>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: responsive.width(200),
    height: responsive.height(100),
  },
});
