import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  interpolateColor,
} from 'react-native-reanimated';
import { Colors, Spacing } from '../../theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GlobalStyles } from '../../theme/styles';
import Header from '../../globalComponents/Header';
import Footer from '../../globalComponents/Footer';
import PageHeader from '../../globalComponents/PageHeader';
import FilterBar from './Component/FilterBar';
import LoadMoreBtn from './Component/LoadMoreBtn';
import BlogListComponent from './Component/BlogListComponent';

const BlogScreen = () => {
  return (
    <>
      <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Header />
          <PageHeader title="blog" />
          <FilterBar />
          <View style={{ height: Spacing.lg }} />
          <BlogListComponent />
          <LoadMoreBtn />
          <Footer />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default BlogScreen;

const styles = StyleSheet.create({});
