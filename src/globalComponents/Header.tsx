import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ICONS from '../constants/svgPath';
import Animated from 'react-native-reanimated';
import { IHeader } from '../types';

const AnimatedView = Animated.createAnimatedComponent(View);

interface HeaderProps {
  animatedStyle: IHeader;
}
const Header: React.FC<HeaderProps> = ({ animatedStyle }) => {
  return (
    <AnimatedView style={[styles.localContainer, animatedStyle]}>
      <ICONS.MENU width={22} height={22} />
      <ICONS.LOGO width={80} height={40} style={{ marginLeft: '10%' }} />
      <View style={styles.localIconsContainer}>
        <ICONS.SEARCH width={28} height={28} />
        <ICONS.BAG width={26} height={26} />
      </View>
    </AnimatedView>
  );
};

export default Header;

const styles = StyleSheet.create({
  localContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '4%',
  },
  localIconsContainer: {
    flexDirection: 'row',
    gap: 14,
  },
});
