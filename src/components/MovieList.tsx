import { FunctionComponent } from 'react';
import { List } from '@mui/material';
import { AppAlert, AppLoading, MovieListItem } from '@/components';
import { TmdbMovieItemResponse } from '@/hooks/tmdb';

interface Props {
  movies: TmdbMovieItemResponse[];
  isLoading: boolean;
  error: string;
}

/**
 * Renders list of movies, error message or loading spinner
 * @component MovieList
 */
const MovieList: FunctionComponent<Props> = ({ movies, error, isLoading }) => {
  if (isLoading) {
    return <AppLoading />;
  }

  if (error) {
    return <AppAlert severity="error">{error}</AppAlert>;
  }

  return (
    // TODO: Add pagination
    <List>{movies?.map((movie) => <MovieListItem key={movie.id} {...movie} />)}</List>
  );
};

export default MovieList;
