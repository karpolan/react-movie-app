import { Typography } from '@mui/material';
import { AppView, PopularMovies } from '@/components';

/**
 * Renders "Popular Movies" view
 * @page PopularMovies
 * @url /popular
 */
const PopularMoviesView = () => {
  return (
    <AppView>
      <Typography variant="h4" component="h3">
        Popular Movies
      </Typography>
      <PopularMovies />
    </AppView>
  );
};

export default PopularMoviesView;
