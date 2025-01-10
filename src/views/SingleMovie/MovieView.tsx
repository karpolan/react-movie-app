import { useParams } from 'react-router-dom';
import { AppView } from '@/components';

/**
 * Renders "Single Movie" view
 * @page SingleMovie
 * @url /movie/:movieId
 */
const SingleMovieView = () => {
  const { movieId } = useParams();
  return <AppView>ID: {movieId}</AppView>;
};

export default SingleMovieView;
