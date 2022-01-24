import faker from 'faker';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import instagramFill from '@iconify/icons-ant-design/instagram-filled';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import youtubeFill from '@iconify/icons-ant-design/youtube-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import mediumSquareFilled from '@iconify/icons-ant-design/medium-square-filled';
import githubFill from '@iconify/icons-eva/github-fill';

// material
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent, Link } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: 'Linkedin',
    value: faker.datatype.number(),
    icon: <Icon icon={linkedinFill} color="#006097" width={32} height={32} />
  },
  {
    name: 'GitHub',
    value: faker.datatype.number(),
    icon: <Icon icon={githubFill} color="common.black" width={32} height={32} />
  },
  {
    name: 'Medium',
    value: faker.datatype.number(),
    icon: <Icon icon={mediumSquareFilled} color="common.black" width={32} height={32} />
  },
  {
    name: 'Youtube',
    value: faker.datatype.number(),
    icon: <Icon icon={youtubeFill} color="#FF0000" width={32} height={32} />
  },
  {
    name: 'Twitter',
    value: faker.datatype.number(),
    icon: <Icon icon={twitterFill} color="#1C9CEA" width={32} height={32} />
  },
  {
    name: 'Instagram',
    value: faker.datatype.number(),
    icon: <Icon icon={instagramFill} color="#DF3E30" width={32} height={32} />
  }
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        {/* <Typography variant="h6">{fShortenNumber(value)}</Typography> */}
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap sx={{ color: 'text.secondary' }}>
            {name}
          </Typography>
        </Link>
      </Paper>
    </Grid>
  );
}

export default function AppTrafficBySite() {
  return (
    <Card>
      <CardHeader title="Social media" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}
