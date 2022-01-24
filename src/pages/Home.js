// material
import { Box, Grid, Container, Typography } from '@mui/material';
import { MotionContainer } from '../components/animate';
// components
import Page from '../components/Page';
import {
  AppTasks,
  AppWriterCard,
  AppTeacherCard,
  AppMentorCard,
  AppNewsUpdate,
  AppDeveloperCard,
  AppExperienceTimeline,
  AppTechsStack,
  AppWebsiteVisits,
  AppSocialMediaCard,
  AppCurrentSubject,
  AppConversionRates
} from '../components/_home/app';

// ----------------------------------------------------------------------

export default function Home() {
  return (
    <Page title="Home">
      <Container maxWidth="xl">
        <MotionContainer initial="initial" open>
          <Box sx={{ pb: 5 }}>
            <Typography variant="h4">Hi, I'm Fatima AMZIL</Typography>
            <Typography variant="h4">Animated and typed text</Typography>
          </Box>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} sm={6} md={3}>
              <AppDeveloperCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppWriterCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppMentorCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <AppTeacherCard />
            </Grid> */}

            <Grid item xs={12} md={6} lg={4}>
              <AppTechsStack />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <AppExperienceTimeline />
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <AppSocialMediaCard />
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
        </MotionContainer>
      </Container>
    </Page>
  );
}
