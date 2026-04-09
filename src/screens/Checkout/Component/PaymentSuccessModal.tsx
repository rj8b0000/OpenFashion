import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors, Spacing, Typography, Radius } from '../../../theme';
import ICONS from '../../../constants/svgPath';
import responsive from '../../../styles/responsive';

interface PaymentSuccessModalProps {
  isVisible: boolean;
  onClose: () => void;
  onBackToHome: () => void;
}

const PaymentSuccessModal: React.FC<PaymentSuccessModalProps> = ({
  isVisible,
  onClose,
  onBackToHome,
}) => {
  const { t } = useTranslation();

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <ICONS.CROSS width={24} height={24} color={Colors.label} />
          </TouchableOpacity>

          <Text style={styles.title}>{t('paymentSuccess')}</Text>

          <View style={styles.iconWrapper}>
            <ICONS.PAYMENT_COMPLETE_TICK width={80} height={80} />
          </View>

          <View style={styles.messageSection}>
            <Text style={styles.successMessage}>{t('paymentWasSuccess')}</Text>
            <Text style={styles.paymentId}>{t('paymentId')} 15263541</Text>
          </View>

          <View style={styles.dividerContainer}>
            <ICONS.DIVIDER />
          </View>

          <View style={styles.ratingSection}>
            <Text style={styles.rateTitle}>{t('rateYourPurchase')}</Text>
            <View style={styles.reactionContainer}>
              <TouchableOpacity>
                <ICONS.SAD width={40} height={40} color={Colors.secondary} />
              </TouchableOpacity>
              <TouchableOpacity>
                <ICONS.HAPPY width={40} height={40} color={Colors.secondary} />
              </TouchableOpacity>
              <TouchableOpacity>
                <ICONS.LOVE_IT
                  width={40}
                  height={40}
                  color={Colors.secondary}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.btnRow}>
            <TouchableOpacity style={styles.submitBtn} onPress={onClose}>
              <Text style={styles.submitBtnText}>{t('submit')}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.homeBtn} onPress={onBackToHome}>
              <Text style={styles.homeBtnText}>{t('backToHome')}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default PaymentSuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '5%',
  },
  modalContainer: {
    width: '100%',
    backgroundColor: Colors.white,
    padding: Spacing.xl,
    alignItems: 'center',
    position: 'relative',
  },
  closeBtn: {
    position: 'absolute',
    top: Spacing.md,
    right: Spacing.md,
  },
  title: {
    ...Typography.title,
    fontSize: responsive.fontSize(20),
    marginTop: Spacing.lg,
    letterSpacing: 4,
    color: Colors.titleActive,
  },
  iconWrapper: {
    marginVertical: Spacing.xl,
  },
  messageSection: {
    alignItems: 'center',
    marginBottom: Spacing.lg,
  },
  successMessage: {
    ...Typography.bodyLarge,
    fontSize: responsive.fontSize(18),
    color: Colors.body,
    textAlign: 'center',
  },
  paymentId: {
    ...Typography.bodyLarge,
    color: Colors.label,
    marginTop: Spacing.xs,
  },
  dividerContainer: {
    width: '100%',
    alignItems: 'center',
    marginVertical: Spacing.md,
  },
  ratingSection: {
    alignItems: 'center',
    width: '100%',
    marginBottom: Spacing.xl,
  },
  rateTitle: {
    ...Typography.bodyLarge,
    fontSize: responsive.fontSize(18),
    color: Colors.body,
    marginBottom: Spacing.md,
  },
  reactionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: Spacing.md,
    gap: Spacing.md,
  },
  submitBtn: {
    flex: 1,
    height: responsive.height(50),
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitBtnText: {
    ...Typography.bodyLarge,
    color: Colors.white,
    letterSpacing: 1,
  },
  homeBtn: {
    flex: 1,
    height: responsive.height(50),
    borderWidth: 1,
    borderColor: Colors.divider,
    justifyContent: 'center',
    alignItems: 'center',
  },
  homeBtnText: {
    ...Typography.bodyMedium,
    color: Colors.body,
    letterSpacing: 1,
  },
});
