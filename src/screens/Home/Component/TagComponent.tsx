import { StyleSheet, Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Colors, Radius, Spacing, Typography } from '../../../theme';
import { Tags, ITagComponentProps } from '../../../types';

const TagComponent = ({ item }: ITagComponentProps) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t(item.name)}</Text>
    </View>
  );
};

export default TagComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.tagBg,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Radius.xl,
    marginBottom: Spacing.md,
    marginHorizontal: '1%',
  },
  text: {
    ...Typography.tagFonts,
    textAlign: 'center',
    margin: Spacing.sm,
  },
});
