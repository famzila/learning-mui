import { Icon } from '@iconify/react';
import homeFill from '@iconify/icons-eva/home-fill';
import bookFilled from '@iconify/icons-ant-design/book-filled';
import fileTextFill from '@iconify/icons-eva/file-text-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'Home',
    path: '/home',
    icon: getIcon(homeFill)
  },
  {
    title: 'blog',
    path: '/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'E-books',
    path: '/products',
    icon: getIcon(bookFilled)
  }
];

export default sidebarConfig;
