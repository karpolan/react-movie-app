import { Avatar } from '@mui/material';
import { FunctionComponent } from 'react';

const TMDB_IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';

interface Props {
  title?: string;
  poster_path: string;
}

/**
 * Renders a thumbnail image for a movie
 * @component MovieThumbnail
 */
const MovieThumbnail: FunctionComponent<Props> = ({ poster_path, title }) => {
  return (
    <Avatar
      alt={title}
      src={`${TMDB_IMAGE_BASE_URL}/${poster_path}`}
      sx={{ width: 64, height: 96 }}
      variant="rounded"
    />
  );
};

export default MovieThumbnail;
