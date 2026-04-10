import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Colors, Radius, Spacing, Typography } from '../../../theme';
import { useTranslation } from 'react-i18next';
import TagComponent from './TagComponent';
import { tagsData } from '../../../constants/tagsData';

const TrendingComponent = () => {
  const { t } = useTranslation();
  return (
    <View>
      <Text style={styles.title}>{t('trending')}</Text>
      <FlatList
        data={tagsData}
        renderItem={({ item }) => <TagComponent item={item} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.flatListContent}
        scrollEnabled={false}
      />
      <View style={{ marginBottom: Spacing.lg }} />
    </View>
  );
};

export default TrendingComponent;

const styles = StyleSheet.create({
  title: {
    ...Typography.title,
    textAlign: 'center',
  },
  flatListContent: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: Spacing.md,
    marginTop: Spacing.md,
  },
});
