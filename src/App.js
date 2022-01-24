// routes
import { useEffect, useMemo, useState } from 'react';
// theme
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider, styled } from '@mui/material/styles';
import GlobalStyles from './theme/globalStyles';
import Router from './routes';
// components
import ScrollToTop from './components/ScrollToTop';
import { BaseOptionChartStyle } from './components/charts/BaseOptionChart';

// layouts
import HomeNavbar from './layouts/home/HomeNavbar';
import HomeSidebar from './layouts/home/HomeSidebar';
import shape from './theme/shape';
import typography from './theme/typography';
import componentsOverride from './theme/overrides';
import shadows, { customShadows } from './theme/shadows';
import darkPalette from './theme/darkPalette';
import lightPalette from './theme/lightPalette';
//

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2)
  }
}));

export default function App() {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  // Theme
  const customPalette = darkMode ? darkPalette : lightPalette;
  const theme = useMemo(
    () =>
      createTheme({
        palette: customPalette,
        shape,
        typography,
        shadows,
        customShadows
      }),
    [customPalette]
  );
  // const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ScrollToTop />
        <GlobalStyles />
        <BaseOptionChartStyle />
        <RootStyle>
          <HomeNavbar
            onOpenSidebar={() => setOpen(true)}
            onSwitchDarkMode={() => setDarkMode(!darkMode)}
          />
          <HomeSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
          <MainStyle>
            <Router />
          </MainStyle>
        </RootStyle>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
