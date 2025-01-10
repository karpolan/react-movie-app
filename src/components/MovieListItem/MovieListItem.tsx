import { FunctionComponent } from 'react';
import { ListItem, ListItemAvatar, ListItemButton, ListItemText, Rating, Stack } from '@mui/material';
import { TmdbMovieItemResponse } from '@/hooks/tmdb';
import MovieThumbnail from './MovieThumbnail';

/**
 * Renders a single movie item for the list
 * @component MovieListItem
 * @task Each list item should display the following information:
 * - Movie Title (Main text, larger font)
 * - Release Date (Subtext under the movie title)
 * - Poster Thumbnail (Displayed on the left)
 * - Rating (Shown as a small visual indicator, like stars or a numerical value)
 */
const MovieListItem: FunctionComponent<TmdbMovieItemResponse> = ({
  id,
  title,
  release_date,
  poster_path,
  vote_average,
}) => {
  return (
    <ListItem>
      <ListItemButton href={`/movie/${id}`}>
        <ListItemAvatar sx={{ marginRight: 1 }}>
          <MovieThumbnail poster_path={poster_path} title={title} />
        </ListItemAvatar>
        <Stack>
          <ListItemText
            primary={title}
            primaryTypographyProps={{ variant: 'h4', component: 'span' }}
            secondary={release_date}
            secondaryTypographyProps={{ variant: 'body2', component: 'span' }}
          />
          <Rating max={10} value={vote_average} readOnly />
        </Stack>
      </ListItemButton>
    </ListItem>
  );
};

export default MovieListItem;
