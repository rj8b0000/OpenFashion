import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

const LANGUAGE_KEY = 'APP_LANGUAGE';

export const languageDetector = {
  type: 'languageDetector',
  async: true,

  detect: async (callback: (lang: string) => void) => {
    const savedLanguage = await AsyncStorage.getItem(LANGUAGE_KEY);

    if (savedLanguage) {
      callback(savedLanguage);
      return;
    }
    const locales = RNLocalize.getLocales();
    const deviceLanguage = locales[0]?.languageCode ?? 'en';

    callback(deviceLanguage);
  },

  init: () => {},

  cacheUserLanguage: async (language: string) => {
    await AsyncStorage.setItem(LANGUAGE_KEY, language);
  },
};
