import { FunctionComponent } from 'react';
import { useMovieDetails } from '@/hooks/tmdb';
import { AppAlert, AppLoading } from '@/components';

interface Props {
  movieId: string;
}

/**
 * Renders single movie details
 */
const MovieDetails: FunctionComponent<Props> = ({ movieId }) => {
  const { data: movieDetails, isLoading, error } = useMovieDetails(movieId);

  if (isLoading) {
    return <AppLoading />;
  }

  if (error) {
    return <AppAlert severity="error">{error}</AppAlert>;
  }

  console.log(movieDetails);

  return (
    <div>
      MovieDetails
      <code>{JSON.stringify(movieDetails, null, 2)}</code>
    </div>
  );
};

export default MovieDetails;
