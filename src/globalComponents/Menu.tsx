import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native';
import ICONS from '../constants/svgPath';
import { Colors, Spacing, Typography } from '../theme';
import responsive from '../styles/responsive';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Dimensions } from 'react-native';
import { IMenuProps } from '../types';

import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

const { width } = Dimensions.get('window');
const isTablet = width > 600;
const MENU_WIDTH = isTablet ? 450 : width;
const TAB_FONT_SIZE = isTablet ? 22 : responsive.fontSize(16);
const MENU_ITEM_FONT_SIZE = isTablet ? 22 : responsive.fontSize(16);

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const Menu: React.FC<IMenuProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();
  const [activeTab, setActiveTab] = useState<'women' | 'man' | 'kids'>('women');
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const iconsWidthHeight = isTablet
    ? responsive.width(16)
    : responsive.width(24);

  const categories = [
    'New',
    'Apparel',
    'Bag',
    'Shoes',
    'Beauty',
    'Accessories',
  ];
  const apparelSubItems = [
    'Outer',
    'Dress',
    'Blouse/Shirt',
    'T-Shirt',
    'Knitwear',
    'Skirt',
    'Pants',
    'Denim',
    'Kids',
  ];

  const handleToggleExpand = (item: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedItem(expandedItem === item ? null : item);
  };

  const renderTab = (tab: 'women' | 'man' | 'kids', label: string) => {
    const isActive = activeTab === tab;
    return (
      <TouchableOpacity
        style={styles.tabContainer}
        onPress={() => setActiveTab(tab)}
        activeOpacity={0.7}
      >
        <Text
          style={[
            Typography.subTitle,
            styles.tabText,
            {
              color: isActive ? Colors.black : Colors.placeholder,
              fontSize: TAB_FONT_SIZE,
            },
          ]}
          numberOfLines={1}
        >
          {label}
        </Text>
        <View style={styles.indicatorContainer}>
          {isActive ? (
            <View style={styles.activeIndicatorWrapper}>
              <View style={styles.indicatorLine} />
              <ICONS.DIAMOND style={styles.indicatorDiamond} />
              <View style={styles.indicatorLine} />
            </View>
          ) : (
            <View style={styles.inactiveIndicatorLine} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    // <View style={styles.modalBackground}>
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, isTablet && styles.tabletContainer]}>
        {/* Header */}
        <View style={styles.spacer}></View>

        {/* Tabs */}
        <View style={styles.tabsHeader}>
          {renderTab('women', 'WOMEN')}
          {renderTab('man', 'MAN')}
          {renderTab('kids', 'KIDS')}
        </View>

        {/* Menu Items */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}
        >
          {categories.map(item => (
            <View key={item} style={styles.menuItemWrapper}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => handleToggleExpand(item)}
                activeOpacity={0.8}
              >
                <Text
                  style={[
                    Typography.bodyLarge,
                    styles.menuItemText,
                    { fontSize: MENU_ITEM_FONT_SIZE },
                  ]}
                >
                  {item}
                </Text>
                {expandedItem === item ? (
                  <ICONS.UP
                    width={responsive.width(20)}
                    height={responsive.width(20)}
                  />
                ) : (
                  <ICONS.DOWN
                    width={responsive.width(20)}
                    height={responsive.width(20)}
                  />
                )}
              </TouchableOpacity>

              {expandedItem === item && item === 'Apparel' && (
                <View style={styles.expandedContent}>
                  {apparelSubItems.map(subItem => (
                    <TouchableOpacity key={subItem} style={styles.subItem}>
                      <Text
                        style={[
                          isTablet
                            ? Typography.bodySmall
                            : Typography.bodyMedium,
                          styles.subItemText,
                        ]}
                      >
                        {subItem}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          ))}

          {/* Contact Info */}
          <View style={styles.contactSection}>
            <View style={styles.contactItem}>
              <ICONS.PHONE
                width={responsive.width(24)}
                height={responsive.width(24)}
              />
              <Text
                style={[
                  Typography.bodyLarge,
                  styles.contactText,
                  { fontSize: MENU_ITEM_FONT_SIZE },
                ]}
              >
                (786) 713-8616
              </Text>
            </View>
            <View style={styles.contactItem}>
              <ICONS.LOCATION
                width={responsive.width(24)}
                height={responsive.width(24)}
              />
              <Text
                style={[
                  Typography.bodyLarge,
                  styles.contactText,
                  { fontSize: MENU_ITEM_FONT_SIZE },
                ]}
              >
                Store locator
              </Text>
            </View>

            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => {
                onClose();
                navigation.navigate('OurStory');
              }}
            >
              <Text
                style={[
                  Typography.bodyLarge,
                  styles.contactText,
                  { marginLeft: 0, fontSize: MENU_ITEM_FONT_SIZE },
                ]}
              >
                {t('ourStoryTitle')}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.contactItem}
              onPress={() => {
                onClose();
                navigation.navigate('ContactUs');
              }}
            >
              <Text
                style={[
                  Typography.bodyLarge,
                  styles.contactText,
                  { marginLeft: 0, fontSize: MENU_ITEM_FONT_SIZE },
                ]}
              >
                {t('contactUsTitle')}
              </Text>
            </TouchableOpacity>
          </View>

          {/* Divider and Socials */}
          <View style={styles.footer}>
            <ICONS.DIVIDER style={styles.footerDivider} />
            <View style={styles.socialIcons}>
              <ICONS.TWITTER
                width={iconsWidthHeight}
                height={iconsWidthHeight}
              />
              <ICONS.IG_FOOTER
                width={iconsWidthHeight}
                height={iconsWidthHeight}
              />
              <ICONS.YOUTUBE
                width={iconsWidthHeight}
                height={iconsWidthHeight}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    // </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: Colors.white,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: isTablet ? Spacing.md : Spacing.xl,
  },
  spacer: {
    height: responsive.height(30),
  },
  tabsHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: isTablet ? Spacing.xs : Spacing.xl,
    marginBottom: Spacing.xl,
    paddingHorizontal: Spacing.md,
  },
  tabContainer: {
    alignItems: 'center',
    minWidth: isTablet ? 120 : 80,
  },
  tabText: {
    marginBottom: Spacing.xs,
  },
  indicatorContainer: {
    height: responsive.height(10),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeIndicatorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  indicatorLine: {
    flex: 1,
    maxWidth: isTablet ? 60 : 40,
    height: responsive.height(1),
    backgroundColor: Colors.secondary,
    opacity: 0.5,
  },
  indicatorDiamond: {
    marginHorizontal: -responsive.width(4),
    width: responsive.width(9),
    height: responsive.width(9),
  },
  inactiveIndicatorLine: {
    width: '100%',
    maxWidth: isTablet ? 120 : 80,
    height: responsive.height(1),
    backgroundColor: Colors.placeholder,
    opacity: 0.1,
  },
  scrollContent: {
    paddingBottom: Spacing.xl * 2,
  },
  menuItemWrapper: {
    marginBottom: Spacing.sm,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: Spacing.md,
  },
  staticMenuItem: {
    paddingVertical: Spacing.md,
  },
  menuItemText: {
    color: Colors.titleActive,
  },
  expandedContent: {
    paddingLeft: Spacing.xl,
    marginTop: -Spacing.xs,
  },
  subItem: {
    paddingVertical: Spacing.sm,
  },
  subItemText: {
    color: Colors.label,
  },
  contactSection: {
    marginTop: Spacing.xl * 2,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: Spacing.xl,
  },
  contactText: {
    marginLeft: Spacing.md,
    color: Colors.label,
  },
  footer: {
    alignItems: 'center',
    marginTop: Spacing.xl,
  },
  footerDivider: {
    marginBottom: Spacing.xl,
  },
  socialIcons: {
    flexDirection: 'row',
    gap: isTablet ? Spacing.xl * 1.5 : Spacing.xl * 2,
    marginTop: Spacing.md,
  },
  tabletContainer: {
    width: MENU_WIDTH,
    alignSelf: 'flex-start',
    backgroundColor: Colors.white,
    height: '100%',
  },
});
