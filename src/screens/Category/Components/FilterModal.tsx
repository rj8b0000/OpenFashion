import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import { FontFamily } from '../../../theme/typography';
import { Spacing, Colors, Radius } from '../../../theme';
import responsive from '../../../styles/responsive';
import { IFilterModalProps } from '../../../types';

const FilterModal = ({
  isVisible,
  onClose,
  categories,
  selectedCategories,
  onApply,
}: IFilterModalProps) => {
  const [tempSelected, setTempSelected] =
    useState<string[]>(selectedCategories);
  const { t } = useTranslation();
  const { width: windowWidth } = Dimensions.get('window');
  const isTablet = windowWidth > 600;

  const categoryKeys: { [key: string]: string } = {
    women: 'categoryWomen',
    'all apparel': 'categoryAllApparel',
    kids: 'categoryKids',
    gents: 'categoryGents',
  };

  const toggleCategory = (category: string) => {
    if (tempSelected.includes(category)) {
      setTempSelected(tempSelected.filter(c => c !== category));
    } else {
      setTempSelected([...tempSelected, category]);
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text
            style={[
              styles.modalTitle,
              isTablet && {
                fontSize: responsive.fontSize(18),
                marginBottom: Spacing.lg,
              },
            ]}
          >
            {t('filterByCategoryTitle')}
          </Text>
          <ScrollView style={styles.categoryList}>
            {categories.map(category => {
              const isSelected = tempSelected.includes(category);
              return (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryItem,
                    isTablet && {
                      paddingVertical: Spacing.sm,
                      paddingHorizontal: Spacing.md,
                    },
                    isSelected && styles.selectedCategoryItem,
                  ]}
                  onPress={() => toggleCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      isTablet && { fontSize: responsive.fontSize(14) },
                      isSelected && styles.selectedCategoryText,
                    ]}
                  >
                    {t(categoryKeys[category] || category)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View
            style={[styles.buttonContainer, isTablet && { gap: Spacing.md }]}
          >
            <TouchableOpacity
              style={[
                styles.button,
                styles.cancelButton,
                isTablet && { padding: Spacing.sm },
              ]}
              onPress={onClose}
            >
              <Text
                style={[
                  styles.cancelButtonText,
                  isTablet && { fontSize: responsive.fontSize(14) },
                ]}
              >
                {t('filterCancel')}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.button,
                styles.applyButton,
                isTablet && { padding: Spacing.sm },
              ]}
              onPress={() => onApply(tempSelected)}
            >
              <Text
                style={[
                  styles.applyButtonText,
                  isTablet && { fontSize: responsive.fontSize(14) },
                ]}
              >
                {t('filterApply')}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FilterModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: Colors.white,
    borderTopLeftRadius: Radius.xl,
    borderTopRightRadius: Radius.xl,
    padding: Spacing.lg,
    maxHeight: '80%',
    width: '100%',
  },
  modalTitle: {
    fontSize: responsive.fontSize(22),
    fontFamily: FontFamily.regular,
    marginBottom: Spacing.md,
    textAlign: 'center',
    color: Colors.titleActive,
  },
  categoryList: {
    marginBottom: Spacing.md,
  },
  categoryItem: {
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.sm,
    marginBottom: Spacing.sm,
    backgroundColor: Colors.tagBg,
    borderWidth: 1,
    borderColor: Colors.divider,
  },
  selectedCategoryItem: {
    backgroundColor: Colors.body,
    borderColor: Colors.body,
  },
  categoryText: {
    fontSize: responsive.fontSize(14),
    fontFamily: FontFamily.regular,
    color: Colors.body,
  },
  selectedCategoryText: {
    color: Colors.white,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: Spacing.sm,
  },
  button: {
    flex: 1,
    padding: Spacing.md,
    borderRadius: 30,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: Colors.infoBg,
  },
  applyButton: {
    backgroundColor: Colors.body,
  },
  cancelButtonText: {
    color: Colors.label,
    fontFamily: FontFamily.regular,
    fontSize: responsive.fontSize(14),
  },
  applyButtonText: {
    color: Colors.white,
    fontFamily: FontFamily.regular,
    fontSize: responsive.fontSize(14),
  },
});
