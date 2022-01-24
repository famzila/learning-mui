import {
  PRIMARY,
  GREY,
  GRADIENTS,
  WARNING,
  SUCCESS,
  INFO,
  CHART_COLORS,
  SECONDARY,
  ERROR
} from './palette';

const lightPalette = {
  mode: 'light',
  common: { black: '#000', white: '#fff' },
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  info: { ...INFO },
  success: { ...SUCCESS },
  warning: { ...WARNING },
  error: { ...ERROR },
  grey: GREY,
  gradients: GRADIENTS,
  chart: CHART_COLORS,
  divider: GREY[500_24],
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500]
  },
  background: {
    paper: '#fff',
    default: '#fff',
    neutral: GREY[200]
  },
  action: {
    active: GREY[600],
    hover: GREY[500_8],
    selected: GREY[500_16],
    disabled: GREY[500_80],
    disabledBackground: GREY[500_24],
    focus: GREY[500_24],
    hoverOpacity: 0.08,
    disabledOpacity: 0.48
  }
};

export default lightPalette;
