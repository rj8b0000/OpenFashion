// src/theme/typography.js
import responsive from '../styles/responsive'; // adjust path
export const FontFamily = {
  regular: 'TenorSans',
};

const makeTextStyle = (
  fontFamily: string,
  fontSize: number,
  lineHeight: number,
  letterSpacing: number,
) => ({
  fontFamily,
  fontSize: responsive.fontSize(fontSize),
  lineHeight: responsive.height(lineHeight),
  letterSpacing: responsive.width(letterSpacing),
});

export const Typography = {
  title: makeTextStyle(FontFamily.regular, 18, 40, 4),
  subTitle: makeTextStyle(FontFamily.regular, 16, 24, 2),
  subTitle2: makeTextStyle(FontFamily.regular, 14, 20, 2),
  bodyLarge: makeTextStyle(FontFamily.regular, 16, 24, 0),
  bodyMedium: makeTextStyle(FontFamily.regular, 14, 24, 0),
  bodySmall: makeTextStyle(FontFamily.regular, 12, 18, 0),
  newArrivalProductTitle: makeTextStyle(FontFamily.regular, 14, 18, 0),
  tagFonts: makeTextStyle(FontFamily.regular, 16, 14, 0),
  infoText: makeTextStyle(FontFamily.regular, 16, 24, 0),
  infoListText: makeTextStyle(FontFamily.regular, 13, 20, 0),
  filterBarText: makeTextStyle(FontFamily.regular, 14, 18, 0),
  blogTitle: makeTextStyle(FontFamily.regular, 14, 20, 0),
  blogDescription: makeTextStyle(FontFamily.regular, 14, 24, 0),
  productTitle: makeTextStyle(FontFamily.regular, 16, 24, 4),
  productDescription: makeTextStyle(FontFamily.regular, 16, 24, 0),
  productPrice: makeTextStyle(FontFamily.regular, 18, 24, 0),
};

export default Typography;
