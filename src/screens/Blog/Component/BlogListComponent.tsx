import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import BlogComponent from './BlogComponent';
import { BlogData } from '../../../constants/blogData';

const BlogListComponent = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={BlogData}
        renderItem={({ item }) => <BlogComponent item={item} />}
        keyExtractor={item => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BlogListComponent;

const styles = StyleSheet.create({
  container: {
    // flex: 1, // Removed flex: 1 as it can cause collapse inside ScrollView
  },
});
