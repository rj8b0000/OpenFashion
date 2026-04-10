import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { Colors, Spacing, Typography } from '../../../theme';
import { useTranslation } from 'react-i18next';

const CategoryTabs = () => {
  const [activeTab, setActiveTab] = useState('All');
  const { t } = useTranslation();
  const tabs = [t('all'), t('appreal'), t('dress'), t('tshirt'), t('bag')];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabsContainer}
      >
        {tabs.map(tab => {
          const isActive = tab === activeTab;

          return (
            <TouchableOpacity
              key={tab}
              style={styles.tabItem}
              onPress={() => setActiveTab(tab)}
            >
              <Text style={[styles.tabText, isActive && styles.activeText]}>
                {tab}
              </Text>

              <View
                style={
                  isActive
                    ? styles.diamond
                    : { ...styles.diamond, backgroundColor: '#fff' }
                }
              />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoryTabs;

const styles = StyleSheet.create({
  container: {
    paddingVertical: Spacing.sm,
    alignItems: 'center',
  },

  tabsContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Spacing.md,
    gap: Spacing.lg,
    height: 50,
  },

  tabItem: {
    alignItems: 'center',
  },

  tabText: {
    color: '#9e9e9e',
    ...Typography.bodyLarge,
  },

  activeText: {
    color: '#222',
    fontWeight: '500',
  },

  diamond: {
    marginTop: 4,
    width: Spacing.xs,
    height: Spacing.xs,
    backgroundColor: Colors.primary,
    transform: [{ rotate: '45deg' }],
  },
});
