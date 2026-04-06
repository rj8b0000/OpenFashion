import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import responsive from '../../../styles/responsive';
import IMAGE from '../../../constants/imagePath';
import { Colors, Spacing, Typography } from '../../../theme';

const BlogComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={Typography.blogTitle}>{item.title}</Text>
        <Text style={[Typography.blogDescription, styles.blogDescription]}>
          {item.description}
        </Text>
        <View style={styles.footerContainer}>
          <Text style={[Typography.bodySmall, styles.dateText]}>
            {item.date}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default BlogComponent;

const styles = StyleSheet.create({
  container: {
    height: responsive.height(176),
    width: '94%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: Spacing.lg,
  },
  imageContainer: {
    width: '38%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textContainer: {
    width: '62%',
    height: '100%',
    padding: Spacing.sm,
  },
  blogDescription: {
    color: Colors.placeholder,
  },
  footerContainer: {
    position: 'absolute',
    bottom: '2%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: '4%',
  },
  dateText: {
    color: Colors.placeholder,
  },
});
