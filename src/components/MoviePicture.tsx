import { FunctionComponent } from 'react';
import { Avatar } from '@mui/material';
import { TMDB_IMAGE_BASE_URL } from '@/hooks/tmdb';

interface Props {
  title?: string;
  poster_path: string;
  variant: 'thumbnail' | 'poster';
}

/**
 * Renders a thumbnail or poster image for a movie
 * @component MoviePicture
 */
const MoviePicture: FunctionComponent<Props> = ({ poster_path, title, variant }) => {
  const width = variant === 'thumbnail' ? 64 : 320;
  const height = variant === 'thumbnail' ? 96 : 480;

  return <Avatar alt={title} src={`${TMDB_IMAGE_BASE_URL}/${poster_path}`} sx={{ width, height }} variant="rounded" />;
};

export default MoviePicture;
