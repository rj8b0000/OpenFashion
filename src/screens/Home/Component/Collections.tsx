import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Spacing, Typography } from '../../../theme';
import { useTranslation } from 'react-i18next';
import responsive from '../../../styles/responsive';
import IMAGES from '../../../constants/imagePath';
import { GlobalStyles } from '../../../theme/styles';

const Collections = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.collectionTextContainer}>
        <Text style={Typography.title}>{t('collection')}</Text>
      </View>
      <View style={styles.bannerMain}>
        <View style={styles.bannerSecondary}>
          <Image
            source={IMAGES.COLLECTION_BANNER1}
            style={GlobalStyles.imageFull}
          />
        </View>
        <View style={styles.banner2}>
          <Image
            source={IMAGES.COLLECTION_BANNER2}
            style={GlobalStyles.imageFull}
          />
        </View>
      </View>
    </View>
  );
};

export default Collections;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    marginTop: Spacing.xxl,
  },
  collectionTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: Spacing.sm,
  },
  bannerMain: {
    justifyContent: 'space-between',
    marginTop: Spacing.md,
    flex: 1,
  },
  bannerSecondary: {
    width: '100%',
    aspectRatio: 375 / 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner2: {
    width: responsive.width(260),
    aspectRatio: 260 / 296,
    marginTop: Spacing.xxl,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
