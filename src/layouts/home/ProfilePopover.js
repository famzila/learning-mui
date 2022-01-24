import { Icon } from '@iconify/react';
import { useRef, useState } from 'react';
import instagramFill from '@iconify/icons-ant-design/instagram-filled';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import mediumSquareFilled from '@iconify/icons-ant-design/medium-square-filled';
import githubFill from '@iconify/icons-eva/github-fill';
import downloadFill from '@iconify/icons-eva/download-fill';
// material
import { alpha } from '@mui/material/styles';
import {
  Button,
  Box,
  Divider,
  MenuItem,
  Typography,
  Avatar,
  IconButton,
  Link
} from '@mui/material';
// components
import MenuPopover from '../../components/MenuPopover';
//
import profile from '../../_mocks_/profile';

// ----------------------------------------------------------------------

const MENU_OPTIONS = [
  {
    label: 'LinkedIn',
    icon: linkedinFill,
    linkTo: process.env.REACT_APP_SM_LINKEDIN
  },
  {
    label: 'Twitter',
    icon: twitterFill,
    linkTo: process.env.REACT_APP_SM_TWITTER
  },
  {
    label: 'Medium',
    icon: mediumSquareFilled,
    linkTo: process.env.REACT_APP_SM_MEDIUM
  },
  {
    label: 'Github',
    icon: githubFill,
    linkTo: process.env.REACT_APP_SM_GITHUB
  },
  {
    label: 'Instagram',
    icon: instagramFill,
    linkTo: process.env.REACT_APP_SM_INSTAGRAM
  }
];

// ----------------------------------------------------------------------

export default function ProfilePopover() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        ref={anchorRef}
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72)
            }
          })
        }}
      >
        <Avatar src={profile.photoURL} alt="photoURL" />
      </IconButton>

      <MenuPopover
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ width: 220 }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle1" noWrap>
            {profile.displayName}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {profile.email}
          </Typography>
        </Box>

        <Divider sx={{ my: 1 }} />

        {MENU_OPTIONS.map((option) => (
          <MenuItem key={option.label} sx={{ typography: 'body2', py: 1, px: 2.5 }}>
            <Box
              component={Icon}
              icon={option.icon}
              sx={{
                mr: 2,
                width: 24,
                height: 24,
                color: 'text.secondary'
              }}
            />
            <Link href={option.linkTo} underline="none" target="_blank" color="text.secondary">
              {option.label}
            </Link>
          </MenuItem>
        ))}

        <Box sx={{ p: 2, pt: 1.5 }}>
          <Button fullWidth variant="contained" to="/" startIcon={<Icon icon={downloadFill} />}>
            Resume
          </Button>
        </Box>
      </MenuPopover>
    </>
  );
}
