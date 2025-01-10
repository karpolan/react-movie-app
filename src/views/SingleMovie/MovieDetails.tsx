import { FunctionComponent } from 'react';
import { useMovieDetails } from '@/hooks/tmdb';
import { AppAlert, AppLoading, MoviePicture } from '@/components';
import { Stack } from '@mui/system';
import { Chip, Rating, Typography } from '@mui/material';

interface Props {
  movieId: string;
}

/**
 * Renders single movie details
 * @component MovieDetails
 * @task the Movie Details Page, showing detailed information about the selected movie:
 * - Movie Title (Large, main heading at the top)
 * - Release Date (Displayed below the movie title)
 * - Full-size Poster Image (A larger image displayed prominently on the page)
 * - Overview (A brief summary of the movie’s plot)
 * - Genres (Displayed under or beside the poster)
 * - Rating (Displayed as a visual indicator, like stars or a numerical rating)
 * - Runtime (Displayed in hours and minutes)
 * - Language (The primary language of the movie, e.g., English, French, etc.)
 */
const MovieDetails: FunctionComponent<Props> = ({ movieId }) => {
  const { data: movieDetails, isLoading, error } = useMovieDetails(movieId);

  if (isLoading) {
    return <AppLoading />;
  }

  if (!parseInt(movieId)) {
    return <AppAlert severity="error">Invalid movie ID</AppAlert>;
  }

  if (error) {
    return <AppAlert severity="error">{error}</AppAlert>;
  }

  if (!movieDetails) {
    // Actually, this case should never happen
    return <AppAlert severity="error">Movie not found</AppAlert>;
  }

  return (
    <Stack alignItems="center">
      <Typography variant="h3">{movieDetails.title ?? '[Unknown Title]'}</Typography>
      <Typography variant="body2" component="span">
        {movieDetails.release_date}
      </Typography>
      <MoviePicture poster_path={movieDetails.poster_path} title={movieDetails.title} variant="poster" />
      <Typography variant="body1">{movieDetails.overview}</Typography>

      {movieDetails?.genres?.length > 0 && (
        // Not all movies have genres
        <Typography variant="caption" component="div">
          Ganges:{' '}
          {movieDetails.genres.map((genre) => (
            <Chip key={genre.id} label={genre.name} sx={{ marginX: 0.5 }} />
          ))}
        </Typography>
      )}

      {/* TODO: Make Movie Rating component */}
      <Rating max={10} value={movieDetails.vote_average} readOnly />
      <Typography variant="caption" component="div">
        Runtime: {movieDetails.runtime} minutes
      </Typography>

      {movieDetails?.spoken_languages?.length > 0 && (
        // Not all movies have spoken languages
        <Typography variant="caption" component="div">
          Languages:{' '}
          {movieDetails.spoken_languages.map((lang) => (
            <Chip key={lang.iso_639_1} label={lang.english_name} sx={{ marginX: 0.5 }} />
          ))}
        </Typography>
      )}
    </Stack>
  );
};

export default MovieDetails;
