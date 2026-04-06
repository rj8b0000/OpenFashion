import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ICONS from '../constants/svgPath';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { IHeader } from '../types';

const AnimatedView = Animated.createAnimatedComponent(View);

interface HeaderProps {
  animatedStyle?: IHeader;
}
const Header: React.FC<HeaderProps> = ({ animatedStyle }) => {
  const navigation = useNavigation<any>();

  return (
    <AnimatedView style={[styles.localContainer, animatedStyle]}>
      <TouchableOpacity
        onPress={() => navigation.openDrawer()}
        activeOpacity={0.7}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      >
        <ICONS.MENU width={22} height={22} />
      </TouchableOpacity>
      <ICONS.LOGO width={74} height={36} style={{ marginLeft: '10%' }} />
      <View style={styles.localIconsContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <ICONS.SEARCH width={26} height={26} />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7}>
          <ICONS.BAG width={24} height={24} />
        </TouchableOpacity>
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
