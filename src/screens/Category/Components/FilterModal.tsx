import React, { useState } from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import { FontFamily } from '../../../theme/typography';
import { Spacing } from '../../../theme';
import responsive from '../../../styles/responsive';

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: string[];
  onApply: (selected: string[]) => void;
}

const FilterModal = ({
  isVisible,
  onClose,
  categories,
  selectedCategories,
  onApply,
}: FilterModalProps) => {
  const [tempSelected, setTempSelected] = useState<string[]>(selectedCategories);

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
          <Text style={styles.modalTitle}>Filter by Category</Text>
          <ScrollView style={styles.categoryList}>
            {categories.map(category => {
              const isSelected = tempSelected.includes(category);
              return (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.categoryItem,
                    isSelected && styles.selectedCategoryItem,
                  ]}
                  onPress={() => toggleCategory(category)}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      isSelected && styles.selectedCategoryText,
                    ]}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.applyButton]}
              onPress={() => onApply(tempSelected)}
            >
              <Text style={styles.applyButtonText}>Apply</Text>
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
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    maxHeight: '80%',
    width: '100%',
  },
  modalTitle: {
    fontSize: 22,
    fontFamily: FontFamily.regular,
    marginBottom: 20,
    textAlign: 'center',
    color: '#000',
  },
  categoryList: {
    marginBottom: 20,
  },
  categoryItem: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
    borderWidth: 1,
    borderColor: '#EEEEEE',
  },
  selectedCategoryItem: {
    backgroundColor: '#333',
    borderColor: '#333',
  },
  categoryText: {
    fontSize: 16,
    fontFamily: FontFamily.regular,
    color: '#333',
  },
  selectedCategoryText: {
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F2F2F2',
  },
  applyButton: {
    backgroundColor: '#333',
  },
  cancelButtonText: {
    color: '#555',
    fontFamily: FontFamily.regular,
    fontSize: 16,
  },
  applyButtonText: {
    color: '#FFF',
    fontFamily: FontFamily.regular,
    fontSize: 16,
  },
});
