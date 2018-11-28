import {
  primaryColorCode,
  secondaryColorCode,
  successColorCode,
  infoColorCode,
  warningColorCode,
  dangerColorCode,
  bgColorCode,
  textColorCode,
} from 'components/theme/DeepCast/base_colors';
import {
  primaryFontFamily,
  secondaryFontFamily,
} from 'components/theme/DeepCast/fonts';
import { blueGradiant } from './gradiants';

const DeepCastTheme = {
  id: 'dcTheme',
  backgroundColor: bgColorCode,
  backgroundGradiant: blueGradiant,
  primaryColor: primaryColorCode,
  secondaryColor: secondaryColorCode,
  successColor: successColorCode,
  infoColor: infoColorCode,
  warningColor: warningColorCode,
  dangerColor: dangerColorCode,
  textColor: textColorCode,
  headingFont: primaryFontFamily,
  textFont: secondaryFontFamily,
};

export default DeepCastTheme;
