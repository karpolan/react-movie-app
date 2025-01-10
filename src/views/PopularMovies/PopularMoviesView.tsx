import { Typography } from '@mui/material';
import { AppView, MovieList } from '@/components';
import { usePopularMovies } from '@/hooks/tmdb';

/**
 * Renders "Popular Movies" view
 * @page PopularMovies
 * @url /popular
 */
const PopularMoviesView = () => {
  const { data: popularMovies, error, isLoading } = usePopularMovies();

  return (
    <AppView>
      <Typography variant="h4" component="h3">
        Popular Movies
      </Typography>
      <MovieList movies={popularMovies} error={error} isLoading={isLoading} />
    </AppView>
  );
};

export default PopularMoviesView;
