import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/home',
      element: <Home />
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to="/home" /> },
        { path: '404', element: <NotFound /> }
      ]
    },
    { path: '/products', element: <Products /> },
    { path: '/blog', element: <Blog /> },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
