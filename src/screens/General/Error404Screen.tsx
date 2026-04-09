import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import Header from '../../globalComponents/Header';
import Footer from '../../globalComponents/Footer';
import PageHeader from '../../globalComponents/PageHeader';
import { Colors, Spacing, Typography } from '../../theme';
import ICONS from '../../constants/svgPath';
import responsive from '../../styles/responsive';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { GlobalStyles } from '../../theme/styles';

const Error404Screen = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView edges={['top']} style={[GlobalStyles.container]}>
      <Header />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <PageHeader title="pageNotFound" />

          <View style={styles.centerSection}>
            <ICONS.NOT_FOUND
              width={responsive.width(60)}
              height={responsive.height(80)}
            />

            <Text style={styles.description}>
              {t('pageNotFoundDescription')}
            </Text>

            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => navigation.navigate('Home')}
            >
              <Text style={styles.homeButtonText}>
                {t('backToHome').toUpperCase()}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Error404Screen;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingHorizontal: Spacing.xl,
    paddingBottom: Spacing.xl,
  },
  centerSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -responsive.height(50), // Offset to visually center better
  },
  description: {
    ...Typography.bodyLarge,
    color: Colors.body,
    textAlign: 'center',
    marginTop: Spacing.xl,
    paddingHorizontal: Spacing.lg,
    lineHeight: 24,
  },
  homeButton: {
    backgroundColor: Colors.black,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Spacing.xl,
    paddingVertical: Spacing.sm,
    marginTop: Spacing.extraLarge,
    gap: Spacing.sm,
  },
  homeButtonText: {
    ...Typography.bodyLarge,
    color: Colors.white,
    letterSpacing: 2,
  },
});
