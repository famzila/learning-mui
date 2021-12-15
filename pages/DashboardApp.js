// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppNewUsers as AppWriterExperience,
  AppBugReports as AppTeacherExperience,
  AppItemOrders as AppMentorExperience,
  AppNewsUpdate,
  AppWeeklySales as AppDeveloperExperience,
  AppOrderTimeline as AppExperienceTimeline,
  AppCurrentVisits as AppTechnologies,
  AppWebsiteVisits,
  AppTrafficBySite as AppSocialMedia,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, I'm Fatima AMZIL</Typography>
          <Typography variant="h4">Animated and typed text</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppDeveloperExperience />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWriterExperience />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppMentorExperience />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppTeacherExperience />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTechnologies />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppExperienceTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppSocialMedia />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate title="Recent posts" />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <AppNewsUpdate title="Recent videos" />
          </Grid>

          {/* <Grid item xs={12} md={6} lg={4}>
            <AppTasks />
          </Grid>

          <Grid item xs={12} md={6} lg={6}>
            <AppWebsiteVisits />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <AppNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject />
          </Grid> */}
        </Grid>
      </Container>
    </Page>
  );
}
