import { useState } from 'react';
import { AppView, MovieList } from '@/components';
import { useSearchMovies } from '@/hooks/tmdb';
import SearchBar from './SearchBar';

/**
 * Renders "Home" view
 * @page Home
 * @url /
 */
const HomeView = () => {
  const [searchText, setSearchText] = useState('');
  const { data: matchingMovies, isLoading, error } = useSearchMovies(searchText);

  const onSearch = (newSearchText: string) => {
    // if (searchText === newSearchText) {
    //   return; // No need to search again
    // }
    setSearchText(newSearchText);
  };

  return (
    <AppView>
      <SearchBar onSearch={onSearch} />
      <MovieList movies={matchingMovies} isLoading={isLoading} error={error} />
    </AppView>
  );
};

export default HomeView;
