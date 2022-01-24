import { Icon } from '@iconify/react';
import readOutlined from '@iconify/icons-ant-design/read-outlined';
// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: theme.customShadows.z12,
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.info.darker,
  backgroundColor: theme.palette.info.lighter
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
  color: theme.palette.info.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.info.dark, 0)} 0%, ${alpha(
    theme.palette.info.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 1352831;

export default function AppWriterCard() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        <Icon icon={readOutlined} width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h3">2 Years</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Writer & reader
      </Typography>
    </RootStyle>
  );
}
