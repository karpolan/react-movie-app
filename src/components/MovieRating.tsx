import { FunctionComponent } from 'react';
import { Rating } from '@mui/material';

interface Props {
  rating: number;
}

/**
 * Renders a Movie rating as 10 stars
 * @component MovieRating
 */
const MovieRating: FunctionComponent<Props> = ({ rating }) => {
  return <Rating max={10} value={rating} readOnly />;
};

export default MovieRating;
