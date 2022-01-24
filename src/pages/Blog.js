import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import arrowBackFill from '@iconify/icons-eva/arrow-back-fill';
import arrowForwardFill from '@iconify/icons-eva/arrow-forward-fill';
// material
import { Grid, Button, Container, Stack, Typography } from '@mui/material';
// components
import faker from 'faker';
import { MotionContainer } from '../components/animate';
import Page from '../components/Page';
import { BlogPostCard } from '../components/_home/blog';

// ----------------------------------------------------------------------

const SORT_OPTIONS = [
  { value: 'latest', label: 'Latest' },
  { value: 'popular', label: 'Popular' },
  { value: 'oldest', label: 'Oldest' }
];

// ----------------------------------------------------------------------

export default function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@famzil')
      .then((resp) => resp.json())
      .then((data) => {
        const results = data.items.map((item) => ({
          id: item.guid,
          cover: item.thumbnail,
          title: item.title,
          createdAt: item.pubDate,
          link: item.link,
          view: '',
          comment: '',
          share: '',
          favorite: '',
          author: {
            name: item.author,
            avatarUrl: `/static/mock-images/avatars/avatar_22.jpg`
          }
        }));
        setPosts(results);
      });
  }, [posts]);

  return (
    <Page title="Blog">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Blog
          </Typography>
          <Button
            variant="contained"
            href="https://famzil.medium.com/"
            target="_blank"
            startIcon={<Icon icon={arrowForwardFill} />}
          >
            See more
          </Button>
        </Stack>

        {/* <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
          <BlogPostsSearch posts={POSTS} />
          <BlogPostsSort options={SORT_OPTIONS} />
        </Stack> */}
        {posts ? (
          <Grid container spacing={3}>
            {posts.map((post, index) => (
              <BlogPostCard key={post.id} post={post} index={index} />
            ))}
          </Grid>
        ) : (
          ''
        )}
      </Container>
    </Page>
  );
}
