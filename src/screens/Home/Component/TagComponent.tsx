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
    borderRadius: Radius.xl,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    margin: Spacing.xs,
  },
  text: {
    ...Typography.tagFonts,
    textAlign: 'center',
    marginVertical: Spacing.xs,
  },
});
