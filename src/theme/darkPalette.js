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

const darkPalette = {
  mode: 'dark',
  common: { black: '#000', white: '#1B2635' },
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
    primary: GREY[300],
    secondary: GREY[300],
    disabled: GREY[500]
  },
  background: {
    paper: '#292E3C',
    default: '#161C24',
    neutral: 'black'
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

export default darkPalette;
