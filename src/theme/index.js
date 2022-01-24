import PropTypes from 'prop-types';
import React, { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import shape from './shape';
import typography from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows } from './shadows';
import darkPalette from './darkPalette';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node
};

export default function ThemeConfig({ children }) {
  localStorage.setItem('DARK_MODE', 'light');
  const mode = localStorage.getItem('DARK_MODE');
  const themeOptions = useMemo(
    () => ({
      palette: darkPalette,
      shape,
      typography,
      shadows,
      customShadows
    }),
    [mode]
  );
  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
