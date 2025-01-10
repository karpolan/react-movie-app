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
      <Typography variant="h4" component="h3">
        Popular Movies
      </Typography>
      <PopularMovies />
    </AppView>
  );
};

export default HomeView;
