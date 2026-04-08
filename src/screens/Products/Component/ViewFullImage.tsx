import React from 'react';
import { Modal, TouchableOpacity, Image, StyleSheet, Dimensions } from 'react-native';

interface ViewFullImageProps {
  visible: boolean;
  image: any;
  onClose: () => void;
}

const ViewFullImage: React.FC<ViewFullImageProps> = ({ visible, image, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity
        style={styles.modalBackground}
        activeOpacity={1}
        onPress={onClose}
      >
        {image && (
          <Image
            source={image}
            style={styles.fullScreenImage}
            resizeMode="contain"
          />
        )}
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullScreenImage: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.8,
  },
});

export default ViewFullImage;
