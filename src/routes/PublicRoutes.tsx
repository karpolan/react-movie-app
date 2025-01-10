import { Navigate } from 'react-router-dom';
import { PublicLayout } from '@/layout';
import { IS_DEBUG } from '@/config';
import { AboutView, HomeView, PopularMoviesView, SingleMovieView } from '../views';
import DevView from '../views/Dev';

const PUBLIC_ROUTES = [
  {
    element: <PublicLayout />, // Layout as parent/wrapper component for all routes
    children: [
      {
        path: '*',
        element: <Navigate to="/" replace />,
      },
      {
        path: '/',
        element: <HomeView />,
      },
      {
        path: '/popular',
        element: <PopularMoviesView />,
      },
      {
        path: '/movie/:movieId',
        element: <SingleMovieView />,
      },
      {
        path: '/about',
        element: <AboutView />,
      },
    ],
  },
];

// Add debug routes
IS_DEBUG &&
  PUBLIC_ROUTES[0].children.push({
    path: '/dev',
    element: <DevView />,
  });

export default PUBLIC_ROUTES;
