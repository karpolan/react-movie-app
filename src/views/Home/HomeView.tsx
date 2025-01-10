import { Typography } from '@mui/material';
import { AppView, PopularMovies } from '@/components';

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
