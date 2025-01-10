import { List } from '@mui/material';
import { AppAlert, AppLoading, MovieListItem } from '@/components';
import { usePopularMovies } from '@/hooks/tmdb';

/**
 * Renders list of popular movies
 * @component PopularMovies
 */
const PopularMovies = () => {
  const { data: popularMovies, error, isLoading } = usePopularMovies();

  if (isLoading) {
    return <AppLoading />;
  }

  if (error) {
    return <AppAlert severity="error">{error}</AppAlert>;
  }

  return <List>{popularMovies?.map?.((movie) => <MovieListItem key={movie.id} {...movie} />)}</List>;
};

export default PopularMovies;
