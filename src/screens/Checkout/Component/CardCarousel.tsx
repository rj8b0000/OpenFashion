import React, { useState } from 'react';
import { View, FlatList, Dimensions, StyleSheet } from 'react-native';
import CreditCardPreview from './CreditCardPreview';
import { Colors, Spacing } from '../../../theme';
import responsive from '../../../styles/responsive';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width * 0.9;

const CardCarousel = ({ cards }: any) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <View>
      <FlatList
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        data={cards}
        keyExtractor={(_, i) => i.toString()}
        snapToInterval={CARD_WIDTH}
        decelerationRate="fast"
        onScroll={e => {
          const index = Math.round(e.nativeEvent.contentOffset.x / CARD_WIDTH);
          setActiveIndex(index);
        }}
        renderItem={({ item }) => (
          <View style={styles.cardWrapper}>
            <CreditCardPreview {...item} />
          </View>
        )}
      />

      <View style={styles.pagination}>
        {cards.map((_: any, i: number) => (
          <View
            key={i}
            style={[styles.dot, activeIndex === i && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default CardCarousel;

const styles = StyleSheet.create({
  cardWrapper: {
    width: CARD_WIDTH,
    alignItems: 'center',
  },

  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: Spacing.md,
  },

  dot: {
    width: responsive.width(6),
    height: responsive.width(6),
    // borderRadius: responsive.width(3),
    transform: [{ rotate: '45deg' }],
    backgroundColor: Colors.bannerGray,
    marginHorizontal: responsive.width(3),
  },

  activeDot: {
    backgroundColor: Colors.secondary,
  },
});
