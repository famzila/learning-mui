import { Link as RouterLink } from 'react-router-dom';
import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { useEffect, useState } from 'react';
import { mockImgCover } from '../../../utils/mockImages';
//
import Scrollbar from '../../Scrollbar';

// ----------------------------------------------------------------------
const MEDIUM_API = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@famzil';

// ----------------------------------------------------------------------

NewsItem.propTypes = {
  news: PropTypes.object.isRequired
};

function NewsItem({ news }) {
  const { image, title, description, postedAt } = news;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {formatDistance(new Date(postedAt), new Date())}
      </Typography>
    </Stack>
  );
}

export default function AppNewsUpdate(props) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(MEDIUM_API)
      .then((res) => res.json())
      .then(
        (result) => {
          const formattedPosts = result.items.map((item) => ({
            title: item.title,
            description: item.description, // 'Minima enim quis voluptatibus modi et explicabo adipisci. Minima similique omnis et',
            image: item.thumbnail,
            postedAt: item.pubDate
          }));
          setPosts(formattedPosts);
          setIsLoading(false);
        },
        (error) => {
          console.log(error);
          setError(true);
        }
      );
  }, [posts]);

  return (
    <Card>
      <CardHeader title={props.title} />
      <Scrollbar>
        {!isLoading ? (
          <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
            {posts.slice(5).map((news) => (
              <NewsItem key={news.title} news={news} />
            ))}
          </Stack>
        ) : (
          ''
        )}
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="/blog"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
