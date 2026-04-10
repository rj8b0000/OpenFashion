import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ICONS from '../../../constants/svgPath';
import { FontFamily } from '../../../theme/typography';
import responsive from '../../../styles/responsive';
import { IPaginationProps } from '../../../types';

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: IPaginationProps) => {
  const { width } = Dimensions.get('window');
  const isTablet = width > 600;
  const PAGE_BOX_SIZE = isTablet ? responsive.width(28) : responsive.width(40);
  const FONT_SIZE = isTablet
    ? responsive.fontSize(14)
    : responsive.fontSize(18);
  const ICON_SIZE = isTablet ? responsive.width(16) : responsive.width(24);
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <View
      style={[
        styles.container,
        {
          marginVertical: isTablet ? 16 : '5.5%',
        },
      ]}
    >
      {pages.map((page: any) => (
        <TouchableOpacity
          key={page}
          style={[
            styles.pageBox,
            currentPage === page
              ? styles.activePageBox
              : styles.inactivePageBox,
            {
              width: PAGE_BOX_SIZE,
              height: PAGE_BOX_SIZE,
            },
          ]}
          onPress={() => onPageChange(page)}
        >
          <Text
            style={[
              styles.pageText,
              currentPage === page
                ? styles.activePageText
                : styles.inactivePageText,
              { fontSize: FONT_SIZE },
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
        <ICONS.FORWARD width={ICON_SIZE} height={ICON_SIZE} color="#333" />
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
    gap: 12,
  },
  pageBox: {
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
