import { useState } from 'react';
import { AppView, MovieList, SearchBar } from '@/components';
import { Alert } from '@mui/material';
import { SEARCH_MIN_LENGTH, useSearchMovies } from '@/hooks/tmdb';

/**
 * Renders "Search Movies" view
 * @page SearchMovies
 * @url /search
 */
const SearchMoviesView = () => {
  const [searchText, setSearchText] = useState('');
  const { data: matchingMovies, isLoading, error } = useSearchMovies(searchText);

  // Callback to handle search input changes, useCallback is not needed here.
  const onSearch = (newSearchText: string) => {
    if (searchText === newSearchText) {
      return; // No need to search again
    }
    setSearchText(newSearchText);
  };

  const noMoviesFound = !isLoading && matchingMovies.length < 1 && searchText.length >= SEARCH_MIN_LENGTH;

  return (
    <AppView>
      <SearchBar isLoading={isLoading} onSearch={onSearch} />
      {noMoviesFound ? (
        <Alert severity="info">No movies found for "{searchText}" query</Alert>
      ) : (
        <MovieList movies={matchingMovies} isLoading={isLoading} error={error} />
      )}
    </AppView>
  );
};

export default SearchMoviesView;
