import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../theme/styles';
import IMAGES from '../../constants/imagePath';

const SplashScreen = () => {
  return (
    <SafeAreaView style={GlobalStyles.container}>
      <Image source={IMAGES.LOGO_PNG} />
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
});
