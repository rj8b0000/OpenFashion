import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import ICONS from '../../../constants/svgPath';
import { FontFamily } from '../../../theme/typography';
import responsive from '../../../styles/responsive';
import { IPaginationProps } from '../../../types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      {pages.map(page => (
        <TouchableOpacity
          key={page}
          style={[
            styles.pageBox,
            currentPage === page
              ? styles.activePageBox
              : styles.inactivePageBox,
          ]}
          onPress={() => onPageChange(page)}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === page
                ? styles.activePageText
                : styles.inactivePageText,
            ]}
          >
            {page}
          </Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={styles.nextButton}
        onPress={() => {
          if (currentPage < totalPages) {
            onPageChange(currentPage + 1);
          }
        }}
      >
        <ICONS.FORWARD width={30} height={30} color="#333" />
      </TouchableOpacity>
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5.5%',
    gap: 12,
  },
  pageBox: {
    width: responsive.width(40),
    height: responsive.width(40),
    justifyContent: 'center',
    alignItems: 'center',
  },
  activePageBox: {
    backgroundColor: '#333',
  },
  inactivePageBox: {
    backgroundColor: '#f2f2f2ff',
  },
  pageText: {
    fontSize: responsive.fontSize(18),
    fontFamily: FontFamily.regular,
  },
  activePageText: {
    color: '#fff',
  },
  inactivePageText: {
    color: '#555',
  },
  nextButton: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
