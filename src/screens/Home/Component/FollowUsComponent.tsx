import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Spacing, Typography } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import responsive from '../../../styles/responsive';
import { followUsData } from '../../../constants/followUsData';

const FollowUsComponent = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('followUs')}</Text>
      <View style={styles.iconWrapper}>
        <ICONS.INSTAGRAM
          width={responsive.width(26)}
          height={responsive.width(26)}
          style={styles.instagramIcon}
        />
      </View>
      <View style={styles.listWrapper}>
        <FlatList
          data={followUsData}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
          )}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.flatListContent}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default FollowUsComponent;

const styles = StyleSheet.create({
  container: {
    marginTop: Spacing.lg,
  },
  title: {
    ...Typography.title,
    textAlign: 'center',
    marginTop: Spacing.sm,
  },
  iconWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  instagramIcon: {
    marginTop: Spacing.xs,
  },
  listWrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  itemContainer: {
    width: '50%',
    height: responsive.width(164),
    padding: Spacing.xs,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  flatListContent: {
    marginTop: Spacing.md,
  },
});
