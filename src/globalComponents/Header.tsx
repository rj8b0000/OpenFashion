import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import ICONS from '../constants/svgPath';
import Animated from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import { IHeader } from '../types';
import responsive from '../styles/responsive';

const AnimatedView = Animated.createAnimatedComponent(View);

interface HeaderProps {
  animatedStyle?: IHeader;
}
const Header: React.FC<HeaderProps> = ({ animatedStyle }) => {
  const navigation = useNavigation<any>();

  return (
    <AnimatedView style={[styles.localContainer, animatedStyle]}>
      <View style={styles.leftContainer}>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
          activeOpacity={0.7}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <ICONS.MENU
            width={responsive.width(22)}
            height={responsive.width(22)}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.centerContainer}>
        <ICONS.LOGO
          width={responsive.width(80)}
          height={responsive.height(36)}
        />
      </View>

      <View style={styles.rightContainer}>
        <TouchableOpacity activeOpacity={0.7}>
          <ICONS.SEARCH
            width={responsive.width(26)}
            height={responsive.width(26)}
          />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} style={{ marginLeft: responsive.width(14) }}>
          <ICONS.BAG
            width={responsive.width(24)}
            height={responsive.width(24)}
          />
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
    alignItems: 'center',
    paddingHorizontal: responsive.padding(16),
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
