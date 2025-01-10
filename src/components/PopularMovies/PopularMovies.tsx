import { MovieList } from '@/components';
import { usePopularMovies } from '@/hooks/tmdb';

/**
 * Renders list of popular movies
 * @component PopularMovies
 */
const PopularMovies = () => {
  const { data: popularMovies, error, isLoading } = usePopularMovies();
  return <MovieList movies={popularMovies} error={error} isLoading={isLoading} />;
};

export default PopularMovies;
