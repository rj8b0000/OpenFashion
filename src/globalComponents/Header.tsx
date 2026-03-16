import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ICONS from '../constants/svgPath';

const Header = () => {
  return (
    <View style={styles.localContainer}>
      <ICONS.MENU width={28} height={28} />
      <ICONS.LOGO width={88} height={44} style={{ marginLeft: '10%' }} />
      <View style={styles.localIconsContainer}>
        <ICONS.SEARCH width={28} height={28} />
        <ICONS.BAG width={26} height={26} />
      </View>
    </View>
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
