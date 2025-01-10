import { useParams } from 'react-router-dom';
import { AppView } from '@/components';
import MovieDetails from './MovieDetails';

/**
 * Renders "Single Movie" view
 * @page SingleMovie
 * @url /movie/:movieId
 */
const SingleMovieView = () => {
  const { movieId } = useParams();
  return (
    <AppView>
      <MovieDetails movieId={movieId ?? 'unknown'} />
    </AppView>
  );
};

export default SingleMovieView;
