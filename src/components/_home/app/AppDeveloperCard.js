import { Icon } from '@iconify/react';
import codeOutlined from '@iconify/icons-ant-design/code-outlined';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: theme.palette.mode === 'dark' ? '' : theme.customShadows.z12,
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.success.darker,
  backgroundColor: theme.palette.success.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.success.darker,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.success.light, 0)} 0%, ${alpha(
    theme.palette.success.light,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 714000;

export default function AppDeveloperCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={codeOutlined} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">5 Years</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Developer
      </Typography>
    </RootStyle>
  );
}
