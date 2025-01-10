import { Typography } from '@mui/material';
import { AppView } from '@/components';
import PopularMovies from './PopularMovies';

/**
 * Renders "Home" view
 * @page Home
 * @url /
 */
const HomeView = () => {
  return (
    <AppView>
      <Typography variant="h4" component="h1">
        Welcome to TMDB Movie App
      </Typography>
      <PopularMovies />
    </AppView>
  );
};

export default HomeView;
